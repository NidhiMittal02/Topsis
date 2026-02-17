import formidable from "formidable";
import { exec } from "child_process";
import nodemailer from "nodemailer";
import fs from "fs";

export const config = {
  api: { bodyParser: false },
};

export default function handler(req, res) {

  const form = formidable({
    uploadDir: "./uploads",
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {

    if (err) {
      console.error(err);
      return res.status(500).send("Form parse error");
    }

    const weights = fields.weights?.toString();
    const impacts = fields.impacts?.toString();
    const email = fields.email?.toString();

    if (!weights || !impacts || !email)
      return res.status(400).send("Missing inputs");

    if (weights.split(",").length !== impacts.split(",").length)
      return res.send("Weights & impacts mismatch");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.send("Invalid email");

    for (let i of impacts.split(",")) {
      if (i !== "+" && i !== "-")
        return res.send("Impacts must be + or -");
    }

    const inputPath = files.file[0].filepath;
    const outputPath = "./uploads/result.csv";

    const command =
      `topsis "${inputPath}" "${weights}" "${impacts}" "${outputPath}"`;

    console.log("Running:", command);

    exec(command, async (error) => {

      if (error) {
        console.error(error);
        return res.status(500).send("Python error");
      }

      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL,
          to: email,
          subject: "TOPSIS Result",
          text: "Attached is your result",
          attachments: [
            { filename: "result.csv", path: outputPath },
          ],
        });

        return res.send("Result sent to email!");
      } catch (mailErr) {
        console.error(mailErr);
        return res.status(500).send("Email error");
      }
    });
  });
}

import { useState,useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData(e.target);

    try {
      const res = await axios.post("/api/submit", formData);
      setMsg(res.data);
    } catch (err) {
      setMsg("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>TOPSIS Web Service</h2>

        <p style={styles.subtitle}>
          Multi-criteria decision making made simple ✨
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="file" name="file" required style={styles.input} />

          <input
            name="weights"
            placeholder="Weights (e.g. 1,1,1,1)"
            required
            style={styles.input}
          />

          <input
            name="impacts"
            placeholder="Impacts (e.g. +,+,-,+)"
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>

        {msg && <p style={styles.msg}>{msg}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#0f172a,#1e3a8a,#4f46e5,#7c3aed)",
    fontFamily:
      "'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
  },

  card: {
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(18px)",
    padding: "45px",
    borderRadius: "18px",
    width: "390px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
    textAlign: "center",
    color: "#f9fafb",
    border: "1px solid rgba(255,255,255,0.2)",
  },

  title: {
    marginBottom: "8px",
    fontSize: "28px",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#e5e7eb",
    marginBottom: "28px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  input: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "none",
    fontSize: "14px",
    outline: "none",
    background: "rgba(255,255,255,0.95)",
    color: "#111827",
    fontWeight: "500",
  },

  button: {
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg,#22c55e,#16a34a)",
    color: "white",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "15px",
    letterSpacing: "0.6px",
    transition: "all 0.25s ease",
    boxShadow: "0 8px 20px rgba(34,197,94,0.4)",
  },

  msg: {
    marginTop: "22px",
    fontWeight: "600",
    background: "rgba(255,255,255,0.15)",
    padding: "12px",
    borderRadius: "10px",
    color: "#f3f4f6",
    border: "1px solid rgba(255,255,255,0.25)",
  },
};

# 📊 TOPSIS Web Service

A full-stack web application implementing **TOPSIS (Technique for Order
Preference by Similarity to Ideal Solution)** for multi-criteria
decision making.

Users can upload a dataset, provide weights & impacts, and receive
ranked results via email.

------------------------------------------------------------------------

# 🚀 Features

-   Upload CSV dataset
-   Apply TOPSIS algorithm
-   Custom weights & impacts
-   Email result delivery

------------------------------------------------------------------------

# 🧠 What is TOPSIS?

TOPSIS is a multi-criteria decision-making method that ranks
alternatives based on:

-   Distance from ideal best solution
-   Distance from ideal worst solution

The best option is closest to the ideal solution and farthest from the
worst.

------------------------------------------------------------------------

# 🏗️ Tech Stack

## Frontend

-   Next.js
-   Axios
-   CSS (Glassmorphism UI)

## Backend

-   Next.js API Routes
-   Node.js
-   Formidable (file upload)
-   Nodemailer (email service)

## Data Processing

-   Python
-   Pandas
-   NumPy
-   Custom PyPI TOPSIS package

------------------------------------------------------------------------

# 📂 Project Structure

    topsis-web/
    │
    ├── pages/
    │   ├── index.js
    │   └── api/
    │       └── submit.js
    │
    ├── uploads/
    ├── styles/
    ├── .env.local
    ├── package.json
    └── README.md

------------------------------------------------------------------------

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

``` bash
git clone https://github.com/NidhiMittal02/Topsis.git
cd Topsis
cd topsis-web
```

## 2️⃣ Install Node Dependencies

``` bash
npm install
```

## 3️⃣ Install Python Package

``` bash
pip install topsis-nidhi-102316094
```

## 4️⃣ Setup Environment Variables

Create `.env.local`:

    EMAIL=yourgmail@gmail.com
    PASS=your_app_password

Use Google App Passwords for security.

## 5️⃣ Run Development Server

``` bash
npm run dev
```

Open http://localhost:3000

------------------------------------------------------------------------

# 📄 Input Format

## CSV Format

  Model   C1    C2   C3   C4
  ------- ----- ---- ---- ----
  A1      250   16   12   5
  A2      200   16   8    3
  A3      300   32   16   4

Rules:

-   First column = Alternative names
-   Remaining columns = numeric criteria
-   No missing values

------------------------------------------------------------------------

## Weights

    1,1,1,1

------------------------------------------------------------------------

## Impacts

    +,+,-,+

------------------------------------------------------------------------

# ✉️ How It Works

1.  Upload CSV
2.  Enter weights & impacts
3.  Validation runs
4.  TOPSIS computed
5.  Result emailed

------------------------------------------------------------------------

# 📈 Output

-   Scores
-   Rankings
-   Processed dataset

------------------------------------------------------------------------

# 👨‍💻 Author

Your Name
Roll No: 102316094
GitHub: https://github.com/NidhiMittal02/Topsis

------------------------------------------------------------------------

⭐ Star the repo if you like it!

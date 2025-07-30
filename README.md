# Next.js Authentication App (NextAuth + Supabase )

This is a simple authentication-only web app built with:

* **Next.js App Router**
* **NextAuth.js** for authentication
* **PostgreSQL** database hosted on **Supabase**
* **ShadCN UI + Tailwind CSS**
* **Animated particle background** for visual appeal

---

##  Features

* Email/password login via **NextAuth Credentials Provider**
* Session-based auth with JWT
* Responsive, dark-mode ready UI using ShadCN
* Particle animation background using WebGL (OGL)
* Server-side session check using `getServerSession`
* Deployed-ready folder structure

---

## Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install Dependencies

```bash
npm install
```


### 3. Set Up Environment Variables

Create a `.env` file in the root of your project and configure it like this:

```env
# .env

DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@YOUR_DB_HOST:5432/postgres"
NEXTAUTH_SECRET=your-secret-string
NEXTAUTH_URL=http://localhost:3000
```

>  You can get the `DATABASE_URL` from Supabase → Project → Settings → Database → Connection Info.

---

### 4. (Optional) Prisma Setup

If you're using Prisma (e.g. with `@next-auth/prisma-adapter`):

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

### 5. Run the App

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

##  Authentication Pages

* `/sign-in` → Login page
* `/sign-up` → (Optional) Registration page
* `/admin` → Session-protected page (shows username if logged in)

---

## Particle Background

This app includes an animated WebGL background using OGL:

* Renders only on the client
* Customizable speed, color, spread
* Enhances visual feel of login/admin screens

---

## `.env.example`

Include this file when sharing:

```env
# .env.example

DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@YOUR_DB_HOST:5432/postgres"
NEXTAUTH_SECRET=your-secret-string
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-clientid
GOOGLE_CLIENT_SECRET=your-google-clientsecret
```

## Tech Stack

| Tool         | Purpose                        |
| ------------ | ------------------------------ |
| Next.js      | React Framework (App Router)   |
| NextAuth.js  | Authentication                 |
| Supabase     | Hosted PostgreSQL DB           |
| Prisma       | ORM (optional but recommended) |
| Tailwind CSS | Utility-first styling          |
| ShadCN UI    | Styled UI components           |
| OGL          | WebGL particles animation      |



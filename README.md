# Cinematic Portfolio Design

This is a code bundle for Cinematic Portfolio Design. The original project is available at https://www.figma.com/design/vQpqnl3KAP5D2n54Vo8LgU/Cinematic-Portfolio-Design.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

### Gemini case study PDF

The Gemini campaign page links to a case study PDF at `/gemini-case-study.pdf`. To enable it, copy your PDF (e.g. from your **Final Submission** folder) into the project as `public/gemini-case-study.pdf`. The link will then work on the live site.

---

## Deploying the Chat API (Vercel)

The site uses an AI chatbot that talks to a **backend proxy** on Vercel. The frontend (e.g. GitHub Pages) never sees or sends an API key; only the Vercel serverless function calls OpenAI.

### 1. Deploy the backend to Vercel

- Push this repo to GitHub (if it isn’t already).
- Go to [vercel.com](https://vercel.com), sign in, and click **Add New → Project**.
- Import this repository. Leave **Root Directory** as `.` (or set it to this project’s root).
- Under **Build and Output**: you can leave the default (Vite will build the frontend). Vercel will also deploy the `api/` folder as serverless functions.
- Deploy. After the first deploy, note your project URL, e.g. `https://nergal-website.vercel.app` or `https://your-project.vercel.app`.

### 2. Set the OpenAI API key on Vercel

- In the Vercel dashboard, open your project → **Settings** → **Environment Variables**.
- Add a variable:
  - **Name:** `OPENAI_API_KEY`
  - **Value:** your OpenAI API key (starts with `sk-...`). Get one at [platform.openai.com/api-keys](https://platform.openai.com/api-keys).
- Choose **Production** (and optionally Preview/Development if you use Vercel previews).
- Save and **redeploy** the project so the new env var is applied.

### 3. Point the frontend at the API

- Get your deployed URL from the Vercel project (e.g. `https://your-project.vercel.app`). No trailing slash.
- **For GitHub Pages (production):**  
  In your GitHub repo, go to **Settings → Secrets and variables → Actions** (or wherever you set build env). Add a secret or variable:
  - Name: `VITE_CHAT_API_BASE_URL`
  - Value: `https://your-project.vercel.app`  
  Use this in your GitHub Actions workflow when running `npm run build` so the built site has the correct API base URL.
- **For local dev:**  
  Create a `.env` in the project root (do not commit it; it’s in `.gitignore`):
  ```bash
  VITE_CHAT_API_BASE_URL=https://your-project.vercel.app
  ```
  Then run `npm run dev`. The chat will call your deployed Vercel API.

### 4. Test locally

- Set `VITE_CHAT_API_BASE_URL` in `.env` as above.
- Run `npm run dev` and open the site (e.g. `http://localhost:5173`).
- Open the chat widget and send a message. It should hit your Vercel `/api/chat` and return a reply.

The API only allows requests from:

- `https://nergalprescod.com`
- `https://www.nergalprescod.com`
- `http://localhost:5173`, `http://localhost:3000`, and `127.0.0.1` (for dev)

If you use another domain or port, add it to the `ALLOWED_ORIGINS` list in `api/chat.ts` and redeploy.

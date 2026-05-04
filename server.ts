import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Quote Requests
  app.post("/api/quote", async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    console.log("New Quote Request Received:", { name, email, phone, service });

    if (resend) {
      try {
        const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'mercuritesolutions@gmail.com';
        await resend.emails.send({
          from: 'ATL Electrical <onboarding@resend.dev>',
          to: recipient,
          subject: `New Quote Request: ${service} from ${name}`,
          html: `
            <h1>New Quote Request</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });
        return res.json({ success: true, message: "Email sent successfully" });
      } catch (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ success: false, error: "Failed to send email" });
      }
    } else {
      // simulate success in dev if no key provided
      console.warn("RESEND_API_KEY not found. Simulating success.");
      return res.json({ success: true, message: "Simulation: Form submitted successfully (No RESEND_API_KEY)" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

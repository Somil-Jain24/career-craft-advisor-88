// Minimal in-app API handler for Gemini calls using fetch to Google API.
// This file is imported by a Vite dev server middleware setup in main entry.

export async function handleChatRequest(req: Request): Promise<Response> {
  try {
    const { message } = (await req.json()) as { message: string };
    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Invalid message" }), { status: 400 });
    }

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing Gemini API key" }), { status: 500 });
    }

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `You are a helpful career guidance assistant. ${message}` }],
        },
      ],
    };

    const resp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!resp.ok) {
      const text = await resp.text();
      return new Response(JSON.stringify({ error: text || "Gemini request failed" }), { status: 500 });
    }

    const data = await resp.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";
    return new Response(JSON.stringify({ reply }), { headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Unexpected error" }), { status: 500 });
  }
}

export async function handleContactRequest(req: Request): Promise<Response> {
  try {
    const { name, email, message } = (await req.json()) as { name: string; email: string; message: string };
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // For dev: forward to an email endpoint if configured, else log to server
    // In real deployment, configure SMTP here (e.g., Nodemailer) with env credentials
    console.log("New contact message:", { name, email, message });

    // Optional: try to send via a simple mail API if provided
    // Placeholder success response
    return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
  } catch (_err) {
    return new Response(JSON.stringify({ error: "Unexpected error" }), { status: 500 });
  }
}



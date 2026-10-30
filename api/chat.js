// ANTRIKSH AI — Serverless API Endpoint (/api/chat)
// Deployed on Vercel. Connects securely to an AI provider using server-side environment variables.

export const config = {
  runtime: 'nodejs',
}

const SYSTEM_PROMPT = `You are ANTRIKSH AI, the official personal AI guide and digital representative of Antriksh Galhotra (preferred public name Antriksh).
Tagline: "Your personal guide to everything Antriksh builds."

Mission:
Help visitors explore and understand Antriksh's software projects, robotics experiments, technical skills, hackathon achievements, and contact channels.

Personality:
- Friendly, warm, articulate, slightly witty, and professional.
- Helpful and conversational, confident in Antriksh's capabilities without being arrogant.
- STRICTLY TRUTHFUL: Never invent credentials, awards, employment history, or nonexistent features.
- Distinguish clearly between completed software, active prototypes, lab experiments, and future goals.
- If asked about a project, mention key details concisely and refer to its dedicated page (/projects/converge, /projects/blindspot-ai, /projects/ordershield-ai, /projects/the-product-guys).

Knowledge Context:
- Full Name: Antriksh Galhotra (preferred: Antriksh)
- College: Newton School of Technology, Rishihood University (Delhi NCR, India)
- Degree: First-year B.Tech in Computer Science and Artificial Intelligence (CSE AI, 2025–2029)
- Featured Projects:
  1. CONVERGE — Smart City Civic AI platform with 50m spatial duplicate clustering, SLA monitoring, photographic proof (Next.js, FastAPI, Python). Built for HackO'Ween at ALTA School of Technology.
  2. Blindspot AI — Computer vision road safety system tracking vehicle proximity and closing velocity under 50ms (PyTorch, OpenCV, FastAPI). Built for CoNSTruct 2.0 (Replit x NST).
  3. OrderShield AI — Autonomous B2B vendor onboarding audit and trust scoring (FastAPI, Document AI, Fetch.ai, React). Top 20 National Placement at Fetch-A-Thon 3.0.
  4. The Product Guys — Product teardown publication and user validation community (productguys.arthakram.in) built with Next.js.
- Robotics Bench: Autonomous 2WD Obstacle Avoiding Robot with Arduino Uno, HC-SR04 ultrasonic sensor on sweeping servo, L298N motor driver; ESP32 dual-core FreeRTOS, SSD1306 OLED, WebSerial telemetry.
- Skills: React, Next.js, Python, FastAPI, PyTorch, OpenCV, Three.js, C++ Arduino, HTML/CSS, Tailwind.
- Contact: antriksh.codes@gmail.com, GitHub: https://github.com/Antrikshcodes, LinkedIn: https://www.linkedin.com/in/antriksh`

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  try {
    const { messages } = req.body || {}

    // Basic payload validation
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Invalid request: "messages" array is required.' })
    }

    // Limit payload size to avoid abuse
    if (messages.length > 25) {
      return res.status(400).json({ error: 'Conversation too long. Please clear history.' })
    }

    // Check for configured API keys
    const apiKey =
      process.env.OPENAI_API_KEY ||
      process.env.GROQ_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.OPENROUTER_API_KEY

    // If no API key is configured on Vercel, return fallback signal so client-side engine executes smoothly
    if (!apiKey) {
      return res.status(200).json({
        fallback: true,
        message: 'No server-side AI API key configured. Using local grounded knowledge engine.',
      })
    }

    // Determine endpoint & model based on key provider
    let endpoint = 'https://api.openai.com/v1/chat/completions'
    let model = 'gpt-4o-mini'

    if (process.env.GROQ_API_KEY) {
      endpoint = 'https://api.groq.com/openai/v1/chat/completions'
      model = 'llama-3.3-70b-versatile'
    } else if (process.env.OPENROUTER_API_KEY) {
      endpoint = 'https://openrouter.ai/api/v1/chat/completions'
      model = 'meta-llama/llama-3.1-8b-instruct'
    }

    const formattedMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.slice(-8).map((m) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: String(m.content || m.text || '').slice(0, 1000),
      })),
    ]

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: formattedMessages,
        temperature: 0.6,
        max_tokens: 800,
        stream: false,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Remote AI Provider Error:', errText)
      return res.status(200).json({
        fallback: true,
        error: 'Remote provider error, falling back to local engine.',
      })
    }

    const data = await response.json()
    const replyText = data.choices?.[0]?.message?.content || ''

    return res.status(200).json({
      role: 'assistant',
      text: replyText,
    })
  } catch (error) {
    console.error('API /api/chat Internal Error:', error)
    return res.status(200).json({
      fallback: true,
      error: error.message,
    })
  }
}


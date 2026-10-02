const express = require("express");
const path = require("path");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/generate", async (req, res) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OPENAI_API_KEY is not configured." });
    }

    const { businessName, businessType, location, services, tone } = req.body;

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const prompt = `
Create conversion-focused website copy for this local business.

Business name: ${businessName}
Business type: ${businessType}
Location: ${location}
Services: ${services}
Tone: ${tone}

Return:
1. Hero headline
2. Hero subheadline
3. Primary CTA
4. Three benefit points
5. Service descriptions
6. Final CTA

Use simple website-ready language. Do not invent prices, awards,
reviews, certifications, guarantees or other unsupported facts.
`;

    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: prompt
    });

    res.json({ copy: response.output_text });
  } catch (error) {
    res.status(500).json({ error: "Generation failed. Check the server and API configuration." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

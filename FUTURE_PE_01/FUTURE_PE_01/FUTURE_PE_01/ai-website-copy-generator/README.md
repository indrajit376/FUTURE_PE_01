# AI Website Copy Generator for Local Businesses

A portfolio-ready Prompt Engineering project that generates conversion-focused website copy for local businesses.

## Project Client

**Business:** Style Studio  
**Location:** Kolkata, West Bengal, India  
**Business type:** Unisex Salon  
**Target audience:** Men and women  
**Core services:** Haircut, Hair Spa, Facial, Hair Coloring  
**Positioning:** Professional, friendly, modern, personalized salon experience

> **Important:** Style Studio is used as a portfolio/demo client. The business details in this repository are sample project assumptions unless independently verified with a real business.

## Problem

Local businesses often struggle with:
- unclear website messaging
- weak value propositions
- generic service descriptions
- confusing calls-to-action
- inconsistent tone

## Solution

This project uses structured prompts to turn business requirements into:
1. Homepage copy
2. Service-page copy
3. CTA sections
4. Website-ready messaging
5. Consistent brand tone

## Project Structure

```text
ai-website-copy-generator/
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── .env.example
├── .gitignore
├── README.md
├── prompts/
│   └── website-copy-prompt.md
├── output/
│   ├── homepage.md
│   ├── services.md
│   └── cta.md
└── docs/
    └── prompt-logic.md
```

## How to Run

### 1. Install Node.js

Install Node.js LTS from the official Node.js website.

### 2. Open the project in VS Code

Open this folder in VS Code.

### 3. Install packages

```bash
npm install
```

### 4. Create `.env`

Copy `.env.example` and rename the copy to:

```text
.env
```

Add your API key only if you want to use the AI generation endpoint.

```env
OPENAI_API_KEY=your_api_key_here
```

Never upload `.env` to GitHub.

### 5. Start the website

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## Prompt Workflow

```text
Business Information
       ↓
Audience + Goal
       ↓
Brand Positioning
       ↓
Homepage Prompt
       ↓
Service Prompt
       ↓
CTA Prompt
       ↓
Tone + Clarity Check
       ↓
Website-Ready Copy
```

## Key Prompt Principles

- Give the AI a clear role.
- Provide structured business information.
- Define target audience.
- Define conversion goal.
- Set tone and style.
- Set output format.
- Tell the AI not to invent unsupported claims.
- Ask for concise, website-ready copy.
- Review the output before publishing.

## Portfolio Deliverable

This repository demonstrates:
- prompt engineering
- conversion-focused copywriting
- local-business requirement analysis
- AI content workflow design
- website-ready content production
- GitHub documentation

## Future Improvements

- Add multiple business templates.
- Add live OpenAI generation from a form.
- Add export to Markdown/PDF.
- Add tone selector.
- Add SEO keyword input.
- Add multilingual output.

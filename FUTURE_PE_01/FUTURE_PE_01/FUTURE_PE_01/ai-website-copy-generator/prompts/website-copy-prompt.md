# Structured Prompt System — Style Studio

## 1. Master Business Brief

Use this information as the input context for every prompt.

```text
Business Name: Style Studio
Business Type: Unisex Salon
Location: Kolkata, West Bengal, India
Target Audience: Men and women looking for professional salon services
Services:
- Haircut
- Hair Spa
- Facial
- Hair Coloring

Brand Positioning:
Professional, friendly, modern, personalized salon experience.

Primary Website Goal:
Encourage visitors to enquire, book an appointment, or visit the salon.

Tone:
Professional + friendly + modern + simple.

Writing Rules:
- Use clear everyday English.
- Keep sentences easy to scan.
- Focus on customer benefits.
- Avoid exaggerated promises.
- Do not invent awards, prices, years of experience, certifications, guarantees, or reviews.
- Do not make medical or guaranteed beauty claims.
- Avoid unnecessary jargon.
- Make every CTA action-oriented.
```

## 2. Homepage Prompt

```text
Act as a conversion-focused website copywriter.

Using the business brief below, create homepage copy for a local salon.

BUSINESS BRIEF:
[PASTE MASTER BUSINESS BRIEF]

Create these sections in exactly this order:

1. Hero headline
2. Hero subheadline
3. Primary CTA
4. Secondary CTA
5. Why Choose Us — 3 short benefit points
6. Services overview — one short description for each service
7. Experience section — 80 to 100 words
8. Final CTA section

Requirements:
- Make the value proposition immediately understandable.
- Write for local customers.
- Keep the language natural and human.
- Focus on customer needs and benefits.
- Keep headings short.
- Do not invent unsupported facts.
- Make the copy ready to paste into a real website.
```

## 3. Service Page Prompt

```text
Act as a local-business website copywriter.

Business:
Style Studio, Kolkata, unisex salon.

Write service descriptions for:
1. Haircut
2. Hair Spa
3. Facial
4. Hair Coloring

For each service provide:
- Service heading
- 40–60 word description
- 3 customer benefits
- One short CTA

Rules:
- Simple language.
- Benefit-focused.
- Professional and friendly tone.
- No unsupported claims.
- No fake prices, ratings, awards, certifications, or guarantees.
- Website-ready formatting.
```

## 4. CTA Prompt

```text
Act as a conversion copywriter.

Create CTA copy for Style Studio, a unisex salon in Kolkata.

Create:
1. Booking CTA
2. Enquiry CTA
3. Visit-us CTA
4. Final homepage CTA

For every CTA provide:
- Short heading
- One supporting sentence
- Button text

Tone:
Friendly, modern, confident, concise.

Avoid:
- pressure tactics
- fake scarcity
- guaranteed results
- unsupported claims
```

## 5. Quality-Control Prompt

```text
Review the generated website copy against these criteria:

1. Is the business immediately understandable?
2. Is the value proposition clear?
3. Are the benefits customer-focused?
4. Is the language simple?
5. Are CTAs clear and actionable?
6. Is the tone consistent?
7. Are there unsupported claims?
8. Does any sentence sound generic or repetitive?
9. Is the copy easy to scan on mobile?
10. Is the copy ready for website publication?

Return:
- PASS items
- NEEDS IMPROVEMENT items
- corrected copy only for items that need improvement
```

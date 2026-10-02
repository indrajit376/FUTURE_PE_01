# Prompt Logic Documentation

## Objective

The prompt system converts a local business brief into structured, conversion-focused website content.

## Input → Processing → Output

### Input
Business name, business type, location, audience, services, positioning, tone and website goal.

### Processing

**Step 1 — Role**
The AI is assigned the role of a conversion-focused website copywriter.

**Step 2 — Context**
The complete business brief is supplied so the model understands the client.

**Step 3 — Audience**
The target audience is explicitly defined.

**Step 4 — Goal**
The desired website action is defined: enquiry, booking or visit.

**Step 5 — Structure**
The output sections are explicitly listed. This makes the result repeatable.

**Step 6 — Tone**
Professional, friendly and modern language is required.

**Step 7 — Guardrails**
The prompt prevents invented awards, reviews, prices, certifications, guarantees and other unsupported claims.

**Step 8 — Quality Control**
A separate review prompt checks clarity, benefits, CTA strength, tone, repetition and unsupported claims.

## Why This Is Better Than a Random AI Prompt

A random prompt might produce generic text.

This system provides:
- context
- role
- audience
- objective
- structure
- tone
- constraints
- quality control

That makes the workflow repeatable for different clients.

## Reusability

To use the system for another business, replace the Master Business Brief while keeping the prompt structure.

Example:

```text
Salon → Cafe
Salon → Coaching Institute
Salon → Clinic
Salon → Small Agency
```

The prompt architecture stays the same while the business context changes.

const neroResponses = [
  {
    keywords: ["sensory", "sensory-friendly", "noise", "lighting", "stim", "overwhelm"],
    response: "Creating a sensory-friendly workspace — like quiet zones, natural lighting, or noise-cancelling headphones — can reduce overwhelm and boost focus."
  },
{
  keywords: ["autism", "what is autism", "explain autism"],
  response: "Autism is a neurodevelopmental difference that can impact how a person experiences and interacts with the world. It can influence communication, social interaction, sensory processing, and thinking styles. It’s not a disorder to be fixed, but a different way of being with both strengths and challenges."
},
  {
    keywords: ["autism", "autistic strengths", "autistic skills", "strengths of autistic"],
    response: "Autistic people often bring deep focus, honesty, creativity, strong pattern recognition, and innovative thinking. Many excel in fields like data analysis, design, writing, technology, and care roles. Their strengths flourish when supported and understood."
  },
  {
    keywords: ["burnout", "autistic burnout", "stress"],
    response: "Exhaustion, withdrawal, shutdowns, sensory sensitivity, emotional distress, or loss of skills. Burnout is real and serious — not laziness."
  }
];

// Chatbot logic
function findNeroResponse(input) {
  input = input.toLowerCase();
  for (const item of neroResponses) {
    for (const keyword of item.keywords) {
      if (input.includes(keyword)) {
        return item.response;
      }
    }
  }
  return "I'm still learning. That's a great question — and it may be something I can add soon.";
}

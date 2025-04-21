
const neroResponses = [
  {
    keywords: ["autism", "explain autism", "what is autism", "autism in simple terms"],
    response: "Autism is a neurodevelopmental difference that can impact how a person experiences and interacts with the world. It can influence communication, social interaction, sensory processing, and thinking styles. It’s not a disorder to be fixed, but a different way of being with both strengths and challenges."
  },
  {
    keywords: ["autistic strengths", "strengths of autistic people", "common strengths"],
    response: "Autistic people often bring deep focus, honesty, creativity, strong pattern recognition, and innovative thinking. Many excel in fields like data analysis, design, writing, technology, and care roles. Their strengths flourish when supported and understood."
  },
  {
    keywords: ["sensory", "sensory support", "sensory-friendly", "sensory adjustments"],
    response: "These might include quiet workspaces, dimmable lights, headphones, freedom to move, and scent-free zones. Ask the Autistic person what works best for them."
  },
  {
    keywords: ["support autistic", "managers support", "how to support"],
    response: "Be open, consistent, and understanding. Provide feedback in a calm, clear, and respectful manner. Offer flexibility, avoid assumptions, and prioritise wellbeing as much as performance."
  },
  {
    keywords: ["legal responsibility", "equality law", "disability law"],
    response: "Under equality legislation, employers must consider reasonable accommodations and prevent discrimination. This can include adapting interviews, tasks, and environments to meet individual needs."
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
      if (input.includes(sensory)) {
        return item.response;
      }
    }
  }
  return "I'm still learning. That's a great question — and it may be something I can add soon.";
}

// src/app/api/generativeAI/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';
require('dotenv').config();

export async function POST(request) {
  const training_data = [
    {"text_input": "1", "output": "2"},
    {"text_input": "seven", "output": "eight"},
  ]
  try {
    const body = await request.json();

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(body.prompt);

    if (result && result.response && typeof result.response.text === 'function') {
      const generatedText = await result.response.text();
      return NextResponse.json({ result: generatedText }, { status: 200 });
    } else {
      throw new Error("Structure inattendue de la réponse AI");
    }

  } catch (error) {
    return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
  }
}

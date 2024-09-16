// src/app/api/generativeAI/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';
require('dotenv').config();

export async function GET() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Que fait-on ce soir ?";
    const result = await model.generateContent(prompt);

    console.log("Résultat complet de l'API:", result);

    // Vérifiez si result.response.text() existe et retournez la réponse
    if (result && result.response && typeof result.response.text === 'function') {
      const generatedText = await result.response.text();
      return NextResponse.json({ result: generatedText }, { status: 200 });
    } else {
      throw new Error("Structure inattendue de la réponse AI");
    }
  } catch (error) {
    console.error("Erreur lors de la génération du contenu", error.message);
    return NextResponse.json({ error: "Erreur lors de la génération du contenu" }, { status: 500 });
  }
}

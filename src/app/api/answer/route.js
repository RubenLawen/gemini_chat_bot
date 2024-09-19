// src/app/api/generativeAI/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';
require('dotenv').config();

const rules = `
1. Tu dois uniquement répondre aux questions qui concernent le jeu Brawlhalla. Si une question ne concerne pas Brawlhalla, excuse-toi poliment et indique que tu ne peux répondre qu'aux questions sur Brawlhalla.

2. Analyse chaque question pour détecter des mots-clés spécifiques à Brawlhalla (comme "légende", "arme", "skin", "tournoi", etc.). Si une question ne contient pas de mots-clés pertinents, demande des précisions ou redirige la conversation vers un sujet lié à Brawlhalla.

3. Fournis des réponses complètes et précises basées sur la documentation officielle de Brawlhalla, les FAQ, ou les informations disponibles. Si tu ne connais pas la réponse exacte, redirige le client vers une ressource officielle ou indique que tu ne disposes pas de l'information.

4. Si une question n'a aucun lien avec Brawlhalla ou si elle est de nature personnelle, refuse de répondre tout en restant courtois.

5. Si une question est ambiguë ou peut potentiellement concerner plusieurs sujets, demande des clarifications pour t'assurer que la réponse sera bien liée à Brawlhalla.`;

export async function POST(request) {
  try {
    const body = await request.json();
    
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const answer = `Tu es un chatbot spécialisé dans le jeu "Brawlhalla". Tu dois respecter les règles suivantes : ${rules}. Réponds maintenant à la question de mon client qui est: ${body.prompt || "cc"}`;

    const result = await model.generateContent(answer);

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

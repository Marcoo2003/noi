import { GoogleGenAI } from "@google/genai";
import { LetterTone } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLoveLetter = async (
  context: string,
  tone: LetterTone,
  name: string
): Promise<string> => {
  try {
    const prompt = `
      Sei un esperto di relazioni e un poeta. 
      Scrivi una breve lettera d'amore (max 200 parole), toccante e sentita, per la mia ragazza che si chiama "${name}".
      
      Il contesto (perché abbiamo litigato o perché le sto scrivendo): "${context}".
      
      Il tono desiderato è: ${tone}.
      
      Scrivila IN ITALIANO. Sii sincero, evita cliché banali e concentrati sulla riconciliazione e sul nostro futuro insieme.
      Non includere saluti formali o firme, solo il corpo del testo.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "Fatico a trovare le parole, ma sappi che ti amo immensamente.";
  } catch (error) {
    console.error("Error generating letter:", error);
    return "Mi dispiace, non riesco a trovare le parole perfette in questo momento, ma voglio davvero sistemare le cose.";
  }
};
import { GoogleGenerativeAI } from "@google/genai";

const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");

export const getAIRecommendation = async (userPreference: string) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(`Berdasarkan preferensi "${userPreference}", berikan 3 rekomendasi film futuristik.`);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Gagal mendapatkan rekomendasi AI.";
    }
};

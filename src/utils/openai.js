// utils/openai.js
import axios from "axios";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;


export const getAISuggestion = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0]?.message?.content?.trim() || "";
  } catch (error) {
    console.error("AI suggestion error:", error);
    return "";
  }
};

// utils/openai.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const getAISuggestion = async (prompt) => {
  const res = await api.post("/chat/completions", {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 150,
  });
  return res.data.choices[0].message.content.trim();
};

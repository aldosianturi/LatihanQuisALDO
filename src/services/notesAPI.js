import axios from 'axios';

const API_URL = "https://faicbwvvfdvzjffwmnxa.supabase.co/rest/v1/notes";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhaWNid3Z2ZmR2empmZndtbnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NzM2NTMsImV4cCI6MjA2NTM0OTY1M30.gR0wvuDs6aeWqTKbdhQ3lZAxVKIXRhSH-VfbfSDDB4E";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation", // penting agar Supabase mengembalikan data setelah insert/update
};

export const notesAPI = {
  // Ambil semua catatan
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  // Tambah catatan baru
  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  // Hapus catatan berdasarkan ID
  async deleteNote(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
    return response.data;
  },

  // Perbarui catatan berdasarkan ID
  async updateNote(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers });
    return response.data;
  }
};

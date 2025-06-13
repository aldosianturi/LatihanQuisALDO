import { useState, useEffect } from "react";
import { notesAPI } from "../services/notesAPI";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "active",
  });

  const loadNotes = async () => {
    try {
      const result = await notesAPI.fetchNotes();
      setNotes(result);
    } catch (err) {
      console.error("Gagal load catatan:", err);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (editId) {
        await notesAPI.updateNote(editId, dataForm);
        setSuccess("Catatan berhasil diperbarui!");
      } else {
        await notesAPI.createNote(dataForm);
        setSuccess("Catatan berhasil ditambahkan!");
      }

      setDataForm({ title: "", content: "", status: "active" });
      setEditId(null);

      setTimeout(() => setSuccess(""), 3000);
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus catatan ini?")) return;

    try {
      setLoading(true);
      await notesAPI.deleteNote(id);
      setSuccess("Catatan berhasil dihapus");
      loadNotes();
    } catch (err) {
      setError("Gagal menghapus catatan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {editId ? "Edit Catatan" : "Tambah Catatan Baru"}
        </h3>

        {error && <AlertBox type="error">{error}</AlertBox>}
        {success && <AlertBox type="success">{success}</AlertBox>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            required
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            required
            rows="2"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
          >
            {loading ? "Menyimpan..." : editId ? "Simpan Perubahan" : "Tambah Catatan"}
          </button>
        </form>
        <div className="mt-8">
          <GenericTable
            columns={["No", "Judul", "Isi Catatan", "Aksi"]}
            data={notes}
            renderRow={(note, index) => (
              <>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{note.title}</td>
                <td className="px-6 py-4">{note.content}</td>
                <td className="px-6 py-4 flex gap-3">
                  <button
                    onClick={() => {
                      setDataForm({
                        title: note.title,
                        content: note.content,
                        status: note.status || "active",
                      });
                      setEditId(note.id);
                    }}
                    disabled={loading}
                  >
                    <AiFillEdit className="text-blue-500 text-2xl hover:text-blue-700 transition-colors" />
                  </button>

                  <button
                    onClick={() => handleDelete(note.id)}
                    disabled={loading}
                  >
                    <AiFillDelete className="text-red-400 text-2xl hover:text-red-600 transition-colors" />
                  </button>
                </td>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}

import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkList(){
const [searchTerm, setSearchTerm] = useState("");
const [selectedTag, setSelectedTag] = useState("");

const [dataForm, setDataForm] = useState({
	searchTerm: "",
	selectedTag: "",
	/*Tambah state lain beserta default value*/
	});

// Handle perubahan nilai input form
const handleChange = (evt) => {
	const { name, value } = evt.target;
	setDataForm({
		...dataForm,
		[name]: value,
	});
};

const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name
				.toLowerCase()
				.includes(_searchTerm) ||
      framework.description
				.toLowerCase()
				.includes(_searchTerm);

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
    return (
        <div className="p-8">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search framework..."
            className="w-full p-2 border border-gray-300 rounded mb-4"
            // onChange={(e) => setSearchTerm(e.target.value)}
            value={dataForm.searchTerm}
            onChange={handleChange}
          />

          <select
            name="selectedTag"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={dataForm.searchTerm}
            onChange={handleChange}
          >
          <option value="">All Tags</option>
            {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
            ))}
          </select>
            {filteredFrameworks.map((item, index) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    )
}
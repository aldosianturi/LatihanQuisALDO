import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
      <div className="p-8">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-600 p-4 mb-4 rounded-md shadow-sm bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            <p className="text-black-600">{item.description}</p>
            <p className="text-gray-500 text-sm">
              Developed by: {item.details.developer} ({item.details.releaseYear})
            </p>
            <a
              href={item.details.officialWebsite}
              className="text-blue-500 text-sm hover:underline"
            >
              Visit Website
            </a>
            <p>
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    );
  }
  
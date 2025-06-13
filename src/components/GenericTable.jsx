export default function GenericTable({ columns = [], data = [], renderRow }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md mt-6">
      <table className="min-w-full text-sm text-left text-gray-700 bg-white">
        <thead className="text-xs uppercase bg-green-100 text-gray-700 border-b border-gray-200">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-6 py-4 tracking-wide font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={item.id || index}
                className="hover:bg-gray-50 border-b border-gray-100 transition-colors duration-150"
              >
                {renderRow(item, index)}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-gray-400">
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

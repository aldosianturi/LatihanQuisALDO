// AlertBox.jsx
export default function AlertBox({ type, children }) {
  const colors = {
    error: "bg-red-100 text-red-700 border-red-300",
    success: "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <div className={`border rounded-md p-3 mb-4 text-sm ${colors[type]}`}>
      {children}
    </div>
  );
}

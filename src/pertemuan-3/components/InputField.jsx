export default function InputField( { label, type, placeholder, onChange } ) {
    return (
        <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full p-2 border border-red-300 rounded"
                onChange={onChange}
            />
        </div>
    );
}
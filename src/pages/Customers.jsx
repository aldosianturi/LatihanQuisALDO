import PageHeader from "../components/PageHeader.jsx";
import { FaPlus } from "react-icons/fa";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { useEffect, useState } from "react";
import customersData from "../data/customers.json";

export default function Customers() {
  const { breadcrumb, updateBreadcrumb } = useBreadcrumb();
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze"
  });

  useEffect(() => {
    updateBreadcrumb(["Home", "Dashboard", "Customers"]);
  }, []);

  const handleInputChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleAddCustomer = () => {
    const newId = `CUS-${String(customers.length + 1).padStart(2, "0")}`;
    const customerToAdd = { ...newCustomer, customerId: newId };
    setCustomers([...customers, customerToAdd]);
    setNewCustomer({ customerName: "", email: "", phone: "", loyalty: "Bronze" });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <PageHeader title="Customers" breadcrumb={breadcrumb}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300"
        >
          <FaPlus />
          <span>Add Customer</span>
        </button>
      </PageHeader>

      {showForm && (
        <div className="bg-white p-4 rounded shadow mb-6 mt-4">
          <h3 className="text-lg font-semibold mb-2">Tambah Customer Baru</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="customerName" value={newCustomer.customerName} onChange={handleInputChange} placeholder="Customer Name" className="p-2 border rounded" />
            <input name="email" value={newCustomer.email} onChange={handleInputChange} placeholder="Email" className="p-2 border rounded" />
            <input name="phone" value={newCustomer.phone} onChange={handleInputChange} placeholder="Phone" className="p-2 border rounded" />
            <select name="loyalty" value={newCustomer.loyalty} onChange={handleInputChange} className="p-2 border rounded">
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
            </select>
          </div>
          <button onClick={handleAddCustomer} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Simpan</button>
        </div>
      )}

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Daftar Customers</h3>
        <div className="overflow-auto">
          <table className="min-w-full text-left border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-green-100 to-green-200 text-gray-700">
              <tr>
                <th className="px-6 py-3 border-b font-medium">Customer ID</th>
                <th className="px-6 py-3 border-b font-medium">Name</th>
                <th className="px-6 py-3 border-b font-medium">Email</th>
                <th className="px-6 py-3 border-b font-medium">Phone</th>
                <th className="px-6 py-3 border-b font-medium">Loyalty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-3">{customer.customerId}</td>
                  <td className="px-6 py-3">{customer.customerName}</td>
                  <td className="px-6 py-3">{customer.email}</td>
                  <td className="px-6 py-3">{customer.phone}</td>
                  <td className="px-6 py-3">{customer.loyalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

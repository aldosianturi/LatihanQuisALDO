import PageHeader from "../components/PageHeader.jsx";
import { FaPlus } from "react-icons/fa";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { useEffect, useState } from "react";
import ordersData from "../data/orders.json";

export default function Orders() {
  const { breadcrumb, updateBreadcrumb } = useBreadcrumb();
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);
  const [newOrder, setNewOrder] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: ""
  });

  useEffect(() => {
    updateBreadcrumb(["Home", "Dashboard", "Orders"]);
  }, []);

  const handleInputChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleAddOrder = () => {
    const newId = `ORD-${1000 + orders.length}`;
    const orderToAdd = { ...newOrder, orderId: newId };
    setOrders([...orders, orderToAdd]);
    setNewOrder({ orderId: "", customerName: "", status: "Pending", totalPrice: "", orderDate: "" });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <PageHeader title="Orders" breadcrumb={breadcrumb}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300"
        >
          <FaPlus />
          <span>Add Order</span>
        </button>
      </PageHeader>

      {showForm && (
        <div className="bg-white p-4 rounded shadow mb-6 mt-4">
          <h3 className="text-lg font-semibold mb-2">Tambah Order Baru</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="customerName" value={newOrder.customerName} onChange={handleInputChange} placeholder="Customer Name" className="p-2 border rounded" />
            <select name="status" value={newOrder.status} onChange={handleInputChange} className="p-2 border rounded">
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <input name="totalPrice" value={newOrder.totalPrice} onChange={handleInputChange} placeholder="Total Price" className="p-2 border rounded" />
            <input name="orderDate" value={newOrder.orderDate} onChange={handleInputChange} type="date" className="p-2 border rounded" />
          </div>
          <button onClick={handleAddOrder} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Simpan</button>
        </div>
      )}

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Daftar Orders</h3>
        <div className="overflow-auto">
          <table className="min-w-full text-left border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-green-100 to-green-200 text-gray-700">
              <tr>
                <th className="px-6 py-3 border-b font-medium">Order ID</th>
                <th className="px-6 py-3 border-b font-medium">Customer Name</th>
                <th className="px-6 py-3 border-b font-medium">Status</th>
                <th className="px-6 py-3 border-b font-medium">Total Price</th>
                <th className="px-6 py-3 border-b font-medium">Order Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-3">{order.orderId}</td>
                  <td className="px-6 py-3">{order.customerName}</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                      order.status === "Completed" ? "bg-green-100 text-green-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-3">Rp {Number(order.totalPrice).toLocaleString("id-ID")}</td>
                  <td className="px-6 py-3">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

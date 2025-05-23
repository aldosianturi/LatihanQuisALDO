import { MdDashboard, MdPeople, MdShop } from "react-icons/md";
import { useBreadcrumb } from "../context/BreadcrumbContext"; // Mengimpor context

export default function ListMenu() {
  const { updateBreadcrumb } = useBreadcrumb(); // Ambil fungsi untuk update breadcrumb

  const handleMenuClick = (menu) => {
    if (menu === "dashboard") {
      updateBreadcrumb(["Home", "Dashboard"]);
    } else if (menu === "orders") {
      updateBreadcrumb(["Home", "Dashboard", "Orders"]);
    } else if (menu === "customers") {
      updateBreadcrumb(["Home", "Dashboard", "Customers"]);
    }
  };

  return (
    <div>
      <ul id="menu-list" className="space-y-3">
        <li>
          <div
            id="menu-1"
            onClick={() => handleMenuClick("dashboard")}
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <MdDashboard className="mr-4 text-2xl" />
            <span>Dashboard</span>
          </div>
        </li>
        <li>
          <div
            id="menu-2"
            onClick={() => handleMenuClick("orders")}
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <MdShop className="mr-4 text-2xl" />
            <span>Orders</span>
          </div>
        </li>
        <li>
          <div
            id="menu-3"
            onClick={() => handleMenuClick("customers")}
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-bold text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <MdPeople className="mr-4 text-2xl" />
            <span>Customers</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

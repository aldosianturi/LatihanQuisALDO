import { useState } from "react";
import {
  MdDashboard,
  MdPeople,
  MdShop,
  MdError,
  MdFastfood
} from "react-icons/md";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { useNavigate } from "react-router-dom";

export default function ListMenu() {
  const { updateBreadcrumb } = useBreadcrumb();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);

    switch (menu) {
      case "dashboard":
        updateBreadcrumb(["Home", "Dashboard"]);
        navigate("/");
        break;
      case "orders":
        updateBreadcrumb(["Home", "Dashboard", "Orders"]);
        navigate("/orders");
        break;
      case "customers":
        updateBreadcrumb(["Home", "Dashboard", "Customers"]);
        navigate("/customers");
        break;
      case "products":
        updateBreadcrumb(["Dashboard", "Product List"]);
        navigate("/products");
        break;
      case "error400":
        updateBreadcrumb(["Error", "400 - Bad Request"]);
        navigate("/notfound", { state: { code: 400 } });
        break;
      case "error401":
        updateBreadcrumb(["Error", "401 - Unauthorized"]);
        navigate("/notfound", { state: { code: 401 } });
        break;
      case "error404":
        updateBreadcrumb(["Error", "404 - Not Found"]);
        navigate("/notfound", { state: { code: 404 } });
        break;
      case "notes":
        updateBreadcrumb(["Dashboard", "Notes"]);
        navigate("/notes");
        break;
      default:
        break;
    }
  };

  const menuItemClass = (menu) =>
    `flex cursor-pointer items-center rounded-xl p-4 font-bold ${
      activeMenu === menu
        ? "bg-hijau text-white"
        : "text-gray-600 hover:bg-green-200 hover:text-hijau"
    }`;

  return (
    <div>
      <ul id="menu-list" className="space-y-3">
        <li onClick={() => handleMenuClick("dashboard")} className={menuItemClass("dashboard")}>
          <MdDashboard className="mr-4 text-2xl" />
          Dashboard
        </li>
        <li onClick={() => handleMenuClick("orders")} className={menuItemClass("orders")}>
          <MdShop className="mr-4 text-2xl" />
          Orders
        </li>
        <li onClick={() => handleMenuClick("customers")} className={menuItemClass("customers")}>
          <MdPeople className="mr-4 text-2xl" />
          Customers
        </li>
        <li onClick={() => handleMenuClick("products")} className={menuItemClass("products")}>
          <MdFastfood className="mr-4 text-2xl" />
          Products
        </li>
        <li onClick={() => handleMenuClick("error400")} className={menuItemClass("error400")}>
          <MdError className="mr-4 text-2xl text-red-600" />
          Error 400
        </li>
        <li onClick={() => handleMenuClick("error401")} className={menuItemClass("error401")}>
          <MdError className="mr-4 text-2xl text-yellow-600" />
          Error 401
        </li>
        <li onClick={() => handleMenuClick("error404")} className={menuItemClass("error404")}>
          <MdError className="mr-4 text-2xl text-gray-600" />
          Error 404
        </li>
        <li onClick={() => handleMenuClick("notes")} className={menuItemClass("notes")}>
          <MdError className="mr-4 text-2xl text-blue-600" />
          Notes
        </li>
      </ul>
    </div>
  );
}

import { useState, useEffect, Suspense, lazy } from 'react';
import './assets/tailwind.css';
import { BreadcrumbProvider } from './context/BreadcrumbContext';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout';
import GuestLayout from './layouts/GuestLayout.jsx';
import Loading from './components/Loading';
import ErrorPage from './components/ErrorPage.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import GuestLogin from './components/GuestLogin';
import GuestRegister from './components/GuestRegister.jsx';
import NewArrivals from './components/NewArrival.jsx';
import BlogSection from './components/BlogSection.jsx';
import Iklan from './components/iklan.jsx';
import Newsletter from './components/Newsletter.jsx';
import Notes from './pages/Notes.jsx';

// Lazy-loaded pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Orders = lazy(() => import('./pages/Orders'));
const Customers = lazy(() => import('./pages/Customers'));
const Error404 = lazy(() => import('./pages/Error404.jsx'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Forgot = lazy(() => import('./pages/Auth/Forgot'));
const Users = lazy(() => import('./pages/User'));
const GuestHome = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

// Gunakan import langsung untuk data statis lokal
import ordersData from './data/orders.json';
import customersData from './data/customers.json';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  

  useEffect(() => {
    setOrders(ordersData);
    setCustomers(customersData);
  }, []);

  const filteredOrders = orders.filter(order =>
    (order['Customer Name'] || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (order['Order ID'] || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (order['Status'] || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    order['Total Price']?.toString().includes(searchTerm) ||
    (order['Order Date'] || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer =>
    (customer['Customer Name'] || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (customer['Customer ID'] || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (customer['Email'] || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (customer['Phone'] || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (customer['Loyalty'] || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BreadcrumbProvider>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Main authenticated routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders orders={filteredOrders} />} />
              <Route path="/customers" element={<Customers customers={filteredCustomers} />} />
              <Route path="/users" element={<Users />} />
              <Route path="/error-404" element={<Error404 />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
               <Route path="/notes" element={<Notes />} />
            </Route>

            {/* Auth routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
            </Route>

            {/* Guest routes */}
            <Route element={<GuestLayout />}>
              <Route path="/guest" element={<GuestHome />} />
              <Route path="/newarrival" element={<NewArrivals />} />
              <Route path="/blogsection" element={<BlogSection />} />
              <Route path="/iklan" element={<Iklan />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/guest/login" element={<GuestLogin />} />
              <Route path="/guest/register" element={<GuestRegister />} />
            </Route>

            {/* Fallback 404 */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BreadcrumbProvider>
  );
}

export default App;

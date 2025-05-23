import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar'; // kalau ada navbar guest



function GuestLayout() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        
        <Outlet />
      </div>
    </>
  );
}

export default GuestLayout;

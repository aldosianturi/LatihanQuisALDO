import { useEffect, useState } from 'react';
import { FaUserPlus, FaDownload, FaArrowLeft } from "react-icons/fa";
import PageHeader from "../components/PageHeader"; // pastikan PageHeader sudah ada di components kamu
import { useBreadcrumb } from "../context/BreadcrumbContext";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { breadcrumb } = useBreadcrumb();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users); // karena data.users isinya array
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div id="Users-container" className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-center">
        <div className="w-full">
          {/* Header Section */}
          <PageHeader title="Users" breadcrumb={breadcrumb}>
            <div className="flex gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaUserPlus />
                <span>Add User</span>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaDownload />
                <span>Export</span>
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaArrowLeft />
                <span>Back</span>
              </button>
            </div>
          </PageHeader>

          {/* User List */}
          <div className="mt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
              {users.map((user) => (
                <li key={user.id} className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-6 bg-white shadow-sm border border-gray-200">
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-gray-500">User ID: 
                      <span className="font-semibold text-gray-900">{user.id}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Full Name: 
                      <span className="font-semibold text-gray-900">{user.firstName} {user.lastName}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Email: 
                      <span className="font-semibold text-blue-900">{user.email}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Phone: 
                      <span className="font-semibold text-green-700">{user.phone}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Age: 
                      <span className="font-semibold text-gray-900">{user.age}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Gender: 
                      <span className="font-semibold text-gray-900">{user.gender}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Birth Date: 
                      <span className="font-semibold text-gray-900">{user.birthDate}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Blood Group: 
                      <span className="font-semibold text-gray-900">{user.bloodGroup}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Height: 
                      <span className="font-semibold text-gray-900">{user.height} cm</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Weight: 
                      <span className="font-semibold text-gray-900">{user.weight} kg</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Eye Color: 
                      <span className="font-semibold text-gray-900">{user.eyeColor}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Hair Color: 
                      <span className="font-semibold text-gray-900">{user.hair.color}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Hair Type: 
                      <span className="font-semibold text-gray-900">{user.hair.type}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">University: 
                      <span className="font-semibold text-gray-900">{user.university}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Role: 
                      <span className="font-semibold text-gray-900">{user.role}</span>
                    </p>
                    
                    {/* Additional Data */}
                    <p className="text-sm font-bold text-gray-500">Address: 
                      <span className="font-semibold text-gray-900">{user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}, {user.address.country}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">MAC Address: 
                      <span className="font-semibold text-gray-900">{user.macAddress}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Bank Card Type: 
                      <span className="font-semibold text-gray-900">{user.bank.cardType}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Bank Card Number: 
                      <span className="font-semibold text-gray-900">{user.bank.cardNumber}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Bank IBAN: 
                      <span className="font-semibold text-gray-900">{user.bank.iban}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Bank Card Expiry: 
                      <span className="font-semibold text-gray-900">{user.bank.cardExpire}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Company: 
                      <span className="font-semibold text-gray-900">{user.company.name}, {user.company.title}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Company Address: 
                      <span className="font-semibold text-gray-900">{user.company.address.address}, {user.company.address.city}, {user.company.address.state} {user.company.address.postalCode}, {user.company.address.country}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Company Department: 
                      <span className="font-semibold text-gray-900">{user.company.department}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Company EIN: 
                      <span className="font-semibold text-gray-900">{user.ein}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Social Security Number: 
                      <span className="font-semibold text-gray-900">{user.ssn}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">User Agent: 
                      <span className="font-semibold text-gray-900">{user.userAgent}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Crypto Coin: 
                      <span className="font-semibold text-gray-900">{user.crypto.coin}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Crypto Wallet: 
                      <span className="font-semibold text-gray-900">{user.crypto.wallet}</span>
                    </p>
                    <p className="text-sm font-bold text-gray-500">Crypto Network: 
                      <span className="font-semibold text-gray-900">{user.crypto.network}</span>
                    </p>

                    {/* Optional, display image */}
                    <img src={user.image} alt="User" className="w-32 h-32 rounded-full mx-auto" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

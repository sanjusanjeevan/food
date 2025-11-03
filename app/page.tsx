"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

interface FoodItem {
  name: string;
  image: string;
}

const HomePage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const foodItems: FoodItem[] = [
    { name: "Biryani", image: "/biryani.jpg" },
    { name: "Dosa", image: "/dosa.jpg" },
    { name: "Fried Rice", image: "/fried rice.jpg" },
    { name: "KFC Chicken", image: "/kfc chicken.jpg" },
    { name: "Koththu", image: "/koththu.jpg" },
    { name: "Noodles", image: "/noodiles.jpg" },
    { name: "Parotta", image: "/parotta.jpg" },
    { name: "Piddu", image: "/piddu.jpg" },
    { name: "Sandwich", image: "/sandwich.jpg" },
    { name: "String Hopper", image: "/string copper.jpg" },
  ];

  const handleOrderClick = (item: FoodItem) => {
    if (isAuthenticated) {
      router.push(`/order?name=${item.name}&image=${item.image}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Restaurant</h1>
          <p className="text-xl mb-4">Delicious food served with love!</p>
          <a
            href="#menu"
            className="mt-4 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
          >
            View Menu
          </a>
        </div>
      </div>

      <div className="container mx-auto p-4" id="menu">
        <h2 className="text-3xl font-bold text-center my-8">Our Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <button
                  onClick={() => handleOrderClick(item)}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                >
                  Order Now
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

"use client";

import { useRouter } from "next/navigation";
import Layout from "../layout"; // Ensure the correct path
import Image from "next/image";

const OrderPage = () => {
  const router = useRouter();
  const { search } = router; 
  const queryParams = new URLSearchParams(search);

  const name = queryParams.get("name") || undefined;
  const image = queryParams.get("image") || undefined;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center my-8">Order Details</h2>
        <div className="flex flex-col items-center justify-center">
          {image && (
            <Image
              src={image}
              alt={name || "Ordered item"}
              width={500}
              height={300}
              className="rounded-lg shadow-lg mb-4"
            />
          )}
          <h3 className="text-2xl font-semibold mb-4">{name}</h3>
          <p className="text-lg">Confirm your order for {name} below.</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default OrderPage;

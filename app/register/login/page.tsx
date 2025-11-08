"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_NESTJS_API_URL}/users/login`,
        {
          email,
          password,
        }
      );

      console.log("Login success:", response.data);
      setSuccess(true);

      // store token or user info (optional)
      localStorage.setItem("user", JSON.stringify(response.data));

      // redirect to home or dashboard
      router.push("/home");
} catch (err: unknown) {
  if (axios.isAxiosError(err)) {
    console.error("Login error:", err);
    if (err.response?.data?.message) {
      setError(err.response.data.message);
    } else {
      setError("Login failed. Please check your credentials.");
    }
  } else {
    console.error("Unexpected error:", err);
    setError("An unexpected error occurred.");
  }
}

  };

  return (
    <main className="text-center p-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg p-4 border rounded-lg bg-gray-100 shadow-lg"
      >
        <label className="block mb-2 text-lg">Email:</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md w-full mb-4"
        />

        <label className="block mb-2 text-lg">Password:</label>
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md w-full mb-4"
        />

        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 w-full"
        >
          Login
        </button>
      </form>

      {success && <p className="text-green-500 mt-4">Login successful!</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </main>
  );
}

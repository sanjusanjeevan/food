"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setError("");

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_NESTJS_API_URL}/users`, {
        username,
        email,
        password,
      });

      setSubmitted(true);
      setUsername("");
      setEmail("");
      setPassword("");

      // Redirect to another page after registration
      router.push("https://en.wikipedia.org/wiki/Puttu");
    } catch (err: unknown) {
      // ✅ Type-safe error handling
      if (axios.isAxiosError(err)) {
        console.error("Error submitting the form:", err);
        if (err.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError("Registration failed.");
        }
      } else {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <main className="text-center p-4">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg p-4 border rounded-lg bg-gray-100 shadow-lg"
      >
        <label className="block mb-2 text-lg">User Name:</label>
        <input
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md w-full mb-4"
        />

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
          className="text-white bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 w-full"
        >
          Sign Up
        </button>
      </form>

      {submitted && (
        <p className="text-green-500 mt-4">Registration successful!</p>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </main>
  );
}

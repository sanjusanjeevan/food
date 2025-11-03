// app/register/login.tsx
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
  
export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setError("");
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_NESTJS_API_URL}/food`, {
        email,
        password,
      });

      setSubmitted(true);
      setEmail("");
      setPassword("");

      // Redirect to the dashboard or home after successful login
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      router.push("/dashboard");
    } catch (err) {
      console.error("Error submitting the form ", err);
      setError("Submission failed.");
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
          name="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md w-full mb-4"
        />

        <label className="block mb-2 text-lg">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md w-full mb-4"
        />

        <button
          type="submit"
          className="text-white bg-orange-500 px-6 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-600 w-full"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <p className="text-green-500 mt-4">Form submitted successfully!</p>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </main>
  );
}

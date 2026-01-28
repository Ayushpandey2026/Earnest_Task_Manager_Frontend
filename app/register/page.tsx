"use client";

import { useState } from "react";
import { registerUser } from "@/src/services/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await registerUser(form);
      toast.success("Registered Successfully ✅");
      router.push("/login");
    } catch {
      toast.error("Registration Failed ❌");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 border rounded w-[350px]"
      >
        <h1 className="text-xl font-bold mb-4">Register</h1>

        <input
          placeholder="Name"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-black text-white p-2">
          Register
        </button>
      </form>
    </div>
  );
}
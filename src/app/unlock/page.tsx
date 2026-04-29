"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Unlock() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError("Wrong password.");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "var(--font-work-sans), sans-serif" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Enter Password</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "280px" }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1rem" }}
        />
        {error && <p style={{ color: "red", margin: 0, fontSize: "0.875rem" }}>{error}</p>}
        <button
          type="submit"
          style={{ padding: "0.5rem", background: "#000", color: "#fff", border: "none", borderRadius: "4px", fontSize: "1rem", cursor: "pointer" }}
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

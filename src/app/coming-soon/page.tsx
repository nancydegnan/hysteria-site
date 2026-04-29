import Link from "next/link";

export default function ComingSoon() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "var(--font-work-sans), sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Coming Soon</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>This site is not yet public.</p>
      <Link href="/unlock" style={{ color: "#000", textDecoration: "underline" }}>
        Have a password?
      </Link>
    </div>
  );
}

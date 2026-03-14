"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      className={`nav-link nav-link-pill ${isActive ? "is-active" : ""}`}
    >
      {children}
    </Link>
  );
}

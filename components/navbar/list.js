"use client"
import { usePathname } from "next/navigation";
import classes from "./nav.module.css"
import Link from "next/link";
export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path === href // Change condition to exact match
          ? "nav-link active mx-3"
          : "nav-link mx-3 hover"
      }
    >
      {children}
    </Link>
  );
}

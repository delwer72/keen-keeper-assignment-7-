"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Timeline", href: "/timeline" },
    { name: "Stats", href: "/analytics" },
  ];

  return (
    <nav className="w-full border-b bg-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold text-gray-700">
          KeenKeeper
        </h1>

        {/* Nav Items */}
        <div className="flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-4 py-1.5 rounded-md text-sm cursor-pointer transition 
                  ${
                    isActive
                      ? "bg-green-700 text-white"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
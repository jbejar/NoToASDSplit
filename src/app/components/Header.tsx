"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Arrow } from "./Arrow";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();

  return (
    <>
    <Logo/>
      {pathname !== "/" && (
        <Link className="button back-button" href="/">
          <Arrow /> Back to home
        </Link>
      )}

    </>
  );
}

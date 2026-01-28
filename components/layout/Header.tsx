
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-base font-bold">
            로고자리
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:underline hover:underline-offset-4">
              홈
            </Link>
            <Link href="/menu" className="hover:underline hover:underline-offset-4">
              메뉴
            </Link>
            <Link href="/location" className="hover:underline hover:underline-offset-4">
              오시는길
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-black/15 px-3 py-2 text-sm"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "닫기" : "메뉴"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="md:hidden mt-3 rounded-lg border border-black/10 bg-white p-2 text-sm">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              홈
            </Link>
            <Link
              href="/menu"
              className="block rounded-md px-3 py-2 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              메뉴
            </Link>
            <Link
              href="/location"
              className="block rounded-md px-3 py-2 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              오시는길
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            로고자리
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/"
              className="text-neutral-700 hover:text-black transition"
            >
              홈
            </Link>
            <Link
              href="/menu"
              className="text-neutral-700 hover:text-black transition"
            >
              메뉴
            </Link>
            <Link
              href="/location"
              className="text-neutral-700 hover:text-black transition"
            >
              오시는길
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium"
          >
            {open ? "닫기" : "메뉴"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="md:hidden border-t border-neutral-200 py-3 space-y-1 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
            >
              홈
            </Link>
            <Link
              href="/menu"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
            >
              메뉴
            </Link>
            <Link
              href="/location"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100"
            >
              오시는길
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
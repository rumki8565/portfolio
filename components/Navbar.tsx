"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const items: { label: string; id: string }[] = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((e): e is HTMLElement => e !== null);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur"
      style={{
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        borderColor: "var(--line)",
      }}
    >
      <nav
        aria-label="Main"
        className="wrap relative flex h-14 items-center justify-between"
      >
        <Link href="/#home" className="font-semibold tracking-tight">
          Rumki Akter
        </Link>
        <button
          className="chip md:hidden"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={16} /> : <Menu size={16} />} Menu
        </button>
        <ul
          id="menu"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b p-3 md:static md:flex md:flex-row md:border-0 md:p-0`}
          style={{ background: "var(--bg)", borderColor: "var(--line)" }}
        >
          {items.map((i) => (
            <li key={i.id}>
              <Link
                href={`/#${i.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-1.5 text-sm transition-colors"
                style={{
                  color: active === i.id ? "var(--ink)" : "var(--mute)",
                  background: active === i.id ? "var(--soft)" : "transparent",
                  fontWeight: active === i.id ? 500 : 400,
                }}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

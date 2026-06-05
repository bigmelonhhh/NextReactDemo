"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/content/zencare";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("site-header", scrolled && "site-header--scrolled")}>
      <a className="site-logo" href="#home" aria-label="智医康科技首页">
        <Image
          src="/images/zencare/logo.webp"
          alt="智医康科技 Logo"
          width={193}
          height={40}
          priority
        />
      </a>

      <nav className={cn("site-nav", open && "site-nav--open")} aria-label="主导航">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <Button
        type="button"
        variant="ghost"
        size="icon-lg"
        className="site-menu-button"
        aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
    </header>
  );
}


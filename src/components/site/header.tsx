"use client";

import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems, zhuofanAsset } from "@/content/zhuofan";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("zf-header", scrolled && "zf-header--scrolled")}>
      <div className="zf-header__inner">
        <a className="zf-logo" href="#home" aria-label="卓繁信息首页">
          <Image
            src={scrolled ? zhuofanAsset("img/newIndexOne/logo.png") : zhuofanAsset("img/newIndexOne/logo1.png")}
            alt="卓繁信息"
            width={165}
            height={46}
            priority
          />
        </a>

        <nav className={cn("zf-nav", open && "zf-nav--open")} aria-label="主导航">
          {navItems.map((item) => (
            <div className="zf-nav__item" key={item.label}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
                {item.children ? <ChevronDown aria-hidden="true" size={16} /> : null}
              </a>
              {item.children ? (
                <div className="zf-nav__submenu">
                  {item.children.map((child) => (
                    <a key={child} href={item.href} onClick={() => setOpen(false)}>
                      {child}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a className="zf-language" href="https://www.zhuofansoft.com/en/">
            English
          </a>
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          className="zf-menu-button"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
    </header>
  );
}

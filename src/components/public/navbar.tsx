"use client"
import { useEffect, useState } from "react"
import { WarehouseIcon, ArrowUpRightIcon, ListIcon, XIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mí", href: "#about" },
  { label: "Mi trabajo", href: "#work" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialThemeIsDark = savedTheme ? savedTheme === "dark" : prefersDark

    document.documentElement.classList.toggle("dark", initialThemeIsDark)
    setIsDark(initialThemeIsDark)
  }, [])

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark

    setIsDark(nextThemeIsDark)
    document.documentElement.classList.toggle("dark", nextThemeIsDark)
    window.localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light")
  }

  return (
    <div>
      <nav className="fixed px-6 py-4 z-50 flex w-full items-center justify-between bg-background/95 border-b border-white">

        <div>
          <a href="#home" className="flex items-center gap-4 hover:text-accent transition-colors">
            <WarehouseIcon size={32} />
            <p className="text-3xl font-heading leading-none">Alejandro Prieto</p>
          </a>
        </div>

        <div>
          <ul className="hidden md:flex gap-10 font-body">
            {links.slice(0, 4).map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">

          {/*
          <button type="button" onClick={toggleTheme} aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"} className="p-2 rounded-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 duration-300 transition-all"
          > {isDark ? <SunIcon size={22} /> : <MoonIcon size={22} />} </button>
          */}

          <div className="hidden md:flex items-center font-body font-semibold rounded-sm bg-accent text-black px-2 py-1 hover:-translate-y-0.5 duration-300 transition-transform">
            <a href="#contact" className="flex items-center gap-2">
              Contacto
              <ArrowUpRightIcon size={20} />
            </a>
          </div>

          <button className="md:hidden text-accent" onClick={() => setOpen(true)}>
            <ListIcon size={32} />
          </button>
        </div>

      </nav>

      <AnimatePresence>
        {open && (

          <motion.div className="fixed inset-0 z-100 bg-background flex flex-col px-8 py-10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button className="self-end p-2 flex items-center justify-center text-accent" onClick={() => setOpen(false)}
            ><XIcon size={32} /></button>

            <ul className="flex flex-col mt-8">
              {links.map((link, index) => (

                <motion.li className="border-b border-foreground/10 py-5 flex justify-start items-center"
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.15, ease: "easeOut" }}
                >
                  <a href={link.href} className="font-heading text-5xl leading-none"
                    onClick={() => setOpen(false)}
                  >{link.label}</a>
                </motion.li>

              ))}
            </ul>

            <p className="text-accent font-body text-xs mt-auto">Chihuahua, Chihuahua MX</p>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
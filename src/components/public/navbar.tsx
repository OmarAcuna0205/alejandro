"use client"
import { useState } from "react"
import { WarehouseIcon, ArrowUpRightIcon, ListIcon, XIcon } from "@phosphor-icons/react";
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

  return (
    <div>
      <nav className="fixed px-6 py-4 z-50 flex w-full items-center justify-between bg-background/95 border-b border-white">
        
        <div>
          <a href="#home" className="flex items-center gap-4 hover:text-accent transition-colors">
            <WarehouseIcon size={32}/>
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

        <div className="hidden md:flex items-center font-body font-semibold rounded-sm bg-accent text-black px-2 py-1 hover:-translate-y-0.5 duration-300 transition-transform">
          <a href="#contact" className="flex items-center gap-2">
            Contacto
            <ArrowUpRightIcon size={20}/>
          </a>
        </div>

        <button className="md:hidden text-accent hover:opacity-80 transition-opacity" onClick={() => setOpen(true)}>
          <ListIcon size={32} />
        </button>

      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-100 bg-background flex flex-col px-8 py-10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button
              className="self-end p-2 flex items-center justify-center hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              <XIcon size={32} />
            </button>

            <ul className="flex flex-col mt-8">
              {links.map((link, index) => (
                <motion.li
                  key={link.label}
                  className="border-b border-foreground/10 py-5 flex justify-start items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                >
                  <a
                    href={link.href}
                    className="font-heading text-5xl leading-none hover:text-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <p className="font-body text-xs text-muted mt-auto">Chihuahua, Chihuahua MX</p>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
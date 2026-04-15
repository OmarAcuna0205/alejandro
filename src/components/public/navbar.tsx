"use client"
import { WarehouseIcon, ArrowUpRightIcon, ListIcon } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="fixed px-6 py-4 z-50 flex w-full items-center justify-between bg-background">
      
      <div>
        <a href="#home" className="flex items-center gap-4 hover:text-accent transition-colors">
          <WarehouseIcon size={32}/>
          <p className="text-3xl font-heading leading-none">Alejandro Prieto</p>
        </a>
      </div>

      <div>
        <ul className="hidden md:flex gap-10 font-body">
          <li><a href="#home" className="hover:text-accent transition-colors">Inicio</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors">Sobre mí</a></li>
          <li><a href="#work" className="hover:text-accent transition-colors">Mi trabajo</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contacto</a></li>
        </ul>
      </div>

      <div className="hidden md:flex items-center font-body font-semibold rounded-sm bg-accent text-black px-2 py-1 hover:-translate-y-0.5 duration-300 transition-transform">
        <a href="#contact" className="flex items-center gap-2">
          Contacto
          <ArrowUpRightIcon size={20}/>
        </a>
      </div>

      <div className="md:hidden text-accent">
        <ListIcon size={32} />
      </div>

    </nav>
  )
}
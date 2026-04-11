"use client"
import { WarehouseIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="px-6 py-4 flex w-full items-center justify-between bg-background h-full">
      
      <div className="flex items-center gap-4">
        <WarehouseIcon size={32}/>
        <p className="text-3xl font-heading leading-none">Alejandro Prieto</p>
      </div>

      <div>
        <ul className="flex gap-4 font-body">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex items-center gap-2 font-body font-semibold rounded-sm bg-accent text-black px-2 py-1">
        <button>Contact</button>
        <ArrowUpRightIcon size={20}/>
      </div>

    </nav>
  )
}
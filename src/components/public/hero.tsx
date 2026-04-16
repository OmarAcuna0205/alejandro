"use client";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function Hero() {
    return (
        <div id="home" className="flex flex-col md:flex-row items-center justify-center gap-8 py-28 px-10 max-w-5xl mx-auto">

            <motion.div
                className="w-64 h-96 md:w-72 md:h-116 overflow-hidden rounded-sm shrink-0 bg-surface"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            ><img src="/images/profile_img.jpg" alt="Alejandro Prieto" className="w-full h-full object-cover object-center grayscale brightness-75"/></motion.div>

            <div className="flex flex-col items-center gap-4 text-center">

                <motion.p className="text-muted text-sm tracking-widest uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Arquitecto — Diseño y Construcción
                </motion.p>

                <div className="flex flex-col items-center gap-0">
                    <motion.p className="font-heading text-6xl md:text-7xl leading-none tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Alejandro
                    </motion.p>

                    <motion.p className="font-heading text-7xl md:text-8xl leading-none tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Prieto
                    </motion.p>
                </div>

                <motion.div className="w-40 bg-accent h-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                />

                <motion.a
                    href="#work"
                    className="flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase px-8 py-3 border border-foreground/20 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Ver Proyectos
                    <ArrowUpRightIcon size={16} />
                </motion.a>

            </div>
        </div>
    )
}
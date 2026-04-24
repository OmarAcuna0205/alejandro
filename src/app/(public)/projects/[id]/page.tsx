"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowFatLeftIcon } from "@phosphor-icons/react";
import Contact from "@/components/public/contact";

export default function ProjectPage() {
    return (
        <main>

            <motion.section className="relative h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}>

                <img src="/images/work.jpg" alt="work" className="absolute inset-0 w-full h-full object-cover" />

                <motion.div className="absolute top-24 left-6 md:left-12 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}>
                    <Link href="/" className="hidden text-accent md:flex md:text-foreground hover:text-accent transition-colors hover:-translate-y-0.5 duration-300"
                    ><ArrowFatLeftIcon size={40} /></Link>
                </motion.div>

                <motion.h1 className="absolute top-32 md:top-auto md:bottom-10 left-6 md:left-12 text-5xl md:text-9xl text-accent font-heading uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                >Refugio de la mujer</motion.h1>

            </motion.section>

            <motion.section className="px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">

                <div className="flex flex-col gap-6">

                    <motion.div className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}>
                        <p className="text-base md:text-base font-medium text-muted font-body uppercase">Ubicación</p>
                        <p className="text-sm font-light text-white font-body tracking-wider uppercase">Juarez</p>
                        <p className="text-sm font-light text-white font-body tracking-wider mt-1 uppercase">Chihuahua</p>
                    </motion.div>

                    <motion.div className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}>
                        <p className="text-base md:text-base font-medium text-muted font-body uppercase">Año</p>
                        <p className="text-sm md:text-sm font-light text-white font-body tracking-wider uppercase">2026</p>
                    </motion.div>

                    <motion.div className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}>
                        <p className="text-base md:text-base font-medium text-muted font-body uppercase">Área</p>
                        <p className="text-sm md:text-sm font-light text-white font-body tracking-wider uppercase">767 m²</p>
                    </motion.div>

                </div>

                <div className="flex flex-col ">

                    <motion.div className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}>
                        <p className="text-base md:text-base font-medium text-muted font-body uppercase">Concepto</p>
                        <p className="text-sm md:text-sm font-light text-white font-body tracking-normal leading-relaxed uppercase">Este refugio se concibe como un organismo arquitectónico vivo  que transita del hermetismo de la libertad.<br /><br />A través de un diseño biofílico y recorridos sensoriales, se crean espacios de "micro-comunidades" que priorizan la salud mental.</p>
                    </motion.div>

                </div>

                <div className="flex flex-col gap-6 justify-center items-center">

                    <motion.a href="/documents/proyecto.pdf" download className="flex items-center gap-3 border border-foreground px-6 py-4 hover:border-accent hover:text-accent transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}>
                        <p className="font-body text-xs text-center tracking-widest uppercase">Descargar documentación</p>
                    </motion.a>
                </div>

            </motion.section>

            <Contact />


        </main >
    )
}
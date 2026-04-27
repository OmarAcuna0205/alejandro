"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowFatLeftIcon } from "@phosphor-icons/react";
import Contact from "@/components/public/contact";

export default function ProjectPage() {
    return (
        <main className="overflow-x-hidden">

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

            <motion.section className="px-6 md:px-20 py-24 md:py-40 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">

                <div className="flex md:justify-center">

                    <div className="flex flex-col gap-6 w-fit">

                        <motion.div className="flex flex-col gap-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}>
                            <p className="font-body text-xs tracking-widest uppercase text-muted">Ubicación</p>
                            <p className="font-body text-foreground text-sm font-light tracking-normal leading-relaxed">Juarez</p>
                            <p className="font-body text-foreground text-sm font-light tracking-normal leading-relaxed mt-1">Chihuahua</p>
                        </motion.div>

                        <motion.div className="flex flex-col gap-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}>
                            <p className="font-body text-xs tracking-widest uppercase text-muted">Año</p>
                            <p className="font-body text-foreground text-sm font-light tracking-normal leading-relaxed">2026</p>
                        </motion.div>

                        <motion.div className="flex flex-col gap-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}>
                            <p className="font-body text-xs tracking-widest uppercase text-muted">Área</p>
                            <p className="font-body text-foreground text-sm font-light tracking-normal leading-relaxed">767 m²</p>
                        </motion.div>

                    </div>

                </div>

                <div className="flex flex-col ">

                    <motion.div className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}>
                        <p className="font-body text-xs tracking-widest uppercase text-muted">Concepto</p>
                        <p className="font-body text-foreground text-sm font-light tracking-normal leading-relaxed">Este refugio se concibe como un organismo arquitectónico vivo  que transita del hermetismo de la libertad.<br /><br />A través de un diseño biofílico y recorridos sensoriales, se crean espacios de "micro-comunidades" que priorizan la salud mental.</p>
                    </motion.div>

                </div>

                <div className="flex flex-col gap-6 justify-start items-center">

                    <motion.a href="/documents/proyecto.pdf" download className="flex items-center gap-3 border border-foreground px-6 py-4 hover:border-accent hover:text-accent transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}>
                        <p className="font-body text-xs text-center tracking-widest">Descargar documentación</p>
                    </motion.a>

                </div>

            </motion.section>

            <section className="px-6 md:px-20 py-10">

                <motion.p className="font-body text-xs tracking-widest uppercase text-muted mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                >Imágenes</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/detail1.jpg" alt="Detalle 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .8, ease: "easeInOut" }} />
                    </div>

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/detail2.jpg" alt="Detalle 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .9, ease: "easeInOut" }} />
                    </div>

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/detail3.jpg" alt="Detalle 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1, ease: "easeInOut" }} />
                    </div>

                </div>

                <motion.p className="font-body text-xs tracking-widest uppercase text-muted mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                >Renders</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/render1.jpg" alt="Render 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1, ease: "easeInOut" }} />
                    </div>

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/render2.jpg" alt="Render 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .9, ease: "easeInOut" }} />
                    </div>

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/render3.jpg" alt="Render 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .8, ease: "easeInOut" }} />
                    </div>

                </div>

                <motion.p className="font-body text-xs tracking-widest uppercase text-muted mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                >Planos</motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/plano1.jpg" alt="Plano 1" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .8, ease: "easeInOut" }} />
                    </div>

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/plano2.jpg" alt="Plano 2" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: .9, ease: "easeInOut" }} />
                    </div>

                    <div className="overflow-hidden aspect-3/4">
                        <motion.img src="/images/plano3.jpg" alt="Plano 3" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1, ease: "easeInOut" }} />
                    </div>

                </div>

            </section>

            <Contact />

        </main >
    )
}
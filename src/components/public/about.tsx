"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div id="about" className="flex flex-col items-center text-white gap-8 py-28 md:py-20 px-6 max-w-4xl mx-auto">

            <motion.p className="font-heading text-5xl font-bold tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Sobre mí
            </motion.p>

            <motion.div className="w-20 bg-accent h-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />

            <motion.h2 className="font-heading text-4xl md:text-5xl text-center leading-none tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Diseño espacios que 
            </motion.h2>

            <motion.h2 className="font-heading text-accent text-4xl md:text-5xl text-center leading-none tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Cuentan historias
            </motion.h2>

            <motion.p className="text-muted text-lg text-center leading-relaxed font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                Arquitecto egresado del Instituto Superior de Arquitectura y Diseño, 
                con una visión fresca y una obsesión por los detalles. 
                Cada proyecto es una oportunidad de transformar un espacio vacío 
                en algo que perdure.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">

                <motion.div className="flex flex-col items-center gap-2 border border-muted/20 p-6 rounded-sm bg-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p className="text-accent text-4xl font-heading font-bold">1+</p>
                    <p className="text-muted text-sm uppercase tracking-widest text-center">Años de experiencia</p>
                </motion.div>

                <motion.div className="flex flex-col items-center gap-2 border border-muted/20 p-6 rounded-sm bg-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <p className="text-accent text-4xl font-heading font-bold">10+</p>
                    <p className="text-muted text-sm uppercase tracking-widest text-center">Proyectos realizados</p>
                </motion.div>

                <motion.div className="flex flex-col items-center gap-2 border border-muted/20 p-6 rounded-sm bg-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className="text-accent text-4xl font-heading font-bold">100%</p>
                    <p className="text-muted text-sm uppercase tracking-widest text-center">Compromiso</p>
                </motion.div>

            </div>
        </div>
    )
}
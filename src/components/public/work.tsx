"use client";
import { motion } from "framer-motion";

export default function Work() {
    return (
        <section id="work" className="relative h-[70vh] md:h-screen w-full overflow-hidden">
            
            <motion.img src="/images/work.jpg" alt="Proyecto destacado" className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeOut" }}
            />

            <motion.div className="absolute inset-0 bg-black"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeOut" }}
            />

            <div className="absolute inset-0 flex flex-col justify-start md:justify-end p-8 md:p-12">

                <motion.p className="font-body text-accent text-lg uppercase mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                >Proyecto destacado</motion.p>

                <motion.h2 className="font-heading text-5xl md:text-9xl text-white leading-none tracking-tight max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                >Nombre del Proyecto</motion.h2>

                <motion.p className="font-body text-foreground text-sm md:text-lg mt-2 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >Descripción breve del proyecto más reciente.</motion.p>

            </div>
        </section>
    )
}
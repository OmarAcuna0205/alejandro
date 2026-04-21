"use client";
import { useState } from "react"
import { motion } from "framer-motion";

export default function Contact() {

    const [result, setResult] = useState("")

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResult("Enviando...")
        const formData = new FormData(e.target as HTMLFormElement)
        formData.append("access_key", "e4809f6e-7736-4892-b6e9-eea1bfe61b97")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json()
        if (data.success) {
            setResult("¡Mensaje enviado!");
            (e.target as HTMLFormElement).reset();
        } else {
            setResult("Algo salió mal, intenta de nuevo.")
        }
    };

    return (
        <section id="contact" className="scroll-mt-2 md:scroll-mt-4 py-20 md:py-26 px-6 md:px-12 max-w-7xl mx-auto w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                <div className="flex flex-col justify-center">

                    <motion.p
                        className="font-body text-xs font-semibold uppercase text-foreground mb-6 tracking-wider"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Contáctanos
                    </motion.p>

                    <motion.h2
                        className="font-heading text-6xl md:text-8xl text-foreground leading-none tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Creando tus<br />sueños.
                    </motion.h2>

                </div>

                <motion.div
                    className="border border-foreground/10 rounded-2xl p-8 md:p-12 bg-foreground/2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <form onSubmit={onSubmit} className="flex flex-col gap-10">

                        <div className="relative">
                            <input
                                name="name"
                                type="text"
                                placeholder="NOMBRE"
                                className="w-full bg-transparent border-b border-foreground/10 pb-3 text-xs tracking-widest font-body uppercase text-foreground placeholder:text-foreground/60 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                placeholder="CORREO ELECTRÓNICO"
                                className="w-full bg-transparent border-b border-foreground/10 pb-3 text-xs tracking-widest font-body uppercase text-foreground placeholder:text-foreground/60 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <input
                                name="phone"
                                type="tel"
                                placeholder="TELÉFONO"
                                className="w-full bg-transparent border-b border-foreground/10 pb-3 text-xs tracking-widest font-body uppercase text-foreground placeholder:text-foreground/60 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <input
                                name="message"
                                type="text"
                                placeholder="COMPARTE TU VISIÓN CON NOSOTROS"
                                className="w-full bg-transparent border-b border-foreground/10 pb-3 text-xs tracking-widest font-body uppercase text-foreground placeholder:text-foreground/60 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-10 py-3 rounded-full border border-white/20 text-xs tracking-[0.2em] uppercase font-body text-foreground hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Enviar
                            </button>
                        </div>

                        {result && (
                            <p className="font-body text-xs tracking-widest uppercase text-accent">
                                {result}
                            </p>
                        )}

                    </form>
                </motion.div>

            </div>
        </section>
    );
}
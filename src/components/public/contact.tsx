"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full scroll-mt-28">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                <div className="flex flex-col justify-center">
                    
                    <motion.p 
                        className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        Contáctanos
                    </motion.p>
                    
                    <motion.h2 
                        className="font-heading text-6xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Creemos tu<br />refugio.
                    </motion.h2>

                </div>

                <motion.div 
                    className="border border-white/10 rounded-2xl p-8 md:p-12 bg-white/2"
                    initial={{ opacity: 0, x: 30 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <form className="flex flex-col gap-10">
                        
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="NOMBRE" 
                                className="w-full bg-transparent border-b border-white/10 pb-3 text-xs tracking-widest font-body uppercase text-white placeholder:text-white/60 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="CORREO ELECTRÓNICO" 
                                className="w-full bg-transparent border-b border-white/10 pb-3 text-xs tracking-widest font-body uppercase text-white placeholder:text-white/60 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <input 
                                type="tel" 
                                placeholder="TELÉFONO" 
                                className="w-full bg-transparent border-b border-white/10 pb-3 text-xs tracking-widest font-body uppercase text-white placeholder:text-white/60 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <textarea 
                                placeholder="COMPARTE TU VISIÓN CON NOSOTROS" 
                                rows={4}
                                className="w-full bg-transparent border-b border-white/10 pb-3 text-xs tracking-widest font-body uppercase text-white placeholder:text-white/60 focus:outline-none focus:border-accent transition-colors resize-none"
                            />
                        </div>

                        <div className="mt-4">
                            <button 
                                type="button" 
                                className="px-10 py-3 rounded-full border border-white/20 text-xs tracking-[0.2em] uppercase font-body text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Enviar
                            </button>
                        </div>

                    </form>
                </motion.div>

            </div>
        </section>
    );
}
"use client";
import { motion } from "framer-motion";
import { InstagramLogoIcon, TiktokLogoIcon } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer>

            <div className="px-6 md:px-12 mb-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p className="font-body text-xs tracking-widest uppercase text-muted">Estudio</p>
                    <ul className="flex flex-col gap-3">
                        <li className="font-body text-foreground text-sm">alejandroprieto@gmail.com</li>
                        <li className="font-body text-foreground text-sm">+52 614 382 9174</li>
                        <li className="font-body text-foreground text-sm">Chihuahua, Chihuahua MX</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="font-body text-xs tracking-widest uppercase text-muted">Social</p>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a href="#" className="flex items-center gap-2 font-body text-foreground hover:text-accent transition-colors duration-300 text-sm">
                                <InstagramLogoIcon size={16} />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 font-body text-foreground hover:text-accent transition-colors duration-300 text-sm">
                                <TiktokLogoIcon size={16} />
                                TikTok
                            </a>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="flex items-center md:justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="font-heading text-4xl md:text-5xl text-foreground leading-none tracking-tight md:text-right">
                        Alejandro<br />
                        <span className="text-accent">Prieto</span>
                    </p>
                </motion.div>

            </div>

            <motion.div
                className="border-t border-foreground/10 px-6 md:px-12 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p className="font-body text-xs text-muted tracking-wider">
                    Diseño web por <span className="text-foreground hover:text-accent transition-colors cursor-pointer">Omar Acuña</span>
                </p>
                <p className="font-body text-xs text-muted tracking-wider">
                    © {new Date().getFullYear()} Alejandro Prieto. Todos los derechos reservados.
                </p>
            </motion.div>

        </footer>
    )
}
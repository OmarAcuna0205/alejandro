"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowFatLeftIcon } from "@phosphor-icons/react";

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

                    <Link href="/" className="text-accent md:text-foreground hover:text-accent transition-colors hover:-translate-y-0.5 duration-300"
                    ><ArrowFatLeftIcon size={40} /></Link>

                </motion.div>

                <motion.p className="absolute bottom-12 left-6 md:left-12 text-8xl text-accent font-heading uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                >Refugio de la mujer</motion.p>

            </motion.section>

        </main>
    )
}
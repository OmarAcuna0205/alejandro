"use client";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <div id="home" className="flex items-center flex-col text-white gap-6">

            <motion.img src={"images/profile_img.jpeg"} alt="profile image" className="h-60 w-60 rounded-full object-cover object-center" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            />

            <motion.p className="text-muted text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >ARQUITECTO - DISEÑO Y CONSTRUCCIÓN</motion.p>

            <motion.p className="font-heading text-6xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >Alejandro</motion.p>

            <motion.p className="font-heading text-7xl font-bold tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            >Prieto</motion.p>

            <motion.div className="w-40 bg-accent h-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>

        </div>
    )
}

export default Hero;
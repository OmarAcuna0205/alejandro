"use client";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "SOMBRAS",
        image: "/images/work1.jpg",
        description: "Un refugio contemporáneo sobre una ladera que combina geometrías puras, texturas naturales y amplias aperturas para enmarcar el paisaje del Pacífico."
    },
    {
        id: 2,
        title: "GINA",
        image: "/images/work2.jpg",
        description: "Una residencia costera de diseño atemporal y funcional. Sus espacios abiertos fluyen hacia el horizonte, brindando una experiencia de elegancia y calidez."
    },
    {
        id: 3,
        title: "CASA LÚMINA",
        image: "/images/work3.jpg",
        description: "Diseño minimalista enfocado en la luz natural. Grandes ventanales y patios interiores difuminan la línea entre el interior y la naturaleza circundante."
    },
    {
        id: 4,
        title: "EL RETIRO",
        image: "/images/work4.jpg",
        description: "Rehabilitación de un espacio histórico integrando acero y concreto. Logra un contraste visual perfecto entre la herencia arquitectónica y el diseño moderno."
    }
];

export default function ProjectsGrid() {
    return (
        <section id="projects" className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
            
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-20">
                
                {projects.map((project, index) => (

                    <motion.div key={project.id} className="group flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        
                        <div className="relative w-full aspect-4/3 overflow-hidden mb-4 cursor-pointer">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"/>
                        </div>
                        
                        <div className="flex justify-between items-center mb-4 border-b border-muted/20 pb-2">
                            <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-white">
                                {project.title}
                            </h3>
                            
                            <a href={`#proyecto-${project.id}`} className="relative overflow-hidden pb-1 group/link cursor-pointer">
                                <span className="font-body text-xs tracking-widest uppercase text-muted group-hover/link:text-accent transition-colors duration-300">Ver más</span>
                                <span className="absolute bottom-0 left-0 w-full h-px bg-accent -translate-x-[101%] group-hover/link:translate-x-0 transition-transform duration-500 ease-out" />
                            </a>
                        </div>

                        <p className="font-body text-muted text-sm md:text-base line-clamp-2">
                            {project.description}
                        </p>

                    </motion.div>
                
                ))}

            </div>
            
        </section>
    );
}
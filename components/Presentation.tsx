"use client"

import { MapPin } from "lucide-react";
import { motion, easeOut } from "framer-motion";

export default function Presentation() {
    // Configuración de la animación del contenedor (controla el timing)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Retraso de 0.2s entre cada elemento
                delayChildren: 0.1,
            },
        },
    };

    // Configuración de la animación de cada ítem (el efecto blur y subida)
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20, // Empieza un poco más abajo
            filter: "blur(10px)" // El blur inicial
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)", // Se enfoca suavemente
            transition: {
                duration: 0.8, // Duración suave
                ease: easeOut
            }
        },
    };

    return (
        <motion.div
            className="flex flex-col justify-center items-center mt-20 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.p
                variants={itemVariants}
                className="flex items-center gap-1 font-bold bg-black border rounded-full py-1 px-3 shadow shadow-white text-xs"
            >
                <MapPin className="size-4" /> Buenos Aires, Argentina.
            </motion.p>
            <motion.h1
                variants={itemVariants}
                className="text-3xl font-bold text-center sm:text-4xl"
            >
                Nicolás Pereyra Murray
            </motion.h1>

            <motion.h2
                variants={itemVariants}
                className="text-2xl font-medium text-center sm:text-2xl"
            >
                Desarrollador de Aplicaciones Web.
            </motion.h2>

            <motion.p
                variants={itemVariants}
                className="text-lg text-white/70 font-thin max-w-[900px] text-center"
            >
                Creo productos web con foco en la experiencia de usuario, rendimiento y escalabilidad.
            </motion.p>


        </motion.div>
    );
}
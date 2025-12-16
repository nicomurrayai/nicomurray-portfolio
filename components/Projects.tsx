"use client" // Necesario para framer-motion

import { motion } from "framer-motion"
import type { ProjectProps } from "./ProjectCard"
import ProjectCard from "./ProjectCard"
import { easeOut } from "framer-motion"

const projects: ProjectProps[] = [
    {
        id: 1,
        image: "/project1.jpg",
        title: "entrevistate",
        category: "SAAS",
        description: "Plataforma que simula entrevistas laborales reales mediante agentes de voz con I.A., ayudando a candidatos a practicar y mejorar su desempeño.",
        tools: ["Next.js", "React", "TypeScript", "OpenAI API", "Convex", "ElevenLabs", "Resend", "Clerk", "Polar", "Vercel"],
        link: "https://www.entrevistate.com"
    },
    {
        id: 2,
        image: "/project2.jpg",
        title: "LaCarta!",
        category: "SAAS",
        description: "Sistema de menús QR con formato tipo TikTok para que los negocios muestren sus productos de forma dinámica, rápida y visual.",
        tools: ["Next.js", "React", "TypeScript", "Convex", "Supabase Storage", "Clerk", "Resend", "Polar", "Vercel"],
        link: "https://www.lacartaa.com"
    },
    {
        id: 3,
        image: "/project3.jpg",
        title: "Referent",
        category: "LANDING",
        description: "Landing page diseñada y desarrollada con foco en conversión para la agencia de growth Referent",
        tools: ["Next.js", "React", "TypeScript", "Vercel"],
        link: "https://www.lacartaa.com"
    }
]

export default function Projects() {
    // 1. Reutilizamos las mismas variantes de Presentation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Efecto cascada entre tarjetas
            },
        },
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: easeOut
            }
        },
    }

    return (
        <div className="my-10">
            {/* 2. Convertimos el grid en motion.div */}
            <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                // Usamos whileInView para que anime cuando haces scroll hacia esta sección
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Se anima una sola vez al ver el 20% del componente
            >
                {projects.map(project => (
                    // 3. Envolvemos cada tarjeta en un motion.div para aplicar la animación individual
                    <motion.div key={project.id} variants={itemVariants}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
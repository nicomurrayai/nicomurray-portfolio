import type { ProjectProps } from "./ProjectCard"
import ProjectCard from "./ProjectCard"

const projects: ProjectProps[] = [

    {
        id: 1,
        image: "/project1.jpg",
        title: "entrevistate",
        category: "SAAS",
        description: "Plataforma que simula entrevistas laborales reales mediante agentes de voz con I.A., ayudando a candidatos a practicar y mejorar su desempeño.",
        tools: ["Next.js", "React", "TypeScript", "OpenAI API", "Convex", "ElevenLabs", "Resend" , "Clerk", "Polar", "Vercel" ,],
        link: "https://www.entrevistate.com"
    },
    {
        id: 2,
        image: "/project2.jpg",
        title: "LaCarta!",
        category:"SAAS",
        description: "Sistema de menús QR con formato tipo TikTok para que los negocios muestren sus productos de forma dinámica, rápida y visual.",
        tools: ["Next.js", "React", "TypeScript", "Convex", "Supabase Storage", "Clerk", "Resend" , "Polar", "Vercel"],
        link: "https://www.lacartaa.com"
    },

]


export default function Projects() {
    return (
        <div className="my-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    )
}



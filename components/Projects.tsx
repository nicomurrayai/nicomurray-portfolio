import type { ProjectProps } from "./ProjectCard"
import ProjectCard from "./ProjectCard"

const projects: ProjectProps[] = [

    {
        id: 1,
        image: "/project1.jpg",
        title: "entrevistate",
        description: "SAAS B2C | Plataforma de simulación de entrevistas laborales con agentes de Voz I.A.",
        tools: ["Next.js", "React" , "TypeScript" ,  "OpenAI API", "Convex" , "ElevenLabs" , "Clerck" , "Polar" , "Vercel"],
        link: "https://www.entrevistate.com"
    },
     {
        id: 2,
        image: "/project2.jpg",
        title: "LaCarta!",
        description: "SAAS B2B | Generacion de menu QR tipo tiktok para que los negocios puedan mostrar sus productos.",
        tools: ["Next.js", "React" , "TypeScript" , "Convex" , "Supabase Storage"  , "Clerck" , "Polar" , "Vercel"],
        link: "https://www.lacartaa.com"
    },

]


export default function Projects() {
    return (
        <div className="my-10" id="projects">
            <h3 className="text-center text-3xl font-thin -tracking-tighter mb-10 border-t pt-6">TRABAJOS DESTACADOS</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    )
}



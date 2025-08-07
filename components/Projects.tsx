import type { ProjectProps } from "./ProjectCard"
import ProjectCard from "./ProjectCard"

const projects: ProjectProps[] = [
    {
        id:1,
        image: "/linkscribe.png",
        title: "LinkScribe",
        description: "A full-stack app that transform youtube videos into viral linkedin posts.",
        tools: ["React" , "Gemini AI","Supabase","Next.js"],
        link: "#"
    },
    {
        id:2,
        image: "/whatfast.svg",
        title: "WhatFast",
        description: "A full-stack app that send whatsapp messages via excel.",
         tools: ["React" ,"Supabase","Next.js","MercadoPago"],
        link: "https://whatfast.com"
    },

]


export default function Projects() {
    return (
        <div className="my-10" id="projects">
            <h3 className="text-center text-3xl font-thin -tracking-tight mb-10">FEATURED WORKS</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
                {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    )
}
import type { ProjectProps } from "./ProjectCard"
import ProjectCard from "./ProjectCard"

const projects: ProjectProps[] = [

    {
        id: 1,
        image: "/project1.jpg",
        title: "AI Newsletter Generator SAAS",
        description: "FullStack App that generate viral newsletter with ai.",
        tools: ["Next.js", "OpenAI", "Supabase"],
        link: "#"
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



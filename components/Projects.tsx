import type { ProjectProps } from "./ProjectCard"
import ProjectCard from "./ProjectCard"

const projects: ProjectProps[] = [
    {
        id:1,
        image: "/placeholder.svg",
        title: "Ecommerce-Platform",
        description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
        tools: ["Next.js" , "Stripe","Supabase"],
        link: "#"
    },
    {
        id:2,
        image: "/placeholder.svg",
        title: "Ecommerce-Platform",
        description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
        tools: ["Next.js" , "Stripe","Supabase"],
        link: "#"
    },
    {
        id:3,
        image: "/placeholder.svg",
        title: "Ecommerce-Platform",
        description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
        tools: ["Next.js" , "Stripe","Supabase"],
        link: "#"
    },
    {
        id:4,
        image: "/placeholder.svg",
        title: "Ecommerce-Platform",
        description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
        tools: ["Next.js" , "Stripe","Supabase"],
        link: "#"
    }

]


export default function Projects() {
    return (
        <div className="my-20" id="projects">
            <h3 className="text-center text-3xl font-thin -tracking-tight mb-10">HIGHLIGHT PROJECTS</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
                {projects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
        </div>
    )
}
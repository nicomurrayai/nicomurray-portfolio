import Image from "next/image"
import { Badge } from "./ui/badge"


export type ProjectProps = {
    id: number
    image: string
    title: string
    description: string
    tools: string[]
    link: string
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    return (
        <div className="border rounded overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-2 p-4">
                <h5 className="text-xl">{project.title}</h5>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => <Badge key={crypto.randomUUID()} variant="outline">{tool}</Badge>)}
                </div>
                <a className="mt-4 border text-center py-2 rounded-lg  hover:opacity-50" href={project.link}>View project</a>
            </div>
        </div>
    )
}
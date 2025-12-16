import Image from "next/image"
import { Badge } from "./ui/badge"


export type ProjectProps = {
    id: number
    image: string
    title: string
    description: string
    tools: string[]
    link: string
    category: string
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    return (
        <div className="group border rounded-lg overflow-hidden h-[480px] flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/50">
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col gap-2 p-4 flex-1">
                <h5 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h5>
                <p className="dark:text-gray-400 text-gray-800 text-sm line-clamp-3 flex-1">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                        <Badge 
                            key={crypto.randomUUID()} 
                            variant="outline"
                            className="text-xs"
                        >
                            {tool}
                        </Badge>
                    ))}
                </div>
                <a 
                    className="mt-2 border text-center py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary" 
                    target="_blank" 
                    href={project.link}
                    rel="noopener noreferrer"
                >
                    Ver trabajo
                </a>
            </div>
        </div>
    )
}
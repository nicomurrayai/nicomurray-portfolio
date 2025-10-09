// import { Button } from "./ui/button";

import { MapPin  } from "lucide-react";

export default function Presentation() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 gap-6">
            <h1 className="text-3xl font-bold text-center sm:text-5xl">Nicolás Pereyra Murray</h1>
            <h2 className="text-2xl font-thin text-center sm:text-3xl">FullStack Developer</h2>
            <p className="text-lg font-thin max-w-[600px] text-center leading-10">Construyo soluciones digitales con tecnologias modernas.</p>
            <p className="flex items-center gap-1"> <MapPin className="size-4" /> Buenos Aires , Argentina.</p>
        </div>
    )
}
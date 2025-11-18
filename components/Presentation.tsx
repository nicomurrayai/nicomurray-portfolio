import { MapPin } from "lucide-react";

export default function Presentation() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 gap-6">
            <h1 className="text-3xl font-bold text-center sm:text-5xl">
                Nicolás Pereyra Murray
            </h1>

            <h2 className="text-2xl font-thin text-center sm:text-3xl">
                Desarrollador de Productos Digitales
            </h2>

            <p className="text-lg font-thin max-w-[900px] text-center">
                Creo y escalo productos digitales utilizando tecnologías modernas, con foco en experiencia de usuario, rendimiento y velocidad de desarrollo.
            </p>

            <p className="flex items-center gap-1">
                <MapPin className="size-4" /> Buenos Aires, Argentina.
            </p>
        </div>
    );
}

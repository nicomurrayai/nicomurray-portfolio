// import { Button } from "./ui/button";

export default function Presentation() {
    return (
        <div className="flex flex-col justify-center items-center mt-20 gap-6">
            <h1 className="text-3xl font-bold text-center sm:text-5xl">Nicolas Murray</h1>
            <h2 className="text-2xl font-thin text-center sm:text-3xl">FullStack Developer with AI focus.</h2>
            <p className="text-lg font-thin max-w-[600px] text-center leading-10">Building digital experiences with modern technologies.<br /> Focused on creating ai solutions.</p>
            <div className="flex items-center gap-10 mt-6">
                {/* <Button>Contact me</Button>
                <Button variant="outline">View resume</Button> */}
            </div>
        </div>
    )
}
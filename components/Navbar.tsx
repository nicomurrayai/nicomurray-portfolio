import { ModeToggle } from "./ThemeToggle";
// import LangToogle from "./LangToggle";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6 px-2 sm:px-20 m-auto max-w-[1600px] border-b sticky top-0 backdrop-blur bg-white/50 dark:bg-black/50 z-10">
            <div className="flex items-center gap-4 sm:gap-8">
                <a href="#projects">Works</a>
                {/* <a href="#">Contact</a> */}
            </div>
            <p className="text-gray-400">nicomurray.ai@gmail.com</p>
            <div className="flex items-center gap-4">
                <ModeToggle />
                {/* <LangToogle /> */}
            </div>
        </nav>
    )
}
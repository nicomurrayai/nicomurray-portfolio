import { ModeToggle } from "./ThemeToggle";
// import LangToogle from "./LangToggle";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6 px-4 sm:px-20 m-auto max-w-[1600px] border-b sticky top-0 backdrop-blur bg-white/50 dark:bg-black/50 z-10">
            <p className="dark:text-gray-400 text-black text-xs sm:text-base">npereyramurray@gmail.com</p>
            <div className="flex items-center gap-4">
                <ModeToggle />
                {/* <LangToogle /> */}
            </div>
        </nav>
    )
}


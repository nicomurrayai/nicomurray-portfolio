import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export default function LangToogle() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" >EN</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
                <DropdownMenuItem >
                    EN
                </DropdownMenuItem>
                 <DropdownMenuItem>
                    ES
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
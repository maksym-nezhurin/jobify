import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {AlignLeft} from "lucide-react";
import {links} from "@/utils/links";
import Link from "next/link";

export function LinksDropdown() {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild className='lg:hidden'>
            <Button variant='outline' size='icon'>
                <AlignLeft />
                <span className="sr-only">Toggle Links</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-52 lg:hidden' align='start' sideOffset={25}>
            {links.map((link) => {
                return <DropdownMenuItem key={link.href}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Link href={link.href} className='flex items-center gap-x-2'>{link.label}</Link>
                </DropdownMenuItem>
            })}
        </DropdownMenuContent>
    </DropdownMenu>
}
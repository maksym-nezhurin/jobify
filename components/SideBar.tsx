'use client';
import {usePathname} from "next/navigation";
import Logo from '@/assets/logo.svg'
import Image from "next/image";
import {links} from "@/utils/links";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const SideBar = () => {
    const pathname = usePathname();

    return <aside className='py-4 px-8 bg-muted h-full'>
        <Image src={Logo} alt={'logo'}/>
        <div className='flex flex-col mt-20 gap-y-4'>
            {
                links.map((link, index) => {
                    return <Button asChild={true} key={link.href} variant={pathname === link.href ? 'default' : 'link'}>
                        <Link href={link.href} className='flex items-center gap-x-2'>
                            {link.icon}
                            <span className='capitalize'>{link.label}</span>
                        </Link>
                    </Button>
                })
            }
        </div>
    </aside>;
}
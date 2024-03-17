import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Camera} from 'lucide-react'
import Link from "next/link";
import LandingImg from '../assets/main.svg'

export default function Home() {
    return (
        <main className={'flex items-center justify-center h-screen'}>
            <section
                className={'max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr, 400px] items-center'}>
                <div>
                    <h1 className='capitalize text-4xl md:text-7xl'>
                        job <span className="text-primary">tracking</span>
                        app
                    </h1>
                </div>
                <Image src={LandingImg} alt={'alternative text'} className='hidden lg:block'/>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aliquid asperiores, at beatae corporis eos error et iure labore modi molestiae neque non omnis quidem quo suscipit, vitae voluptates.</p>
                </div>

                <Button asChild={true} variant={'secondary'}>
                    <Link href='/'>Get started</Link>
                </Button>

            </section>
        </main>
    );
}

"use client";

import { PlayMusic } from "@/componets/Footer/PlayMusic";
import { PlayMusicMobile } from "@/componets/Footer/PlayMusicMobile";
import { Hits } from "@/componets/Hits/Hits";
import { MyPlaylist } from "@/componets/MyPlaylist/MyPlaylist";
import {
    ChevronLeft,
    ChevronRight,
    HomeIcon,
    Library,
    Play,
    Search,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

    useEffect(() => {
        // Função para atualizar o estado baseado na largura da janela
        const handleResize = () => {
            // 768px é um breakpoint comum para tablets
            setIsTabletOrMobile(window.innerWidth < 900);
        };

        // Adicionar listener ao redimensionar
        window.addEventListener("resize", handleResize);

        // Chamar a função handleResize imediatamente para definir o estado inicial
        handleResize();

        // Remover listener ao desmontar
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <aside className="w-48 bg-zinc-950 p-6 hidden md:block lg:w-72">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <nav className="space-y-5 mt-10">
                        <a
                            href=""
                            className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
                        >
                            <HomeIcon /> Home
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
                        >
                            <Search />
                            Search
                        </a>
                        <a
                            href=""
                            className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
                        >
                            <Library />
                            Your Library
                        </a>
                    </nav>
                    <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Desenhos da Disney
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Portugal Top Hits
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Pagodin Para Relaxar
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Bad Koreba
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Rock
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Aberturas de Anime
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Musicas AnaVitoria
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Só as Antigas
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Preferidas Da Disney
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Choque Cultural
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Sambinha
                        </a>
                        <a
                            href=""
                            className="text-sm text-zinc-400 hover:text-zinc-100"
                        >
                            Disney Em Alemão
                        </a>
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    <div className="flex items-center gap-4">
                        <button className="rounded-full bg-black/40 p-1">
                            <ChevronLeft />
                        </button>
                        <button className="rounded-full bg-black/40 p-1">
                            <ChevronRight />
                        </button>
                    </div>
                    <h1 className="font-semibold text-3xl mt-10">
                        Good Afternoom
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <a
                                href="#"
                                className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
                            >
                                <img
                                    src="/images/blueBird.jpg"
                                    width={88}
                                    height={88}
                                    alt="capa do album"
                                />
                                <strong>Blue Bird</strong>
                                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                                    <Play />
                                </button>
                            </a>
                        </div>
                        <MyPlaylist />
                        <MyPlaylist />
                        <MyPlaylist />
                        <MyPlaylist />
                        <MyPlaylist />
                    </div>

                    <h2 className="font-semibold text-2xl mt-10">
                        Made for Thais Dias
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mt-4">
                        <div className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10">
                            <img
                                src="/images/blueBird.jpg"
                                className="w-full"
                                width={120}
                                height={120}
                                alt="capa do album"
                            />
                            <strong className="font-semibold">
                                Daily Mix 1
                            </strong>
                            <span className="text-sm text-zinc-400">
                                Wallos, CION, Girl in red and more
                            </span>
                        </div>
                        <Hits />
                        <Hits />
                        <Hits />
                        <Hits />
                        <Hits />
                        <Hits />
                    </div>
                </main>
            </div>
            <div className="fixed bottom-0 z-10 w-full p-2">
                <footer className="bg-zinc-800 border-t border-zinc-700 flex items-center justify-between p-2">
                    {isTabletOrMobile ? <PlayMusicMobile /> : <PlayMusic />}
                </footer>
            </div>
        </div>
    );
}

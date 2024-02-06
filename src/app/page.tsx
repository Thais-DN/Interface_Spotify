import { Footer } from "@/componets/Footer/Footer.client";
import { Hits } from "@/componets/Hits/Hits";
import { MyPlaylist } from "@/componets/MyPlaylist/MyPlaylist";
import {
    ChevronLeft,
    ChevronRight,
    HomeIcon,
    Library,
    Search,
} from "lucide-react";

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <aside className="w-72 bg-zinc-950 p-6">
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
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <MyPlaylist />
                        <MyPlaylist />
                        <MyPlaylist />
                        <MyPlaylist />
                        <MyPlaylist />
                        <MyPlaylist />
                    </div>

                    <h2 className="font-semibold text-2xl mt-10">
                        Made for Thais Dias
                    </h2>
                    <div className="grid grid-cols-6 gap-8 mt-4">
                        <Hits />
                        <Hits />
                        <Hits />
                        <Hits />
                        <Hits />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

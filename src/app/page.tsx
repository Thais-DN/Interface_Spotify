import { Hits } from "@/componets/Hits/Hits";
import { MyPlaylist } from "@/componets/MyPlaylist/MyPlaylist";
import {
    Home as HomeIcon,
    Search,
    Library,
    ChevronLeft,
    ChevronRight,
    Play,
    Shuffle,
    SkipBack,
    SkipForward,
    Repeat,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize2,
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
                        <MyPlaylist
                            note={{
                                img: "/images/disney.jpg",
                                content: "Desenhos da Disney",
                            }}
                        />
                        <MyPlaylist
                            note={{
                                img: "/images/portugal.jpg",
                                content: "Portugal Top Hits",
                            }}
                        />
                        <MyPlaylist
                            note={{
                                img: "/images/pagodin.jfif",
                                content: "Pagodin Para Relaxar",
                            }}
                        />
                        <MyPlaylist
                            note={{
                                img: "/images/koreba.jpg",
                                content: "Bad Koreba",
                            }}
                        />
                        <MyPlaylist
                            note={{
                                img: "/images/Anavitoria.png",
                                content: "Musicas AnaVitoria",
                            }}
                        />
                        <MyPlaylist
                            note={{
                                img: "/images/Alemanha.png",
                                content: "Disney Em Alemão",
                            }}
                        />
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
            <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="/images/disney.jpg"
                        width={56}
                        height={56}
                        alt="capa do album"
                    />
                    <div className="flex flex-col">
                        <strong className="font-normal">nome da musica</strong>
                        <span className="text-xs text-zinc-400">banda</span>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-6">
                        <Shuffle size={20} className="text-zinc-200" />
                        <SkipBack size={20} className="text-zinc-200" />
                        <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                            <Play />
                        </button>
                        <SkipForward size={20} className="text-zinc-200" />
                        <Repeat size={20} className="text-zinc-200" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-400">0:31</span>
                        <div className="h-1 rounded-full w-96 bg-zinc-600">
                            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
                        </div>
                        <span className="text-xs text-zinc-400">2:14</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Mic2 size={20} />
                    <LayoutList size={20} />
                    <Laptop2 size={20} />
                    <div className="flex items-center gap-2">
                        <Volume size={20} />
                        <div className="h-1 rounded-full w-24 bg-zinc-600">
                            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
                        </div>
                    </div>
                    <Maximize2 size={20} />
                </div>
            </footer>
        </div>
    );
}

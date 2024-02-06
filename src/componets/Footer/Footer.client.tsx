import { useState, useRef } from "react";
import {
    Play,
    Pause,
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

export function Footer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("/mp3/blue-Bird.mp3")); // Substitua com o caminho correto para o seu arquivo MP3
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
    };

    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img
                    src="/images/blueBird.jpg"
                    width={56}
                    height={56}
                    alt="capa do album"
                />
                <div className="flex flex-col">
                    <strong className="font-normal">Blue Bird</strong>
                    <span className="text-xs text-zinc-400">
                        いきものがかり
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle size={20} className="text-zinc-200" />
                    <SkipBack size={20} className="text-zinc-200" />
                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                    <SkipForward size={20} className="text-zinc-200" />
                    <Repeat size={20} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">
                        {new Date(currentTime * 1000)
                            .toISOString()
                            .substr(14, 5)}
                    </span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div
                            className="bg-zinc-200 h-1 rounded-full"
                            style={{
                                width: `${(currentTime / duration) * 100}%`,
                            }}
                        ></div>
                    </div>
                    <span className="text-xs text-zinc-400">
                        {new Date(duration * 1000).toISOString().substr(14, 5)}
                    </span>
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
    );
}

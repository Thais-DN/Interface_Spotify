"use client";
import {
    Pause,
    Play,
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize2,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function PlayMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audio = new Audio("/mp3/blue-bird.mp3");
        audioRef.current = audio;

        const onTimeUpdate = () => setCurrentTime(audio.currentTime);
        const onLoadedMetadata = () => setDuration(audio.duration);

        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("loadedmetadata", onLoadedMetadata);

        return () => {
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("loadedmetadata", onLoadedMetadata);
        };
    }, []);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (audioRef.current) {
            if (!prevValue) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    };
    return (
        <>
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
                <div className="flex items-center  gap-4">
                    <Shuffle size={20} className="text-zinc-200" />
                    <SkipBack size={20} className="text-zinc-200" />
                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-white"
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? <Pause /> : <Play className="pl-1" />}
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
        </>
    );
}

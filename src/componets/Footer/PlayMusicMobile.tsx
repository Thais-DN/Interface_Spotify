"use client";
import { Pause, Play } from "lucide-react";
import { useState, useRef } from "react";

export function PlayMusicMobile() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("/mp3/blue-Bird.mp3"));
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
        <div className="flex flex-col w-full">
            <div className="w-full flex justify-between items-center p-3">
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
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
                    onClick={togglePlayPause}
                >
                    {isPlaying ? <Pause /> : <Play className="pl-1" />}
                </button>
            </div>

            {/* Barra de progresso */}
            <div className="w-full bg-zinc-600 h-1 rounded-full mt-2">
                <div
                    className="bg-zinc-200 h-1 rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}

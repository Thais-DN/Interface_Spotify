"use client";
import { Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function PlayMusicMobile() {
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
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-white"
                    onClick={togglePlayPause}
                >
                    {isPlaying ? <Pause /> : <Play className="pl-1" />}
                </button>
            </div>

            <div className="w-full bg-zinc-600 h-1 rounded-full mt-2">
                <div
                    className="bg-zinc-200 h-1 rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}

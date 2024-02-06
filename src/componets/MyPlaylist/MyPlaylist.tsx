import { Play } from "lucide-react";
import Image, { ImageProps } from "next/image";

export function MyPlaylist() {
    return (
        <div>
            <a
                href="#"
                className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
                <Image
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
    );
}

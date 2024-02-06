import { Play } from "lucide-react";

export function Hits() {
    return (
        <div className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10">
            <img
                src="/images/blueBird.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa do album"
            />
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-400">
                Wallos, CION, Girl in red and more
            </span>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-20 invisible group-hover:visible">
                <Play />
            </button>
        </div>
    );
}

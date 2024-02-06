export function Hits() {
    return (
        <div className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <img
                src="/images/disney.jpg"
                className="w-full"
                width={120}
                height={120}
                alt="capa do album"
            />
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-400">
                Wallos, CION, Girl in red and more
            </span>
        </div>
    );
}

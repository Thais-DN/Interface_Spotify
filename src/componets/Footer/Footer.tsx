"use client";
import { useState, useEffect } from "react";
import { PlayMusic } from "./PlayMusic";
import { PlayMusicMobile } from "./PlayMusicMobile";

export function Footer() {
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
        <footer className="bg-zinc-800 border-t border-zinc-700 flex items-center justify-between p-2">
            {isTabletOrMobile ? <PlayMusicMobile /> : <PlayMusic />}
        </footer>
    );
}

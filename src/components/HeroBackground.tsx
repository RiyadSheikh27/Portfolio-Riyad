import { useEffect, useRef } from "react";

const CODE_CHARS =
  "01アイウエオdefimportasyncreturnclassyieldlambda{}[]=>#0x4FA2B8FFpipgitsqlapi";

const SNIPPETS = [
  "def solve(n):",
  "import asyncio",
  "return await",
  "0x4FA2B8FF",
  "async def main",
  "class Handler",
  "yield result",
  "lambda x: x",
  "01001101",
  "pip install",
  "git commit",
  "SELECT * FROM",
];

type Drop = {
  y: number;
  speed: number;
  chars: string[];
  snippet: string | null;
  snippetY: number;
};

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let drops: Drop[] = [];
    let columns = 0;
    const fontSize = 13;
    const columnWidth = fontSize + 6;

    const initDrops = (width: number, height: number) => {
      columns = Math.floor(width / columnWidth);
      drops = Array.from({ length: columns }, (_, i) => ({
        y: Math.random() * height,
        speed: 0.4 + Math.random() * 0.8,
        chars: Array.from(
          { length: 18 + Math.floor(Math.random() * 10) },
          () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
        ),
        snippet: Math.random() > 0.65 ? SNIPPETS[i % SNIPPETS.length] : null,
        snippetY: Math.random() * height,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initDrops(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas;

      ctx.fillStyle = "rgba(11, 18, 36, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "Courier New", Courier, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * columnWidth + 4;

        for (let j = 0; j < drop.chars.length; j++) {
          const charY = drop.y - j * fontSize;
          if (charY < -fontSize || charY > height + fontSize) continue;

          const isHead = j === 0;
          const fade = 1 - j / drop.chars.length;

          ctx.fillStyle = isHead
            ? "rgba(114, 226, 174, 0.55)"
            : `rgba(114, 226, 174, ${0.04 + fade * 0.12})`;
          ctx.fillText(drop.chars[j], x, charY);
        }

        if (drop.snippet) {
          drop.snippetY += drop.speed * 0.35;
          if (drop.snippetY > height + 40) {
            drop.snippetY = -40;
            drop.snippet = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
          }

          ctx.fillStyle = "rgba(69, 211, 255, 0.1)";
          ctx.fillText(drop.snippet, x, drop.snippetY);
        }

        drop.y += drop.speed;

        if (drop.y > height + drop.chars.length * fontSize) {
          drop.y = -drop.chars.length * fontSize;
          drop.chars = Array.from(
            { length: 18 + Math.floor(Math.random() * 10) },
            () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
          );
          if (Math.random() > 0.5) {
            drop.snippet = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
            drop.snippetY = -20;
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="hero-code-bg pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-code-canvas absolute inset-0 h-full w-full" />
      <div className="hero-code-overlay absolute inset-0" />
    </div>
  );
};

export default HeroBackground;

import { useMouseGlow } from "@/hooks/useMouseGlow";

export function MouseGlow() {
  const { x, y } = useMouseGlow();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      aria-hidden
    >
      <div
        className="mouse-glow-spot absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-[0.12] blur-[100px] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: x,
          top: y,
          background:
            "radial-gradient(circle, rgba(167,139,250,0.8) 0%, rgba(34,211,238,0.3) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}

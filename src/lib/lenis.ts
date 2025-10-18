import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initLenis() {
  if (!lenis) {
    lenis = new Lenis({
      lerp: 0.08,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  return lenis;
}

import { AnimatePresence, motion } from "framer-motion";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { slides } from "./data/slides";

export default function SlidePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(1);

  const currentIndex = slides.findIndex((slide) => slide.id === id);

  if (currentIndex === -1) {
    return <Navigate to="/slide/1" replace />;
  }

  const CurrentSlide = slides[currentIndex].component;

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      navigate(`/slide/${slides[currentIndex - 1].id}`);
    }
  };

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      navigate(`/slide/${slides[currentIndex + 1].id}`);
    }
  };

  const goTo = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    setDirection(targetIndex > currentIndex ? 1 : -1);
    navigate(`/slide/${slides[targetIndex].id}`);
  };

  return (
    <main className="relative h-screen overflow-hidden bg-white">
      <div className="mx-auto flex h-full w-full items-center justify-center px-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-8 z-30">
        <div className="pointer-events-auto flex items-center gap-3">
          <button onClick={goPrev} disabled={currentIndex === 0} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40">이전</button>
          <button onClick={goNext} disabled={currentIndex === slides.length - 1} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40">다음</button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-9 left-1/2 z-30 -translate-x-1/2">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goTo(index)}
                aria-label={`${index + 1}번 슬라이드로 이동`}
                className={isActive ? "h-2.5 w-4 rounded-full bg-slate-600 transition-all duration-200" : "h-2.5 w-2.5 rounded-full bg-slate-300 transition-all duration-200 hover:bg-slate-400"}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

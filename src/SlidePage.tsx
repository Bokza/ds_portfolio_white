import { AnimatePresence, motion } from "framer-motion";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const NavBtn = ({
    onClick,
    disabled,
    label,
    children,
  }: {
    onClick: () => void;
    disabled: boolean;
    label: string;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "#FFFFFF",
        border: "1px solid #CBD5E1",
        color: "#475569",
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        outline: "none",
        boxShadow: "0 1px 4px rgba(15,23,42,.08)",
        opacity: disabled ? 0.3 : 1,
        transition: "background .18s, border-color .18s, box-shadow .18s, transform .15s, opacity .2s",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          const el = e.currentTarget;
          el.style.background = "#F8FAFC";
          el.style.borderColor = "#94A3B8";
          el.style.boxShadow = "0 3px 10px rgba(15,23,42,.12)";
          el.style.transform = "scale(1.07)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          const el = e.currentTarget;
          el.style.background = "#FFFFFF";
          el.style.borderColor = "#CBD5E1";
          el.style.boxShadow = "0 1px 4px rgba(15,23,42,.08)";
          el.style.transform = "scale(1)";
        }
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(.93)"; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(1.07)"; }}
    >
      {children}
    </button>
  );

  return (
    <main
      className="relative h-screen overflow-hidden"
      style={{ background: "#EEF2F7" }}
    >
      <div className="flex h-full flex-col items-center justify-center">
        {/* Slide row: prev btn + slide + next btn */}
        <div className="flex items-center" style={{ gap: 20 }}>
          <NavBtn onClick={goPrev} disabled={currentIndex === 0} label="이전 슬라이드">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </NavBtn>

          <div
            style={{
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(15,23,42,.12), 0 2px 8px rgba(15,23,42,.06), 0 0 0 1px rgba(203,213,225,.6)",
              flexShrink: 0,
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={location.pathname}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <CurrentSlide />
              </motion.div>
            </AnimatePresence>
          </div>

          <NavBtn onClick={goNext} disabled={currentIndex === slides.length - 1} label="다음 슬라이드">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </NavBtn>
        </div>

        {/* Bottom: counter + dots */}
        <div className="flex items-center" style={{ gap: 16, marginTop: 12 }}>
          <span
            style={{
              fontSize: 12,
              color: "#94A3B8",
              fontWeight: 600,
              letterSpacing: "0.08em",
              minWidth: 42,
              textAlign: "right",
              fontFamily: "'Noto Sans KR', sans-serif",
            }}
          >
            {currentIndex + 1} / {slides.length}
          </span>

          <div className="flex items-center" style={{ gap: 6 }}>
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goTo(index)}
                  aria-label={`슬라이드 ${index + 1}`}
                  style={{
                    width: isActive ? 26 : 7,
                    height: 7,
                    borderRadius: 4,
                    background: isActive ? "#2563EB" : "#CBD5E1",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    outline: "none",
                    transition: "width .32s cubic-bezier(.4,0,.2,1), background .28s ease",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "#94A3B8"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "#CBD5E1"; }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

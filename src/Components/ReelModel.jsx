import { useEffect, useRef, useState } from "react";
import { handleSwipe } from "../utils/swipeHelper";
import "../App.css"
export default function ReelModal({
  posts,
  activeIndex,
  setActiveIndex,
  onClose,
}) {
  const [direction, setDirection] = useState("next");

  const startY = useRef(0);
  const startX = useRef(0);

  // Auto scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setActiveIndex((prev) =>
        prev < posts.length - 1 ? prev + 1 : prev
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [posts.length, setActiveIndex]);

  const goNext = () => {
    setDirection("next");
    setActiveIndex((i) => (i < posts.length - 1 ? i + 1 : i));
  };

  const goPrev = () => {
    setDirection("prev");
    setActiveIndex((i) => (i > 0 ? i - 1 : i));
  };

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    handleSwipe({
      startX,
      startY,
      event: e,
      onNext: goNext,
      onPrev: goPrev,
    });
  };

  return (
    <div
      className="fixed md:hidden inset-0 z-50 flex items-center justify-center overscroll-none touch-none"
      onClick={onClose}
    >
      {/* Blurred Background */}
      <div
        className="absolute inset-0  backdrop-blur-md"
      />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-sm aspect-9/16 rounded-xl overflow-hidden border border-white/20 shadow-2xl touch-none"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={activeIndex}
          src={posts[activeIndex].image}
          alt=""
          className={`w-full h-full object-cover
            ${direction === "next"
              ? "animate-reel-next"
              : "animate-reel-prev"
            }`}
        />

        {/* handle left click */}
        <div
          className="absolute left-0 top-0 w-1/2 h-full"
          onClick={goPrev}
        />

        {/* handle right click */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full"
          onClick={goNext}
        />
      </div>
    </div>
  );
}

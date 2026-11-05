
"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  Images,
} from "lucide-react";

const galleryImages = [
  { src: "/10.jpeg", alt: "Gallery image 10" },
  { src: "/1.jpeg", alt: "Gallery image 1" },
  { src: "/2.jpeg", alt: "Gallery image 2" },
  { src: "/8.jpeg", alt: "Gallery image 8" },
  { src: "/3.jpeg", alt: "Gallery image 3" },
  { src: "/9.jpeg", alt: "Gallery image 9" },
  { src: "/4.jpeg", alt: "Gallery image 4" },
  { src: "/5.jpeg", alt: "Gallery image 5" },
  { src: "/6.jpeg", alt: "Gallery image 6" },
  { src: "/7.jpeg", alt: "Gallery image 7" },
];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const totalImages = galleryImages.length;
  const activeImage = galleryImages[activeIndex];

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  // Automatic slideshow
  useEffect(() => {
    if (!isPlaying || isFullscreen || totalImages <= 1) return;

    const timer = setInterval(nextImage, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, isFullscreen, nextImage, totalImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsFullscreen(false);
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextImage, prevImage]);

  // Prevent background scrolling in fullscreen
  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  if (!totalImages) return null;

  return (
    <section className="relative overflow-hidden bg-[#f3f8f7] py-20 md:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#168b86]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#c69a45]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#c69a45]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#168b86]">
                Gallery
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#12383b] sm:text-4xl md:text-5xl">
              Moments & <span className="text-[#168b86]">Memories</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#647b7a] md:text-base">
              A glimpse into professional experiences, memorable moments and
              the journey of care.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#54706e]">
            <Images size={18} className="text-[#168b86]" />
            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(totalImages).padStart(2, "0")} Photos
            </span>
          </div>
        </motion.div>

        {/* Gallery layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative min-w-0 overflow-hidden rounded-3xl border border-[#dce9e6] bg-white p-2 shadow-[0_20px_60px_rgba(18,56,59,0.08)] md:p-3"
          >
            <div className="relative flex h-[350px] items-center justify-center overflow-hidden rounded-2xl bg-[#eaf2f0] sm:h-[450px] lg:h-[540px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage.src}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="h-full w-full object-contain"
                />
              </AnimatePresence>

              {/* Fullscreen button */}
              <button
                onClick={() => setIsFullscreen(true)}
                aria-label="View image fullscreen"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#12383b]/80 text-white backdrop-blur-md transition hover:bg-[#168b86]"
              >
                <Maximize2 size={19} />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-4 rounded-full bg-[#12383b]/80 px-4 py-2 text-xs font-medium tracking-wider text-white backdrop-blur-md">
                {String(activeIndex + 1).padStart(2, "0")} —{" "}
                {String(totalImages).padStart(2, "0")}
              </div>
            </div>

            {/* Main image controls */}
            <div className="flex items-center justify-between px-2 py-4 md:px-3">
              <div>
                <p className="text-sm font-semibold text-[#12383b]">
                  {activeImage.alt}
                </p>
                <p className="mt-1 text-xs text-[#829593]">
                  Explore the gallery
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce9e6] text-[#168b86] transition hover:bg-[#eaf4f1]"
                >
                  {isPlaying ? <Pause size={17} /> : <Play size={17} />}
                </button>

                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce9e6] text-[#12383b] transition hover:border-[#168b86] hover:bg-[#168b86] hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12383b] text-white transition hover:bg-[#168b86]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Thumbnail sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex min-w-0 flex-col rounded-3xl border border-[#dce9e6] bg-white p-4 shadow-[0_20px_60px_rgba(18,56,59,0.05)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-[#12383b]">
                  All Photos
                </h3>
                <p className="mt-1 text-xs text-[#829593]">
                  Select an image to explore
                </p>
              </div>

              <span className="rounded-full bg-[#eaf4f1] px-3 py-1 text-xs font-semibold text-[#168b86]">
                {totalImages}
              </span>
            </div>

            <div className="grid max-h-[460px] grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-1">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-xl border-2 p-1 text-left transition-all duration-300 ${
                    activeIndex === index
                      ? "border-[#168b86] bg-[#eaf4f1]"
                      : "border-transparent bg-[#f3f8f7] hover:border-[#b8d6d0]"
                  }`}
                >
                  <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-lg bg-[#eaf2f0] sm:h-32 lg:h-28">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {activeIndex === index && (
                      <div className="absolute inset-0 rounded-lg border-2 border-[#168b86]" />
                    )}
                  </div>

                  <div className="flex items-center justify-between px-1 py-2">
                    <span className="text-xs font-medium text-[#45615f]">
                      Photo {String(index + 1).padStart(2, "0")}
                    </span>

                    {activeIndex === index && (
                      <span className="h-2 w-2 rounded-full bg-[#168b86]" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <p className="mt-4 border-t border-[#e8efed] pt-4 text-center text-xs text-[#829593]">
              {totalImages} images in this collection
            </p>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#071c1d]/95 p-4 backdrop-blur-xl"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen"
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={24} />
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#168b86] sm:left-8 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={25} />
            </button>

            <motion.img
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] max-w-[85vw] object-contain"
            />

            <button
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#168b86] sm:right-8 sm:h-14 sm:w-14"
            >
              <ChevronRight size={25} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <p className="text-sm font-medium">{activeImage.alt}</p>
              <p className="mt-1 text-xs text-white/50">
                {activeIndex + 1} of {totalImages}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

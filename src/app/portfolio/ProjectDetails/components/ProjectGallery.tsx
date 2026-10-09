import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

import { Images, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import type { Project } from "../../projectItems";

export default function ProjectGallery({ project }: { project: Project }) {
  const images = project?.images ?? [];

  const title = project?.title ?? "پروژه";

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = activeIndex !== null;

  const activeImage = isOpen ? images[activeIndex] : null;

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current: number | null) =>
      current === null ? null : (current + 1) % images.length,
    );
  }, [images.length]);

  const showPrevious = useCallback(() => {
    setActiveIndex((current: number | null) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  // Keyboard controls and background scroll locking

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();

      if (event.key === "ArrowRight") showNext();

      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);

    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeLightbox, showNext, showPrevious]);

  if (images.length === 0) return null;

  return (
    <>
      <section
        id="project-gallery"
        aria-labelledby="project-gallery-title"
        className="mb-8 rounded-3xl border border-base-300/70 bg-base-300/20 shadow-md shadow-base-300/60 p-5 sm:p-8 lg:p-10"
      >
        {/* Section header */}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Images size={22} aria-hidden="true" />
            </div>

            <div>
              <h2
                id="project-gallery-title"
                className="text-lg font-bold text-base-content sm:text-xl"
              >
                گالری تصاویر
              </h2>

              <p className="mt-1 text-xs leading-6 text-base-content/60 sm:text-sm">
                بخش‌های مختلف {title} را مشاهده کنید.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive gallery */}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`نمایش بزرگ تصویر ${index + 1} از ${title}`}
              className="group relative min-w-0 overflow-hidden rounded-xl border border-base-300/70 bg-base-200/40 text-start transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <div className="relative aspect-5/3 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} - تصویر ${index + 1}`}
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                  onLoad={() =>
                    setLoadedImages((current) => ({
                      ...current,

                      [index]: true,
                    }))
                  }
                  className={`size-full object-contain object-center transition duration-500 group-hover:scale-[1.03] ${
                    loadedImages[index] ? "opacity-100" : "opacity-0"
                  }`}
                />

                {!loadedImages[index] && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 animate-pulse bg-base-200"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-950/0 transition-colors duration-300 group-hover:bg-neutral-950/30">
                  <span className="flex size-10 scale-90 items-center justify-center rounded-full bg-base-100/95 text-base-content opacity-0 shadow-lg transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <ZoomIn size={19} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}

      {isOpen && activeImage && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-950/90 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`نمایش تصویر ${activeIndex + 1} از ${title}`}
            className="relative flex max-h-[92dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl z-200"
          >
            {/* Lightbox toolbar */}

            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {title}
                </p>

                <p className="mt-1 text-xs text-white/50">
                  تصویر {activeIndex + 1} از {images.length}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label="بستن گالری"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                <X size={21} aria-hidden="true" />
              </button>
            </div>

            {/* Main image */}

            <div className="relative flex min-h-0 flex-1 items-center justify-center p-3 sm:p-6">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="تصویر قبلی"
                className="absolute inset-s-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800/90 text-white shadow-lg transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-white sm:start-4"
              >
                <ChevronRight size={23} aria-hidden="true" />
              </button>

              <img
                key={activeImage}
                src={activeImage}
                alt={`${title} - تصویر ${activeIndex + 1}`}
                className="max-h-[58dvh] max-w-full object-contain sm:max-h-[65dvh]"
              />

              <button
                type="button"
                onClick={showNext}
                aria-label="تصویر بعدی"
                className="absolute inset-e-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-800/90 text-white shadow-lg transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-white sm:end-4"
              >
                <ChevronLeft size={23} aria-hidden="true" />
              </button>
            </div>

            {/* Thumbnail navigation */}

            <div className="shrink-0 border-t border-white/10 px-3 py-3 sm:px-5">
              <div
                className="flex gap-2 overflow-x-auto pb-1"
                aria-label="انتخاب تصویر"
              >
                {images.map((image, index) => (
                  <button
                    key={`${image}-thumbnail-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`رفتن به تصویر ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`size-14 shrink-0 overflow-hidden rounded-lg border-2 bg-neutral-800 transition sm:size-16 ${
                      index === activeIndex
                        ? "border-primary opacity-100"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="size-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 300;

export default function WatchCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();

  // Map scroll progress (0 to 1) to frame index (1 to FRAME_COUNT)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);
  const currentIndex = useRef(1);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // Pad the frame number with leading zeros (e.g., 001, 042, 300)
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/watches/ezgif-frame-${paddedIndex}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // All images loaded
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index - 1]; // 0-indexed array
    if (!img) return;

    // Maintain aspect ratio and center the image
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    // Use "cover" to ensure the image fills the entire screen without borders
    if (canvasRatio > imgRatio) {
      // Canvas is wider than the image -> scale image width to canvas width
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than the image -> scale image height to canvas height
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Fill the background to ensure no edges, using the exact #050505 color
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the image
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(FRAME_COUNT, Math.max(1, Math.round(latest)));
    if (index !== currentIndex.current) {
      currentIndex.current = index;
      requestAnimationFrame(() => renderFrame(index));
    }
  });

  // Handle resize
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(currentIndex.current);
      }
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // initial setup
    
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
    />
  );
}

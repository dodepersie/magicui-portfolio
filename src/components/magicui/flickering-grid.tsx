"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
  style?: React.CSSProperties;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color,
  width,
  height,
  className,
  maxOpacity = 0.3,
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const effectiveColor = useMemo(() => {
    if (color) return color;
    return resolvedTheme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";
  }, [color, resolvedTheme]);

  const memoizedColor = useMemo(() => {
    const toRGB = (colorStr: string) => {
      if (typeof window === "undefined") return "0, 0, 0";
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "0, 0, 0";
      ctx.fillStyle = colorStr;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
      return `${r}, ${g}, ${b}`;
    };
    return toRGB(effectiveColor);
  }, [effectiveColor]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      const cols = Math.floor((width + gridGap) / (squareSize + gridGap));
      const rows = Math.floor((height + gridGap) / (squareSize + gridGap));

      const squares = new Float32Array(cols * rows);
      for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
      }

      return { cols, rows, squares };
    },
    [squareSize, gridGap, maxOpacity]
  );

  const updateSquares = useCallback(
    (squares: Float32Array) => {
      for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance) {
          squares[i] = Math.random() * maxOpacity;
        }
      }
    },
    [flickerChance, maxOpacity]
  );

  const drawGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      cols: number,
      rows: number,
      squares: Float32Array
    ) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const opacity = squares[i * rows + j];
          ctx.fillStyle = `rgba(${memoizedColor}, ${opacity})`;
          ctx.fillRect(
            i * (squareSize + gridGap),
            j * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }
    },
    [memoizedColor, squareSize, gridGap]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams: { cols: number; rows: number; squares: Float32Array };

    const handleResize = () => {
      const w = width || container.clientWidth;
      const h = height || container.clientHeight;
      gridParams = setupCanvas(canvas, w, h);
    };

    handleResize();

    let lastTime = 0;
    const animate = (time: number) => {
      if (time - lastTime > 100) {
        updateSquares(gridParams.squares);
        const w = width || container.clientWidth;
        const h = height || container.clientHeight;
        drawGrid(ctx, w, h, gridParams.cols, gridParams.rows, gridParams.squares);
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [setupCanvas, updateSquares, drawGrid, width, height]);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${className || ""}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
      />
    </div>
  );
};

export default FlickeringGrid;

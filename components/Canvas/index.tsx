import React, { CSSProperties, useEffect, useRef, useState } from "react";

type CanvasProps = {
  className?: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  reDraw: boolean;
  style?: CSSProperties;
  draw: (ctx: CanvasRenderingContext2D, boundingClientRect?: DOMRect) => void;
  setReDraw: (reDraw: boolean) => void;
  onMouseDown?: (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
  onMouseMove?: (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => void;
  onMouseLeave?: (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
};

const Canvas: React.FC<CanvasProps> = (props: CanvasProps) => {
  const {
    className,
    width,
    height,
    backgroundColor = "#ffffff",
    reDraw,
    style = { cursor: "pointer", backgroundColor: backgroundColor },
    draw,
    setReDraw,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseLeave,
    onClick,
  } = props;

  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null);
  const [boundingClientRect, setBoundingClientRect] = useState<DOMRect>(null);

  // Called when the component first renders
  useEffect(() => {
    // get the context from the underlying canvas ref
    const ctx = canvas?.current?.getContext("2d");
    setCtx(ctx);
    setBoundingClientRect(canvas?.current?.getBoundingClientRect());
  }, []);

  useEffect(() => {
    draw(ctx, boundingClientRect);
  }, [ctx, boundingClientRect]);

  // Redraw the entire canvas when an action is made in the parent component that should cause a rerender
  useEffect(() => {
    if (reDraw && ctx) {
      draw(ctx, boundingClientRect);
      setReDraw(false);
    }
  }, [reDraw]);

  return (
    <canvas
      className={className}
      ref={canvas}
      width={width}
      height={height}
      style={style}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    ></canvas>
  );
};

export default Canvas;

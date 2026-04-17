import type { PropsWithChildren, CSSProperties } from "react";

type SlideFrameProps = PropsWithChildren<{
  background?: string;
  style?: CSSProperties;
}>;

export default function SlideFrame({ children, background = "#FFFFFF", style }: SlideFrameProps) {
  return (
    <div
      className="relative h-[720px] w-[1280px] overflow-hidden font-sans text-slate-800"
      style={{ background, ...style }}
    >
      {children}
    </div>
  );
}

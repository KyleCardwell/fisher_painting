"use client";

import Image from "next/image";

export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  priority,
  fill,
  style,
}) {
  const hasSrc = typeof src === "string" && src.trim().length > 0;

  if (hasSrc) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        priority={priority}
        fill={fill}
        style={style}
      />
    );
  }

  const placeholderClassName = [
    "flex items-center justify-center bg-gray-200 text-sm text-gray-500",
    fill ? "absolute inset-0 h-full w-full" : "w-full",
    !fill && !(width && height) ? "aspect-[3/2]" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const placeholderStyle = {
    ...(!fill && width && height ? { aspectRatio: `${width} / ${height}` } : {}),
    ...(style || {}),
  };

  const resolvedPlaceholderStyle = Object.keys(placeholderStyle).length ? placeholderStyle : undefined;

  return (
    <div className={placeholderClassName} style={resolvedPlaceholderStyle} aria-label={alt || "Image placeholder"}>
      <span className="px-3 text-center">{alt || "Image placeholder"}</span>
    </div>
  );
}

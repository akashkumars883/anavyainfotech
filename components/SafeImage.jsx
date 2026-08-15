"use client";

export default function SafeImage({
  src,
  alt = "Illustration",
  fallbackSrc = "/development-illustration.jpg",
  className = "",
  ...props
}) {
  return (
    <img
      src={src && src.trim() !== "" ? src : fallbackSrc}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackSrc;
      }}
      {...props}
    />
  );
}

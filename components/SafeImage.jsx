"use client";

export default function SafeImage({
  src,
  alt = "Illustration",
  fallbackSrc = "/development-illustration.jpg",
  className = "",
  priority = false,
  ...props
}) {
  return (
    <img
      src={src && src.trim() !== "" ? src : fallbackSrc}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackSrc;
      }}
      {...props}
    />
  );
}

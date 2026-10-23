import Image from "next/image";

export default function TechBrandIcon({ slug, size = 20 }) {
  return (
    <Image
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      width={size}
      height={size}
      unoptimized
      aria-hidden="true"
      className="shrink-0 object-contain"
    />
  );
}

import Link from "next/link";

export default function Button({ href, children, className = "", ...props }) {
  const styles = `
    inline-flex
    bg-primaryButton
    text-white
    text-semibold
    border
    border-primaryButton
    shadow-sm
    px-6
    py-3
    rounded-3xl
    transition-colors
    duration-200
    hover:bg-white
    hover:text-primaryButton
    hover:border-primaryButton
    ${className}
  `;

  if (href) {
    const isExternal =
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http");

    if (isExternal) {
      return (
        <a href={href} className={styles} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

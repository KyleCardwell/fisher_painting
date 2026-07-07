import Link from "next/link";

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const variants = {
    red: `
  text-white
    bg-fisherRed
    border-fisherRed
    hover:bg-hoverButtonBg
    hover:text-fisherRed
    hover:border-fisherRed
  `,
    black: `
    text-white
    bg-blackButtonBg
    border-blackButtonBg
    hover:bg-hoverButtonBg
    hover:text-blackButtonBg
    hover:border-blackButtonBg
  `,
    white: `
    text-black
    bg-white
    border-blackButtonBg
    hover:text-white
    hover:border-white
    hover:bg-black
  `,
  };

  const variantStyles = variants[variant] || variants.primary;

  const styles = `
    inline-flex
    ${variantStyles}
    font-semibold
    uppercase
    border
    shadow-sm
    px-6
    py-3
    rounded-3xl
    transition-colors
    duration-500
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

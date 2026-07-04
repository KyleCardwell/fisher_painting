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
    bg-redButtonBg
    border-redButtonBg
    hover:text-redButtonBg
    hover:border-redButtonBg
  `,
    black: `
    text-white
    bg-blackButtonBg
    border-blackButtonBg
    hover:text-blackButtonBg
    hover:border-blackButtonBg
  `,
    white: `
    text-black
    bg-white
    border-blackButtonBg
    hover:text-white
    hover:border-white
    hover:bg-blackButtonBg
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
    duration-200
    hover:bg-hoverButtonBg
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

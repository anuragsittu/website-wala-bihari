import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
}

export default function Button({
  text,
  href = "#contact",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
    >
      {text}
    </Link>
  );
}
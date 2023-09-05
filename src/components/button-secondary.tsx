import Link, { LinkProps } from "next/link";

type Props = LinkProps & {
  children: string;
}

export function ButtonSecondary({ children, ...props }: Props) {
  return (
    <button>
      <Link 
      className="py-3 px-4 rounded bg-gray-300 text-white font-semibold text-sm leading-[100%]"
      {...props}>
        {children}
      </Link>
    </button>
  )
}
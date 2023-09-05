import { ArrowRight } from "lucide-react";
import Link, { LinkProps } from "next/link";

type Props = LinkProps & {
  children: string;
  withIcon?: boolean
}

export function Button({ children, withIcon, ...props }: Props) {
  return (
    <button>
      <Link 
      className="py-3 px-4 rounded bg-black flex gap-2 text-white font-semibold text-sm leading-[100%] items-center"
      {...props}>
        {children}
        {withIcon && <ArrowRight size={14} />}
      </Link>
    </button>
  )
}
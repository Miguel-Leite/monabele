import { ArrowRight } from "lucide-react";
import Link, { LinkProps } from "next/link";

type Props = LinkProps & {
  children: string;
  withIcon?: boolean
}

export function ButtonPrimary({ children, withIcon, ...props }: Props) {
  return (
    <button>
      <Link 
      className="py-3 px-4 rounded bg-primary flex gap-2 text-white font-semibold text-sm leading-[100%] items-center z"
      {...props}>
        {children}
        {withIcon && <ArrowRight size={14} />}
      </Link>
    </button>
  )
}
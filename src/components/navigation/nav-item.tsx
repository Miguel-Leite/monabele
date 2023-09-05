import Link, { LinkProps } from "next/link";

type Props = LinkProps & {
  children: string;
  active?: boolean
}

export function NavItem({ children, active, ...props }:Props) {
  return (
    <li>
      <Link 
        {...props}
        className="font-semibold leading-[100%] text-white text-sm px-3 py-2 rounded data-[active]:bg-gray-300"
        data-active={active}  
      >{children}</Link>
    </li>
  )
}
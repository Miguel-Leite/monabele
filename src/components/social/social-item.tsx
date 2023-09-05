import Link, { LinkProps } from "next/link";
import { ReactComponentElement } from "react";

type Props = LinkProps & {
  icon?: ReactComponentElement<any> 
}

export function SocialItem({ icon: Icon } : Props) {
  return (
    <button className="w-7 h-7 bg-white rounded-full">
      <Link href="#" className=" w-full h-full">
        {Icon}
      </Link>
    </button>
  )
}
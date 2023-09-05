import Image from "next/image";
import Link from "next/link";

import Logo from '../../../public/assets/logo.svg';
import { Menu } from "lucide-react";

export function MobileNavigation() {
  return (
    <nav className="flex justify-between items-center md:hidden">
      <Link href="#">
        <Image src={Logo} alt="Logo" />
      </Link>

      <button className="text-2xl text-white">
        <Menu size={24} />
      </button>
    </nav>
  )
}
import Image from "next/image";
import Link from "next/link";

import Logo from '../../../public/assets/logo.svg'
import { NavItem } from "./nav-item";
import { ButtonPrimary } from "../button-primary";
import { ButtonSecondary } from "../button-secondary";

export function Navigation() {
  return (
    <nav className="hidden justify-between md:flex">
      <Link href="#">
        <Image src={Logo} alt="Logo" />
      </Link>

      <ul className="flex gap-8 items-center">
        <NavItem href="#" active>Home</NavItem>
        <NavItem href="#">Our Services</NavItem>
        <NavItem href="#">How the platform works</NavItem>
        <NavItem href="#">About us</NavItem>
        <NavItem href="#">Contacts</NavItem>
      </ul>

      <ul className="flex gap-3 items-center">
        <li><ButtonSecondary href="#">Sign In</ButtonSecondary></li>
        <li><ButtonPrimary href="#" withIcon>Sign Up</ButtonPrimary></li>
      </ul>
    </nav>
  )
}
import Image from "next/image";
import { Check } from "lucide-react";


import { ButtonGradient } from "@/components/button-gradient";
import { Legend } from "@/components/legend";
import { Navigation } from "@/components/navigation";
import { Scroll } from "@/components/scroll";

import Logo from '../assets/logo.svg';
import Logo1 from '../assets/companies/logo-01.svg';
import Logo2 from '../assets/companies/logo-02.svg';
import Logo3 from '../assets/companies/logo-03.svg';
import Logo4 from '../assets/companies/logo-04.svg';
import Logo5 from '../assets/companies/logo-05.svg';
import App1 from '../assets/mockups/app-01.png';
import App2 from '../assets/mockups/app-02.png';
import Mobile1 from '../assets/mockups/mobile-01.png';
import Mobile2 from '../assets/mockups/mobile-02.png';
import Avatars from '../assets/avatars.svg';

import { ButtonPrimary } from "@/components/button-primary";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import PaymentIcon from "@/components/icons/payment-icon";
import ManagementIcon from "@/components/icons/management-icon";
import TransactionIcon from "@/components/icons/transaction-icon";
import ReportIcon from "@/components/icons/report-icon";
import { FirstAccordion } from "@/components/accordion/first-accordion";
import { CardService } from "@/components/card-service";
import { SecondAccordion } from "@/components/accordion/second-accordion";
import { Social } from "@/components/social";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className='w-full h-screen bg-hero bg-no-repeat bg-cover'>
        <div className="container pt-8">
          <Navigation />
          <div className="text-center mt-28">
            <div className="mb-5">
              <span className="py-3 px-4 rounded-[50px] bg-dark text-center text-sm text-white">
                I wonder if you already knew how? 🤔
              </span>
            </div>
            <strong className="text-[56px] font-black leading-[100%] text-white">
              Enjoy a magical and easy way to <br />
              <span className="text-primary">exchange money</span> without leaving <br />
              home and fast
            </strong>
            <p className="my-4 text-white text-sm">
              t is a long established fact that a reader will be distracted by the readable content of a page <br />
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal <br />
              distribution of letters, as opposed
            </p>

            <ButtonGradient href="#" withIcon>Let’s start the value exchanges</ButtonGradient>
            <div className="mt-16">
              <Scroll />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="ml-[-1%]">
          <Legend />
        </div>
        <div className="py-14 text-center text-gray-400">
        <p className="mt-14">Meet some of the partners who trusted monabele&rsquo;s service with the impact it could make.</p>
          <div className="flex items-center justify-center gap-5 mt-20 filter grayscale">
            <Image src={Logo1} alt="Logo 1" />
            <Image src={Logo2} alt="Logo 2" />
            <Image src={Logo3} alt="Logo 3" />
            <Image src={Logo4} alt="Logo 4" />
            <Image src={Logo5} alt="Logo 5" />
          </div>
        </div>
      </main>
      <div className="container mt-32">
        <div className="grid grid-cols-2 gap-20">
          <div className="pr-20">
            <strong className="text-4xl font-inter font-black leading-[100%] text-black">
              Find out More About Us <br />
              and our View on the Market
            </strong>
            <p className="my-8 text-gray-400 text-base ">
              t is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
            <ul className="text-gray-400 flex flex-col gap-8">
              <li className="flex gap-2 items-center">
                <span className="text-green"><Check /></span>
                by the readable content of a page when looking at its layout.
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-green"><Check /></span>
                The point of using Lorem Ipsum is that it has a more-or-less.
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-green"><Check /></span>
                t is a long established fact that a reader will be distracted.
              </li>
            </ul>
            <div className="mt-11">
              <ButtonPrimary href="#">Know more about us</ButtonPrimary>
            </div>
          </div>

          <div>
            <Image src={App1} alt="Mockup app 1" />
          </div>
        </div>

        <div className="flex justify-between items-center mt-28">
          <strong className="text-3xl font-black text-black leading-[100%]">
            Get Many Advantages <br />
            with our Platform
          </strong>

          <div>
            <p className="text-base text-gray-400 font-normal mb-4">
              t is a long established fact that a reader will be distracted by the <br />
              readable content of a page when looking at its layout normal
            </p>
            <Button href="#" withIcon>View more</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-14 my-52">
          <Card
            icon={<PaymentIcon />}
            title="Payment"
            description="t is a long established fact that a reader
            will be distracted by the readable content 
            of a page when looking at its layout normal"
            link="#"
          />
          <Card
            icon={<ManagementIcon />}
            title="Management"
            description="t is a long established fact that a reader
            will be distracted by the readable content 
            of a page when looking at its layout normal"
            link="#"
          />
          <Card
            icon={<TransactionIcon />}
            title="Transactions"
            description="t is a long established fact that a reader
            will be distracted by the readable content 
            of a page when looking at its layout normal"
            link="#"
          />
          <Card
            icon={<ReportIcon />}
            title="Report"
            description="t is a long established fact that a reader
            will be distracted by the readable content 
            of a page when looking at its layout normal"
            link="#"
          />
        </div>
      </div>

      <section className="py-16 pr-36 bg-black">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <Image src={App2} alt="Mockup app 2" />
          </div>
          <div className="flex-1">
            <strong className="text-3xl font-black text-white font-inter">
              Learn how the platform works and <br />
              achieve your goal of making money
            </strong>
            <p className="text-gray-400 text-sm font-normal my-6">
              t is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has
            </p>

            <div className="pt-10">
              <FirstAccordion />
            </div>
          </div>
        </div>
      </section>

      <section className="container my-36">
        <strong className="text-3xl font-black text-black">
          Our services
        </strong>

        <div className="mt-20 grid grid-cols-2 gap-5">
          <CardService
            title={`
              Join people who believe 
              in monabele to exchange 
              values
            `}
            description="t is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has"
            image={Mobile1}
          />
          <CardService
            title="Join people who believe 
            in monabele to exchange 
            values"
            description="t is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has"
            image={Mobile2}
          />
        </div>
      </section>

      <div className="w-ful h-[880px] flex items-center justify-center py-16 relative mb-28 z-0  bg-background bg-no-repeat bg-cover">
        <div className="flex items-center justify-center w-full h-full">
          <div className="container avatar-background flex justify-center items-center">
            <Image src={Avatars} alt="Avatars" className="z-10" />
          </div>
          <div className="bg-radical-white h-full w-full z-50 flex justify-center items-center">
            <div className="container text-center">
              <strong className="text-4xl">
                Join people who believe <br />
                in monabele to exchange values
              </strong>
              <p className="text-base font-normal text-gray-400 my-6">
                t is a long established fact that a reader will be distracted by the readable content <br />
                of a page when looking at its layout. The point of using Lorem Ipsum is that it has
              </p>
              <ButtonPrimary href="#" withIcon>
                Joining the monabele agents
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>

      <section className="container mb-56">
        <strong className="text-3xl text-black font-black font-inter ">
          FAQ’s
        </strong>

        <SecondAccordion />
      </section>

      <footer className="py-32 bg-black w-full">
        <div className="container grid grid-cols-5 gap-20">
          <div>
            <Image src={Logo} alt="Logo Monabele" />
            <p className="my-8 text-zinc-300 text-xs leading-relaxed">
              It is a long established fact that a reader will be
              distracted by the readable content of a page
              when looking at its layout.
            </p>
            <Social />
          </div>
          
          <div>
            <strong className="text-white text-base font-bold leading-normal">Sitemap</strong>

            <ul className="flex flex-col gap-8 mt-8">
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">Home</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">About Us</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">Our services</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">How the platform works</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">Contacts</Link></li>
            </ul>
          </div>
        
          <div>
            <strong className="text-white text-base font-bold leading-normal">Join Us</strong>

            <ul className="flex flex-col gap-8 mt-8">
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">Volunteer</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">Participate in mentoring</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">To be partner</Link></li>
            </ul>
          </div>

          <div>
            <strong className="text-white text-base font-bold leading-normal">Contact Us</strong>

            <ul className="flex flex-col gap-8 mt-8">
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">support@monabele.co.ao</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">+244 924545665</Link></li>
            </ul>
          </div>

          <div>
            <strong className="text-white text-base font-bold leading-normal">Terms</strong>

            <ul className="flex flex-col gap-8 mt-8">
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">Terms and conditions</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">Policies and privacity</Link></li>
              <li><Link href="#" className="text-zinc-300 text-sm leading-normal">Recognition</Link></li>
            </ul>
          </div>
        </div>
        <div className="container border-t-[1px] border-t-gray-300 pt-16 mt-36">
          <div className="flex justify-between items-center">
            <p className="text-zinc-300 text-sm font-normal leading-normal">
              © 2023 Monabele. All rights reserved
            </p>
            <ul className="flex items-center gap-8">
              <li><Link href="#" className="text-xs font-normal leading-normal text-zinc-300">LinkedIn</Link></li>
              <li><Link href="#" className="text-xs font-normal leading-normal text-zinc-300">Github</Link></li>
              <li><Link href="#" className="text-xs font-normal leading-normal text-zinc-300">Google drive</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ReactComponentElement } from 'react';

type Props = {
  icon: ReactComponentElement<any>;
  title: string;
  description: string;
  link: string;
}

export function Card({ title, icon: Icon, description, link } : Props) {
  return (
    <div>
      <div className='mb-9'>
        {Icon}
      </div>
      <div>
        <strong className='text-xl text-black font-semibold leading-[100%]'>{title}</strong>
        <p className='my-6 text-base font-light text-gray-400 '>{description}</p>
        <Link href={link} className='flex items-center gap-2 text-black text-sm'>View more <ArrowRight /> </Link>
      </div>
    </div>
  )
}
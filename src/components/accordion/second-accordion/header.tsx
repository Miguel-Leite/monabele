import { Minus, Plus } from 'lucide-react';

type Props = {
  title: string;
  isActive: boolean;
}

export function Header({ title, isActive }: Props) {
  return (
    <div className='flex justify-between items-center w-full'>
      <strong className='text-base text-black'>
        { title }
      </strong>
      <button className='text-black'>
        {isActive ? <Minus /> : <Plus />}
      </button>
    </div>
  )
}

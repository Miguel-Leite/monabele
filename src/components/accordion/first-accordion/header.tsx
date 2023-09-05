import { Minus, Plus } from 'lucide-react';

type Props = {
  title: string;
  isActive: boolean;
}

export function Header({ title, isActive }: Props) {
  return (
    <div className='flex justify-between items-center w-full'>
      <strong className='text-base text-gray-200'>
        { title }
      </strong>
      <button className='text-white'>
        {isActive ? <Minus /> : <Plus />}
      </button>
    </div>
  )
}

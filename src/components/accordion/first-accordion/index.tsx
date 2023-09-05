'use client';
import * as Accordion from '@radix-ui/react-accordion';
import { Header } from './header';
import { useState } from 'react';

export function FirstAccordion() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Accordion.Root 
      type="single" 
      defaultValue="item-1" 
      className='w-full' 
    >
      <Accordion.Item value="item-1" className='pb-6 border-b-gray-300 border-b-[1px]'>
        <Accordion.Trigger className='w-full'>
          <Header
            title='We achieve your saving goals'
            isActive={open}
          />
        </Accordion.Trigger>
        <Accordion.Content>
          <div className='mt-6'>
            <p className='text-gray-400 text-xs font-inter leading-6'>
              t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" className='py-6 border-b-gray-300 border-b-[1px]'>
        <Accordion.Trigger className='w-full'>
          <Header
            title='New way to exchange money easy and fast'
            isActive={open}
          />
        </Accordion.Trigger>
        <Accordion.Content>
          <div className='mt-6'>
            <p className='text-gray-400 text-xs font-inter leading-6'>
              t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3" className='py-6 border-b-gray-300 border-b-[1px]'>
        <Accordion.Trigger className='w-full'>
          <Header
            title='The process is mostly easy when you need it'
            isActive={open}
          />
        </Accordion.Trigger>
        <Accordion.Content>
          <div className='mt-6'>
            <p className='text-gray-400 text-xs font-inter leading-6'>
              t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-4" className='py-6 border-b-gray-300 border-b-[1px]'>
        <Accordion.Trigger className='w-full'>
          <Header
            title='Get money on diferent types of coins'
            isActive={open}
          />
        </Accordion.Trigger>
        <Accordion.Content>
          <div className='mt-6'>
            <p className='text-gray-400 text-xs font-inter leading-6'>
              t is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

import Image from "next/image";
import { Button } from "./button";

type Props = {
  title: string;
  description: string;
  image: any;
}

export function CardService({ description, image, title } : Props) {
  return (
    <div className="md:p-14 p-8 rounded-lg border border-gray-200">
      <strong className="text-3xl font-black text-black break-words md:pr-20">
        {title}
      </strong>

      <p className="md:pr-20 text-base text-gray-400 font-normal my-6">
        {description}
      </p>

      <div className="flex justify-between items-start">
        <Button href="#" withIcon>Know more</Button>
        <Image src={image} alt="mockup mobile 1" className="mt-[-12%] hidden md:block" />
      </div>
    </div>
  )
}
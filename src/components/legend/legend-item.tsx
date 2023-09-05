
type Props =  {
  children: string;
  outline?: boolean;
}

export function LegendItem({ children, outline } : Props) {
  if (outline) {
    return <span className="text-2xl font-black leading-[100%] text-transparent text-stroke font-inter">
      { children }
    </span>
  }
  return (
    <span className="text-2xl font-black leading-[100%] text-white">
      { children }
    </span>
  )
}
import { LegendItem } from "./legend-item";
import Marquee from "react-fast-marquee";

export function Legend() {
  return (
    <main className="relative mt-[-4%]">
      <div className="transform-rotate-3 absolute left-0 right-0 z-50">
        <Marquee className="p-4 bg-secondary" speed={100} direction="right">
          <div className="flex items-center gap-6">
            <LegendItem outline>MONABELE®</LegendItem>
            <LegendItem>Ever On</LegendItem>
            <LegendItem outline>MONABELE®</LegendItem>
            <LegendItem>Try and trust</LegendItem>
            <LegendItem outline>Ever  On®</LegendItem>
            <LegendItem>The easy way to get money</LegendItem>
            <LegendItem outline>Value exchanges®</LegendItem>
          </div>
        </Marquee>
      </div>

      <div className="transform-rotate absolute left-0 right-0 z-40 mt-[3px] w-full">
        <Marquee className="p-4 bg-primary" speed={100}>
          <div className="flex items-center gap-6">
            <LegendItem>Exchanges of value</LegendItem>
            <LegendItem outline>MONABELE®</LegendItem>
            <LegendItem>Ever On</LegendItem>
            <LegendItem outline>MONABELE®</LegendItem>
            <LegendItem>Try and trust</LegendItem>
            <LegendItem outline>Ever  On®</LegendItem>
            <LegendItem>The easy way to get money</LegendItem>
            <LegendItem outline>Value exchanges®</LegendItem>
          </div>
        </Marquee>
      </div>
    </main>
  )
}
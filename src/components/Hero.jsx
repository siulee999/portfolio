'use client'
import { hero } from "../data/hero.js";

export default function Hero() {
  return (
    <section className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
      <h1 className="heading-1">
        {hero.title}
      </h1>
      <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
        {hero.subtitle}
      </p>
      <div className="flex gap-5 justify-center mt-20 flex-wrap">
        {hero.teckStackSrc.map(item => (
          <div
            key={item.title}
            title={item.title}
            className="text-white size-12"
          >
            <img alt="Technologies image" src={item.imgSrc} className="w-full h-full"/>
          </div>
        ))}
      </div>
      <p className="mt-10 flex items-center justify-center gap-x-6 text-white"></p>
    </section>
  )
}
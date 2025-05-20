"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { Button } from './ui/button'
import { Icons } from './icons'


type Category = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  subcategories?: Subcategory[];
};

type Subcategory = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
};

export const Categories = ({ category }: { category: Category[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: false })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()

    setCanScrollNext(emblaApi?.canScrollNext())
    setCanScrollPrev(emblaApi?.canScrollPrev())
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()

    setCanScrollNext(emblaApi?.canScrollNext())
    setCanScrollPrev(emblaApi?.canScrollPrev())
  }, [emblaApi])

  return (
    <div className=''>
      <div className="embla py-[8px] md:px-4 w-full max-w-screen-xl mx-auto relative bg-white">
        <div className="embla__viewport h-full w-full" ref={emblaRef}>
          <div className="embla__container gap-2">
            {
              category.map((category) => (
                <Link href={`/${category.name.toLowerCase()}`} key={category._id} className="flex-grow-0 text-sm shrink-0 basis-auto max-w-[100%] min-w-0">
                  <Button className='rounded-full w-full text-black/80' size="xs" variant="outline">{category.name}</Button>
                </Link>
              ))
            }
          </div>
        </div>

        {canScrollPrev && (
          <Button variant="ghost" className="embla__prev absolute top-1/2 z-20 left-0 -translate-y-1/2 rounded-full aspect-square w-fit h-fit p-2" onClick={scrollPrev} title='Prev'>
            {Icons.leftArrow({ style: { display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible" } })}
          </Button>
        )}

        {canScrollNext && (
          <Button variant="ghost" className="embla__next absolute top-1/2 z-20 right-0 -translate-y-1/2 rounded-full aspect-square w-fit h-fit p-2" onClick={scrollNext} title='Next'>
            {Icons.rightArrow({ style: { display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible" } })}
          </Button>
        )}

      </div>
    </div>


  )
}

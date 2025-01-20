import type { EmblaCarouselType as CarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

export type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
export type CarouselOptions = {
  align?: "start" | "center" | "end"
  loop?: boolean
  duration?: number
  dragFree?: boolean
  axis?: "x" | "y"
}
export type CarouselPlugin = any

export type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
  autoplay?: boolean
}

export type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps
import type { UseEmblaCarouselType } from "embla-carousel-react"

export type CarouselApi = UseEmblaCarouselType[1]
export type UseCarouselParameters = Parameters<typeof UseEmblaCarouselType>
export type CarouselOptions = {
  align?: "start" | "center" | "end"
  loop?: boolean
  duration?: number
  dragFree?: boolean
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
  carouselRef: ReturnType<typeof UseEmblaCarouselType>[0]
  api: ReturnType<typeof UseEmblaCarouselType>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps
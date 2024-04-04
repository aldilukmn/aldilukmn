import { useEffect, useState } from 'react'

interface ScrollSizeType {
  scrollX: number
  scrollY: number
}

export default function ScrollSize (): ScrollSizeType {
  const [scrollSize, setScrollSize] = useState<ScrollSizeType>({
    scrollX: window.scrollX,
    scrollY: window.scrollY
  })

  useEffect(() => {
    const handleResize = (): void => {
      setScrollSize({
        scrollX: window.scrollX,
        scrollY: window.scrollY
      })
    }

    window.addEventListener('scroll', handleResize)

    return () => {
      window.removeEventListener('scroll', handleResize)
    }
  })

  return scrollSize
}

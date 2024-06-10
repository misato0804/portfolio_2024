import { useEffect, useState } from "react"

const useScrollPosition = (elementRef :React.RefObject<HTMLElement>): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const handleScroll = () => {
    if(elementRef.current) {
      const elementRefTop = elementRef.current.getBoundingClientRect().top
      const position = window.screenY - Number(elementRefTop)
      setScrollPosition(position)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [elementRef])

  return scrollPosition
}

export default useScrollPosition;
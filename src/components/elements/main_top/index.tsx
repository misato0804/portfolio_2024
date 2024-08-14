'use client'
import { useEffect, useRef } from "react";
import "./style.css"
import gsap from 'gsap';
import ScrollDown from "@/components/features/scrollDown"

export const MainTop = () => {

  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const timeLine = gsap.timeline()

    timeLine.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
  }, [])

  return (
    <>
      <section className="main-top">
        <div>
          <h1 ref={titleRef} className="text-7xl font-display">Misato Tanno</h1>
          <h3 ref={subtitleRef} className="font-display">Frontend developer</h3>
        </div>
        <ScrollDown />
      </section>
    </>
  )
}

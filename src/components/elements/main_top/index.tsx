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
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
  }, [])

  return (
    <>
      <section className="main-top">
        <div>
          <h1 ref={titleRef} className="text-7xl">Misato Tanno</h1>
          <h3 ref={subtitleRef}>Frontend engineer</h3>
        </div>
      </section>
      {/* TODO: INSERT 3D BACKGROUND */}
      <ScrollDown />
    </>
  )
}

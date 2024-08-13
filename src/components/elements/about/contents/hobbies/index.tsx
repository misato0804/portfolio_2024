import React from 'react'
import ContentContainer from '../container'

const Hobbies = () => {
  return (
    <ContentContainer>
      <div className="w-full h-2/3 lg:w-1/2 bg-pink-100 animate-morphing"></div>
      <div className="p-12 w-full lg:w-1/2">
        <p className="font-bold my-4 tracking-wider">Whenever I have spare time...</p>
        <h3 className="font-display text-6xl my-6 md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-950 via-pink-500 to-pink-200 animate-animationTexted">
          Hiking
        </h3>
        <p className="font-bold tracking-wider text-md">
        Passionate about hiking, I explored mountains, waterfalls, and trails in Canada whenever possible. Now in Japan, I&#39;m eager to continue this journey, aiming to hike in as many beautiful places as I can.
        </p>
      </div>
    </ContentContainer>
  )
}

export default Hobbies

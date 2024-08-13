import ContentContainer from '../container'

const SoftSkills = () => {

  return (
    <ContentContainer>
      <div className="p-12 w-full lg:w-1/2">
        <p className="font-bold my-4 tracking-wider">If I work with you...</p>
        <h3 className="font-display text-6xl my-4 md:text-8xl font-bold text-transparent lg:text-8xl bg-clip-text bg-gradient-to-r from-green-950 via-green-500 to-yellow-300 animate-animationTexted">
          Soft Skills
        </h3>
        <p className="font-bold tracking-wider text-md">
        Skilled in clear communication, I excel in managing time effectively while adapting to dynamic environments. My ability to balance diverse tasks ensures successful project completion and collaboration.        </p>
      </div>
      <div className="w-full h-2/3 lg:w-1/2 bg-green-100 animate-morphing"></div>
    </ContentContainer>
  )
}

export default SoftSkills

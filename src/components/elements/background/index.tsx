import { Canvas } from "@react-three/fiber";
import { Particles } from "@/components/features/3D/cherryblossom";

export const BackGround = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[-1]">
      <Canvas>
        <Particles />
      </Canvas>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { ButtonProps } from "./type"

const ButtonNormal = ({title, icon: IconComponent, onClick, bgColor} : ButtonProps) => {
  return (
    <Button onClick={onClick} className={`${bgColor} py-6 px-6 text-[1.4rem]`}>
      { IconComponent ? <IconComponent size={18} className='mr-2'/> : null }
        { title }
    </Button>
  )
}

export default ButtonNormal
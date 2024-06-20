import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Button } from "@/components/ui/button"
import { LucideProps } from 'lucide-react'

type ButtonProps = {
 title : string,
 icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
 onClick: () => void,
 bgColor: string
}


const ButtonNormal = ({title, icon: IconComponent, onClick, bgColor} : ButtonProps) => {
  return (
    <Button onClick={onClick} className={`${bgColor} py-6 px-6 text-[1.4rem]`}>
      { IconComponent ? <IconComponent size={18} className='mr-2'/> : null }
        { title }
    </Button>
  )
}

export default ButtonNormal
import "./style.css"
import { myLinks } from "@/data/my-links"
import { FileText } from "lucide-react"
import ButtonNormal from "@/components/elements/buttons/ButtonNormal"


export const Footer = () => {
  return (
    <footer className='md:flex justify-around items-center'>

      <div className="container">
        <div>
          <h6 className="footer-sub-title">GET TO KNOW MORE</h6>
          <div className="min-h-[45px] flex items-center">
            <div className="grid grid-cols-2 gap-6">
              <ButtonNormal title="Japanese CV" onClick={() => console.log('hello')} icon={FileText} bgColor="bg-black" />
              <ButtonNormal title="English CV" onClick={() => console.log('hello')} icon={FileText} bgColor="bg-black" />
            </div>
          </div>
          <p> ©︎ Misato Tanno 2024, All right reserved</p>
        </div>
      </div>

      <div className="container left text-right ">
        <div>
          <h6 className="footer-sub-title">GET IN TOUCH</h6>
          <ul className="min-h-[45px] items-center justify-end">
            {myLinks.map(item => {
              const IconComponent = item.icon;
              return (
                <li key={item.type}>
                  <a href={item.link} target="_blank">
                    <IconComponent size={18} />
                  </a>
                </li>
              )
            })}
          </ul>
          <p className="font-[1.2rem] tracking-wider">misatotanno3310@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

import "./style.css"
import { myLinks } from "@/data/my-links"
import { FileText } from "lucide-react"
import ButtonNormal from "../buttons/buttonNormal/ButtonNormal"
import { EmailNavigateButton } from "../buttons/emailNavigateButton"


export const Footer = () => {
  return (
    <footer className='md:flex justify-around items-center'>

      <div className="container">
        <div>
          <h6 className="footer-sub-title">GET TO KNOW MORE</h6>
          <div className="min-h-[45px] flex items-center">
            <ButtonNormal
              title="See resume"
              onClick={() => console.log('hello')}
              icon={FileText}
              bgColor="bg-black"
            />
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
          <EmailNavigateButton />
        </div>
      </div>
    </footer>
  )
}

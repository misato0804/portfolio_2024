import { FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

type Link = {
  type : string,
  link : string,
  icon : IconType
}

export const myLinks : Link[] = [
  {
    type: 'instagram',
    link: 'https://www.instagram.com/maisa_0804/',
    icon: IoLogoInstagram
  },
  {
    type: 'linkedin',
    link: 'https://www.linkedin.com/in/misato-tanno-a2b475221/',
    icon: FaLinkedin
  },
  {
    type: 'GitHub',
    link: 'https://github.com/misato0804',
    icon: FaGithub
  },

] 
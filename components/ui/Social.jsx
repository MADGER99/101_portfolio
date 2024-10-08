import Link from "next/link";

import { FaGithub, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Socials = [
  { icon: <FaGithub/>, path: ""},
  { icon: <FaFacebook/>, path: ""},
  { icon: <FaYoutube/>, path: ""},
  { icon: <FaTwitter/>, path: ""},
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((item, index) =>{
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
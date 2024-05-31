import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

export default function SideBar() {
  return (
    <div className="fixed bottom-0 left-4 mb-5">
      <ul>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/johnnam1121"><FaGithub className="my-4 ml-4 size-6 text-mainText hover:text-secondaryText duration-300"/></a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/johnnam93/"><FaLinkedin className="my-4 ml-4 size-6 text-mainText hover:text-secondaryText duration-300"/></a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/john.nam.98/"><FaFacebook className="my-4 ml-4 size-6 text-mainText hover:text-secondaryText duration-300"/></a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/johnnam93/"><FaInstagram className="my-4 ml-4 size-6 text-mainText hover:text-secondaryText duration-300"/></a>
        </li>
      </ul>
    </div>
  );
}
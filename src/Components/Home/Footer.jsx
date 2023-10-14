import { FaFacebookF,FaSlackHash,FaTwitter,FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    return (
       <div className=" p-4 bg-[#f6f9f9]">
         <footer className="footer items-center max-w-6xl mx-auto  text-[#999999]">
  <aside className="items-center grid-flow-col">
    <FaSlackHash></FaSlackHash>
    <p className="text-xl">Copyright © 2023 - All right reserved by Anik</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end justify-self-center">
    <a className="text-2xl bg-[#15a4fa] text-white p-4 rounded">
        <FaFacebookF></FaFacebookF>
    </a> 
    <a className="text-2xl bg-[#15a4fa] text-white p-4 rounded"><FaTwitter></FaTwitter></a>
    <a className="text-2xl bg-[#15a4fa] text-white p-4 rounded"><FaLinkedinIn></FaLinkedinIn></a>
    
    
  </nav>
        </footer>
       </div>
    );
};

export default Footer;
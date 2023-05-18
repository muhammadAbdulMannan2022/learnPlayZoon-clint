import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Home delivery</a>
          <a className="link link-hover">unique toys</a>
          <a className="link link-hover">custom toys service</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Toys</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook className="w-7 h-7 hover:text-blue-600 cursor-pointer" />
            </a>
            <a>
              <FaGithub className="w-7 h-7 hover:text-black cursor-pointer" />
            </a>
            <a>
              <FaInstagram className="w-7 h-7 hover:text-red-500 cursor-pointer" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

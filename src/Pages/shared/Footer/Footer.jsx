import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-blue-200 text-base-content">
        <div>
          <span className="text-black text-3xl font-bold italic">
            LearnPlayZone
          </span>
          <a className="link link-hover">Fast Delivery</a>
          <a className="link link-hover">
            Level-4, 34, Orland Park , Chicago, USA
          </a>
          <a className="link link-hover">example@gmail.com</a>
          <a className="link link-hover">Phone : +100000000</a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Fast Delivery</a>
          <a className="link link-hover">Save Money</a>
          <a className="link link-hover">Fast Returns</a>
          <a className="link link-hover">Online Support</a>
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

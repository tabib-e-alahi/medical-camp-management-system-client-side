import { Link } from 'react-router-dom';
import logo from '../../assets/logo .png'
import { FaFacebookSquare, FaGoogle, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-gray-200 pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
            <img className='w-80' src={logo} alt="" />
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Building Healthier Communities through Thoughtful Event Management
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <button
                  className="bg-white flex justify-center items-center  text-blue-500 shadow-lg  h-10 w-10  rounded-full  mr-2"
                  type="button"
                >
                  <FaTwitter></FaTwitter>
                </button>
                <button
                  className="bg-white flex justify-center items-center  text-blue-500 shadow-lg  h-10 w-10  rounded-full  mr-2"
                  type="button"
                >
                  <FaFacebookSquare></FaFacebookSquare>
                </button>
                <button
                  className="bg-white flex justify-center items-center  text-black shadow-lg  h-10 w-10  rounded-full  mr-2"
                  type="button"
                >
                  <FaGoogle></FaGoogle>
                </button>
                <button
                  className="bg-white flex justify-center items-center  text-red-500 shadow-lg  h-10 w-10  rounded-full  mr-2"
                  type="button"
                >
                  <FaInstagram></FaInstagram>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/available-camps'>Available Camps</Link></li>
                    <li><Link to='/contactUs'>Contact Us</Link></li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  
                />{" "}
                Health Ministry ,
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Bangladesh
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

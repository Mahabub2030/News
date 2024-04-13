
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import Logo  from '../../Logo/assets/qZone1.png';


const RightSideNav = () => {
        return (
                <div>
                      <div className="p-4 space-y-3 mb-6">
                        <h2 className="text-3xl font-bold">Login With</h2>
                        <button className="btn btn-outline w-full"> 
                        <FaGoogle></FaGoogle>
                      Login With Googole
                        </button>
                        <button className="btn btn-outline w-full"> 
                        <FaGithub></FaGithub>
                      Login With Github
                        </button>
                      </div>
                      <div className="p-4  mb-6">
                        <h2 className="text-3xl font-bold mb-4">Find Us On</h2>
                        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                                <FaFacebook className="mr-3"></FaFacebook>
                                Facebook
                        </a>
                      
                        <a className="p-4 flex text-lg items-center border-x rounded-t-lg" href="">
                                <FaTwitter className="mr-3"></FaTwitter>
                                Twitter
                        </a>
                      
                        <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                                <FaInstagram className="mr-3"></FaInstagram>
                               Instagram
                        </a>
                      
                      </div>
                      {/* q zone  */}

                      <div className="p-4 space-y-3 mb-6">
                        <h2 className="text-3xl font-bold">Q-Zone</h2>
                        <img src={Logo} alt="" />
                        <img src={Logo} alt="" />
                        <img src={Logo} alt="" />
                     
                      </div>
                </div>
        );
};

export default RightSideNav;
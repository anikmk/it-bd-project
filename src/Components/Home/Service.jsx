
import { FaMobileAlt,FaTelegramPlane,FaBullhorn } from "react-icons/fa";
import './home.css'


const Service = () => {
    return (
        <div className="services-section">
            <div className='service-container max-w-6xl mx-auto'>
                <div className='service-box '>
                    <div className='single-box'>
                        <div className='icon'>
                            <FaMobileAlt className="i"></FaMobileAlt>
                        </div>
                        <h2>clean & minimal design</h2>
                        <p>This multipurpose theme is especially created 
                        to be used for different projects.</p>
                    </div>
                    <div className='single-box'>
                        <div className='icon'>
                            <FaTelegramPlane className="i"></FaTelegramPlane>
                        </div>
                        <h2>clean & minimal design</h2>
                        <p>This multipurpose theme is especially created 
                        to be used for different projects.</p>
                    </div>
                    <div className='single-box'>
                        <div className='icon'>
                            <FaBullhorn className="i"></FaBullhorn>
                        </div>
                        <h2>clean & minimal design</h2>
                        <p>This multipurpose theme is especially created 
                        to be used for different projects.</p>
                    </div>
                    

                </div>

            </div>
        </div>
    );
};

export default Service;
import { FaSearchPlus } from "react-icons/fa";
import './home.css'
const Protfolio = () => {
    return (
        <div className="portfolio-section bg-[#f6f9f9] pt-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="portfolio-header">
          <div className='px-4 md:px-0 py-8'>
          <h2 className='text-center text-4xl'>Showcase your work like a pro.</h2>
          <p className='text-center text-md text-[#909090] py-4'>Contact me if you like my work</p>
          </div>
        </div>
        <div className="portfolio-wrapper px-4 md:px-0">
          <div className="single-portfolio1">
            <div className="portfolio-overlay">
              <div className="icon">
                
                <i><FaSearchPlus></FaSearchPlus></i>
              </div>
            </div>
          </div>
          <div className="single-portfolio2">
            <div className="portfolio-overlay">
              <div className="icon">
              <i><FaSearchPlus></FaSearchPlus></i>
              </div>
            </div>
          </div>
          <div className="single-portfolio3">
            <div className="portfolio-overlay">
              <div className="icon">
              <i><FaSearchPlus></FaSearchPlus></i>
              </div>
            </div>
          </div>
          <div className="single-portfolio4">
            <div className="portfolio-overlay">
              <div className="icon">
              <i><FaSearchPlus></FaSearchPlus></i>
              </div>
            </div>
          </div>
          <div className="single-portfolio5">
            <div className="portfolio-overlay">
              <div className="icon">
              <i><FaSearchPlus></FaSearchPlus></i>
              </div>
            </div>
          </div>
          <div className="single-portfolio6">
            <div className="portfolio-overlay">
              <div className="icon">
              <i><FaSearchPlus></FaSearchPlus></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Protfolio;
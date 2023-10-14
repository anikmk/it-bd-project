
import { FaArrowDown } from 'react-icons/fa'
import './home.css'
import PureDesign from './pureDesign';
import Service from './Service';
import Protfolio from './Protfolio';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className='benner-img'>
            <div className='banner-content text-center text-white'>
                <div className='title'>
                <h1 className='text-3xl md:text-7xl font-bold'>STRICT</h1>
                <p className='text-xl mt-9'>STRICT is a responsive theme with a a clean and minimal look.</p>
                </div>
                <div className='banner-contact'>
                <button>Call to action</button>
                <p className='mx-auto icon'>
                    <FaArrowDown></FaArrowDown>
                </p>
                </div>

            </div>
            
        </div>
        <div>
        <PureDesign></PureDesign>
        <Service></Service>
        <Protfolio></Protfolio>
        <Contact></Contact>
        <Footer></Footer>
        </div>
        </div>
        // pure design
        
    );
};

export default Home;
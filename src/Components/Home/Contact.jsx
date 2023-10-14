
import './home.css'



const Contact = () => {
    return (
        <div className='bg-[#2d384c] py-20'>
            <div className='contact max-w-6xl mx-auto'>
                <div className='contact-wrapper'>
                    <div className='contact-desc text-center'>
                        <h2 className='text-4xl md:text-6xl text-white'>Contact With Us</h2>
                        <p className='text-[#999999] mt-2'>We ensure quailty & support</p>

                    </div>

                   <div className='px-4 md:px-0 md:w-1/2 mx-auto pt-12'>
                   <input className='w-full mb-5 p-4 rounded bg-transparent border' type="text" placeholder='Name' /> <br/>
                   <input className='w-full mb-5 p-4 rounded bg-transparent border' type="email" placeholder='Email' /> <br />
                   <textarea placeholder='Message..' className='w-full mb-5 p-4 rounded bg-transparent border' name="" id="" cols="30" rows="10"></textarea>
                   {/* <div className='flex items-center'>
                    <input type="checkbox" name="" id="" />
                    <div className='text-white'>
                    <label className='ml-2'>Subscribe Newsletter</label>
                    <button className='border-send'>Send</button>
                    </div>
                   </div> */}
                   <div className='flex justify-between'>
                    <div className='flex items-center'>
                    <input type="checkbox" name="" id="" />
                    <p className='text-white ml-4'>Subscribe Newsletter</p>

                    </div>
                    <div>
                        <button className='border text-white px-12 py-4 hover:bg-[#15a3f9]'>Send</button>
                    </div>
                   </div>

                   </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
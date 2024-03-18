import Background from '../../public/banner-photo.jpeg'


const Banner = () => {
    return (
        <div>
            <div className=' text-white mt-12 w-[1600px] mx-auto'>
                <div className='flex justify-center items-center min-h-screen rounded-3xl' style={{background: `url(${Background})`}}>

               
                        <div className="text-center">
                            <div className=''>
                            <h1 className="mb-5 leading-normal text-5xl font-bold">Discover an exceptional cooking <br />class tailored for you!</h1>
                            <p className="mb-5 leading-7  text-[#FFF] text-[1.0625rem]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                            </div>

                            <div className='flex justify-center items-center gap-6 mt-10'>
                           <button className="btn btn-primary text-[#150B2B] text-[1.25rem] px-[1.25rem] py-[1.25rem] rounded-[1.875rem] bg-[#0BE58A]">Get Started</button>
                            <button className='btn btn-primary text-[#FFF] text-[1.25rem] px-[1.25rem] py-[1.25rem] rounded-[1.875rem]  border'>Our Feedback</button>
                           </div>
                        </div>
                     

            
                </div>
            </div>
        </div>
    );
};

export default Banner;
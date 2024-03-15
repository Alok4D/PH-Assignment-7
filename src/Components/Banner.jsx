import Background from '../../public/banner-photo.jpeg'

const Banner = () => {
    return (
        <div>
            <div className=' text-white mt-12'>
                <div className='min-h-screen' style={{background: `url(${Background})`}}>

                    <div className="text-center text-neutral-content">
                        <div className="max-w-4xl">
                            <div className='text-center'>
                            <h1 className="mb-5 leading-normal text-5xl font-bold w-[897px]">Discover an exceptional cooking class tailored for you!</h1>
                            <p className="mb-5 leading-7 w-[933px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                            </div>
                           
                           <div className='flex justify-center items-center gap-6 mt-10'>
                           <button className="btn btn-primary text-[#150B2B] text-[20px] px-[20px] py-[20px] rounded-[30px] bg-[#0BE58A]">Get Started</button>
                            <button className='btn btn-primary text-[#eb0f0f] text-[20px] px-[20px] py-[20px] rounded-[30px] bg-[#FFFFFF] border-[1px solid red]'>Our Feedback</button>
                           </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
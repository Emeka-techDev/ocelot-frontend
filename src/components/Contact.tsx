import React from 'react'
import HeaderContainer from './HeaderContainer'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
        <HeaderContainer 
            title="Get In touch with us"
            description="Explore our portfolio of innovative solutions and breakthrough technologies.
                From fintech platforms to e-commerce applications,
                discover how we transform bold ideas into market-ready innovations."
        />

        <div className='grid grid-cols-3 gap-3 bg-black text-white'>
            <div className='col-span-2'>
                <div>
                    <div className='grid grid-cols-2 gap-3'>
                        
                        <div  className='flex flex-col'>
                            <label htmlFor="">First Name</label>
                            <input className="input h-20" type="text" />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor=""> Last Name </label>
                            <input type="text" className='h-20 w-full bg-neutral-800' />
                        </div>

                    </div> 
                    
                    <div  className='flex flex-col'>
                        <label htmlFor="">How may we help you?</label>
                        <input type="text" />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor=""> Description</label>
                        <textarea  name="" id="" rows="4" cols="50"></textarea>
                    </div>


                    <button className='p-4 rounded-lg bg-blue-300 text-white'>Send Message</button>

                </div>

            </div>
            <div>
                <div>
                    <h3> Office </h3>
                    <p> No.6 Isheri street, ebute-meta lagos, nigeria </p>
                </div>
                <div>
                    <h3> Contact </h3>
                    <p> +234 802 810 8892 marketingocelot@gmail.com</p>
                </div>
            </div>

        </div>

        <Footer />
    </div>
  )
}

export default Contact
import React from 'react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
   <section className='flex justify-center items-center gap-3 bg-black text-white custom-container '>
		<motion.div 
			initial={{ opacity: 0 , y: 50}}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}	
			className='flex justify-center items-center '>
				<div>
						<div className='grid grid-cols-3 gap-4 mt-10 mb-20'>
							<div className=''>
								<div>
									<img src="https://ocelotgroup.org/_next/static/media/ocelot_logo.ca0992e6.png" alt="" />
								</div>
								<p>
									Transforming bold ideas into breakthrough solutions. We combine strategic thinking with
									flawless execution to turn ambitious visions into market-ready innovations.


								</p>
							</div>

							<div>
								<h3>Quick Links</h3>
								<ul>
									<li>About</li>
									<li>Services</li>
									<li>Projects</li>
									<li>Contact</li>
								</ul>
							</div>
							<div>
								<h3>Quick Links</h3>
								<ul>
									<li>About</li>
									<li>Services</li>
									<li>Projects</li>
									<li>Contact</li>
								</ul>
							</div>
						</div>

						<p className='text-slate-500 text-center mb-20'>© 2025 Ocelot. All rights reserved.</p>
					</div>			

				</motion.div>
				

						
			</section>
  )
}

export default Footer
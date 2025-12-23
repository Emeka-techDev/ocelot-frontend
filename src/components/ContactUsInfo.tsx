import { motion } from "motion/react";
import { div } from "motion/react-client";

const ContactUsInfo = () => {
  return (
	<div
		className="flex justify-center items-center font-primary"
	>

		<motion.section 
			initial={{ opacity: 0 , y: 50}}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className='custom-container mb-10'>
				<div className='flex justify-center items-center custom-container'>
					<div className="flex flex-col gap-4 mr-10 md:mr-0">
						<h1 className="max-w-[400px] font-bold text-[32px] md:text-[54] leading-[55px] lg:leading-[115px] text-black font-primary text-center mx-auto" >
							Ready to turn your
							<span className="text-primary-main"> vision </span>
							into reality?
						</h1>

					
						<button className='flex gap-2 items-center contact mt-5  cursor-pointer'>
							<span>Contact Us</span>
							<span className='p-2 rounded-[50%] bg-gray-300 icon-translate'>
								<svg width={18} height={18} viewBox="0 0 18 18" fill="none" className="h-3.5 w-3.5 rotate-180" xmlns="http://www.w3.org/2000/svg"><path d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>											
							</span>
						</button>

					</div>
					

					
			</div>
		</motion.section>
	</div>
  )
}

export default ContactUsInfo
import { motion } from "motion/react";
import { ThreeJSBackground } from './ThreeJSBackground';

const HeaderContainer = ({title, description, modelPath}: { title: string, description: string, modelPath: string }) => {
	return (
		<section 
			className='bg-black' >
				<div className="">
					<div className="relative">
						{/* Three.js Background */}
						<ThreeJSBackground 
							modelPath={modelPath}
						/>

					</div>
					
					<motion.div 
						initial={{ opacity: 0 , y : 50}}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }} 
						className="-translate-y-5/4 md:-translate-y-1/3 flex flex-col md:h-[500px] gap-5 custom-container w-full">
						<h2 className='text-xl text-[44px] md:text-[60px] font-bold lg:text-[95px] leading-[50px] md:leading-[64px] lg:leading-[95px] text-white md:text-left font-primary'>{title}</h2>
						<div>

							<p className='text-neutral-200 md:leading-10 font-primary tracking-wide md:tracking-tight text-[12px] md:text-[24px]  lg:text-[32px] max-w-[900px]'>{description}</p>
						</div>

					</motion.div>

				</div>
		</section>
	)
}

export default HeaderContainer
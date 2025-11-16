import React from 'react';
import { motion } from "motion/react";

const HeaderContainer = ({title, description}: { title: string, description: string }) => {
	return (
		<section 
			className='bg-black flex justify-center items-center border-none  outline-0  custom-container ' >
			<motion.div 
				initial={{ opacity: 0 , y : 50}}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }} 
				className='mt-20 mb-40'>
				<h2 className='text-white text-5xl'>{title}</h2>
				<p className='text-white text-2xl max-w-400'>{description}</p>

			</motion.div>
		</section>
	)
}

export default HeaderContainer
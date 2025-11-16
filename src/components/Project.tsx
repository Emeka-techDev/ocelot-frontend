import React from 'react'
import HeaderContainer from './HeaderContainer'
import Footer from './Footer'

const Project = () => {
  return (
    <div>
        <HeaderContainer 
            title="Our Projects"
            description="Explore our portfolio of innovative solutions and breakthrough technologies.
                From fintech platforms to e-commerce applications,
                discover how we transform bold ideas into market-ready innovations."
        />

        <div className='h-100 w-full'>
            Projects
        </div>

        <Footer />
    </div>
  )
}

export default Project
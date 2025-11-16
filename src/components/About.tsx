import React from 'react'
import HeaderContainer from './HeaderContainer'
import ContactUsInfo from './ContactUsInfo'
import Footer from './Footer'

const About: React.FC = () => {
  return (
    <div>
        <HeaderContainer 
                title="Transforming bold ideas into breakthrough solutions"
                description="Partner with us to bring your vision to life. 
                We combine strategic thinking with flawless execution, delivering end-to-end solutions that drive real impact. From concept to launch and beyond, we're your trusted technology partner committed to turning ambitious ideas into market-ready innovations."

            />

        <div className='flex justify-center items-center  custom-container'>
            <div>
                <section>
                    <h1 className="text-left mt-7 font-medium font-primary text-black text-[38px] 480:text-[60px] 640:text-[91px] leading-[50px] 480:leading-[64px] 640:leading-[95px] w-3/4 opacity-100 transform-none">Our approach</h1>

                    <div className='grid grid-cols-3 gap-3 mt-7'>
                        <div>
                            <h2 className='text-2xl font-semibold font-primary'>User-Centric Design</h2>
                            <p className='mt-3 text-neutral-600 font-medium 768:text-[18px]'>
                                Every pixel, interaction, and feature is crafted with the end user in mind. We create intuitive experiences that feel natural and effortless.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold font-primary'>Cutting-Edge Tech</h2>
                            <p className='mt-3 text-neutral-600 font-medium 768:text-[18px]'>
                                We leverage the latest technologies and frameworks to build scalable, performant solutions that stand the test of time and growth.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold font-primary'>Rapid Iteration</h2>
                            <p className='mt-3 text-neutral-600 font-medium 768:text-[18px]'>
                                Speed without compromise. Our agile development process delivers value quickly while maintaining the highest quality standards.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold font-primary'>Data-Driven Decisions</h2>
                            <p className='mt-3 text-neutral-600 font-medium 768:text-[18px]'>
                            We let analytics and user behavior guide our product decisions, ensuring every feature adds real value to your business.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold font-primary'>Future-Ready</h2>
                            <p className='mt-3 text-neutral-600 font-medium 768:text-[18px]'>
                                Building for tomorrow. Our solutions are designed to evolve with your business needs and emerging technologies.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold font-primary'>End-to-End Excellence</h2>
                            <p className='mt-3 text-left text-neutral-600 font-medium 768:text-[18px]'>
                            From concept to deployment and beyond, we deliver comprehensive solutions that work seamlessly across every touchpoint.
                                Meet the team 
                            </p>
                        </div>

                        
                    </div>
                </section> 

                <section className='font-primary'>
                    <div className='mt-20'>
                        <h1 className='text-[70px] font-medium opacity-90'>Meet The Team</h1>
                        <div className='grid grid-cols-3 gap-3'>
                            <div>
                                <img alt="market_image" fetchpriority="high" width="1240" height="1315" decoding="async" data-nimg="1" className="object-cover rounded-2xl bg-neutral-100 h-full max-h-[314px]  960:max-h-[350px]" src="https://ocelotgroup.org/_next/static/media/ayeni.03312b52.jpeg" style={{color: "transparent"}}></img>

                                {/* <img className='aspect-2' src="https://ocelotgroup.org/_next/static/media/ayeni.03312b52.jpeg" alt="CEO Image" /> */}
                                <div><strong>Ayeni Ayobami</strong></div>
                                <div>CEO</div>
                                <p className='text-neutral-600 font-medium'>Visionary leader and brilliant strategist with M.Sc. in Computer Science & Data Analysis. With 8+ years in mobile/web development and backend frameworks, Ayobami's exceptional leadership drives Ocelot's mission to transform bold ideas into reality.</p>
                            </div>
                            <div>
                                <img alt="market_image" fetchpriority="high" width="1240" height="1315" decoding="async" data-nimg="1" className="object-cover rounded-2xl bg-neutral-100 h-full max-h-[314px]  960:max-h-[350px]" src="https://ocelotgroup.org/_next/static/media/johnademola.f6baa6e4.jpeg" style={{color: "transparent"}}></img>

                                {/* <img className='aspect-2' src="https://ocelotgroup.org/_next/static/media/ayeni.03312b52.jpeg" alt="CEO Image" /> */}
                                <div><strong>John Ademola</strong></div>
                                <div>Chief Technology Officer (CTO)</div>
                                <p className='text-neutral-600 font-medium'>
                                    Pioneering full-stack fintech and software engineer with 9+ years of experience. Bachelor's in Computer Science, currently pursuing Master's in Artificial Intelligence. Has led impactful products across finance, government, and healthcare technology.
                                </p>
                            </div>
                            <div>
                                <img alt="market_image" fetchpriority="high" width="1240" height="1315" decoding="async" data-nimg="1" className="object-cover rounded-2xl bg-neutral-100 h-full max-h-[314px]  960:max-h-[350px]" src="https://ocelotgroup.org/_next/static/media/joy.dfaa8d82.jpg" style={{color: "transparent"}}></img>

                                {/* <img className='aspect-2' src="https://ocelotgroup.org/_next/static/media/ayeni.03312b52.jpeg" alt="CEO Image" /> */}
                                <div><strong>Joy Samuel</strong></div>
                                <div>UI/UX & Digital Designer</div>
                                <p className='text-neutral-600 font-medium'>Passionate UI/UX and digital designer focused on creating intuitive experiences that don't just look good—but feel right. With a strong foundation in design thinking and human-centered design, she transforms complex problems into simple, beautiful solutions.</p>
                            </div>
                            <div>
                                <img alt="market_image" fetchpriority="high" width="1240" height="1315" decoding="async" data-nimg="1" className="object-cover rounded-2xl bg-neutral-100 h-full max-h-[314px]  960:max-h-[350px]" src="https://ocelotgroup.org/_next/static/media/christo.22edf931.jpeg" style={{color: "transparent"}}></img>

                                {/* <img className='aspect-2' src="https://ocelotgroup.org/_next/static/media/ayeni.03312b52.jpeg" alt="CEO Image" /> */}
                                <div><strong>Christopher Ojeba</strong></div>
                                <div>COO</div>
                                <p className='text-neutral-600 font-medium'>Product Manager and business analyst with 6+ years delivering solutions in the FinTech, HealthTech and Hospitality industry that have scaled across Nigeria, Ghana and East Africa.</p>
                            </div>
                            <div>
                                <img alt="market_image" fetchpriority="high" width="1240" height="1315" decoding="async" data-nimg="1" className="object-cover rounded-2xl bg-neutral-100 h-full max-h-[314px]  960:max-h-[350px]" src="https://ocelotgroup.org/_next/static/media/kevin.ce51c4bf.jpg" style={{color: "transparent"}}></img>

                                {/* <img className='aspect-2' src="https://ocelotgroup.org/_next/static/media/ayeni.03312b52.jpeg" alt="CEO Image" /> */}
                                <div><strong>Kevin Akaluzia</strong></div>
                                <div>Product Manager</div>
                                <p className='text-neutral-600 font-medium'>
                                    Product Manager with 5+ years leading cross-functional teams across healthtech, fintech, and consumer products. Expert in transforming ideas into intuitive, user-centered digital solutions. Passionate about building scalable products that simplify lives.
                                </p>
                            </div>
                            <div>
                                <img alt="market_image" fetchpriority="high" width="1240" height="1315" decoding="async" data-nimg="1" className="object-cover rounded-2xl bg-neutral-100 h-full max-h-[314px]  960:max-h-[350px]" src="https://ocelotgroup.org/_next/static/media/chika.b1415669.jpeg" style={{color: "transparent"}}></img>

                                {/* <img className='aspect-2' src="https://ocelotgroup.org/_next/static/media/ayeni.03312b52.jpeg" alt="CEO Image" /> */}
                                <div><strong>Ebuka Achugo</strong></div>
                                <div>Chief Engineer</div>
                                <p className='text-neutral-600 font-medium'>
                                    Technical leader with 3+ years architecting scalable solutions across frontend web and mobile frameworks. Drives engineering excellence while managing and mentoring high-performing development teams.                               
                                </p>
                            </div>
                            

                        </div>
                    </div>
                </section>

                
            </div>
            
        </div>

        <ContactUsInfo />
        <Footer />
    </div>
  )
}

export default About
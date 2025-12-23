import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* NAVBAR (always visible) */}
      <div className="fixed flex items-center top-0 left-0 z-50 h-10 md:h-20 bg-black w-full">
        <div className="flex items-center justify-between w-full custom-container">
            <Link to="/">
				<img
					src="https://ocelotgroup.org/_next/static/media/ocelot_logo.ca0992e6.png"
					alt="logo"
					className="h-7"
				/>
			</Link>

			{/* MOBILE ICON */}
			<div className="lg:hidden z-100">
				{isNavOpen ? (
					<button onClick={() => setIsNavOpen(false)} className="mr-2">
					<svg
						width="28"
						height="28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="text-white"
					>
						<path
						d="M6 6l12 12M18 6L6 18"
						stroke="#fff"
						strokeWidth="1.5"
						strokeLinecap="round"
						/>
					</svg>
					</button>
				) : (
					<button onClick={() => setIsNavOpen(true)} className="mr-2">
					<svg
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						className="text-white"
					>
						<path
						d="M4 7h16M4 17h16"
						stroke="#fff"
						strokeWidth="1.5"
						strokeLinecap="round"
						/>
					</svg>
					</button>
				)}
			</div>

			{/* DESKTOP MENU */}
			<div className="hidden lg:flex items-center gap-8 text-[10px] font-semibold text-white">
				<Link className="hover:text-blue-400" to="/about">About Us</Link>
				<Link className="hover:text-blue-400" to="/services">Services</Link>
				<Link className="hover:text-blue-400" to="/projects">Projects</Link>

				<Link to="/contact" className="flex items-center rounded-lg text-white gap-2 btn-blue px-3 py-1 font-semibold">
					<div> Contact us </div>
					<span className="group-hover:translate-x-1 transition-transform duration-300 my-auto">
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							className="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
							d="M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							></path>
						</svg>
					</span>
				</Link>
			</div>
		</div>

      	{/* MOBILE OVERLAY MENU */}
      
        <div
            className={`
                flex lg:hidden fixed top-0 left-0  bg-black z-10 
                overflow-hidden  flex-col px-10 pt-28
                transition-all duration-1000
                ${isNavOpen ? "h-screen" : "h-0 opacity-0"}
            `}
        >
          <div className="flex flex-col gap-6 text-white text-2xl">
            <Link onClick={() => setIsNavOpen(false)} to="/about">About Us</Link>
            <Link onClick={() => setIsNavOpen(false)} to="/services">Services</Link>
            <Link onClick={() => setIsNavOpen(false)} to="/projects">Projects</Link>
          </div>

          {/* CONTACT BUTTON AT BOTTOM */}
          <div className="mt-auto mb-10">
            <Link
              to="/contact"
              onClick={() => setIsNavOpen(false)}
              className="block w-full text-center bg-blue-300 text-black py-3 rounded-lg text-xl font-semibold"
            >
              Contact us
            </Link>
          </div>
        </div>
    </div>
        
    </>
  );
};

export default Navbar;

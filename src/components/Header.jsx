import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';

function Header() {
    const[isOpen,setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const togglerBtn = () =>{
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    return (
        <div>
            <nav className=' bg-[#aca193]'>
                <div className='px-8 py-6 flex justify-between '>
                    <div>
                        <span className='uppercase text-lg font-semibold text-white'>purespace</span>
                    </div>
                    <div className='uppercase font-semibold text-xs bg-white px-2 pt-1.5 rounded-lg hidden flex flex-col md:flex-row md:block'>
                        <Link className='px-3 text-[#aca193] py-0.5 hover:bg-[#c9beaf] hover:text-white rounded-md active:bg-[#c3bcb4] focus:bg-[#aca193] focus:text-white' aria-current='true' to='/'>Home</Link>
                        <Link className='px-3 text-[#aca193] py-0.5 hover:bg-[#c9beaf] hover:text-white rounded-md active:bg-[#c3bcb4] focus:bg-[#aca193] focus:text-white' to='/contact'>Contact</Link>
                        <Link className='px-3 text-[#aca193] py-0.5 hover:bg-[#c9beaf] hover:text-white rounded-md active:bg-[#c3bcb4] focus:bg-[#aca193] focus:text-white' to='/about'>About</Link>
                    </div>
                    <div className='hidden md:block'>
                        <span className='mx-3'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                        <span className='mx-3'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                    </div>
                    <button className='md:hidden' onClick={togglerBtn}>
                     {isOpen ? '' : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
                
                <div ref={menuRef} className={`md:hidden fixed top-[5.2rem] right-0 h-screen w-48 bg-[#aca193] text-white mt-[-8px] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav className="flex flex-col space-y-4 uppercase font-semibold text-sm  mx-8 mt-8 ">
                        <Link className='px-3 text-[#fff] py-0.5 hover:bg-[#c9beaf] hover:text-white rounded-md active:bg-[#c3bcb4] focus:bg-[#aca193] focus:text-white'  onClick={() => setIsOpen(false)} to='/'>Home</Link>
                        <Link className='px-3 text-[#fff] py-0.5 hover:bg-[#c9beaf] hover:text-white rounded-md active:bg-[#c3bcb4] focus:bg-[#aca193] focus:text-white'  onClick={() => setIsOpen(false)} to='/about'>About</Link>
                        <Link className='px-3 text-[#fff] py-0.5 hover:bg-[#c9beaf] hover:text-white rounded-md active:bg-[#c3bcb4] focus:bg-[#aca193] focus:text-white'  onClick={() => setIsOpen(false)} to='/contact'>Contact</Link>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Header
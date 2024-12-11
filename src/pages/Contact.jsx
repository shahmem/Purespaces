import Header from '../components/Header'
import img from '../assets/img/map.png'
import Footer from '../components/footer'
function Contact() {
  return (
  <>
  <Header/>
    <div className='flex justify-center'>
      <div className='py-8'>
        <div>
          <p className='text-center font-serif text-4xl  py-14'>Want to hire us?</p>
        </div>
        <form action="/submit" className=' grid grid-cols-2 w-[80vw]  gap-4 py-6'>
        <label htmlFor="" className='col-span-2'>Name <span className='text-zinc-500 text-sm'>(required)</span></label>
        <div className='flex flex-col col-span-2 md:col-span-1'>
          <label htmlFor="">First Name</label>
        <input className='border-2' type="text" />
        </div>
        <div className='flex flex-col col-span-2 md:col-span-1'>
          <label htmlFor="">Last Name</label>
          <input className='border-2' type="text" />
        </div>
        <label className='col-span-2' htmlFor="">Email Address <span className='text-zinc-500 text-sm'>(required)</span></label>
        <input className='border-2 col-span-2' type="text" />
        <label className='col-span-2' htmlFor="">Phone Number <span className='text-zinc-500 text-sm'>(required)</span></label>
        <input className='border-2 col-span-2' type="text" />
        <label className='col-span-2' htmlFor="">City<span className='text-zinc-500 text-sm'>(required)</span></label>
        <label className='col-span-2' htmlFor=""><span className='text-zinc-500 text-sm'>Location of the project</span></label>
        <input className='border-2 col-span-2' type="text" />
        <label className='col-span-2' htmlFor="">Timeline<span className='text-zinc-500 text-sm'>(required)</span></label>
        <label className='col-span-2' htmlFor=""><span className='text-zinc-500 text-sm'>Preferred project completion date</span></label>
        <input className='border-2 col-span-2' type="text" />
        <label className='col-span-2' htmlFor="">Project size<span className='text-zinc-500 text-sm'>(required)</span></label>
        <label className='col-span-2' htmlFor=""><span className='text-zinc-500 text-sm'>Please enter the carpet area </span></label>
        <input className='border-2 col-span-2' type="text" />
        <label className='col-span-2' htmlFor="">Estimated project budget </label>
        <input className='border-2 col-span-2' type="text" />
        <label className='col-span-2' htmlFor="">Tell us a bit about your project<span className='text-zinc-500 text-sm'>(Optional)</span></label>
        <input className='border-2 col-span-2 h-[5rem]' type="text" />
        </form>
        <button type='button' className='text-white bg-black py-1 px-5 my-6'>Submit</button>
        
      </div>
    </div> 
    <div className='bg-[#d5d1cd] py-12 flex justify-center'>
      <div className='flex flex-col gap-8 max-w-[90vw] md:max-w-[80vw]'>
        <p className='uppercase font-mono tracking-[0.2rem] text-xs pt-12'>Contact us</p>
        <p className='font-serif text-4xl md:text-5xl'>PureSpaces</p>
        <p className='md:text-lg'>#477, 11th Cross, Sadashivnagar, Bangalore 560080 <br />+91 98862 12000</p>
        <a href="#" className='md:text-lg underline'>contact@purespaces.in</a>
        <img src={img} alt="" />
      </div>
    </div>
    <Footer/>
  </>
   
  )
}

export default Contact
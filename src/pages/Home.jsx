import Header from '../components/Header'
import "../App.css"
import bgimg from '../assets/img/img12.jpg'
import arrow from '../assets/img/icon-arrow.png'
import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img8.jpg'
import img3 from '../assets/img/img13.jpg'
import img4 from '../assets/img/img9.jpg'
import img5 from '../assets/img/img10.jpg'
import Footer from '../components/footer'
function Home() {
  const bgStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <Header />
      <div className='flex flex-col md:flex-row'>
        <div style={bgStyle} className='flex flex-col gap-3 justify-end pb-8 pl-6 h-[90vh] lg:w-[61%] '>
          <h1 className='text-white text-6xl text-shadow'>PureSpace Luxe Recliner</h1>
          <h3 className='text-white text-2xl text-shadow'>Seek, elegant comfort for your modern living space.</h3>
          <div className='flex'>
            <a href="#" className='bg-white py-2 px-3 rounded-2xl text-xs font-semibold'>View Product</a>
            <a href="#"><img className='bg-white rounded-full p-1.5 size-8 mx-1' src={arrow} alt="" /></a>
          </div>
        </div>
        <div className='flex flex-col justify-between bg-slate-100  lg:w-[39%] px-4 py-6'>
          <h1 className='capitalize text-4xl leading-[3.2rem] md:max-w-[77%]'>Discover the essence of minimalist furniture design and style</h1>
          <ul className='flex gap-1 list-none mt-5'>
            <li className='rounded-3xl border-[1px] border-black px-1.5 py-0.5 text-black md:w-max text-xs'>Exclusive</li>
            <li className='rounded-3xl border-[1px] border-slate-300 px-1.5 py-0.5 text-slate-300 md:w-max text-xs'>Limited Edition</li>
            <li className='rounded-3xl border-[1px] border-slate-300 px-1.5 py-0.5 text-slate-300 md:w-max text-xs'>Hot Picks</li>
            <li className='rounded-3xl border-[1px] border-slate-300 px-1.5 py-0.5 text-slate-300 md:w-max text-xs'>Must-have</li>
          </ul>
          <div className='flex flex-col md:flex-row gap-3 bg-white rounded-3xl p-4 mt-3'>
            <div className='md:w-1/2 flex gap-2 flex-col justify-between'>
              <span className='rounded-3xl px-2 py-0.5 bg-slate-200 w-max text-xs'>Exclusive</span>
              <h3 className='text-xl font-semibold'>PureSpace Focus Duo</h3>
              <span className='text-sm text-slate-400'>Sleek minimalist design for ultimate productivity and comfort.</span>
              <img src={arrow} className='bg-slate-200 rounded-full p-2 size-7' alt="" />
            </div>
            <div className='md:w-1/2'>
              <img src={img1} className='rounded-2xl' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='py-4'>
        <div className='pt-10 flex justify-center'>
          <span className='uppercase font-mono text-sm tracking-[0.3rem] font-bold'>featured works</span>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-col gap-4 md:flex-row md:justify-center py-7'>
            <div className='md:w-1/4 w-72 mt-8'>
              <img className='object-cover h-72 w-72 ' src={img2} alt="" />
              <h3 className='capitalize text-3xl font-serif my-3'>for seasons model unit</h3>
              <p className='text-sm max-w-[87%]'>The Four Seasons Model Unit exudes understated luxury with bouts of eclecticism.</p>
            </div>
            <div className='md:w-1/4 w-72 mt-8'>
              <img className='object-cover  h-72 w-72 ' src={img3} alt="" />
              <h3 className='capitalize text-3xl font-serif my-3'>Bungalow in Defence Colony</h3>
              <p className='text-sm max-w-[87%]'>Brick walls and high ceilings are the governing design factors of this charming Bungalow that sits perched on a prominent street in Defence Colony, Indiranagar.</p>
            </div>
            <div className='md:w-1/4 w-72 mt-8'>
              <img className='object-cover  h-72 w-72 ' src={img4} alt="" />
              <h3 className='capitalize text-3xl font-serif my-3'>Villa in Assagao, Goa</h3>
              <p className='text-sm max-w-[87%]'>A go-to holiday home that is rendered to feel airy and calm.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-[#d5d1cd] flex justify-center'>
      <div className=' py-16 md:py-24 flex gap-8 md:gap-24 flex-col md:flex-row'>
        <div className='flex justify-center'>
          <img className='object-cover h-80 w-72 md:h-96 w-80' src={img5} alt="" />
        </div>
        <div className='flex flex-col gap-10'>
          <h1 className='text-4xl font-serif'>Hello!</h1>
          <p className='text-lg w-72 md:auto'>We are an independent interior design studio that is here to enrich your space through fresh interiors and uniquely tailored design.</p>
          <a className='text-white w-max bg-black px-4 py-2' href="#">Learn More</a>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  
  )
}

export default Home
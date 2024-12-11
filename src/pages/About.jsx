import Footer from '../components/footer'
import Header from '../components/Header'

function About() {
  return (
    <>
    <Header/>
        <div className=' bg-[#aca193] flex justify-center py-6'>
            <p className='md:max-w-[70%] max-w-[80%] text-lg font-serif text-white'>PureSpaces draws on a keen sense of creative expression to bring to life beautifully balanced spaces and above all, pure design that aims to elevate the experience of a space.</p>
        </div>
        <div className='flex flex-col md:flex-row py-24 gap-12 md:gap-32  md:px-32'>
          <div className='capitalize font-serif text-4xl text-center md:leading-[3.5rem]'>
            who we are
          </div>
          <div className='flex justify-center md:block'>
            <p className='font-mono max-w-[80%] text-justify md:leading-[2.2rem]'>Our driven team, led by the inspiring founder Krishna Morzaria, is equipped to employ a bespoke approach for every project. A combination of refinement, perfection and mastery that results in spaces with enriched experiences. The studio embraces a holistic approach keeping in mind the desired design solution, alongside working closely with client requirements at every step. The project profile spans over residential, commercial and the hospitality sector.</p>
          </div>
        </div>
        <div className='bg-zinc-300 flex justify-center py-8'>
          <div className='max-w-[80%] flex flex-col gap-16'>
            <p className='uppercase font-mono tracking-[0.2rem] text-xs pt-16'>What our clients have to say</p>
            <p className='capitalize font-sans tracking-[0.1rem] text-justify'>Pure Spaces, with a talented proprietor in Krishna Morzaria, presents a fresh perspective to designing interior spaces. Their ideas are contemporary, but allow great synergy with traditional Indian values. Their research on global trends allow for designs to constantly adapt and form the perfect blend for the Indian palette.</p>
            <div className='pb-9'>
              <span className='font-bold'>Mayank Ruia</span><br />
              <span>CEO, MAIA Estates LLP</span>
            </div>
          </div>
        </div>
        <Footer/>
    </>
    
  )
}

export default About
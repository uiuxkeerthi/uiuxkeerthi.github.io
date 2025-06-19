import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-20">
        <div className='items-center justify-self-center'>
          <Image
            alt={'title'}
            src={`${process.env.BASE_PATH || ''}/static/images/profile-about-page.jpg`}
            className=""
            width={400}
            height={600}
          />
        </div>
        <div className='mt-20 md:mt-0 lg:mt-0 xl:mt-0'>
          <div className='text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold'>👋 Hi there, I'm Keerthi,</div>
          <div className='mt-8 md:mt-14 lg:mt-14 xl:mt-14 leading-8'>A former recruiter turned passionate UI/UX designer, blending creativity with a deep understanding of people’s needs. My career shift wasn’t just a leap, it was a step toward my dream of crafting user-centered designs that solve real problems.</div>
          <div className='mt-8 md:mt-14 lg:mt-14 xl:mt-14 leading-8'>With a solid foundation in recruitment, I’ve honed the ability to listen, empathize, and connect with diverse individuals. Now, I bring those skills to the design world, creating seamless digital experiences that not only look great but also work beautifully.</div>
          <div className='mt-8 md:mt-14 lg:mt-14 xl:mt-14 leading-8'>My design process combines purpose and creativity, fueled by tools like Figma, Webflow, and a love for problem-solving. From ideating wireframes to crafting high-fidelity prototypes, I thrive on turning challenges into meaningful solutions.</div>
          <div className='mt-8 md:mt-14 lg:mt-14 xl:mt-14 leading-8'>Design for me is more than just work—it’s a way to make life easier, one pixel at a time. Ready to collaborate? Let’s bring your vision to life and create something extraordinary together!</div>
        </div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-20">
        <div>
          <div className='text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold'>When I’m Not Designing...</div>
          <div className='mt-10'>You’ll likely find me:</div>
          <div className='mt-10'><div className='text-md font-bold inline-flex'>📸 Exploring the World Through a Lens:</div> Capturing the essence of everyday life, from candid smiles to breathtaking landscapes. Photography lets me see the world from a unique perspective, inspiring creativity in my designs.</div>
          <div className='mt-10'><div className='text-md font-bold inline-flex'>🌳 Recharging in Nature or Cozy Corners:</div> Whether it’s a serene walk through the woods or unwinding at a quaint coffee shop, these moments fuel my imagination and keep me grounded.</div>
        </div>
        <div className='items-center mt-20'>
          <div className="relative group w-64 h-64">
            <Image
              alt={'title'}
              src={`${process.env.BASE_PATH || ''}/static/images/salzburg.jpg`}
              className="absolute -rotate-15 top-0 left-0 w-full h-full object-cover shadow-2xl group-hover:-rotate-20 group-hover:top-10 group-hover:-left-6"
              width={480}
              height={640}
            />
            <Image
              alt={'title'}
              src={`${process.env.BASE_PATH || ''}/static/images/eisbach.jpg`}
              className="absolute rotate-15 -top-12 left-48 w-full h-full object-cover shadow-xl group-hover:rotate-20 group-hover:-top-16 group-hover:left-54"
              width={480}
              height={640}
            />
          </div>
        </div>
      </div>

      <section>
        <div className="container flex flex-col items-start lg:flex-row my-12 lg:my-24">
          <div className="flex flex-col w-full xl:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12">
            <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">Work Experience</p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky self-center">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-orange-500 absolute h-full border"
                  style={{ right: '50%', border: '2px solid #F8875E', borderRadius: '1%' }}></div>
                <div className="border-2-2 border-orange-500 absolute h-full border"
                  style={{ left: '50%', border: '2px solid #F8875E', borderRadius: '1%;' }}></div>

                <div className="mb-4 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-orange-500">Mar 2023 – Present</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Freelance UI/UX Designer</h4>
                  </div>
                </div>

                <div className="mb-4 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-orange-500">Feb 2020 – Feb 2023</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Career Transition</h4>
                  </div>
                </div>

                <div className="mb-4 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-orange-500">Jan 2018 – Jan 2020</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Sr. Recruiter</h4>
                  </div>
                </div>

                <div className="mb-4 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-orange-500">Dec 2016 – Dec 2017</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Security Verification Specialist</h4>
                  </div>
                </div>

                <div className="mb-4 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-orange-500">Jun 2014 – Jun 2015</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Customer Service Representative</h4>
                  </div>
                </div>

                <div className="mb-4 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-orange-500">Nov 2011 – May 2014</p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Talent Sourcer</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col items-start lg:flex-row my-12 lg:my-24">
          <div className="flex flex-col w-full xl:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12">
            <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">Education</p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky self-center">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-orange-500 absolute h-full border"
                  style={{ right: '50%', border: '2px solid #F8875E', borderRadius: '1%' }}></div>
                <div className="border-2-2 border-orange-500 absolute h-full border"
                  style={{ left: '50%', border: '2px solid #F8875E', borderRadius: '1%;' }}></div>

                <div className="mb-4 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-orange-500">June 2024 - Oct 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Certification Course in UI/UX Design - Cognico</h4>
                  </div>
                </div>

                <div className="mb-4 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-orange-500">2009 – 2011</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Jawaharlal Nehru Technological University (JNTU) - MBA</h4>
                  </div>
                </div>

                <div className="mb-4 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-orange-500">2006 – 2009</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Osmania University - Bachelor of Science - Clinical Nutrition & Dietetic</h4>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12">
            <p className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">Languages</p>
          </div>
          <div>
            <ol>
              <li>English - Fluent</li>
              <li>German - A2 (Elementary)</li>
            </ol>
          </div>
        </div>
      </section>

    </>
  )
}

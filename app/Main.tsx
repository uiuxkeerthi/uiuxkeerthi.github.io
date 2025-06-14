import Canva from '@/data/canva.svg';
import ChatGPT from '@/data/chatgpt.svg';
import Figma from '@/data/figma.svg'
import Framer from '@/data/framer.svg';
import Miro from '@/data/miro.svg';
import Notion from '@/data/notion.svg';
import Image from '@/components/Image'
import Typography from '@/components/Typography'

const designApproaches = [
  {
    subtitle: '(01)',
    title: 'Discovery',
    description: "The first step is all about understanding your business, your audience, and your goals. I dive deep into your industry to identify the challenges and opportunities that will shape the design."
  },
  {
    subtitle: '(02)',
    title: 'Strategy',
    description: "Next, we’ll create a clear plan to meet your objectives, mapping out user journeys and defining how the design will drive your business forward."
  },
  {
    subtitle: '(03)',
    title: 'Wireframe',
    description: "I’ll sketch the foundation of your project, focusing on functionality and user flow to ensure a seamless experience."
  },
  {
    subtitle: '(04)',
    title: 'Design',
    description: "Here’s where the magic happens—I’ll craft visually stunning, user-centered designs that align perfectly with your brand and audience."
  },
  {
    subtitle: '(05)',
    title: 'Build',
    description: "Once the designs are finalized, I’ll collaborate with developers to bring the project to life, ensuring it works beautifully across all platforms."
  },
  {
    subtitle: '(06)',
    title: 'Deliver',
    description: "Finally, I’ll deliver all the assets, documentation, and guidelines—ready for launch and optimized for success, all on time and within budget."
  },
]

const stacks = [
  {
    icon: <Miro />,
    title: 'Miro',
    description: 'Brainstorming & Wireframing',
    backgroundColor: '#FAD4C0',
  },
  {
    icon: <Figma />,
    title: 'Figma',
    description: 'Designing Tool',
    backgroundColor: '#B7E4C7',
  },
  {
    icon: <Notion />,
    title: 'Notion',
    description: 'Project management & Documentation',
    backgroundColor: '#D6CDE8',
  },
  {
    icon: < Framer />,
    title: 'Framer',
    description: 'Website Designing',
    backgroundColor: '#AEE8FF',
  },
  {
    icon: < Canva />,
    title: 'Canva',
    description: 'Designing Tool',
    backgroundColor: '#FFF3B0',
  },
  {
    icon: < ChatGPT />,
    title: 'ChatGPT',
    description: 'Ideation and Content Generation',
    backgroundColor: '#FFCDD2',
  },
]

export default function Home({ posts }) {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-20">
        <div className='order-2 md:order-1'>
          <a href="#" className="max-w-sm py-2 px-4 border border-orange-400 rounded-lg shadow-sm">
            <div className='inline-block'>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
            </div>
            <span className='pl-4'>Available for Work</span>
          </a>

          <div className='mt-16'>
            <Typography>
              Hi, I’m Keerthi, a UI/UX Designer |
              Passionate about User-Centered
              Design!
            </Typography>
          </div>

          <div className='text-3xl mt-16 leading-12'>
            I create <span className="items-center rounded-full bg-orange-400 font-bold px-2.5 py-1">clean</span> and <span className="items-center rounded-full bg-orange-400 font-bold px-2.5 py-1">user-friendly</span> designs to enhance experiences.
          </div>

          <div className="mt-16">
            <button className="shadow-sm relative px-6 py-3 font-medium text-lg overflow-hidden group"
              style={{ backgroundColor: '#FFE1D7' }}>
              {/* <span className="absolute inset-0 bg-gradient-to-br from-white to-orange-500 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span> */}
              <span className="relative z-10 text-2xl">View Portfolio</span>
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 justify-self-center">
          <Image
            alt={'title'}
            src={`${process.env.BASE_PATH || ''}/static/images/herosection-image.jpg`}
            className="object-cover object-center md:h-36 lg:h-48 min-h-fit"
            width={480}
            height={640}
          />
        </div>
      </div>

      <div>
        <div className='mt-40 col-span-12 relative'>
          <Typography>My Approach to Design</Typography>
          {/* <div className="absolute bottom-2 left-0 w-full h-1 bg-orange-500"></div> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-16">
          {designApproaches && designApproaches.map((item, idx) => {
            return (
              <div key={idx} className='p-4 hover:bg-gray-50 hover:rounded-xl'>
                <div>{item.subtitle}</div>
                <div className='text-xl font-bold mt-4'>{item.title}</div>
                <div className='mt-4 text-sm'>{item.description}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="-mt-12 mb-12 md:mb-24 md:mt-0">
        <div className="content-wrapper">
          <div className="flex items-center justify-center py-8">
            <blockquote className="flex gap-2 pt-2 text-3xl text-slate-500 md:text-4xl lg:pt-0 lg:text-5xl dark:text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" role="img" fill="currentColor" className="-mt-1 h-10 text-slate-300 md:-mt-3 md:h-16 lg:h-24 dark:text-slate-800">
                <path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z"></path>
              </svg>
              <span className="flex flex-col">
                <span className="leading-[1.15]"><em>Design is</em> </span>
                <span className="flex items-center gap-2 leading-[1.15] lg:gap-4">
                  <span className="mt-1 h-0.5 w-8 rounded-full bg-slate-400 lg:h-1 lg:w-24 dark:bg-slate-600"></span>
                  <span><strong className="font-extrabold text-slate-600 dark:text-slate-300">inside</strong> and <strong className="font-extrabold text-slate-600 dark:text-slate-300">out </strong></span>
                  <span className="mt-1 h-0.5 w-6 rounded-full bg-slate-400 lg:h-1 lg:w-14 dark:bg-slate-600"></span></span>
                <span className="leading-[1.15]">is a <strong className="relative font-extrabold text-slate-600 dark:text-slate-300">
                  <span className="absolute -left-0.5 bottom-0 right-0 top-1 z-[-1] rounded-md bg-slate-100 px-1 lg:-left-1.5 lg:-right-0.5 lg:bottom-0 lg:top-2 dark:bg-slate-800"></span>must.</strong></span></span>
            </blockquote>
          </div>
        </div>
      </div>

      <div>
        <div className='mt-40 col-span-12 relative'>
          <Typography>My Stack</Typography>
          {/* <div className="absolute bottom-2 left-0 w-full h-1 bg-orange-500"></div> */}
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-16">
          {stacks && stacks.map((stack, idx) => {
            return (
              <div key={idx} className='bg-gray-100 shadow rounded-md p-4 flex' style={{ color: '#475569', backgroundColor: `${stack.backgroundColor}` }}>
                <div className='mr-4 md:mr-2 content-center'>{stack.icon}</div>
                <div>
                  <div className='text-xl font-bold' style={{ color: '#475569' }}>{stack.title}</div>
                  <div className='mt-1 text-sm' style={{ color: '#546479' }}>{stack.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='mt-40 flex space-x-4 overflow-x-auto'>
        <Image
          alt={'title'}
          src={`${process.env.BASE_PATH || ''}/static/images/dashflow.png`}
          className="object-cover object-center md:h-36 lg:h-48 min-h-fit"
          width={544}
          height={306}
        />
        <Image
          alt={'title'}
          src={`${process.env.BASE_PATH || ''}/static/images/dwanify.png`}
          className="object-cover object-center md:h-36 lg:h-48 min-h-fit"
          width={544}
          height={306}
        />
        <Image
          alt={'title'}
          src={`${process.env.BASE_PATH || ''}/static/images/savory.png`}
          className="object-cover object-center md:h-36 lg:h-48 min-h-fit"
          width={544}
          height={306}
        />
        <Image
          alt={'title'}
          src={`${process.env.BASE_PATH || ''}/static/images/hyflyer.png`}
          className="object-cover object-center md:h-36 lg:h-48 min-h-fit"
          width={544}
          height={306}
        />
      </div>
    </>
  )
}

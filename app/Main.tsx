import Canva from '@/data/canva.svg'
import ChatGPT from '@/data/chatgpt.svg'
import Figma from '@/data/figma.svg'
import Framer from '@/data/framer.svg'
import Miro from '@/data/miro.svg'
import Notion from '@/data/notion.svg'
import DesignIdea from '@/data/idea.svg'
import Image from '@/components/Image'
import Typography from '@/components/Typography'

const designApproaches = [
	{
		subtitle: '(01)',
		title: 'Discovery',
		description:
			'The first step is all about understanding your business, your audience, and your goals. I dive deep into your industry to identify the challenges and opportunities that will shape the design.',
	},
	{
		subtitle: '(02)',
		title: 'Strategy',
		description:
			'Next, we’ll create a clear plan to meet your objectives, mapping out user journeys and defining how the design will drive your business forward.',
	},
	{
		subtitle: '(03)',
		title: 'Wireframe',
		description:
			'I’ll sketch the foundation of your project, focusing on functionality and user flow to ensure a seamless experience.',
	},
	{
		subtitle: '(04)',
		title: 'Design',
		description:
			'Here’s where the magic happens—I’ll craft visually stunning, user-centered designs that align perfectly with your brand and audience.',
	},
	{
		subtitle: '(05)',
		title: 'Build',
		description:
			'Once the designs are finalized, I’ll collaborate with developers to bring the project to life, ensuring it works beautifully across all platforms.',
	},
	{
		subtitle: '(06)',
		title: 'Deliver',
		description:
			'Finally, I’ll deliver all the assets, documentation, and guidelines—ready for launch and optimized for success, all on time and within budget.',
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
		icon: <Framer />,
		title: 'Framer',
		description: 'Website Designing',
		backgroundColor: '#AEE8FF',
	},
	{
		icon: <Canva />,
		title: 'Canva',
		description: 'Designing Tool',
		backgroundColor: '#FFF3B0',
	},
	{
		icon: <ChatGPT />,
		title: 'ChatGPT',
		description: 'Ideation and Content Generation',
		backgroundColor: '#FFCDD2',
	},
]

const projectImages = [
	{
		title: 'Dashflow',
		url: 'dashflow.png',
	},
	{
		title: 'Dwanify',
		url: 'dwanify.png',
	},
	{
		title: 'Savory',
		url: 'savory.png',
	},
	{
		title: 'HyFlyer',
		url: 'hyflyer.png',
	},
]

export default function Home({ posts }) {
	return (
		<>
			<div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
				<div className="order-2 md:order-1">
					<a href="#" className="max-w-sm rounded-lg border border-orange-400 px-4 py-2 shadow-sm">
						<div className="inline-block">
							<span className="relative flex size-3">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
							</span>
						</div>
						<span className="pl-4">Available for Work</span>
					</a>

					<div className="mt-16">
						<Typography>
							Hi, I’m Keerthi, a UI/UX Designer | Passionate about User-Centered Design!
						</Typography>
					</div>

					<div className="mt-16 text-3xl leading-12">
						I create{' '}
						<span className="items-center rounded-full bg-orange-400 px-2.5 py-1 font-bold">clean</span> and{' '}
						<span className="items-center rounded-full bg-orange-400 px-2.5 py-1 font-bold">
							user-friendly
						</span>{' '}
						designs to enhance experiences.
					</div>

					<div className="mt-16">
						<button
							className="group relative overflow-hidden px-6 py-3 text-lg font-medium shadow-sm"
							style={{ backgroundColor: '#FFE1D7' }}
						>
							{/* <span className="absolute inset-0 bg-gradient-to-br from-white to-orange-500 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span> */}
							<span className="relative z-10 text-2xl">View Portfolio</span>
						</button>
					</div>
				</div>

				<div className="order-1 justify-self-center md:order-2">
					<Image
						alt={'title'}
						src={`${process.env.BASE_PATH || ''}/static/images/herosection-image.jpg`}
						className="min-h-fit object-cover object-center md:h-36 lg:h-48"
						width={480}
						height={640}
					/>
				</div>
			</div>

			<div>
				<div className="col-span-12 mt-40 flex items-center">
					<Typography>My Approach to Design</Typography>
					<div className="relative ml-4 h-1 flex-grow bg-orange-500">
						<div className="absolute h-1 w-3/4 bg-gray-500"></div>
					</div>
				</div>

				<div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
					{designApproaches &&
						designApproaches.map((item, idx) => {
							return (
								<div key={idx} className="p-4 hover:rounded-xl hover:bg-gray-50">
									<div>{item.subtitle}</div>
									<div className="mt-4 text-xl font-bold">{item.title}</div>
									<div className="mt-4 text-sm">{item.description}</div>
								</div>
							)
						})}
				</div>
			</div>

			<div className="relative mt-20">
				<div className="content-wrapper">
					<div className="relative flex items-center justify-center py-8">
						{/* Left line */}
						<div className="absolute top-1/2 left-0 h-1 w-1/4 -translate-y-1/2 bg-orange-500"></div>

						<blockquote className="relative flex gap-2 text-center text-3xl md:text-4xl lg:text-5xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								role="img"
								fill="currentColor"
								className="-mt-1 h-10 text-slate-300 md:-mt-3 md:h-16 lg:h-24 dark:text-slate-800"
							>
								<path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z"></path>
							</svg>
							<span className="flex flex-col" style={{ color: '#475569' }}>
								<span className="text-5xl leading-14 font-bold">Design is</span>
								<span className="text-5xl leading-14 font-bold">intelligence</span>
								<div className="flex">
									<div>
										<div className="text-5xl leading-14 font-bold text-slate-300">made</div>
										<div className="text-5xl leading-14 font-bold">visible.</div>
									</div>
									<DesignIdea className="ml-4 h-24 w-24" />
								</div>
							</span>
						</blockquote>

						{/* Right line */}
						<div className="absolute top-1/2 right-0 h-1 w-1/4 -translate-y-1/2 bg-orange-500"></div>
					</div>
				</div>
			</div>

			<div>
				<div className="col-span-12 mt-40 flex items-center">
					<Typography>My Stack</Typography>
					<div className="relative ml-4 h-1 flex-grow bg-orange-500">
						<div className="absolute h-1 w-3/4 bg-gray-500"></div>
					</div>
				</div>

				<div className="mt-16 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
					{stacks &&
						stacks.map((stack, idx) => {
							return (
								<div
									key={idx}
									className="flex rounded-md bg-gray-100 p-4 shadow"
									style={{ color: '#475569', backgroundColor: `${stack.backgroundColor}` }}
								>
									<div className="mr-4 content-center md:mr-2">{stack.icon}</div>
									<div>
										<div className="text-xl font-bold" style={{ color: '#475569' }}>
											{stack.title}
										</div>
										<div className="mt-1 text-sm" style={{ color: '#546479' }}>
											{stack.description}
										</div>
									</div>
								</div>
							)
						})}
				</div>
			</div>

			{/* <div className="relative overflow-hidden w-full h-48 mt-20"> */}
			{/* Carousel container */}
			{/* <div className="flex animate-scroll gap-4">
          {[...projectImages, ...projectImages].map((image, index) => (
            <div key={index} className='border border-orange-500 p-4 flex rounded-lg w-full'>
              <Image
                alt={`${image.title}`}
                src={`${process.env.BASE_PATH || ''}/static/images/${image.url}`}
                className="object-cover object-center md:h-36 lg:h-48 min-h-fit rounded-md"
                width={544}
                height={306}
              />
            </div>
          ))}
        </div>
      </div> */}

			<div className="relative my-20 h-auto w-full overflow-hidden">
				{/* Carousel container */}
				<div className="animate-scroll flex gap-4">
					{[...projectImages, ...projectImages].map((image, index) => (
						<div
							key={index}
							className="flex items-center justify-center rounded-lg border border-orange-500 p-5"
							style={{ background: 'linear-gradient(to right, #E7F5FD, #FCEBE0)' }}
						>
							<Image
								alt={`${image.title}`}
								src={`${process.env.BASE_PATH || ''}/static/images/${image.url}`}
								className="rounded-md object-cover object-center"
								width={480} // Adjust this as per your actual image size
								height={640} // Adjust this as per your actual image size
							/>
						</div>
					))}
				</div>
			</div>

			<div className="relative mt-20 w-full overflow-hidden">
				{/* Carousel container */}
				<div className="animate-scroll flex gap-4">
					{[...projectImages, ...projectImages].map((image, index) => (
						// <div
						//   key={index}
						//   className="flex items-center justify-center p-5 border border-orange-500 rounded-lg h-auto"
						//   style={{ width: '640px' }}
						// >
						//   <Image
						//     alt={`${image.title}`}
						//     src={`${process.env.BASE_PATH || ''}/static/images/${image.url}`}
						//     width={1816} // Match the actual width of your images
						//     height={1236} // Match the actual height of your images
						//     style={{
						//       width: "auto", // Ensure the image scales correctly
						//       height: "100%", // Make it as tall as the container padding: '10px', 1816 × 1236
						//     }}
						//   />
						// </div>

						<div className="w-xl">alkdjflakjdflkajdslfkjaldsfjlaksdjf `${image.url}`</div>
					))}
				</div>
			</div>
		</>
	)
}

import Typography from '@/components/Typography'

const projects = [
	{
		image: 'evolve.png',
		title: 'EvolvHR',
		subtitle: 'HR and Employee Management App',
		description:
			'A modern HR and employee management app with intuitive workflows for payroll, attendance, and recruitment, designed to enhance productivity.',
	},
	{
		image: 'tranquility.png',
		title: 'Tranquility',
		subtitle: 'Mindfulness and Wellness App',
		description:
			'A mindfulness app designed to promote well-being through guided meditations and wellness tracking. The serene color palette and intuitive navigation deliver a calming digital experience.',
	},
	{
		image: 'milklush.png',
		title: 'Milklush',
		subtitle: 'Perfect Skincare Landing Page',
		description:
			'An elegant landing page for a skincare brand. The design highlights product benefits and customer testimonials with a clean, minimalistic approach to reflect the brand’s essence.',
	},
	{
		image: 'shoply.png',
		title: 'Shoply',
		subtitle: 'E-commerce App',
		description:
			'A seamless shopping experience through a sleek and modern e-commerce application. Features include personalized recommendations, secure checkout, and effortless navigation.',
	},
]

const services = [
	'User Research',
	'Prototyping',
	'Wireframing',
	'Interaction Design',
	'Website designing',
	'Following Design Systems',
	'Designing Landing pages',
	'Mobile App Designing',
]

export default function Page() {
	return (
		<>
			<div className="flex flex-col">
				<div className="mt-20">
					<div className="justify-self-center text-4xl font-bold text-black">
						What I’ve Been Up To These Days!
					</div>
				</div>

				{projects &&
					projects.map((project, idx) => {
						return (
							<div
								key={idx}
								className="relative mt-20 flex flex-col overflow-visible rounded-lg border p-4 shadow-md md:flex-row lg:flex-row xl:flex-row"
								style={{
									borderColor: '#F8875E',
									background: 'linear-gradient(to right, #E7F5FD, #FCEBE0)',
								}}
							>
								<div className="px-10">
									<div className="relative h-64 w-64 overflow-visible">
										<img
											src={`${process.env.BASE_PATH || ''}/static/images/${project.image}`}
											alt="EvolvHR"
											className="object-cover transition-transform duration-300 hover:z-10 hover:scale-150"
										/>
									</div>
								</div>
								<div className="flex-1 self-center">
									<div className="mt-4 text-4xl font-bold">{project.title}</div>
									<div className="mt-4 text-2xl font-semibold">{project.subtitle}</div>
									<div className="mt-4">{project.description}</div>
								</div>
							</div>
						)
					})}

				<div className="mt-20">
					<div className="justify-self-center text-4xl font-bold text-black">Services</div>
				</div>

				<div
					className="mt-20 mb-60 flex flex-col rounded-lg border p-4 shadow-md"
					style={{ borderColor: '#F8875E', background: 'linear-gradient(to right, #E7F5FD, #FCEBE0)' }}
				>
					<div className="mt-4 text-2xl font-semibold">UI/UX Design</div>
					<div className="mt-4">
						I specialize in UI/UX design, transforming complex challenges into seamless and engaging digital
						experiences. My human-centered approach, powered by expertise in tools like Figma for design and
						Framer for interactive prototyping, ensures every solution is built upon solid user
						understanding and strategic objectives.
					</div>

					<div className="mt-4 flex flex-wrap">
						{services &&
							services.map((service, idx) => {
								return (
									<div key={idx} className="m-2 whitespace-nowrap">
										{service}
									</div>
								)
							})}
					</div>
				</div>
			</div>
		</>
	)
}

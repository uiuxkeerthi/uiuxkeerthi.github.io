import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo1.svg'
import Link from './Link'
import MobileNav from './MobileNav'

const Header = () => {
	let headerClass = 'h-32 content-center'
	if (siteMetadata.stickyNav) {
		headerClass += ' sticky top-0 z-50'
	}

	return (
		<header
			className={headerClass}
			style={{
				background: 'linear-gradient(to right, #E7F5FD, #FCEBE0)',
			}}
		>
			<section className="mx-auto max-w-4xl p-4 px-4 sm:px-6 lg:max-w-5xl lg:px-0 xl:max-w-6xl xl:px-0">
				<div className="flex w-full items-center justify-between">
					<Link href="/" aria-label={siteMetadata.headerTitle} className="flex-shrink-0">
						<div className="mr-3">
							<img
								src={`${process.env.BASE_PATH || ''}/static/images/logo.gif`}
								alt="Example GIF"
								className="w-10"
							/>
						</div>
					</Link>
					<div className="flex items-center space-x-4 leading-5">
						<div className="hidden items-center gap-10 overflow-x-auto sm:flex">
							{headerNavLinks
								.filter((link) => link.href !== '/')
								.map((link) => (
									<Link
										key={link.title}
										href={link.href}
										className="text-2xl font-medium text-gray-900 hover:text-orange-500"
									>
										{link.title}
									</Link>
								))}
						</div>
						<MobileNav />
					</div>
				</div>
			</section>
		</header>
	)
}

export default Header

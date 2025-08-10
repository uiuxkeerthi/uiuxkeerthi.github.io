import { ReactNode } from 'react'
import Header from './Header'

interface Props {
	children: ReactNode
}

export default function SectionContainer({ children }: Props) {
	return (
		<>
			<Header />
			<section className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-5xl lg:px-0 xl:max-w-6xl xl:px-0">
				{children}
			</section>
		</>
	)
}

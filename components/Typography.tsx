import { ReactNode } from 'react'

export default function Typography({ children }: { children: ReactNode }) {
	return <h1 className="text-4xl font-bold text-black">{children}</h1>
}

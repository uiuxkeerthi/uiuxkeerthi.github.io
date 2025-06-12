import { ReactNode } from "react";

export default function Typography ({children}: {children: ReactNode}) {
    return (
        <h1 className="text-black text-4xl font-bold">
          {children}
        </h1>
      ) 
}
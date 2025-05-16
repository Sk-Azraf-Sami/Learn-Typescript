import type { ReactElement, ReactNode } from "react"

type sectionProps = {
    title? : string, 
    children: ReactNode
}

const Section = ({title="sub heading", children}: sectionProps): ReactElement => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}

export default Section
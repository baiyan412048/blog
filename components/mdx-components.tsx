import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Heading from './custom/heading'

const components = {
  Image,
  h2: Heading.h2,
  h3: Heading.h3
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  // @ts-ignore
  // TODO: custom heading type error
  return <Component components={components} />
}

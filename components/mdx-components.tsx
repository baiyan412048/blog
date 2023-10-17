import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Heading from './custom/heading'
import Checkbox from './custom/checkbox'
import Code from './custom/code'

const components = {
  Image,
  h2: Heading.h2,
  h3: Heading.h3,
  input: Checkbox,
  code: Code
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

type CustomHeadingProps = React.ComponentPropsWithRef<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
> & { Component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }

function CustomHeading({ Component, id, children }: CustomHeadingProps) {
  return (
    <Component id={id} className='scroll-mt-24'>
      {children}
    </Component>
  )
}

const Heading = {
  h2: (props: React.ComponentPropsWithRef<'h2'>) => (
    <CustomHeading Component='h2' {...props} />
  ),
  h3: (props: React.ComponentPropsWithRef<'h3'>) => (
    <CustomHeading Component='h3' {...props} />
  )
}

export default Heading

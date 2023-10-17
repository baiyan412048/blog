'use client'

const GoTop = () => {
  return (
    <div
      className='fixed bottom-6 right-6 flex items-center justify-center w-8 h-8 rounded shadow cursor-pointer'
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-5 h-5'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M8 3v18'></path>
        <path d='M16 3v18'></path>
        <path d='M8 14h8'></path>
        <path d='M8 10h8'></path>
        <path d='M8 6h8'></path>
        <path d='M8 18h8'></path>
      </svg>
    </div>
  )
}

export default GoTop

function Checkbox({ checked, disabled }: React.ComponentPropsWithRef<'input'>) {
  return (
    <div className='flex mr-2'>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        className='hidden'
      />
      {checked ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='#5C8374'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
          <path d='M9 12l2 2l4 -4'></path>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='#e5e7eb'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
        </svg>
      )}
    </div>
  )
}

export default Checkbox

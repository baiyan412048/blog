import Link from 'next/link'

type Props = {
  tags: string[]
  className: string
}

const TagCloud = ({ tags, className }: Props) => {
  return (
    <div className={`sticky top-18 ${className}`}>
      <p className='mb-5 text-lg font-semibold text-gray-900 transition-colors dark:text-gray-100'>
        Tags
      </p>
      <ul className='flex flex-wrap'>
        {tags.map((tag) => (
          <li key={tag} className='mr-2 mb-2'>
            <Link href={`tag/${tag}`}># {tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagCloud

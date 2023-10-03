import { allPosts } from '@/.contentlayer/generated'
import Link from 'next/link'

export default function Home() {
  return (
    <ul className='space-y-10'>
      {allPosts.map((post, index) => (
        <li className='py-1 pl-2 border-l-2 border-green' key={post._id}>
          <Link className='px-2 block space-y-2' href={post.slug}>
            <h2 className='text-xl font-bold'>{post.title}</h2>
            {post.description && <p className='text-sm'>{post.description}</p>}
          </Link>
        </li>
      ))}
    </ul>
  )
}

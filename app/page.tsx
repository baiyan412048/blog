import Link from 'next/link'
import { allPosts } from '@/.contentlayer/generated'
import TagCloud from '@/components/tag-cloud'

export default function Home() {
  const tags = allPosts.reduce<string[]>((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag)
      }
    })
    return acc
  }, [])

  return (
    <div className='flex items-start'>
      <ul className='space-y-10 pr-6 w-9/12'>
        {allPosts
          .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .map((post, index) => (
            <li className='py-1 pl-2 border-l-2 border-green' key={post._id}>
              <Link className='px-2 inline-block space-y-2' href={post.slug}>
                <h2 className='text-xl font-bold'>{post.title}</h2>
                {post.description && (
                  <p className='text-sm'>{post.description}</p>
                )}
              </Link>
            </li>
          ))}
      </ul>
      <TagCloud tags={tags} className={'w-3/12'} />
    </div>
  )
}

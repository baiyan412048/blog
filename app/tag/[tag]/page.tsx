import Link from 'next/link'
import { allPosts } from '@/.contentlayer/generated'
import TagsCloud from '@/components/tags-cloud'

interface TagProps {
  params: {
    tag: string
  }
}

export async function generateStaticParams(): Promise<TagProps['params'][]> {
  return allPosts
    .map((post) => post.tags)
    .flat()
    .map((tag) => ({
      tag: tag
    }))
}

// export async function generateMetadata({
//   params
// }: TagProps): Promise<Metadata> {
//   const post = await getPostFromParams(params)

//   if (!post) {
//     return {}
//   }

//   return {
//     title: post.title,
//     description: post.description
//   }
// }

export default function TagPage({ params }: TagProps) {
  const { tag } = params
  const tags = () => {
    const arr = allPosts.reduce<string[]>((acc, post) => {
      post.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag)
        }
      })
      return acc
    }, [])
    return arr
  }

  return (
    <>
      <h2 className='mb-6 font-bold text-center text-2xl'>
        Tag : <span>{tag}</span>
      </h2>
      <div className='flex items-start'>
        <ul className='space-y-10 pr-6 w-9/12'>
          {allPosts
            .filter((post) => post.tags.includes(tag))
            .map((post) => (
              <li className='py-1 pl-2 border-l-2 border-green' key={post._id}>
                <Link className='px-2 block space-y-2' href={post.slug}>
                  <h2 className='text-xl font-bold'>{post.title}</h2>
                  {post.description && (
                    <p className='text-sm'>{post.description}</p>
                  )}
                </Link>
              </li>
            ))}
        </ul>
        <TagsCloud tags={tags()} className={'w-3/12'} />
      </div>
    </>
  )
}

import Link from 'next/link'

import { allPosts } from '@/.contentlayer/generated'
import TagCloud from '@/components/tag-cloud'

import type { Metadata } from 'next'

interface TagProps {
  params: {
    tag: string
  }
}

export async function generateStaticParams(): Promise<TagProps['params'][]> {
  return allPosts.flatMap((post) => post.tags).map((tag) => ({ tag }))
}

export async function generateMetadata({
  params
}: TagProps): Promise<Metadata> {
  const { tag } = params

  return {
    title: `${tag} - Eric's Blog`,
    description: `現在所在的 Tag 為 ${tag}`
  }
}

export default function TagPage({ params }: TagProps) {
  // 網址的 unicode 轉換
  const tag = decodeURIComponent(params.tag)
  // 不重複陣列
  const tags = allPosts.reduce<string[]>((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag)
      }
    })
    return acc
  }, [])

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
        <TagCloud tags={tags} className={'w-3/12'} />
      </div>
    </>
  )
}

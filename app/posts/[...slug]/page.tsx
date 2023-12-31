import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx-components'
import TableOfContents from '@/components/table-of-contents'

import type { Metadata } from 'next'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} - Eric's Blog`,
    description: post.description
  }
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/')
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className='py-6 flex w-full items-start prose dark:prose-invert'>
      <div className='pr-6 w-9/12'>
        <span className='block text-sm mb-6'>{post.date.substring(0, 10)}</span>
        <h1 className='mb-4'>{post.title}</h1>
        {post.description && (
          <p className='text-xl mt-0 text-slate-700 dark:text-slate-200'>
            {post.description}
          </p>
        )}
        <div className='space-x-4 text-sm'>
          {post.tags.map((tag) => (
            <span className='inline-block' key={tag}>
              # {tag}
            </span>
          ))}
        </div>
        <hr className='my-6' />
        <Mdx code={post.body.code} />
      </div>
      <TableOfContents className='w-3/12' source={post.body.raw} />
    </article>
  )
}

import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/projects/utils'

export function BlogPosts({ limit }) {
  let allBlogs = getBlogPosts()

  // Menentukan jumlah blog yang akan ditampilkan berdasarkan parameter limit
  const displayedBlogs = limit ? allBlogs.slice(0, limit) : allBlogs

  return (
    <div>
      {displayedBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-2 border-b p-3 border-slate-400"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row items-start md:items-center md:space-x-2 space-y-2 md:space-y-0 transition-transform duration-200 ease-in-out hover:scale-[1.02]  dark:hover:bg-neutral-800 rounded-lg">
              <p className="text-neutral-600 dark:text-neutral-400 md:w-[100px] tabular-nums shrink-0">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex-grow">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tracking-tight text-sm italic">
                  {post.metadata?.tech}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

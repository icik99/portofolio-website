import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Read my project.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Project</h1>
      <p className="mb-4">
        {`Take a look at some of the projects I’ve worked on! Each showcases my expertise in building web solutions with technologies like ReactJS, NextJS, TailwindCSS, and my backend skills with ExpressJS, Sequelize, and MySQL. These projects demonstrate my ability to deliver user-friendly designs, robust server-side solutions, and innovative features tailored to specific needs. Let’s explore what I’ve created together!`}
      </p>
      <BlogPosts limit={9000} />
    </section>
  )
}

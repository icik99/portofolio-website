import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Muh Rizieq Fazlulrahman - Portofolio
      </h1>
      <p className="mb-4">
        {`I am a dynamic graduate of Telkom University Purwokerto, specializing in System Analysis and Front-end web development with expertise in ReactJS, NextJS, and TailwindCSS. My technical skills are complemented by strong project management, negotiation abilities, and system analysis expertise, ensuring seamless project execution and effective collaboration. Passionate about innovative web solutions, I am eager to contribute my talents to a forward-thinking team.`}
      </p>
      <div className="my-8">
        <p className='font-semibold mb-2 text-2xl'>Project Done:</p>
        <BlogPosts />
      </div>
    </section>
  )
}

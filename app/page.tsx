import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Muh Rizieq Fazlulrahman Djafar - Portfolio
      </h1>
      <p className="mb-4">
        {`Hi there! I’m a Web Developer and System Analyst passionate about crafting innovative and user-friendly web solutions. With expertise in ReactJS, NextJS, and TailwindCSS, I specialize in building seamless interfaces while combining technical precision with strong analytical skills. I also have strong backend capabilities, working with ExpressJS, Sequelize ORM, and MySQL to create robust and efficient server-side solutions. Let's bring ideas to life together!`}
      </p>

      <div className="my-8">
      <p className='font-semibold mb-2 text-2xl'>Recent Completed Projects:</p>
      <BlogPosts limit={3}/>
      </div>
    </section>
  )
}

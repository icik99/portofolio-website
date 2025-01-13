export default function Page() {
    return (
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          About Me
        </h1>
  
        {/* <div className="w-[150px] h-[150px] overflow-hidden rounded-xl shadow-lg">
        <img
            src="/FOTO.jpg"
            alt="My Profile"
            className="w-full h-full object-cover"
        />
        </div> */}
        <div className="flex flex-col md:flex-row items-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
          <p className="text-left md:text-left">
            {`I am a dynamic graduate of Telkom University Purwokerto, specializing in System Analysis and Front-end web development with expertise in ReactJS, NextJS, and TailwindCSS. My technical skills are complemented by strong project management, negotiation abilities, and system analysis expertise, ensuring seamless project execution and effective collaboration. Passionate about innovative web solutions, I am eager to contribute my talents to a forward-thinking team.`}
          </p>
        </div>
  
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
        Biodata
        </h2>
        <ul className="mb-6 space-y-2">
            <li><span className="font-medium">Full Name:</span> Muh Rizieq Fazlulrahman Djafar</li>
            <li><span className="font-medium">Date of Birth:</span> Palu, September 9, 2002</li>
            <li><span className="font-medium">Residence:</span> Makassar, South Sulawesi</li>
            <li><span className="font-medium">GitHub:</span> <a href="https://github.com/icik99" className="text-slate-500 hover:underline">github.com/icik99</a></li>
            <li><span className="font-medium">LinkedIn:</span> <a href="https://linkedin.com/in/rizieqfr" className="text-slate-500 hover:underline">linkedin.com/in/rizieqfr</a></li>
            <li><span className="font-medium">Phone Number:</span> 081946635642</li>
            <li><span className="font-medium">Email:</span> <a href="mailto:riziqfr111@gmail.com" className="text-slate-500 hover:underline">riziqfr111@gmail.com</a></li>
            <li><span className="font-medium">University:</span> Telkom University Purwokerto</li>
            <li><span className="font-medium">Major:</span> Bachelor of Informatics</li>
            <li><span className="font-medium">Faculty:</span> Faculty of Informatics</li>
        </ul>

  
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Education
        </h2>
        <div className="mb-6 space-y-4">
          <div>
            <h3 className="text-base font-medium">Institut Teknologi Telkom Purwokerto</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
              Bachelor of Informatics Student, 3.93/4.00
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Mar 2020 - Feb 2024 • Purwokerto, East Java
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium">Telcom Vocational School Makassar</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
              Access Network Engineering
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Jan 2017 - Jan 2020 • Makassar, South Sulawesi
            </p>
          </div>
        </div>
  
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Skills & Expertise
        </h2>
        <ul className="mb-6 list-disc list-inside">
          <li>Proficient in modern frameworks and libraries: ReactJS, NextJS, and ExpressJS</li>
          <li>Strong understanding of system analysis and design methodologies</li>
          <li>Experience in creating responsive, accessible, and SEO-optimized web applications</li>
          <li>Skilled in project management and cross-functional team collaboration</li>
          <li>Proficiency with version control tools such as GitLab</li>
        </ul>
  
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Professional Experience
        </h2>
        <p className="mb-6">
          {`Throughout my academic and professional journey, I have contributed to a diverse range of projects, including developing web-based systems such as import-export management platforms, clinic and health center information systems, and machine learning applications using Flask. My adaptability and eagerness to learn have enabled me to deliver effective solutions across various domains and collaborate seamlessly within dynamic team environments.`}
        </p>
  
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Vision & Goals
        </h2>
        <p>
          {`I aspire to leverage my skills to create innovative solutions that enhance user experience and drive business growth. I am committed to continuous learning and contributing to projects that push the boundaries of web technology. Joining a team that values creativity and innovation is my ultimate goal.`}
        </p>
      </section>
    );
  }
  
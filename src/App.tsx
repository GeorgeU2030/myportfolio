import './App.css'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

function App() {
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-gray-200 to-slate-300">
      
      <div className="flex flex-col w-4/5 lg:w-3/5 mt-16">
        <div className="mt-4">
            <h1 className="md:ml-6 font-bold text-gradient text-2xl">George Trujillo</h1>
        </div>

        <div className='flex justify-center items-center w-full mt-3'>
          <img src="/icons8-mando-500.png" alt="character" className='w-20 h-20 mr-2'/>
          <img src="/colombia.png" alt="country" className='w-12 h-12 ml-2 mr-2'/>
          <img src="/clover.png" alt="team" className='w-16 h-16 ml-2'/>
        </div>

        <div className="mt-4">
          <p className="text-center font-semibold">
            Hi, I'm George, a passionate Full-Stack Developer currently studying Software Engineering at Universidad Icesi. I enjoy crafting solutions, enhancing user experiences, and continually expanding my knowledge.
          </p>
        </div>

        <div className='mt-12'>
          <h1 className='md:ml-6 font-bold text-gradient text-xl text-center'>Skills</h1>
          
          <Section
            title="FrontEnd"
            images={[
              { src: "/html.png", alt: "html" },
              { src: "/css.png", alt: "css", className: "ml-3" },
              { src: "/react.png", alt: "react", className: "ml-3 w-14 h-12" },
              { src: "/nextjs.png", alt: "nextjs", className: "ml-3" },
              { src: "/angular.png", alt: "angular", className: "ml-3" },
            ]}
          />
          <Section
            title="BackEnd"
            images={[
              { src: "/express.png", alt: "express" },
              { src: "/dotnet.png", alt: "net", className: "ml-3 rounded-lg" },
              { src: "/django.png", alt: "django", className: "ml-3" },
              { src: "/nestjs.png", alt: "nestjs", className: "ml-3" },
            ]}
          />
          <Section
            title="Databases"
            images={[
              { src: "/postgres.png", alt: "postgres" },
              { src: "/mongo.png", alt: "mongo", className: "ml-3 rounded-lg" },
              { src: "/sqlserver.png", alt: "sqlserver", className: "ml-3" },
              { src: "/mysql.png", alt: "mysql", className: "ml-3 w-8 h-8 md:w-12 md:h-12" },
            ]}
          />
          <Section
            title="Others"
            images={[
              { src: "/github.png", alt: "github" },
              { src: "/vercel.png", alt: "vercel", className: "ml-3 w-10 h-10 md:w-14 md:h-14 rounded-lg" },
              { src: "/render.png", alt: "render", className: "ml-3 w-8 h-8 md:w-12 md:h-12" },
              { src: "/docker.png", alt: "docker", className: "ml-3" },
            ]}
          />

        </div>

        <div className='mt-16'>
          <h1 className='md:ml-6 font-bold text-gradient text-xl text-center'>Projects</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 '>

            <ProjectCard
              imageSrc="/ASnow.png"
              altText="snowproject"
              title="Snow"
              techStack={[
                { src: "/nextjs.png", alt: "nextjs" },
                { src: "/express.png", alt: "expressjs" },
                { src: "/mongo.png", alt: "mongo" },
              ]}
              links={[
                { href: "https://github.com/GeorgeU2030?tab=repositories&q=snow&type=&language=&sort=", src: "/githubwhite.png", alt: "github" },
                { href: "https://app-snow.vercel.app/", src: "/link.png", alt: "vercel" },
              ]}
            />
            <ProjectCard
              imageSrc="/AGemstone.png"
              altText="gemstoneproject"
              title="Gemstone"
              techStack={[
                { src: "/nextjs.png", alt: "nextjs" },
                { src: "/django.png", alt: "django" },
                { src: "/postgres.png", alt: "postgres" },
              ]}
              links={[
                { href: "https://github.com/GeorgeU2030?tab=repositories&q=gemstone&type=&language=&sort=", src: "/githubwhite.png", alt: "github" },
                { href: "https://gemstone-app.vercel.app/", src: "/link.png", alt: "vercel" },
              ]}
            />
            <ProjectCard
              imageSrc="/AF7Race.png"
              altText="f7raceproject"
              title="F7 Race"
              techStack={[
                { src: "/angular.png", alt: "angular" },
                { src: "/dotnet.png", alt: "dotnet" },
                { src: "/postgres.png", alt: "postgres" },
              ]}
              links={[
                { href: "https://github.com/GeorgeU2030?tab=repositories&q=f7&type=&language=&sort=", src: "/githubwhite.png", alt: "github" },
              ]}
            />
            <ProjectCard
              imageSrc="/ANBA.png"
              altText="nbaproject"
              title="NBA Sim"
              techStack={[
                { src: "/angular.png", alt: "angular" },
                { src: "/dotnet.png", alt: "dotnet" },
                { src: "/docker.png", alt: "docker" },
              ]}
              links={[
                { href: "https://github.com/GeorgeU2030?tab=repositories&q=nba&type=&language=&sort=", src: "/githubwhite.png", alt: "github" },
                { href: "https://nba-simulator-app.vercel.app/", src: "/link.png", alt: "vercel" },
              ]}
            />
            <ProjectCard
              imageSrc="/electrotech.png"
              altText="electrotechproject"
              title="ElectroTech"
              techStack={[
                { src: "/react.png", alt: "react" },
                { src: "/nestjs.png", alt: "nest" },
                { src: "/mongo.png", alt: "mongo" },
              ]}
              links={[
                { href: "https://github.com/GeorgeU2030/electrotech-backend", src: "/githubwhite.png", alt: "github" },
                { href: "https://electrotech-psi.vercel.app/", src: "/link.png", alt: "vercel" },
              ]}
            />
          
          </div>
        
        </div>

        <div className='mt-16 mb-20'>
          <h1 className='md:ml-6 font-bold text-xl text-center text-gradient'>Contact</h1>
          <div className='flex justify-center items-center mt-6'>
            <a href="https://github.com/GeorgeU2030" className='w-full md:w-1/2 rounded-lg border-p p-2 flex items-center justify-center bg-gradient-to-r from-[#b515ff] to-[#6200ff]'>
              <img src="/githubwhite.png" alt="github" className='w-8 h-8' />
              <h1 className='font-bold text-white ml-3'>Github - GeorgeU2030</h1>
            </a>
          </div>
          <div className='flex justify-center items-center mt-2'>
            <div className='border-p rounded-lg flex items-center p-2 w-full md:w-1/2 justify-center bg-gradient-to-r from-[#4f46e5] to-[#327ef7]'>
              <img src="/email.png" alt="email" className='w-8 h-8' />
              <h1 className='font-bold text-white ml-3'>Email - georgeu2021@gmail.com</h1>
            </div>
          </div>
        </div>

      </div> 
      
    </div>
  )
}

export default App

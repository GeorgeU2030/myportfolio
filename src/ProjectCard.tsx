import './App.css'

interface ProjectCardProps {
    imageSrc: string;
    altText: string;
    title: string;
    techStack: { src: string; alt: string }[];
    links: { href: string; src: string; alt: string }[];
  }
  
export const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, altText, title, techStack, links }) => (
    <div className='flex flex-col border-p'>
      <img src={imageSrc} alt={altText} className='rounded-lg h-40 md:h-32 lg:h-28' />
      <h1 className='text-gradient-alt text-center font-semibold mt-1'>{title}</h1>
  
      <div className='flex justify-center items-center mt-1'>
        {techStack.map((tech, index) => (
          <img key={index} src={tech.src} alt={tech.alt} className={`w-6 h-6 ${index > 0 ? 'ml-2' : ''}`} />
        ))}
      </div>


      <div className='flex justify-center items-center mt-4'>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`rounded-lg border-p mb-1 ${index > 0 ? 'ml-2' : ''} ${link.alt === 'github' ? 'back-p' : ''}`}
          >
            <img src={link.src} alt={link.alt} className='w-8 h-8' />
          </a>
        ))}
      </div>
      
    </div>
  );
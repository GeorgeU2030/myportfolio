import { TechImage } from "./TechImage";

interface sectionProps {
    title: string;
    images: {
        src: string;
        alt: string;
        className?: string;
    }[];
}

export const Section = ({ title, images }: sectionProps) => (
    <>
      <h1 className='text-center md:text-left md:ml-6 text-gradient-alt font-bold mt-6'>{title}</h1>
      <div className='flex justify-center items-center mt-2'>
        {images.map((image, index) => (
          <TechImage key={index} {...image} />
        ))}
      </div>
    </>
);
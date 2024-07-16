
interface techImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const TechImage = ({ src, alt, className }: techImageProps) => (
    <img src={src} alt={alt} className={`w-12 h-12 md:w-16 md:h-16 ${className}`} />
);
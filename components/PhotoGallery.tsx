import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import usPhoto from '../assets/us.jpg';

const photos = [
    { src: photo1, alt: "Momento speciale 1", rotate: "rotate-2" },
    { src: photo2, alt: "Momento speciale 2", rotate: "-rotate-1" },
    { src: usPhoto, alt: "Noi", rotate: "rotate-1", large: true },
    { src: photo3, alt: "Momento speciale 3", rotate: "-rotate-2" },
    { src: photo4, alt: "Momento speciale 4", rotate: "rotate-3" },
    { src: photo5, alt: "Momento speciale 5", rotate: "-rotate-1" },
    { src: photo6, alt: "Momento speciale 6", rotate: "rotate-2" },
];

const PhotoGallery: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className={`${photo.large ? 'md:col-span-2' : 'md:col-span-1'} relative group overflow-hidden rounded-2xl shadow-xl glass-panel p-2 ${photo.rotate} hover:rotate-0 transition-transform duration-500`}
                >
                    <div className="w-full h-full relative rounded-xl overflow-hidden">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                            <p className="text-white text-xl font-medium font-serif">Noi ❤️</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PhotoGallery;

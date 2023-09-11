import React from 'react';

import {summerbod, wokevillage, bhut, caverns} from "../assets/index.js";

const gallery = [
    {
        id: 'image-1',
        title: 'WokeVillage',
        classes: 'md:h-80',
        imageUrl: wokevillage,
        projectUrl: 'https://github.com/emilijus-sileikis/WokeVillage',
    },
    {
        id: 'image-2',
        title: 'Summerbod',
        classes: 'md:col-span-2 md:h-80',
        imageUrl: summerbod,
        projectUrl: 'https://github.com/emilijus-sileikis/summerbod',
    },
    {
        id: 'image-3',
        title: 'BHut',
        classes: 'md:col-span-2 md:h-80',
        imageUrl: bhut,
        projectUrl: 'https://github.com/emilijus-sileikis/BHut',
    },
    {
        id: 'image-4',
        title: 'Forgotten Caverns',
        classes: 'md:h-80',
        imageUrl: caverns,
        projectUrl: 'https://github.com/emilijus-sileikis/Game',
    },
];

// Component to display my work
function GalleryList() {
    return (
        <div className="bg-discount-gradient py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-start sm:mb-8 md:mb-12">
                    <a href="https://github.com/emilijus-sileikis?tab=repositories"
                       target="_blank"
                       className="inline-block bg-blue-gradient rounded-lg px-4 py-2 text-center text-sm font-semibold text-white outline-none focus-visible:ring md:px-8 md:py-3 md:text-base w-full sm:w-auto">More On Github</a>
                </div>

                <div className="grid md:grid-cols-3 gap-4 grid-cols-1 xl:gap-8">
                    {gallery.map((item) => (
                        <a key={item.id} href={item.projectUrl} target="_blank" className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${item.classes}`}>
                            <img
                                src={item.imageUrl}
                                loading="lazy"
                                alt={`Photo by ${item.title}`}
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                            <span className={`relative ml-4 mb-3 inline-block text-sm text-white ${item.id === 'image-2' ? 'md:text-lg' : 'md:ml-5 md:text-lg'}`}>{item.title}</span>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default GalleryList;
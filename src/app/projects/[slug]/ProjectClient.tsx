'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProjectClient({
  project,
}: {
  project: { title: string; description: string; images: string[] };
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const next = () => setCurrentImage((i) => (i + 1) % project.images.length);
  const prev = () =>
    setCurrentImage((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">{project.title}</h1>
      <p className="text-lg text-green-300 mb-10 text-center">
        {project.description}
      </p>
      <div className="relative w-full h-96 mb-8 border border-green-700 rounded-lg overflow-hidden">
        <Image
          src={project.images[currentImage]}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover"
        />
        <button onClick={prev} className="absolute left-0 top-1/2 px-4 py-2 bg-green-900 text-green-300">
          ←
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 px-4 py-2 bg-green-900 text-green-300">
          →
        </button>
      </div>
    </section>
  );
}

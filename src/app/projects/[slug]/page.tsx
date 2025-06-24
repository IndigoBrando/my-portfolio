'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

const projectData: Record<string, {
  title: string;
  description: string;
  images: string[];
}> = {
  konsultap: {
    title: 'Konsultap',
    description:
      'Konsultap is a full-stack healthcare platform built for online consultation and scheduling. It features role-based access for students, faculty, and medpracs, integrates video conferencing via Agora, and supports email notifications through PHPMailer.',
    images: [
      '/images/konsultap/1.png',
      '/images/konsultap/2.png',
      '/images/konsultap/3.png',
      '/images/konsultap/4.png',
      '/images/konsultap/5.png',
      '/images/konsultap/6.png',
      '/images/konsultap/7.png',
      '/images/konsultap/8.png'
    ],
  },
  vehicle: {
    title: 'Vehicle Reservation System',
    description:
      'An internal web-based system for managing vehicle requests and approval workflows. Built using PHP and MySQL, with multi-role access for employees and department heads.',
    images: [
      '/images/vts/1.png',
      '/images/vts/2.png',
      '/images/vts/3.png',
      '/images/vts/4.png',
      '/images/vts/5.png',
      '/images/vts/6.png',
      '/images/vts/7.png',
      '/images/vts/8.png'

    ],
  },

  slipnote: {
    title: 'Slipnote: A notepad hovering over applications',
    description:
      'A notepad mobile application that hovers like messenger bubble with the ability to take notes',
    images: [
      '/images/note/1.png',
      '/images/note/2.png',
      '/images/note/3.png',
      '/images/note/4.png',
      '/images/note/5.png',
     

    ],
  },


};


export default function ProjectDetails() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  if (!slug || !(slug in projectData)) return notFound();

  const project = slug ? projectData[slug] : null;
  const [currentImage, setCurrentImage] = useState(0);


  if (!project) return notFound();

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <main className="bg-black text-green-400 min-h-screen font-mono">
      <Header />
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          {project.title}
        </h1>
        <p className="text-lg text-green-300 mb-10 text-center">
          {project.description}
        </p>

        {/* Slideshow */}
        <div className="relative w-full max-w-5xl h-[80vh] mx-auto mb-8 border border-green-700 rounded-lg bg-black overflow-hidden">
          <Image
            src={project.images[currentImage]}
            alt={`${project.title} screenshot`}
            fill
            className="object-contain"
          />
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-900 bg-opacity-50 text-green-300 px-4 py-2 z-10"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-900 bg-opacity-50 text-green-300 px-4 py-2 z-10"
          >
            &#8594;
          </button>
        </div>

      </section>
      <Footer />
    </main>
  );
}

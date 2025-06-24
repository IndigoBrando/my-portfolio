'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Konsultap',
      description:
        'A full-stack healthcare scheduling and video consultation platform built with PHP, MySQL, Agora, and PHPMailer.',
      link: '/projects/konsultap',
    },
    {
      title: 'Portfolio Website',
      description:
        'A glitch-themed personal website using Next.js, Tailwind CSS, and TypeScript. You’re looking at it!',
      link: '#',
    },
    {
      title: 'Vehicle Reservation System',
      description:
        'A Reservation website that streamlines the process of car request from DENR MIMAROPA',
      link: '/projects/vehicle'
    },
     {
      title: 'Slipnote',
      description:
        'A notepad mobile application that hovers like messenger bubble with the ability to take notes',
      link: '/projects/slipnote'
    },
  ];

  return (
    <main className="bg-black text-green-400 min-h-screen font-mono flex flex-col">
      <Header />
      <section className="px-6 py-20 max-w-6xl mx-auto flex-grow">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>

  );
}

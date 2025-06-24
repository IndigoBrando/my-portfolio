// ✅ Ensure it's a server component
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import ProjectClient from './ProjectClient';

export const dynamic = 'error'; // Ensure static generation only

const projectData = {
  konsultap: {
    title: 'Konsultap',
    description: 'Konsultap is a full-stack healthcare platform built for online consultation and scheduling...',
    images: [
      '/images/konsultap/1.png',
      '/images/konsultap/2.png',
      '/images/konsultap/3.png',
      '/images/konsultap/4.png',
      '/images/konsultap/5.png',
      '/images/konsultap/6.png',
      '/images/konsultap/7.png',
      '/images/konsultap/8.png',
    ],
  },
  vehicle: {
    title: 'Vehicle Reservation System',
    description: 'An internal web-based system for managing vehicle requests...',
    images: [
      '/images/vts/1.png',
      '/images/vts/2.png',
      '/images/vts/3.png',
      '/images/vts/4.png',
      '/images/vts/5.png',
      '/images/vts/6.png',
      '/images/vts/7.png',
      '/images/vts/8.png',
    ],
  },
};


export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: keyof typeof projectData };
}) {
  const project = projectData[params.slug];

  if (!project) return notFound();
  
  return (
    <main className="bg-black text-green-400 min-h-screen font-mono">
      <Header />
      <ProjectClient project={project} />
      <Footer />
    </main>
  );
}
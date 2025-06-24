/* File: /app/page.tsx */
'use client';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="bg-black text-green-400 min-h-screen font-mono">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
       
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Christian</h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          A passionate developer exploring the full-stack world. I love building digital experiences with code.
        </p>
      </section>

      {/* Tagline Section */}
      <section className="text-center px-4 py-6">
        <p className="italic text-green-300 text-lg">"Turning caffeine into scalable code."</p>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MySQL', 'Laravel', 'PHP', 'Java', 'Wordpress', 'C#'].map((tech) => (
            <span key={tech} className="border border-green-400 px-4 py-2 rounded-md text-sm hover:bg-green-900">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="border border-green-400 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Konsultap</h3>
            <p className="text-sm mt-2">A telemedicine web app with scheduling and video consultations.</p>
            <Link href="/projects/konsultap" className="text-green-300 underline mt-2 inline-block">View more</Link>
          </div>
          <div className="border border-green-400 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Vehicle Reservation System</h3>
            <p className="text-sm mt-2">A Vehicle Reservation System that streamlines the process of car request from DENR</p>
            <Link href="/projects/vehicle" className="text-green-300 underline mt-2 inline-block">View more</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Interested in working together?</h2>
        <Link href="/contact" className="bg-green-400 text-black px-6 py-2 rounded hover:bg-green-300 transition">
          Contact Me
        </Link>
      </section>

      <Footer />
    </main>
  );
}

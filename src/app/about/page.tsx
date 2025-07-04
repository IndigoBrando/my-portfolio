'use client';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function AboutPage() {
  return (
    <main className="bg-black text-green-400 min-h-screen font-mono">
      <Header />

      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

        {/* RGB Glitch Profile Image */}
        <div className="relative w-80 h-80 mx-auto mb-8">
          <div className="glitch-img w-full h-full rounded-full overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Christian Malimit"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          I&apos;m <span className="text-green-300 font-bold">Christian Malimit</span>, a graduating student with a degree of Bachelors of Science in Information Technology in July 16 2025 passionate about full-stack development,
          systems design, and building digital tools that empower people. I enjoy blending clean code with a sense of style — often in dark mode.
        </p>

       <p className="text-lg leading-relaxed mb-6">
          During college, I led technical teams, created healthcare platforms like <strong>Konsultap</strong>, and developed custom tools
          for online scheduling and telemedicine. I also served as the Public Relations Officer (PRO) of the Adamson University Guild of Animation Makers and Esports, and as Head of Technical for the Adamson IT and IS Society. My work often bridges functionality and creativity — the kind that leaves a lasting impression.
      </p>

        <p className="text-lg leading-relaxed mb-6">
          During my final year, I also completed an internship at the <strong>Department of Environment and Natural Resources (DENR) MIMAROPA</strong>, 
          where I contributed to internal system enhancements and gained experience in a government IT environment. It was a valuable opportunity
          to apply what I&apos;ve learned in real-world scenarios, especially in process optimization and documentation.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Outside of projects, I&apos;m deepening my skills in TypeScript, and modern JavaScript frameworks. I value simplicity,
          performance, and strong design systems.
        </p>

        <p className="italic text-green-300 text-md">
          &quot;Every great developer starts with curiosity — and never stops building.&quot;
        </p>
      </section>

      <Footer />
    </main>
  );
}

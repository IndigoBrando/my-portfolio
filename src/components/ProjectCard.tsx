'use client';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="border border-green-400 p-4 rounded-xl hover:bg-green-900 transition duration-200 shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-green-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 underline"
      >
        View Project
      </a>
    </div>
  );
}

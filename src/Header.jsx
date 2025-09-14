import React from 'react'
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("summary");
  const sections = ["summary", "education", "skills", "experience", "portfolio"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-gray-800">Osvaldo Quinteros</h1>
        <ul className="flex gap-6 text-sm font-medium">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors ${
                  activeSection === id ? "text-blue-600 font-bold" : "text-gray-700"
                } hover:text-blue-500`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

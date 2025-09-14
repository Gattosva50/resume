import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="summary"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Osvaldo Cesar Quinteros Terrazas
      </h2>
      <p className="text-xl text-gray-600 mb-6">
        Mechatronics Engineer & Full-Stack Web Developer
      </p>
      <a
        href="#portfolio"
        className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition"
      >
        View My Projects
      </a>
      <a href="/Osvaldo_Quinteros_CV.pdf" className="mt-3 px-6 py-3 bg-gray-800 text-white rounded-2xl shadow flex items-center gap-3 hover:bg-gray-900 hover:"> <Download size={16}/> Download CV</a>
    </section>
  );
}

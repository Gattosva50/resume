import Header from "./Header";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main className="pt-20">
        <Hero />

        {/* Summary Section */}
        <section id="summary" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
          <p>
            Mechatronics Engineer and Full-Stack Web Developer with hands-on
            experience in industrial automation, software development, and data
            analysis. Skilled in designing and implementing solutions that
            integrate hardware and software, from PLC control systems to modern
            web applications. Strong background in robotics and aerospace
            research through projects such as NASA’s Human Exploration Rover
            Challenge and Bolivia’s first CubeSat mission. Passionate about
            building innovative, scalable, and data-driven solutions for
            industry 4.0 and beyond.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="max-w-4xl mx-auto py-16 px-4 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="mb-2 font-semibold">
            Bachelor of Mechatronics Engineering – Universidad Católica Boliviana
            (2024, La Paz – Bolivia)
          </p>
          <p className="text-gray-700 mb-6">
            Relevant Coursework: Control Systems, Industrial Automation,
            Robotics, Programming
          </p>

          <h3 className="text-xl font-bold mb-2">Diplomas & Certifications</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Diploma: Automation, Instrumentation, Intelligent Control Systems and Industrial IoT – UPB</li>
            <li>Full-Stack Web Development Bootcamp – Udemy (React, Node.js, Express, SQL)</li>
            <li>Python Programming – A2 Capacitaciones (Pandas, Matplotlib, Seaborn, Scikit-learn)</li>
            <li>Excel & Power BI – A2 Capacitaciones (Data modeling, dashboards, KPIs)</li>
            <li>AutoCAD Advanced – Udemy (2D/3D CAD Design)</li>
            <li>Mechanical Design – Dassault Systèmes (SolidWorks)</li>
            <li>Additive Manufacturing Associate – Dassault Systèmes (3D Printing)</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Web Development:</strong> React, Node.js, Express, PostgreSQL, REST APIs, HTML, CSS, JavaScript, Vite</li>
            <li><strong>Data & Analytics:</strong> Python (Pandas, Matplotlib, Seaborn, Scikit-learn), Power BI, Excel, SQL</li>
            <li><strong>Engineering & CAD:</strong> SolidWorks, AutoCAD, Additive Manufacturing (3D Printing)</li>
            <li><strong>Industrial Automation:</strong> PLC programming, Robotics (KUKA KR6 R900)</li>
            <li><strong>Languages:</strong> Spanish (Native), English (B2)</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-4xl mx-auto py-16 px-4 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <h3 className="font-semibold">Maintenance Assistant – PREFORSA Plastic Packaging Industry (Jun 2024 – Oct 2024)</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Developed and implemented maintenance plans for critical plant equipment, reducing unexpected downtime.</li>
            <li>Designed and prototyped a quality testing device for plastic packaging, improving product validation process.</li>
            <li>Supported root-cause analysis of machinery failures, contributing to more efficient maintenance scheduling.</li>
          </ul>

          <h3 className="font-semibold">Engineering Intern – Machine Learning Bolivia (Feb 2022 – Jul 2022)</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Assisted in the design and manufacturing of mechatronic prototypes for industrial applications.</li>
            <li>Collaborated in the development of experimental setups for machine learning research projects.</li>
            <li>Contributed to documentation and testing of new engineering solutions.</li>
          </ul>

          <h3 className="font-semibold">Laboratory Assistant – Universidad Católica Boliviana (Aug 2021 – Dec 2021)</h3>
          <ul className="list-disc pl-5">
            <li>Maintained and calibrated laboratory equipment to ensure availability for student practices.</li>
            <li>Installed safety devices and signage to comply with laboratory standards.</li>
            <li>Programmed routines for KUKA KR6 R900 robotic arm, enabling student demonstrations and training.</li>
          </ul>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="max-w-4xl mx-auto py-16 px-4 min-h-[50vh]">
          <h2 className="text-2xl font-bold mb-4">Projects & Portfolio</h2>
          <ul className="space-y-3">
            <li>🌐 <a href="https://gattosva50.github.io/resume/" target="_blank" className="text-blue-600 hover:underline">Online Resume</a>: Personal CV website built with HTML, CSS, and JavaScript.</li>
            <li>☀️ <a href="https://gattosva50.github.io/weather_app/" target="_blank" className="text-blue-600 hover:underline">Weather App</a>: React app using OpenWeather API with live weather data and responsive UI.</li>
            <li>🛒 <a href="https://github.com/Gattosva50/e-commerce" target="_blank" className="text-blue-600 hover:underline">E-commerce App (In Progress)</a>: Full-stack project with React (frontend) and Node.js/Express (backend).</li>
            <li>🤖 Engineering & Research Projects: NASA HERC participation, member of Bolivia’s first CubeSat mission.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto py-16 px-4 bg-gray-50 text-center ">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: <a href="mailto:osvaldo.quinteros.terrazas@gmail.com" className="text-blue-600 hover:underline">osvaldo.quinteros.terrazas@gmail.com</a></p>
          <p>Phone: +591 70135802</p>
          <p><a href="https://github.com/Gattosva50" target="_blank" className="text-blue-600 hover:underline">GitHub</a> | <a target="_blank" className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/osvaldo-cesar-quinteros-terrazas-68399a224/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></p>
        </section>
      </main>
    </div>
  );
}

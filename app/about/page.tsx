'use client';

import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; // Importing relevant icons

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen text-gray-100 relative overflow-hidden bg-black">
        
        {/* Navbar with Light Effect */}
        <div className="relative z-10">
          <header className="bg-black py-4 px-6 flex justify-between items-center shadow-lg">
            <div className="text-white text-2xl font-bold">Sheril Dhiman</div>
            <div className="space-x-6">
              <Link href="/" className="text-white hover:text-gray-300 transition-all">Home</Link>
              <Link href="/about" className="text-white hover:text-gray-300 transition-all">About</Link>
            </div>
          </header>

          {/* Light effect under the navbar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-glow"></div>
        </div>

        {/* About Section with Image and Text */}
        <section className="flex items-center justify-center min-h-screen relative z-10 p-10 bg-gradient-to-r from-black via-transparent to-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-0"></div>
          <div className="bg-transparent backdrop-blur-md p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
            
            {/* Profile Image */}
            <div className="w-1/3 flex-shrink-0">
              <Image
                src="/user.jpg" // Update with Sheril's profile image path
                alt="Sheril Dhiman"
                width={220}
                height={220}
                className="rounded-full object-cover shadow-xl transition-transform transform hover:scale-105"
              />
            </div>

            {/* About Content */}
            <div className="flex flex-col space-y-6">
              <h1 className="text-5xl font-extrabold text-white leading-tight">About Me</h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Hello! I'm Sheril Dhiman, a passionate computer science student at HPU Shimla, with a focus on AI and software engineering. I completed my 12th from Vashisst Public School and am continuously exploring new technologies to improve my skills.
              </p>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                I am currently learning AI and diving into software development. I love solving real-world problems and building intuitive applications using cutting-edge technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gradient-to-b from-black via-transparent to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-white mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-2xl text-gray-300">
              <div className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
                <FaJs className="text-yellow-500" /> <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                <FaReact className="text-blue-500" /> <span>React</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                <FaHtml5 className="text-red-500" /> <span>HTML5</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                <FaCss3Alt className="text-blue-600" /> <span>CSS3</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                <span>AI & Machine Learning</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-gray-500 transition-colors">
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-gradient-to-b from-black via-transparent to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-white mb-8">Education</h2>
            <div className="space-y-6 text-xl text-gray-300 text-left mx-auto max-w-2xl">
              <div>
                <h3 className="font-semibold text-gray-200">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-400">HPU Shimla, 2024 - Present</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-200">High School Diploma</h3>
                <p className="text-gray-400">Vashisst Public School, 2018 - 2020</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-black py-8 text-center text-gray-400">
          <div className="container mx-auto">
            <div className="flex justify-center space-x-6 mb-4">
              <Link href="https://www.instagram.com/sheril__18/" target="_blank" className="text-2xl hover:text-white transition-all">
                <FaInstagram />
              </Link>
              <Link href="https://www.linkedin.com/in/" target="_blank" className="text-2xl hover:text-white transition-all">
                <FaLinkedin />
              </Link>
              <Link href="mailto:dhiman18sheril@gmail.com" className="text-2xl hover:text-white transition-all">
                <FaEnvelope />
              </Link>
            </div>
            <p className="text-sm">© 2024 Sheril Dhiman.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default About;

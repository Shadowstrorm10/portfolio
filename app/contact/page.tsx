import Header from '@/components/Header';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white pt-28 pb-20"> {/* Added pt-28 to add space from navbar */}
        <div className="container mx-auto max-w-5xl px-6">

          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white">
              Contact Me
            </h1>
            <p className="text-lg text-gray-400 mt-2">
              Feel free to reach out through any of the platforms below
            </p>
          </div>

          {/* Contact Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <FaInstagram className="text-5xl mb-4 text-blue-400 mx-auto transition-all duration-300 transform hover:scale-110" />
              <h3 className="text-2xl font-semibold mb-2">Instagram</h3>
              <p className="text-gray-300 mb-4">Follow me on Instagram for updates and posts!</p>
              <a
                href="https://www.instagram.com/sheril__18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white font-medium transition-all duration-300"
              >
                Visit My Instagram
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <FaLinkedin className="text-5xl mb-4 text-blue-500 mx-auto transition-all duration-300 transform hover:scale-110" />
              <h3 className="text-2xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300 mb-4">Connect with me on LinkedIn for professional networking.</p>
              <a
                href="https://www.linkedin.com/in/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-medium transition-all duration-300"
              >
                Visit My LinkedIn
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <FaEnvelope className="text-5xl mb-4 text-white mx-auto transition-all duration-300 transform hover:scale-110" />
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300 mb-4">Feel free to reach out to me via email for inquiries or collaboration!</p>
              <a href="mailto:dhiman18sheril@gmail.com" className="text-white hover:text-white font-medium transition-all duration-300">
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;

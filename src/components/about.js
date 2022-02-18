import picture from "../assets/images/Asmaa.jpg";
import email from "../assets/images/twotone_email_white_24dp.png";
import "../App.css";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Asmaa Musse.
            <br className="hidden lg:inline-block" />
            Full-Stack Web Developer.
          </h1>

          <p className="mb-8 leading-relaxed">
            I am a Software Developer based in the UK who is passionate about
            designing websites from scratch and making clients ideas turn to
            reality.
          </p>

          <div className="flex justify-center">
            <a
              href="#contacts"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              View Contacts
            </a>

            <a
              href="https://docs.google.com/document/d/169kEqUcNLwGPWIW2tqN7GuHnhUUTBz_wP80cJCaL5Mg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

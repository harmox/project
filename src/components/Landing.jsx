const pastLearn = [
  {
    name: "JS Advanced",
    certificate: "https://softuni.bg/certificates/details/203201/b770bef3"
  },
  {
    name: "JS Aplication",
    certificate: "https://softuni.bg/certificates/details/209484/29d59cc6"
  },
  {
    name: "JS Back-end",
    certificate: "https://softuni.bg/certificates/details/218309/b4843ac7"
  },
  {
    name: "ReactJS",
    certificate: "https://softuni.bg/certificates/details/223108/830de208"
  },
  {
    name: "TypeScript",
    certificate: "https://softuni.bg/certificates/details/215544/734a9f70"
  },
  {
    name: "Reconnaissance",
    certificate: "https://softuni.bg/certificates/details/233931/ffa65161"
  },
  {
    name: "System and Network Compromising",
    certificate: "https://softuni.bg/certificates/details/233931/ffa65161"
  },
]
const currentLearning = [
  { name: "National security-bachelor degree", at: "G. S. Rakovski Military Academy" },
  { name: "Compromising Platforms", at: "Softuni" },
  { name: "Web Security ", at: "PortSwigger" },
]
export default function Landing() {

  return (
    <>
    <section className="newMasker" id="about">
  <h1
    className="text-center text-4xl sm:text-5xl md:text-6xl text-white"
    style={{ textShadow: "2px 3px 0px purple" }}
  >
    Stoyan Velikov
  </h1>
  <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 relative">
    <img
      className="w-48 sm:w-64 md:w-80 lg:w-96 mx-auto md:mr-8 rounded-lg"
      src="https://i.ibb.co/tTPvSQXs/CHC-2591.jpg"
      alt="My Photo"
    />
    <div className="w-full mt-8 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Past Section */}
        <div className="w-full">
          <h2 className="text-center text-2xl sm:text-3xl mb-4">Past</h2>
          <div className="rounded-lg shadow-md ">
            {pastLearn.map((i, index) => (
              <div
                className="flex items-center py-3 border-b hover:shadow-xl transition duration-300"
                key={index}
              >
                <h2 className="text-md sm:text-lg font-semibold text-gray-800 ml-2">
                  {i.name}
                </h2>
                <a
                  className="ml-auto mr-2 px-3 sm:px-4 py-2 text-s sm:text-l font-medium text-white bg-purple-600 rounded-lg hover:bg-black hover:text-purple-300 hover:scale-105 transition duration-300 ease-in-out"
                  href={i.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Current Section */}
        <div className="w-full mb-4">
          <h2 className="text-center text-2xl sm:text-3xl mb-4">Current</h2>
          <div className="rounded-lg shadow-md">
            {currentLearning.map((i, index) => (
              <div
                className="flex items-center py-3 border-b hover:shadow-xl transition duration-300"
                key={index}
              >
                <h2 className="text-md sm:text-lg font-semibold text-gray-800 ml-2">
                  {i.name}
                </h2>
                <span className="ml-auto mr-2 px-3 sm:px-4 py-2 text-s sm:text-l font-medium text-white bg-purple-600 rounded-lg">
                  {i.at}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

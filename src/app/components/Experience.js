import Image from "next/image";

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col bg-white-50 w-full items-center gap-4 p-8">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Experience</h1>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <Image
                className="absolute w-8 h-8 rounded-full -start-3"
                src="/zenmake.png"
                alt="Zen Maker Lab"
                width={50}
                height={50}
              />
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                STEM Instructor
              </h3>
              <h4>Zen Maker Lab</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                December 2024 - Present
              </time>
            </li>
            <li className="mb-10 ms-6">
              <Image
                className="absolute w-8 h-8 rounded-full -start-3"
                src="/raven.svg"
                alt="Raven"
                width={50}
                height={50}
              />
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Co-Founder
              </h3>
              <h4>Raven Support Network</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June 2023 - Present
              </time>
            </li>
            <li className="mb-10 ms-6">
              <Image
                className="absolute w-8 h-8 rounded-full -start-3"
                src="/varian.png"
                alt="Varian"
                width={50}
                height={50}
              />
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Software Engineer
              </h3>
              <h4>Varian Medical Systems</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2021 - June 2023
              </time>
            </li>
            <li className="mb-10 ms-6">
              <Image
                className="absolute w-8 h-8 rounded-full -start-3"
                src="/ICM.png"
                alt="ICM"
                width={50}
                height={50}
              />
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Teaching Assistant
              </h3>
              <h4>International College of Manitoba</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2020 - December 2020
              </time>
            </li>
            <li className="mb-10 ms-6">
              <Image
                className="absolute w-8 h-8 rounded-full -start-3"
                src="/wawanesa.jpg"
                alt="Wawanesa"
                width={50}
                height={50}
              />
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Innovation Lab Application Developer 1
              </h3>
              <h4>Wawanesa Insurance</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                January 2020 - August 2020
              </time>
            </li>
            <li className="mb-10 ms-6">
              <Image
                className="absolute w-8 h-8 rounded-full -start-3"
                src="/uofm.png"
                alt="UofM"
                width={50}
                height={50}
              />
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Robot Programmer
              </h3>
              <h4>Autonomous Agents Lab</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2018 - March 2020
              </time>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Education</h1>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <Image
                className="absolute w-8 h-8 rounded-full -start-3"
                src="/uofm.png"
                alt="UofM"
                width={50}
                height={50}
              />
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                BSc. Computer Science
              </h3>
              <h4>University of Manitoba</h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2016 - May 2021
              </time>
            </li>
          </ol>
        </div>
      </div>

    </div>
  )
}
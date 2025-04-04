import Image from 'next/image'
import Link from 'next/link'

const competitions = [
  {
    title: 'FRC 2025 - British Columbia',
    subtitle: 'Mentoring for Team 9292 - Zen Maker Lab (OrcaOverdrive)',
    description: 'Mentored Grade 7-12 students in FIRST Robotics Competition (FRC), focused on leading the software team ',
    date: 'February 26, 2025',
    image: 'https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '/competition/frc2025',
  },
  {
    title: 'Robot Magic and Music: Humanoid Application Challenge',
    subtitle: 'Robots and humans jamming together!',
    description: '2nd place at IROS 2019 Macau representing team Snobots for University of Manitoba with a robot band (a robot pianist, a robot drummer, a human DJ and a human guitarist)',
    date: 'November 11, 2019',
    image: '/iros1.jpg',
    link: '/competition/iros2019',
  },
  {
    title: 'FIRA 2019 South Korea - Hurocup Kid Size',
    subtitle: 'Robot olympics in South Korea!',
    description: '4th place in participation with team Snobots-KidSize for University of Manitoba in a robot olympics',
    date: 'August 25, 2019',
    image: '/fira2019-1.jpg',
    link: '/competition/fira2019',
  },
  {
    title: 'FIRA 2018 Taiwan - Hurocup Kid Size',
    subtitle: 'Robot olympics in Taiwan!',
    description: '4th place in participation with team Snobots-KidSize for University of Manitoba in a robot olympics',
    date: 'August 23, 2018',
    image: '/fira2018-1.jpg',
    link: '/competition/fira2018',
  },
];

export default function Competitions() {
  return (
    <div id="competitions" className="flex flex-col bg-red-50 w-full items-center gap-4 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Competitions</h1>
      <section className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mg:grid-cols-2 xl:grid-cols-3">
          {
            competitions.map((competition, index) => (
              <div key={index}>
                <Image
                  className="relative z-10 object-cover w-full rounded-md h-96"
                  src={competition.image}
                  alt={competition.title}
                  width={180}
                  height={38}
                />
                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <Link href={competition.link} className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    {competition.title}
                  </Link>
                  <p className="font-semibold text-gray-500 dark:text-white sm:text-sm md:text-md">
                    {competition.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {competition.description}
                  </p>

                  <p className="mt-3 text-sm text-blue-500">{competition.date}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}
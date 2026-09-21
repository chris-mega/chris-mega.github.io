import Image from "next/image";
import Link from "next/link";

const competitions = [
  {
    title: "FRC 2026 - British Columbia",
    subtitle: "Mentoring for Team 11149 - Blue Lightning",
    description:
      "Mentored a rookie community team of middle and high school students in West Vancouver through their first FIRST Robotics Competition season, ranking 25th of 44 at the Canadian Pacific Regional",
    // TODO(chris): 2026 team photo — /frc-1.png is the 2025 team.
    date: "March 4, 2026",
    image: "/frc-1.png",
    link: "/competition/frc2026",
  },
  {
    title: "FRC 2025 - British Columbia",
    subtitle: "Mentoring for Team 9292 - Zen Maker Lab (OrcaOverdrive)",
    description:
      "Mentored Grade 7-12 students in FIRST Robotics Competition (FRC), focused on leading the software team ",
    date: "February 26, 2025",
    image: "/frc-1.png",
    link: "/competition/frc2025",
  },
  {
    title: "Robot Magic and Music: Humanoid Application Challenge",
    subtitle: "Robots and humans jamming together!",
    description:
      "2nd place at IROS 2019 Macau representing team Snobots for University of Manitoba with a robot band (a robot pianist, a robot drummer, a human DJ and a human guitarist)",
    date: "November 11, 2019",
    image: "/iros1.jpg",
    link: "/competition/iros2019",
  },
  {
    title: "FIRA 2019 South Korea - Hurocup Kid Size",
    subtitle: "Robot olympics in South Korea!",
    description:
      "4th place in participation with team Snobots-KidSize for University of Manitoba in a robot olympics",
    date: "August 25, 2019",
    image: "/fira2019-1.jpg",
    link: "/competition/fira2019",
  },
  {
    title: "FIRA 2018 Taiwan - Hurocup Kid Size",
    subtitle: "Robot olympics in Taiwan!",
    description:
      "4th place in participation with team Snobots-KidSize for University of Manitoba in a robot olympics",
    date: "August 23, 2018",
    image: "/fira2018-1.jpg",
    link: "/competition/fira2018",
  },
];

export default function Competitions() {
  return (
    <section id="competitions" className="w-full bg-band-b py-16 sm:py-20">
      <div className="wrap flex flex-col items-center gap-8">
      <h1 className="text-3xl font-semibold text-foreground lg:text-4xl">
        Competitions
      </h1>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {competitions.map((competition, index) => (
            <div key={index} className="flex flex-col">
              <Image
                className="relative z-10 object-cover w-full rounded-md h-72"
                src={competition.image}
                alt={competition.title}
                width={180}
                height={38}
              />
              <div className="relative z-20 mx-4 flex flex-1 flex-col p-6 -mt-16 bg-surface rounded-lg border border-line shadow-lg">
                <Link
                  href={competition.link}
                  className="font-semibold text-foreground hover:text-accent md:text-xl"
                >
                  {competition.title}
                </Link>
                <p className="font-semibold text-fg-muted sm:text-sm md:text-md">
                  {competition.subtitle}
                </p>

                <p className="mt-3 text-sm text-fg-muted md:text-sm">
                  {competition.description}
                </p>

                <p className="mt-auto pt-3 text-sm font-medium text-accent">{competition.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

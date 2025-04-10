import PostLink from "@/app/components/PostLink";
import Image from "next/image";

export default function Frc2025() {
  return (
    <div className="flex flex-col gap-8 p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          FRC 2025 - British Columbia
        </h1>
        <h2 className="text-xl font-semibold text-gray-500 dark:text-white lg:text-2xl">
          Mentoring for Team 9292 - Zen Maker Lab (OrcaOverdrive)
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          className="relative z-10 object-cover w-full rounded-md"
          src="/frc-1.png"
          alt=""
          width={1000}
          height={38}
        />
        <div className="flex flex-col gap-4">
          <p>
            Shortly after moving to British Columbia, I joined{" "}
            <PostLink href="https://www.zenmakerlab.com/">
              Zen Maker Lab
            </PostLink>
            , a local STEM academy, to teach and mentor multiple programs, one
            of which was the Robotics Academy. With previous experiences in
            competitions, now it was my turn to mentor students, something that
            I have been always wanting to do. Me and other 3 mentors guided 10
            students in different tasks to build a robot from scratch. The
            nature of a{" "}
            <PostLink href="https://www.firstinspires.org/robotics/frc">
              FIRST Competition
            </PostLink>{" "}
            is cooperation, team work and technical challenge.
          </p>
          <p>
            {" "}
            My role, alongside the other mentors, was to guide their
            exploration, offering technical insights and helping them navigate
            the complexities of mechanics, electronics, and coding. We
            encouraged them to research different mechanisms, understand the
            game rules, and grasp the fundamentals of robot building and coding.
            It wasn&apos;t about providing them with the answers, but rather
            empowering them to discover solutions through experimentation and
            critical thinking.
          </p>
          <p>
            Here is the{" "}
            <PostLink href="https://zenmakerfrc.weebly.com/">
              Team Website
            </PostLink>{" "}
            and{" "}
            <PostLink href="https://frc-events.firstinspires.org/2025/team/9292">
              Team 9292 performance
            </PostLink>
          </p>
          <p>
            Despite the technical challenges and every team member being new to
            the competition, we placed 20th out of 40 teams
          </p>
        </div>
      </div>
      <Image
        className="relative z-10 object-cover rounded-md w-full h-96 object-[50%_35%]"
        src="/frc-2.png"
        alt=""
        width={1500}
        height={38}
      />
      <small className="italic">The 2025 FRC Team + Instructors!</small>
    </div>
  );
}

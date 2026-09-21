import PostLink from "@/app/components/PostLink";
import Image from "next/image";
import Link from "next/link";

// TODO(chris): swap /frc-1.png and /frc-2.png for 2026 photos — those two are
// the 2025 Zen Maker Lab team, so they're standing in only until you drop this
// season's pictures in /public.
export default function Frc2026() {
  return (
    <div className="flex flex-col gap-8 p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-foreground lg:text-4xl">
          FRC 2026 - British Columbia
        </h1>
        <h2 className="text-xl font-semibold text-fg-muted lg:text-2xl">
          Mentoring for Team 11149 - Blue Lightning
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
            A year after mentoring in{" "}
            <Link
              className="inline-block text-accent underline decoration-accent/40 hover:decoration-accent"
              href="/competition/frc2025"
            >
              FRC 2025
            </Link>
            , I joined{" "}
            <PostLink href="https://www.blue-lightning.ca/">
              Blue Lightning
            </PostLink>
            , a community team of middle and high school students out of West
            Vancouver, led by parents and volunteers. 2026 was their rookie
            year — no shop built up over past seasons, no veteran students to
            lean on, everything from the build process to the team itself
            starting from zero.
          </p>
          <p>
            {" "}
            A rookie{" "}
            <PostLink href="https://www.firstinspires.org/robotics/frc">
              FIRST Competition
            </PostLink>{" "}
            team learns two things at once: how to build an industrial-size
            robot, and how to run the team that builds it. TODO: what you
            focused on this season — software again, as in 2025, or a wider
            mentoring role on a team that was standing itself up for the first
            time.
          </p>
          <p>
            Here is the{" "}
            <PostLink href="https://www.blue-lightning.ca/">
              Team Website
            </PostLink>{" "}
            and{" "}
            <PostLink href="https://frc-events.firstinspires.org/2026/team/11149">
              Team 11149 performance
            </PostLink>
          </p>
          <p>
            We competed at the Canadian Pacific Regional from March 4-7, 2026,
            finishing qualifications 4-6 and ranked 25th of 44 teams, then got
            picked in the second round by the 7th alliance for playoffs. A
            rookie team making an alliance at all is a good place to start.
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
      <small className="italic">The 2026 FRC Team + Instructors!</small>
    </div>
  );
}

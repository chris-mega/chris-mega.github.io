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
            After
            <PostLink href="https://zenmakerfrc.weebly.com/">
              Team Website
            </PostLink>
            <PostLink href="https://frc-events.firstinspires.org/2025/team/9292">
              Team 9292
            </PostLink>
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

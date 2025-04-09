import PostLink from "@/app/components/PostLink";
import Image from "next/image";

export default function Fira2019() {
  return (
    <div className="flex flex-col gap-8 p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          FIRA 2019 South Korea- Hurocup Kid Size
        </h1>
        <h2 className="text-xl font-semibold text-gray-500 dark:text-white lg:text-2xl">
          Robot olympics in South Korea!
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          className="relative z-10 object-cover w-full rounded-md"
          src="/fira2019-1.jpg"
          alt=""
          width={1000}
          height={38}
        />
        <div className="flex flex-col gap-4">
          <p>
            After the success of{" "}
            <PostLink href="/competition/fira2018">
              2018&apos;s competiton
            </PostLink>
            , we participated in{" "}
            <PostLink href="https://firaworldcup.org/past-events/">
              FIRA 2019
            </PostLink>{" "}
            at Changwon, South Korea.
          </p>
          <p>
            This was a really great experience! I learned a lot this year. There
            were more teams and everybody improved comparing to last year, which
            made the competition harder. Teamwork and leadership were the skills
            that I definitely practiced more this year as I was now on charge of
            the kid-size side of the team. The principal challenge was the
            hardware side, in robotics your code may work, but there are more
            variables that may make tour program succesful or not like camera
            calibration, surface roughness, servos and expected target sizes.
            Also practiced how to change a servo in 10 minutes under pressure 😁
          </p>
          <p>
            We moved to a shared platform, which meant to handle two different
            robots using the same code and framework (
            <b>Robotis-Op3-Framework in ROS</b>) while making it easier to
            compile by moving the events to Python. I was involved in the design
            of the architecture and tasks to reach our goals, in addition to the
            programming of some of the events. That meant more collaboration
            across the adult and kid size teams.
          </p>
          <p>
            Also improved in <b>OpenCV</b>, <b>Python</b> and <b>ROS</b> as
            after a year and a bit more guidance I could understand more of how
            everything works. This is our{" "}
            <PostLink href="https://www.youtube.com/watch?v=ag4jiWB4jw0">
              qualification video
            </PostLink>
          </p>
          As Kid-size team, we achieved:
          <ul className="list-disc pl-4">
            <li>
              <b>Spartan Race</b> - 1st place
            </li>
            <li>
              <b>United Soccer</b> - 2nd Place
            </li>
            <li>
              <b>Triple Jump</b> - 3th Place
            </li>
            <li>
              <b>Basketball</b> - 4th Place
            </li>
            <li>
              <b>Marathon</b> - 5th Place
            </li>
            <li>
              <b>Mini-DRC/Teleop</b> - 5th Place
            </li>
            <li>
              <b>All-round</b> - Fourth Place
            </li>
          </ul>
          <p>We also got an article written by UManitoba press.</p>
        </div>
      </div>
      <Image
        className="relative z-10 object-cover w-full rounded-md h-96 object-[50%_35%]"
        src="/fira2019-2.jpg"
        alt=""
        width={1500}
        height={38}
      />
      <small className="italic">
        Marshall Jackson (adult-size), Borui Li (adult-size), Yanlam Ng
        (adult-size), Dr. Meng Cheng Lau (Post Doc Fellow), Chris Melendez (me,
        kid-size), Louis O&apos;Connor (kid-size), Andy Lun (adult-size)
      </small>
    </div>
  );
}

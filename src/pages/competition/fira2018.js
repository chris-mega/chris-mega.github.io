import PostLink from "@/app/components/PostLink";
import Image from "next/image";

export default function Fira2018() {
  return (
    <div className="flex flex-col gap-8 p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
          FIRA 2018 Taiwan - Hurocup Kid Size
        </h1>
        <h2 className="text-xl font-semibold text-gray-500 dark:text-white lg:text-2xl">
          Robot olympics in Taiwan!
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          className="relative z-10 object-cover w-full rounded-md"
          src="/fira2018-1.jpg"
          alt=""
          width={1000}
          height={38}
        />
        <div className="flex flex-col gap-4">
          <p>
            In 2018, I applied for an undergraduate research award. I had to
            write some essays about what I want to do in the future, what I am
            doing to accomplish it and how the labs at the university would be
            able to help. That&apos;s when I came across the{" "}
            <PostLink href="http://aalab.cs.umanitoba.ca/index.php/9-news/70-fira-hurocup-2018">
              Autonomous Agents Lab (AaLab)
            </PostLink>
            , Dr. John Anderson (Lab Director) and Dr. Meng Cheng &quot;Mc&quot;
            Lau (Post Doc Fellow). They showed me around the lab, the research
            they do and the competitions they have participated in. I got very
            excited to see the combination of hardware and software without
            knowing much about the hardware. I wrote my essays and got the
            award.
          </p>
          <p>
            If I could describe my first month in this lab with two words, it
            was: Total Confusion. The lab just got a new robot as an award from
            a previous competition:
            <PostLink href="https://emanual.robotis.com/docs/en/platform/op3/introduction/">
              Robotis OP3
            </PostLink>
            . So, I was assigned to the Kid-Size team (kid size because it is a
            small robot, a bit higher than your ankle) to figure out how it
            works and participate in the upcoming{" "}
            <PostLink href="https://firaworldcup.org/past-events/">
              FIRA Hurocup 2018
            </PostLink>
            . No one knew exactly how to use it; other student volunteers with
            more experience had some ideas ported from the previous version,
            OP2, but the framework for OP3 is different, involving{" "}
            <b>ROS Kinetic</b>, publishers and subscribers and <b>C++</b>.
            Because I was getting paid by the award, I had times of being by
            myself there, trying to figure out how everything works and getting
            guidance on computer vision (<b>OpenCV</b>) and movement animation.
            There were a lot of trials and errors, but it was very fun. Finally,
            we could make it work.
          </p>
          <p>
            Unfortunately, but also luckily, the most experienced guy quit, so
            it allowed me to travel instead with another Kid-Size guy and two
            adult-size guys to Taichung, Taiwan. This was our{" "}
            <PostLink href="https://www.youtube.com/watch?v=GU-4sg2ITcE">
              qualification video
            </PostLink>
          </p>
          <p>
            There was a lot of excitement! First time in Asia, representing
            Canada, seeing 3 months of work finally compete and getting to know
            people from all over the world. There were also some high
            expectations from us as <b>Snobots</b> (our official team name) has
            performed very well in the past years. Now the competition had more
            teams, old teams got strong, new sporting events were added but both
            me and my kid-size partner were new on this kind of competition
            using a new robot.
          </p>
          At the end, as Kid-size team, we got:
          <ul className="list-disc pl-4">
            <li>
              <b>Weighlifting</b> - 2nd place
            </li>
            <li>
              <b>Triple Jump</b> - 3rd Place (New Event)
            </li>
            <li>
              <b>Moving Target Archery</b> - 4th Place (New Event)
            </li>
            <li>
              <b>Obstacle Run</b> - 5th Place
            </li>
            <li>
              <b>Mini-DRC/Teleop</b> - 7th Place
            </li>
            <li>
              <b>All-round</b> - Fourth Place
            </li>
          </ul>
          <p>
            We were actually really impressed to get 4th place all-round due to
            our experience. This taught me that it isn&apos;t about knowledge,
            it is about persistence, focus, belief, handling stress,
            collaboration and teamwork.
          </p>
          <p>
            After this amazing experience, I decided to stay as volunteer for
            the Aalab.
          </p>
        </div>
      </div>
      <Image
        className="relative z-10 object-cover rounded-md w-full h-96 object-[50%_55%]"
        src="/fira2018-2.jpg"
        alt=""
        width={1500}
        height={38}
      />
      <small className="italic">
        Chris Melendez (me, kid-size), Mario Mendez (adult-size), Dr. Jackie
        Baltes (organizer), Dr. Meng Cheng Lau (Post Doc Fellow), Louis
        O&apos;Connor (kid-size), Borui Li (adult size)
      </small>

      <PostLink href="https://www.youtube.com/watch?v=mRNElPifuhc">
        External highlights Video
      </PostLink>
    </div>
  );
}

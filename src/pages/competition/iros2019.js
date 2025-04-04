export default function Iros2019() {
  return (
    <div className="flex flex-col gap-8 p-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Robot Magic and Music: Humanoid Application Challenge</h1>
        <h2 className="text-xl font-semibold text-gray-500 dark:text-white lg:text-2xl">Robots and humans jamming together</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <img className="relative z-10 object-cover w-full rounded-md" src="/iros1.jpg" alt="" />
        <div className="flex flex-col gap-4">
          <p>
            In 2019, we signed up to participate in the Humanoid Application Challenge from the international conference{" "}
            <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://www.iros2019.org/" target="_blank">IROS 2019</a>.
            The competition this year was about magic and music.
            The sky was the limit regarding what could be achieved. Still, it had to be highly technical, fun and a wowing experience for judges and spectators.
            Team Snobots has always participated in doing magic and has done very well, even winning a robot in a previous year.
            This time, because of the music addition and that most of the team members were musical in a way, we decided to take that route instead of magic.
          </p>

          <p>
            In a previous competition, we managed to have our two robots share the same code. We were excited to make them play together with us as a human and robot band.
            Mario, one of our lab members and a drummer, made the motions for our big robot to play drums and… oh my goodness, the result was the real magic for us.
            As soon as we saw it we knew we were ready, even if we didn’t know how to do the rest, but we were so energized and inspired. We posted our{" "}
            <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://www.youtube.com/watch?v=hE4ZpEnaQtY" target="_blank">Qualification video</a>{" "}
            and people were impressed.
          </p>

          <p>
            The real challenge began. Music is hard to program as you need precision. Robots can be reasonably accurate, but they have some milliseconds as a margin of error, which can become messy after playing for some time.
            Adding an extra robot to the scene made it even harder. In the end, we figured it out: UDP signals between the two robots to “update” each other in which part of the song they are in, an algorithm to measure how long each motion took and make them faster or slower to account for inaccuracies and a timer/calculator for the bpm of the song and how long each motion would take.
          </p>

          <p>
            In between, I learned more about OpenCV, visual servoing, inverse kinematics, UDP connections, human-robot interaction and music theory.
            Not forgetting also how to be a good showman and interact with the robot through some text-to-speech.
            For more information about my version of visual servoing you can take a look at my{" "}
            <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://github.com/chris-mega/PianoPlayer" target="_blank">
              Github repo
            </a>.
          </p>

          <p>The trip to Macau was very exciting and long. When we arrived, we had some hardware issues which got me nervous at the moment of performance.
            We decided to play two simple songs (excluding “sound checks” that will show off our work with visual servoing and inverse kinematics).
            One of our songs was in Cantonese, and as soon as we played it, a lot of people entered the room as it is also a very popular song in Macau and Hong Kong. It was really touching.
          </p>

          <p>In the end, we got 2nd place among six teams! The prize was a hand sponsored by{" "}
            <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://www.seedrobotics.com/" target="_blank">Seed Robotics</a>.
            Here is a{" "}
            <a href="">
              video
            </a>
            of the show (I sometimes cringe at how nervous I was, but I still would do it all over again)</p>

          Here are some solo videos of each part of the performance:
          <ul className="list-disc pl-4">
            <li>
              <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://www.youtube.com/watch?v=Lp4dbFI_9yg" target="_blank">
                Oscar - Sound check “Billie Jean”
              </a>
            </li>
            <li>
              <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://www.youtube.com/watch?v=ioqXlPz_vdU" target="_blank">
                Polaris - Sound check
              </a>
            </li>
            <li>
              <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://www.youtube.com/watch?v=982TSPjSlCA" target="_blank">
                Snobots Band - Knocking on Heaven’s Door
              </a>
            </li>
            <li>
              <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://www.youtube.com/watch?v=eJbvUqCcffI" target="_blank">
                Snobots Band - Glorious Years
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img className="relative z-10 object-cover rounded-md h-96 object-[50%_35%]" src="/iros2.jpg" alt="" />
      <small className="italic">Dr. Meng Cheng Lau (Post Doc Fellow), Chris Melendez (me)</small>
      <p>
        <a class="inline-block text-blue-500 underline hover:text-blue-400" href="https://www.youtube.com/watch?v=mRNElPifuhc" target="_blank">
          An interesting video highlight
        </a>{" "}
        where my profesor talked for a bit… and I got a cameo!</p>
    </div>
  )
}

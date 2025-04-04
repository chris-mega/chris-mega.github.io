import Link from 'next/link'

export default function Competitions() {
  return (
    <div id="competitions" className="flex flex-col bg-red-50 w-full items-center gap-4 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Competitions</h1>
      <section className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mg:grid-cols-2 xl:grid-cols-3">
          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <Link href="/competition/frc2025" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                Mentoring for FRC 2025
              </Link>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Mentored Grade 7-12 students in FIRST Robotics Competition (FRC), focused on leading the software team.
              </p>

              <p className="mt-3 text-sm text-blue-500">February 26, 2025</p>
            </div>
          </div>

          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src="/iros1.jpg" alt="" />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <Link href="/competition/iros2019" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                Robot Magic and Music: Humanoid Application Challenge
              </Link>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                2nd place at IROS 2019 Macau representing team Snobots for University of Manitoba with a robot band (a robot pianist, a robot drummer and a couple humans)
              </p>

              <p className="mt-3 text-sm text-blue-500">November 10, 2019</p>
            </div>
          </div>
          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src="/fira2019-1.jpg" alt="" />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <Link href="/competition/fira2019" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                FIRA 2019 South Korea- Hurocup Kid Size
              </Link>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                4th place in participation with team Snobots-KidSize for University of Manitoba in a robot olympics
              </p>

              <p className="mt-3 text-sm text-blue-500">August 25, 2019</p>
            </div>
          </div>
          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src="/fira2018-1.jpg" alt="" />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <Link href="/competition/fira2018" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                FIRA 2018 Taiwan - Hurocup Kid Size
              </Link>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                4th place in participation with team Snobots-KidSize for University of Manitoba in a robot olympics
              </p>

              <p className="mt-3 text-sm text-blue-500">August 23, 2018</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
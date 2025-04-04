import Image from "next/image";

export default function About() {
  return (
    <div id="home" className="container px-6 py-16">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              className="object-cover w-40 h-40 rounded-full"
              src="https://media.licdn.com/dms/image/v2/D5603AQEsWHropnthKA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727508823777?e=1748476800&v=beta&t=ms0Wng24uYaA6wjyBHnQhLPnKhzLHkKLBksr06tqPQ8"
              alt="Chris Melendez"
              width={180}
              height={38}
              priority
            />
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Chris Melendez</h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Software Engineer</p>
            <div className="flex mt-4 -mx-1.5 ">
              <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://github.com/chris-mega" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.4 15.4 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z" /></svg>
              </a>

              <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://www.linkedin.com/in/chrismelendezg" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1000 1000"><path fill="currentColor" d="M196.064.25C88.347.25.187 88.408.187 196.127v607.841c0 107.717 88.158 195.845 195.877 195.845h607.841c107.718 0 195.845-88.127 195.845-195.845V196.127C999.75 88.41 911.623.25 803.905.25zm49.266 164.948c51.648 0 83.461 33.906 84.443 78.475c0 43.585-32.797 78.444-85.442 78.444h-.969c-50.665 0-83.412-34.857-83.412-78.444c0-44.568 33.738-78.475 85.379-78.475zm445.08 208.31c99.329 0 173.79 64.922 173.79 204.436v260.449H713.247V595.406c0-61.06-21.847-102.718-76.476-102.718c-41.704 0-66.562 28.078-77.476 55.202c-3.987 9.704-4.967 23.257-4.967 36.832v253.671H403.375s1.981-411.613 0-454.233h150.984v64.324c20.06-30.95 55.942-74.977 136.051-74.977zm-521.556 10.685h150.953v454.202H168.854z" /></svg>
              </a>

              <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="mailto:chris.melendezg@gmail.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15t1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15" /></svg>
              </a>

              <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="/ChrisMelendez-2024.pdf" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" /><path d="M11 12.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0m2-4.5l1.5 6l1.5-6" /></g></svg>
              </a>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Biography</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Hola! I'm a full stack developer with experience in leveraging technology to solve real-world challenges.
            I specialize in building robust, scalable web applications and crafting intuitive user interfaces. I am also passionate about robotics.
          </p>
        </div>
      </div>
    </div>
  );
}

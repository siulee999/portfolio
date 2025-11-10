import { projects } from "../data/projects.js";

const Projects = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="heading-2">
            Projects
          </h2>
        </div>

        <div
          className="mx-auto max-w-2xl flex flex-col gap-x-8 gap-y-10 mt-10 lg:mx-0 lg:max-w-none items-center"
        >
          {projects.map(({ id, title, imageSrc, imageAlt, description, technologies, liveDemoLink, codeLink }) => (
            <div
              key={id}
              className="max-w-5xl flex flex-col lg:grid lg:grid-cols-[400px_1fr] lg:grid-rows-[280px] border-2 p-4 rounded-2xl border-gray-700 w-full text-white"
            >
              <div className="w-full border-2 border-gray-700 lg:h-full rounded-2xl py-3">
                <img
                  alt={imageAlt}
                  src={imageSrc}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="flex flex-col lg:h-full lg:justify-between py-6 lg:px-6 lg:py-3">
                <div>
                  <h3 className="text-xl/6 font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-5 text-sm/6 text-gray-400">
                    {description}
                  </p>
                  <div className="*:rounded-full *:bg-indigo-800/60 *:px-3 *:py-1.5 font-medium text-xs text-gray-300 flex gap-2 my-3 flex-wrap">
                    {technologies.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-x-6 text-white">
                  <a
                    href={liveDemoLink}
                    target="_blank"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Live Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    className="text-sm/6 font-semibold text-white flex items-center hover:text-gray-300 flex-wrap"
                  >
                    Source &nbsp;
                    <span className="shrink-0">Code &#x2197;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Projects
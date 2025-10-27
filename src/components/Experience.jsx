import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="heading-2">
            Experience
          </h2>
        </div>

        <div className="mx-auto flex flex-col items-center gap-x-8 gap-y-10 mt-10 lg:mx-0 w-full">
          {experience.map(({ title, company, period, description }) => (
            <div
              key={title}
              className="border-2 border-gray-700 rounded-2xl p-6 max-w-2xl"
            >
              <p className="text-xs text-gray-400">
                {period}
              </p>
              <h3 className="mt-2 text-lg/6 font-semibold text-white">
                <span>{title}</span>
                {" "}at <span>{company}</span>
              </h3>
              <p className="mt-4 text-sm/6 text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
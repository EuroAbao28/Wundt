import React from "react";
import b1 from "../../assets/b1.jpg";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s5 from "../../assets/s5.jpg";
import SectionHeader from "../SectionHeader";

function AboutSection(props, ref) {
  return (
    <div
      ref={ref}
      id="about"
      style={{ backgroundImage: `url(${b1})` }}
      className="mt-20 sm:mt-40 bg-center bg-cover"
    >
      <div className="p-6 lg:p-12 bg-radial-[at_-35%_15%] from-green-500/90 to-emerald-600/90 to-75%">
        <div className=" max-w-7xl mx-auto">
          <SectionHeader title={"About us"} colorMode={"white"} />

          <div className="flex max-lg:flex-col mt-12 gap-12 lg:gap-8">
            <div className="flex-1 gap-4 hidden lg:flex">
              {/* horizontal div */}
              <div className="flex flex-col flex-1 gap-4">
                <div
                  style={{ backgroundImage: `url(${s1})` }}
                  className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden flex-1"
                >
                  <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-xs md:text-sm row-start-2">
                    <h3 className="font-semibold uppercase">Compassion</h3>
                    <p className="mt-4">
                      Deliver services with utmost care founded on love for
                      humanity.
                    </p>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${b1})` }}
                  className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden flex-1"
                >
                  <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-xs md:text-sm row-start-2">
                    <h3 className="font-semibold uppercase">Accessibility</h3>
                    <p className="mt-4">Bring services closer to clients.</p>
                  </div>
                </div>
              </div>

              {/* horizontal div */}
              <div className="flex flex-col flex-1 gap-4">
                <div
                  style={{ backgroundImage: `url(${s2})` }}
                  className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden flex-1"
                >
                  <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-xs md:text-sm row-start-2">
                    <h3 className="font-semibold uppercase">Responsibility</h3>
                    <p className="mt-4">
                      Respond to clients needs the best possible way without
                      prejudice to race, sex, socio-economic status, or any
                      other factors.
                    </p>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${s5})` }}
                  className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden flex-1"
                >
                  <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-xs md:text-sm row-start-2">
                    <h3 className="font-semibold uppercase">Excellence</h3>
                    <p className="mt-4">
                      Deliver services at par professional and ethical standards
                      through licensed and competent human resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-8 text-white">
              <div className="flex-1">
                <h3 className="uppercase font-semibold text-base md:text-lg">
                  History
                </h3>
                <p className="text-xs md:text-sm mt-4">
                  The Wundt Psychological Institute (formerly{" "}
                  <span className="italic">Wundt Institute</span>) was conceived
                  through the wishful thinking of its founder and director, Dr.
                  Nhorly U. Domenden. His decades of exposure in the academe and
                  clinical psychology practice opened his eyes to the need for
                  an institution that caters to the various psychological
                  counseling and educational needs of Pangasinenses. With zeal
                  and enthusiasm, guided by his desire to "
                  <span className="italic">create opportunities</span>", he took
                  the risk of establishing the Wundt Psychological Institute.
                  The institute was founded in January 2015 and has since
                  rendered services to various academic, legal, industrial, and
                  clinical institutions, primarily in Pangasinan, before
                  expanding its operations to several provinces in North and
                  Central Luzon.
                </p>
              </div>

              <div className="flex-1 gap-4 flex max-sm:flex-col lg:hidden">
                {/* horizontal div */}
                <div className="flex flex-col flex-1 gap-4">
                  <div
                    style={{ backgroundImage: `url(${s1})` }}
                    className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden flex-1"
                  >
                    <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-xs md:text-sm row-start-2">
                      <h3 className="font-semibold uppercase">Compassion</h3>
                      <p className="mt-4">
                        Deliver services with utmost care founded on love for
                        humanity.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ backgroundImage: `url(${b1})` }}
                    className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden flex-1"
                  >
                    <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-xs md:text-sm row-start-2">
                      <h3 className="font-semibold uppercase">Accessibility</h3>
                      <p className="mt-4">Bring services closer to clients.</p>
                    </div>
                  </div>
                </div>

                {/* horizontal div */}
                <div className="flex flex-col flex-1 gap-4">
                  <div
                    style={{ backgroundImage: `url(${s2})` }}
                    className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden flex-1"
                  >
                    <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-xs md:text-sm row-start-2">
                      <h3 className="font-semibold uppercase">
                        Responsibility
                      </h3>
                      <p className="mt-4">
                        Respond to clients needs the best possible way without
                        prejudice to race, sex, socio-economic status, or any
                        other factors.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{ backgroundImage: `url(${s5})` }}
                    className="bg-center bg-cover grid grid-rows-2 rounded overflow-hidden flex-1"
                  >
                    <div className="h-full p-4 bg-white/80 text-emerald-800 backdrop-blur-sm text-xs md:text-sm row-start-2">
                      <h3 className="font-semibold uppercase">Excellence</h3>
                      <p className="mt-4">
                        Deliver services at par professional and ethical
                        standards through licensed and competent human
                        resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs md:text-sm grid grid-cols-2 gap-4 mt-4">
                <div className="outline-2 outline-white/15 rounded p-4 bg-white/10 max-sm:col-span-2">
                  <h3 className="font-semibold uppercase">Mission</h3>
                  <p className="mt-4">
                    Deliver quality, accessible, and affordable psychological,
                    counseling and educational services that suit the needs of
                    its clientele.
                  </p>
                </div>

                <div className="outline-2 outline-white/15 rounded p-4 bg-white/10 max-sm:col-span-2">
                  <h3 className="font-semibold uppercase">Vision</h3>
                  <p className="mt-4">
                    Be the leading provider-of-choice if psychological,
                    counseling and educational services in North and Central
                    Luzon and be recognized nationally.
                  </p>
                </div>

                <div className="outline-2 outline-white/15 rounded p-4 bg-white/10 col-span-2">
                  <h3 className="font-semibold uppercase">Objectives</h3>
                  <ol className="list-disc mt-4 pl-4">
                    <li>
                      Promote ethical and high standards practice of
                      psychological, counseling and educational services.
                    </li>
                    <li>
                      Provide affordable services without sacrificing its
                      quality.
                    </li>
                    <li>Extend free services to less fortunate individuals.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(AboutSection);

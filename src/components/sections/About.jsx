import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Angular",
    "TypeScript",
    "TailwindCSS"
  ];

  const otherSkills = [
    "oAuth2.0",
    "openID connect",
    "RESTful APIs",
    "Git & GitHub",
    "Graph API",
    "Postman",
    "JWT",
  ];

  const azureSkills = [
    "Azure AD",
    "Logic Apps",
    "Azure Functions",
    "Azure App Services",
  ];

  const backendSkills = ["Dot Net Core", "SQL Server", "Azure"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Azure Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {azureSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Masters in Computer Science </strong> Mumbai University
                  (2013-2018)
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=knD4n4HrIj4">Smart Web Browser</a>
                  - Developed a secure and efficient web browser using C# and
                  .NET Framework, featuring tabbed browsing, bookmarks, and a
                  user-friendly interface.
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=aqvtWKQsuFM">Smart Helmet</a>
                  - Created an IoT-based smart helmet using Rasberry Pi to enhance
                  rider safety with features like accident detection and GPS
                  tracking.
                </li>

                <li>
                  <a href="https://www.youtube.com/watch?v=ZrKun1T7lX0">Covid Tracker</a>
                  - Developed a Covid-19 tracking application using Angular and
                  Postman API to provide real-time updates on infection rates and
                  safety guidelines.
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Senior Consultant at Plante Moran (2023 - Present){" "}
                  </h4>
                  <p>
                   
  <li>Lead the team of 4 developers to build and maintain web applications using .NET Core API, sql server, logic apps</li>
  <li> Commincated with clients to gather requirements and provide technical solutions.</li>
  <li>planned the project roadmap and ensured timely delivery of milestones.</li>
  <li>Mentored junior developers and conducted code reviews to maintain code quality.</li>
  <li> Collaborated with cross-functional teams including designers, product managers, and QA engineers to deliver high-quality software solutions.</li>
  <li> Delivered multiple successful project deployments, resulting in a 20% increase in client satisfaction.</li>

                   

                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Developer Consultant at Microsoft (2021-2023){" "}
                  </h4>
                  <p>
                    Expert Consultant in Microsoft Graph API.
                  </p>
                   <h4 className="font-semibold">
                    {" "}
                    Atos Syntel (2018-2021){" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

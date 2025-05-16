"use client";
import Accordion from "@/app/Accordion";
import {
  AlignCenterVertical,
  Blueprint,
  Clock,
  Cube,
  CubeFocus,
  Desktop,
  Lightning,
  MarkerCircle,
  Pen,
  PencilLine,
  Radio,
  User,
  Video,
  XLogo,
} from "@phosphor-icons/react";
export default function Services() {
  const toggleModal = (id) => {
    document.getElementById(id).classList.toggle("hidden");
  };
  return (
    <div>
      <div className="modal hidden" id="preview-web-design">
        <div className="modal-content relative">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="100%"
            src="https://embed.figma.com/design/1prXieCqoEHtEa7W1oFeom/Example-Project?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
          <button
            className="py-2 px-4 bg-black text-white rounded-md font-[600] text-sm cursor-pointer hover:bg-gray-700 transition duration-200 absolute top-7 right-7 border-1 border-gray-600"
            onClick={() => toggleModal("preview-web-design")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="modal hidden" id="preview-product-design">
        <div className="modal-content relative">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="100%"
            src="https://embed.figma.com/design/1prXieCqoEHtEa7W1oFeom/Example-Project?node-id=2-3&embed-host=share"
            allowFullScreen
          ></iframe>
          <button
            className="py-2 px-4 bg-black text-white rounded-md font-[600] text-sm cursor-pointer hover:bg-gray-700 transition duration-200 absolute top-7 right-7 border-1 border-gray-600"
            onClick={() => toggleModal("preview-product-design")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="modal hidden" id="preview-brand-design">
        <div className="modal-content relative">
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="100%"
            src="https://embed.figma.com/design/1prXieCqoEHtEa7W1oFeom/Example-Project?node-id=2-2&embed-host=share"
            allowFullScreen
          ></iframe>
          <button
            className="py-2 px-4 bg-black text-white rounded-md font-[600] text-sm cursor-pointer hover:bg-gray-700 transition duration-200 absolute top-7 right-7 border-1 border-gray-600"
            onClick={() => toggleModal("preview-brand-design")}
          >
            Close
          </button>
        </div>
      </div>
      <div className="mx-5 sm:mx-[30rem]">
        <div className="bg-gray-100 border-gray-200 border-1 bg-bottom bg-cover rounded-lg mt-5 p-5 flex justify-between sm:flex-row flex-col">
          <h3 className="font-[600] text-xl mb-2">Web Design</h3>
          <div className="sm:w-[50%]">
            <p className="font-[500] opacity-50 mb-5">
              I provide web design services for startups and brands. I can
              create landing pages, e-commerce sites, and other web
              applications.
            </p>
            <hr className="w-full opacity-20" />
            <div className="accordion mt-5">
              <div
                className="accordion-title font-[600] opacity-75 flex justify-between items-center"
                onClick={() => toggleModal("preview-web-design")}
              >
                What's Included
                <button className="py-2 px-4 bg-black text-white rounded-md font-[600] text-sm cursor-pointer hover:bg-gray-700 transition duration-200">
                  Open
                </button>
              </div>
              <Accordion
                title="Process"
                content={
                  <>
                    <ul className="list-decimal ml-5">
                      <li className="font-[600]">Project Brief</li>
                      <p>
                        I provide a form with questions that will help me better
                        understand the scope and details of the project. From
                        this I assemble a project brief, which you will review.
                        Optionally, you can supply your own brief.
                      </p>
                      <li className="font-[600]">Design</li>
                      <p>
                        I create a design that meets your requirements and
                        preferences. This includes wireframes, mockups, and
                        prototypes.
                      </p>
                      <li className="font-[600]">Review</li>
                      <p>
                        I review the design with you and gather feedback. This
                        is an iterative process that may involve multiple
                        rounds.
                      </p>
                      <li className="font-[600]">Revision</li>
                      <p>
                        I make revisions to the design based on your feedback.
                        This may involve changes to the layout, colors, and
                        other elements.
                      </p>
                      <li className="font-[600]">Handoff</li>
                      <p>
                        I hand off the final design files to you. This includes
                        all assets and documentation needed for implementation.
                      </p>
                      <li className="font-[600]">Maintenance</li>
                      <p>
                        I provide ongoing maintenance and support for the
                        design. This includes updates, bug fixes, and other
                        improvements. This is charged separately on a weekly
                        basis.
                      </p>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-100 border-gray-100 border-1 bg-bottom bg-cover rounded-lg mt-5 p-5 flex justify-between sm:flex-row flex-col">
          <div>
            <h3 className="font-[600] text-xl mb-2">Product Design</h3>
            <p className="opacity-50 font-[500] italic">(UI/UX)</p>
          </div>
          <div className="sm:w-[50%]">
            <p className="font-[500] opacity-50 mb-5">
              I offer product design services for web and mobile applications.
              This includes user research, wireframing, prototyping, and other
              design work.
            </p>
            <hr className="w-full opacity-20" />
            <div className="accordion mt-5">
              <div
                className="accordion-title font-[600] opacity-75 flex justify-between items-center"
                onClick={() => toggleModal("preview-product-design")}
              >
                What's Included
                <button className="py-2 px-4 bg-black text-white rounded-md font-[600] text-sm cursor-pointer hover:bg-gray-700 transition duration-200">
                  Open
                </button>
              </div>
              <Accordion
                title="Process"
                content={
                  <>
                    <ul className="list-decimal ml-5">
                      <li className="font-[600]">Project Brief</li>
                      <p>
                        I provide a form with questions that will help me better
                        understand the scope and details of the project. From
                        this I assemble a project brief, which you will review.
                        Optionally, you can supply your own brief.
                      </p>
                      <li className="font-[600]">Design</li>
                      <p>
                        I create a design that meets your requirements and
                        preferences. This includes wireframes, mockups, and
                        prototypes.
                      </p>
                      <li className="font-[600]">Review</li>
                      <p>
                        I review the design with you and gather feedback. This
                        is an iterative process that may involve multiple
                        rounds.
                      </p>
                      <li className="font-[600]">Revision</li>
                      <p>
                        I make revisions to the design based on your feedback.
                        This may involve changes to the layout, colors, and
                        other elements.
                      </p>
                      <li className="font-[600]">Handoff</li>
                      <p>
                        I hand off the final design files to you. This includes
                        all assets and documentation needed for implementation.
                      </p>
                      <li className="font-[600]">Maintenance</li>
                      <p>
                        I provide ongoing maintenance and support for the
                        design. This includes updates, bug fixes, and other
                        improvements. This is charged separately on a weekly
                        basis.
                      </p>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-white border-gray-200 border-1 bg-bottom bg-cover rounded-lg mt-5 p-5 flex justify-between sm:flex-row flex-col">
          <div>
            <h3 className="font-[600] text-xl mb-2">Industrial Design</h3>
          </div>
          <div className="sm:w-[50%]">
            <p className="font-[500] opacity-50 mb-5">
              I can provide industrial design services for products, packaging,
              and other physical items. This includes 3D modeling, prototyping,
              and other design work.
            </p>
            <hr className="w-full opacity-20" />
            <div className="accordion mt-5">
              <Accordion
                title="What's Included"
                content={
                  <>
                    <ul className="list-disc ml-5">
                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <MarkerCircle /> Digital/Physical Renders
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Cube /> 3D Models
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <PencilLine /> Sketching
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Blueprint /> Ideation
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Video /> Product Animations
                        </div>
                      </li>
                    </ul>
                  </>
                }
              />
              <Accordion
                title="Process"
                content={
                  <>
                    <ul className="list-decimal ml-5">
                      <li className="font-[600]">Project Brief</li>
                      <p>
                        I provide a form with questions that will help me better
                        understand the scope and details of the project. From
                        this I assemble a project brief, which you will review.
                        Optionally, you can supply your own brief.
                      </p>
                      <li className="font-[600]">Ideation</li>
                      <p>
                        I begin by ideating the design. This process involves
                        many rounds of iterative sketching and brainstorming
                        till we land on an idea you like.
                      </p>
                      <li className="font-[600]">Refinement</li>
                      <p>
                        I then refine the design. This involves creating renders
                        using markers and digital tools. This is again an
                        iterative process that may involve multiple rounds.
                      </p>
                      <li className="font-[600]">Prototypes</li>
                      <p>
                        I create prototypes of the design. This includes
                        physical models, 3D prints, and other representations of
                        the final product. This ensures that the design is both
                        functional and easy to use. During this process, I also
                        consider manufacturing processes and materials.
                      </p>
                      <li className="font-[600]">3D Modeling</li>
                      <p>
                        I'll then create 3D models of the design, and then
                        render them using Twinmotion. This is a very time
                        consuming process, and may take a anywhere from a few
                        days to a few weeks to complete.
                      </p>
                      <li className="font-[600]">Handoff</li>
                      <p>
                        I will then send you the final design files. This
                        includes sketches, presentation images, 3D models,
                        renders, and other files. For an extra fee, I can also
                        send you the prototypes.
                      </p>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-orange-200 border-gray-100 border-1 bg-bottom bg-cover rounded-lg mt-5 p-5 flex justify-between sm:flex-row flex-col">
          <div>
            <h3 className="font-[600] text-xl mb-2">Brand Design</h3>
          </div>
          <div className="sm:w-[50%]">
            <p className="font-[500] opacity-50 mb-5">
              If you are starting a new business or rebranding an existing one,
              I can help you create a brand identity that reflects your values
              and vision. This includes logo design, color palette, typography,
              and other elements.
            </p>
            <hr className="w-full opacity-20" />
            <div className="accordion mt-5">
              <div
                className="accordion-title font-[600] opacity-75 flex justify-between items-center"
                onClick={() => toggleModal("preview-brand-design")}
              >
                What's Included
                <button className="py-2 px-4 bg-black text-white rounded-md font-[600] text-sm cursor-pointer hover:bg-gray-700 transition duration-200">
                  Open
                </button>
              </div>
              <Accordion
                title="Process"
                content={
                  <>
                    <ul className="list-decimal ml-5">
                      <li className="font-[600]">Project Brief</li>
                      <p>
                        I provide a form with questions that will help me better
                        understand the scope and details of the project. From
                        this I assemble a project brief, which you will review.
                        Optionally, you can supply your own brief.
                      </p>
                      <li className="font-[600]">Design</li>
                      <p>
                        I create a design that meets your requirements and
                        preferences. This includes ideation, variations, and
                        more.
                      </p>
                      <li className="font-[600]">Review</li>
                      <p>
                        I review the design with you and gather feedback. This
                        is an iterative process that may involve multiple
                        rounds.
                      </p>
                      <li className="font-[600]">Revision</li>
                      <p>
                        I make revisions to the design based on your feedback.
                        This may involve changes to the layouts, colors, and
                        other elements.
                      </p>
                      <li className="font-[600]">Handoff</li>
                      <p>
                        I hand off the final design files to you. This includes
                        all assets and documentation needed for implementation.
                      </p>
                      <li className="font-[600]">Maintenance</li>
                      <p>
                        I provide ongoing maintenance and support for the
                        design. This includes updates, bug fixes, and other
                        improvements. This is charged separately on a weekly
                        basis.
                      </p>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-black text-white border-gray-100 border-1 bg-bottom bg-cover rounded-lg mt-5 p-5 flex justify-between sm:flex-row flex-col">
          <div>
            <h3 className="font-[600] text-xl mb-2">Motion Design</h3>
          </div>
          <div className="sm:w-[50%]">
            <p className="font-[500] opacity-50 mb-5">
              I offer motion design services for advertising, marketing, and
              other promotional materials. This includes animation, video
              editing, and other visual effects.
            </p>
            <hr className="w-full opacity-20" />
            <div className="accordion mt-5">
              <Accordion
                title="What's Included"
                content={
                  <>
                    <ul className="list-disc ml-5">
                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Video /> Animations
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <AlignCenterVertical /> Video Editing
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Radio /> Advertising
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <CubeFocus /> Visual Effects
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <XLogo /> Marketing
                        </div>
                      </li>
                    </ul>
                  </>
                }
              />
              <Accordion
                title="Process"
                content={
                  <>
                    <ul className="list-decimal ml-5">
                      <li className="font-[600]">Project Brief</li>
                      <p>
                        I provide a form with questions that will help me better
                        understand the scope and details of the project. From
                        this I assemble a project brief, which you will review.
                        Optionally, you can supply your own brief.
                      </p>
                      <li className="font-[600]">Editing</li>
                      <p>
                        I then assemble the edits and video based on the brief.
                        This includes cutting, trimming, and other edits to the
                        video.
                      </p>
                      <li className="font-[600]">Review</li>
                      <p>
                        I review the video with you and gather feedback. This is
                        an iterative process that may involve multiple rounds.
                      </p>
                      <li className="font-[600]">Revision</li>
                      <p>
                        I make revisions to the video based on your feedback.
                        This may involve changes to the text, timing, and other
                        elements.
                      </p>
                      <li className="font-[600]">Handoff</li>
                      <p>
                        I hand off the final files to you. You will receive the
                        project files as well as all the assets I used.
                      </p>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>

        <hr className="w-full opacity-20 mt-10" />

        <div className="bg-gray-100 border-gray-200 border-1 bg-bottom bg-cover rounded-lg my-10 p-5 flex justify-between sm:flex-row flex-col">
          <h3 className="font-[600] text-xl mb-2">Retainer Contract</h3>
          <div className="sm:w-[50%]">
            <p className="font-[500] opacity-50 mb-5">
              If a single project is not enough, I offer a retainer contract.
              This allows you to have a dedicated designer on your team for a
              set number of hours per week. This is ideal for startups and
              brands that need ongoing design support. This is much more cost
              effective than hiring a full-time designer or freelancer.
            </p>
            <hr className="w-full opacity-20" />
            <div className="accordion mt-5">
              <Accordion
                title="What's Included"
                open={true}
                content={
                  <>
                    <ul className="list-disc ml-5">
                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Pen /> Web Design
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Desktop /> Product Design
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <PencilLine /> Industrial Design
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Blueprint /> Brand Design
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Video /> Motion Design
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <User /> Design Support
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Clock /> 3-5 Hours/Week
                        </div>
                      </li>

                      <li className="font-[600]">
                        <div className="flex gap-1.5 items-center">
                          <Lightning /> Fast Turnaround
                        </div>
                      </li>
                    </ul>
                  </>
                }
              />
              <Accordion
                title="Process"
                content={
                  <>
                    <ul className="list-decimal ml-5">
                      <li className="font-[600]">Onboarding</li>
                      <p>
                        I add you as a collaborator to a personal Figma team.
                        Optionally, you can add me to your team if one exists.
                      </p>
                      <li className="font-[600]">Design Support</li>
                      <p>
                        I provide design support for your projects. This
                        includes creation, reviews, feedback, and other
                        improvements.
                      </p>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

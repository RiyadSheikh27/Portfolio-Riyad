import { ProjectProps } from "../../types";
interface ModalProps {
  project: ProjectProps;
}

const Modal: React.FC<ModalProps> = ({ project }) => {
  const { about, features, technologies, name } = project;

  return (
    <>
      <input
        type="checkbox"
        id="projectDetailsModal"
        className="modal-toggle"
      />
      <div className="modal bg-[#010504fa]">
        <div className="my-modal-box lg:max-w-[75%] max-h-[95%] my-glass2 p-8 rounded-lg border border-main-color lg:overflow-auto overflow-y-scroll">
          {/* ============= Modal Content =============== */}
          <h3 className="font-black lg:text-xl text-xs text-center pb-5">
            {name}
          </h3>
          <p className="lg:text-center text-xs lg:text-[1em] font-bold">
            {about}
          </p>
          <div className="lg:grid grid-cols-7 pt-10 gap-10">
            <div className="col-span-5 lg:mb-0 mb-10">
              <h4 className="font-bold pb-4">
                Here are some most key features of this website:
              </h4>
              <ul className="list-inside list-disc space-y-3 text-desc-color">
                {features.map((feature) => (
                  <li key={feature} className="my-list relative">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <p className="font-bold pb-4">Technologies:</p>
              <ul className="list-inside list-disc space-y-3 text-desc-color">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="my-list relative font-bold text-main-color"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* ============ Close Button ================= */}
          <div className="modal-action">
            <label
              htmlFor="projectDetailsModal"
              className="btn btn-xs btn-circle bg-[#0affad99] hover:bg-[#1ed07d] border-0 text-white absolute top-4 right-4"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

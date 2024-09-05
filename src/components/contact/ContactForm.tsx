import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const serviceId = "service_9m29jdb";
  const templateId = "template_6ndwom5";
  const publicKey = "XcyHmQAXgIKZfFVZ0";

  const handleFormSubmit: SubmitHandler<Inputs> = () => {
    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          reset();
        });
    }
  };

  return (
    <form
      ref={formRef}
      data-aos="fade-left"
      data-aos-duration="2000"
      className="col-span-7 bg-[#1a2436e6] p-6 rounded-lg border border-sec-color lg:mt-0 mt-10"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="form-control">
        <label className="label">
          <span className="">Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: true })}
          className="border border-sec-color rounded-md py-3 px-5 bg-[#1a2436e6] text-desc-color focus:border-main-color focus:outline-none"
        />
        {errors.name && (
          <span className="text-xs italic text-red-500">
            This field is required
          </span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="">Email</span>
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          {...register("email", { required: true })}
          className="border border-sec-color rounded-md py-3 px-5 bg-[#1a2436e6] text-desc-color focus:border-main-color focus:outline-none"
        />
        {errors.email && (
          <span className="text-xs italic text-red-500">
            This field is required
          </span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="">Subject</span>
        </label>
        <input
          type="text"
          placeholder="Message Title"
          {...register("subject", { required: true })}
          className="border border-sec-color rounded-md py-3 px-5 bg-[#1a2436e6] text-desc-color focus:border-main-color focus:outline-none"
        />
        {errors.subject && (
          <span className="text-xs italic text-red-500">
            This field is required
          </span>
        )}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="">Message</span>
        </label>
        <textarea
          {...register("message", { required: true })}
          className="border border-sec-color rounded-md py-3 px-5 bg-[#1a2436e6] text-desc-color focus:border-main-color focus:outline-none"
          cols={30}
          rows={4}
          placeholder="Write Your Message"
        ></textarea>
        {errors.message && (
          <span className="text-xs italic text-red-500">
            This field is required
          </span>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 border-0 rounded shadow-lg btn lg:btn-md btn-sm primary-btn bg-main-color hover:bg-main-color shadow-sec-color"
      >
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = async (data) => {
    setStatus("sending");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
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
        disabled={status === "sending"}
        className="mt-4 border-0 rounded shadow-lg btn lg:btn-md btn-sm primary-btn bg-main-color hover:bg-main-color shadow-sec-color disabled:opacity-60"
      >
        <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
      </button>
      {status === "success" && (
        <p className="mt-3 text-sm text-main-color">
          Message sent successfully. I will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-500">
          Could not send your message. Please try again or email me directly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;

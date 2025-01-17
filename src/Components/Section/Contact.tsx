import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-auto  pt-32 pb-10">
      <div className="flex flex-col text-primary w-full h-auto gap-5 px-5">
        <h1 className="text-5xl font-bold text-center">Contact</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-10 h-auto w-full ">
          <div className="flex items-center justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.97475974876!2d106.7846188!3d-6.264559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a5f4fbee47%3A0x682837113c4ea854!2sPondok%20Indah%20Mall%201!5e0!3m2!1sid!2sid!4v1719739258681!5m2!1sid!2sid"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-5">
            <form
              action="mailto:puturivana.d@gmail.com"
              className="flex flex-col gap-2 lg:gap-5"
            >
              <div className="flex flex-col lg:flex-row  gap-2 lg:gap-10">
                <input type="text" placeholder="Nama Depan" className="input input-bordered w-full max-w-xs bg-white text-black  "/>
                <input type="text" placeholder="Nama Belakang" className="input input-bordered w-full max-w-xs bg-white text-black"/>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                <input type="text" placeholder="people" className="input input-bordered w-full max-w-xs bg-white text-black"/>
                <input type="Date" className="input input-bordered w-full max-w-xs bg-white text-black"/>
              </div>
              <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs bg-white text-black"/>
              <label className="form-control" >
                <textarea
                  className="textarea textarea-bordered h-24 text-black bg-white"
                  placeholder="Request"
                ></textarea>
              </label>
              <div className="flex justify-center  w-full">
                <button className="btn btn-primary " type="submit">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

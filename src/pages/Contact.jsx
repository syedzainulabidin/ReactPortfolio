import React from "react";
import BackgroundText from "../components/BackgroundText";

const Contact = () => {
  return (
    <>
      <div className="portfolio-container w-full h-screen overflow-y-scroll overflow-x-hidden flex flex-col items-center pt-[100px]">
        <BackgroundText titleFirst="Contact" titleSecond={null} />
        <div
          className="
        w-[calc(100%-40px)]
         bg-[rgba(255,255,255,0.001)] 
         shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.308),0px_0px_5px_5px_rgba(0,0,0,0.308)] 
         rounded-[7px] 
         backdrop-blur-[30px]
         flex
         p-4
         gap-4
         max-[800px]:flex-col-reverse
         "
        >
          <div
            className="w-1/2
       
         flex
         flex-col
         gap-5
         max-[800px]:w-full
         "
          >
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full bg-[rgba(255,255,255,0.001)] 
         shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.308),0px_0px_5px_5px_rgba(0,0,0,0.308)] 
         rounded-xl 
         backdrop-blur-[30px] p-3 h-[80px] text-2xl outline-none border-none text-white"
            />
            <input
              placeholder="Enter your Email"
              type="text"
              className="w-full bg-[rgba(255,255,255,0.001)] 
         shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.308),0px_0px_5px_5px_rgba(0,0,0,0.308)] 
         rounded-xl 
         backdrop-blur-[30px] p-3 h-[80px] text-2xl outline-none border-none text-white"
            />
            <textarea
              type="text"
              placeholder="Enter your Message"
              className="w-full bg-[rgba(255,255,255,0.001)] 
         shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.308),0px_0px_5px_5px_rgba(0,0,0,0.308)] 
         rounded-xl 
         backdrop-blur-[30px] p-3 h-[160px] text-2xl outline-none border-none text-white resize-none"
            />
            <button
              className="w-full bg-[#3838ae] 
         shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.308),0px_0px_5px_5px_rgba(0,0,0,0.308)] 
         rounded-xl 
         backdrop-blur-[30px] p-3 h-[80px] text-2xl outline-none border-none text-white"
            >
              Send
            </button>
          </div>

          <div
            className="w-1/2
         bg-[rgba(255,255,255,0.001)] 
         shadow-[inset_2px_2px_4px_0px_rgba(255,255,255,0.308),0px_0px_5px_5px_rgba(0,0,0,0.308)] 
         rounded-xl
         backdrop-blur-[30px]
         flex
         h-full
         flex-wrap
         max-[800px]:w-full
         max-[800px]:h-[400px]
         text-white

         "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57933.404449344765!2d67.13289320000001!3d24.8352207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b07c73d0a7f%3A0xecc47fa378e95fd5!2sKorangi%2C%20Karachi!5e0!3m2!1sen!2s!4v1761308037294!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "12px",
              }}
              className="filter invert hue-rotate-[230deg]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="mt-100"></div>
      </div>
    </>
  );
};

export default Contact;

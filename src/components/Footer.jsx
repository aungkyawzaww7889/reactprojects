import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <section className=" mx-5 mt-auto bg-black text-white text-center py-2">
      © {date.getFullYear()}{" "}
      <a href="https://mms-it.com" className=" underline text-gray-300">
        MMS IT
      </a>
      . All rights reserved.
    </section>
  );
};

export default Footer;
import React from "react";
import { image } from "../constants";

const Clients = () => {
  return (
    <section className="mt-5">
      <div>
        <div className="flex flex-col">
          <div className=" mt-10">
            <img
              src={image.client}
              alt="client_Bg"
              className="w-[85vw] mx-auto rounded-lg"
            />
          </div>

          <div className="flex "></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

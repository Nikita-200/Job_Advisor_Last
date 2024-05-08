import React from "react";
import template from "./template.png"
import template2 from "./Template2.png"
import './Template.css'

function Templates({ setTemNo }) {
  return (
    <div>
      <div className=" p-5 flex justify-center flex-col text-center pt-16">
        <div>
          Choose Your Template!!
        </div>
        <div className="template-container">
          <button
            to="/template1"
            onClick={() => {
              setTemNo(1);
            }}
          >
            <span className="font-bold p-2">Template 1</span>
            <img
              src={template}
              alt="img"
              height="400"
              width="400"
              className=" hover:opacity-60 border-1 border-black"
            />
          </button>
          <button
            to="/template2"
            onClick={() => {
              setTemNo(2);
            }}
            className="h-80"
          >
            <span className="font-bold p-2">Template 2</span>

            <img
              src={template2}
              alt="img"
              height="400"
              width="400"
              className=" hover:opacity-60 object-fill"
            />
          </button>
          
        </div>
      </div>
      {/* <img src={template} alt="img" /> */}
    </div>
  );
}

export default Templates;

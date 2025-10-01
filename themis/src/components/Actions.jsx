import React from "react";
import { MdAddBox } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Actions = ({ addCard }) => {
  return (
    <div className="fixed top-0 w-full flex justify-end items-center gap-[1vw] text-emerald-800 text-[5vh] p-[1vw]">
      <MdAddBox
        onClick={() => {
          addCard();
        }}
      />
      <RiDeleteBin6Fill />
    </div>
  );
};

export default Actions;

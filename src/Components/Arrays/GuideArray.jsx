import React from "react";
import { BsFillEmojiKissFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";

const GuideArray = [
  {
    icon: (
      <BsFillEmojiKissFill className="bg-purple-300 w-6 h-6 p-1 rounded-[.3rem] text-red-500" />
    ),
    description: "Earn Rewards",
  },
  {
    icon: (
      <FaBookmark className="bg-purple-400 w-6 h-6 px-1 pb-2 rounded-[.3rem] text-purple-950" />
    ),
    description: "Exclusive Codes",
  },
  {
    icon: <RiComputerFill className="font-extrabold text-xl text-purple-800" />,
    description: "Seamless Integration",
  },
  {
    icon: <IoBagCheckSharp className="text-xl text-blue-800" />,
    description: "Your Personal Store",
  },
];

export default GuideArray;

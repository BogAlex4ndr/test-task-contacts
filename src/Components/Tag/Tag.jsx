import React from "react";

const Tag = ({ item }) => {
  return (
    <li className="bg-gray-400 rounded-3xl px-2 text-white font-bold hover:text-black hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
      {item.tag}
    </li>
  );
};

export default Tag;

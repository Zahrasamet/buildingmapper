'use client';

import { RiFacebookBoxFill, RiYoutubeFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const socialsData = [
  { icon: <RiFacebookBoxFill />, path: "https://facebook.com" },
  { icon: <RiYoutubeFill />, path: "https://youtube.com" },
  { icon: <RiTwitterFill />, path: "https://twitter.com" },
  { icon: <RiInstagramFill />, path: "https://instagram.com" },
];

function Socials({ containerStyles = "flex gap-4", iconStyle = "text-white text-xl hover:text-accent transition-colors duration-200" }) {
  return (
    <div className={containerStyles}>
      {socialsData.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyle}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default Socials;

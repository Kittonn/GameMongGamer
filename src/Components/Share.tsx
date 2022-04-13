import React from "react";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import { selectData } from "../Store/store";
import { useSelector } from "react-redux";

const Share: React.FC = () => {
  const url = "https://game-mong-gamer.vercel.app/";
  const { result } = useSelector(selectData);
  return (
    <div className="flex items-center justify-center mt-4">
      <span className="text-xl font-semibold">Share : </span>
      <span className="mx-1">
        <TwitterShareButton title={result} url={url}>
          <TwitterIcon size={36} />
        </TwitterShareButton>
      </span>
      <span className="mx-1">
        <FacebookShareButton quote={result} url={url}>
          <FacebookIcon size={36} />
        </FacebookShareButton>
      </span>
      <span className="mx-1">
        <LineShareButton title={result} url={url}>
          <LineIcon size={36} />
        </LineShareButton>
      </span>
    </div>
  );
};

export default Share;

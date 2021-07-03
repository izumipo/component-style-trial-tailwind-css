import * as React from "react";
import googleLogo from "../images/google_logo.png";

export const GoogleSearchLiked = () => {
  return (
    <div className="pt-14 flex flex-col items-center">
      <div className="mb-9 flex flex-col justify-end">
        <img src={googleLogo} className="w-64 h-22" />
      </div>
      <div className="flex justify-end mb-4 w-80 h-11">
        <input
          placeholder="Google で検索または URL を入力"
          className="pl-8 bg-white border-transparent rounded-3xl relative w-full shadow text-lg"
        />
      </div>
    </div>
  );
};

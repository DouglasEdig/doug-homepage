"use client";

import avatarImg from "../../assets/perfil.png";

import Work from "../Work/work";
import OnTheWeb from "../OnTheWeb/onTheWeb";
import Bio from "../Bio/bio";
import ILike from "../ILike/iLike";
import ContactMe from "../ContactMe/contactMe";

export default function Profile() {
  return (
    <div className=" flex flex-col items-center justify-center mt-20 p-8 text-black">
      <div className=" rounded-lg bg-navColor flex justify-center items-center px-24 py-4 text-lg font-light">
        <span>Hello, I&apos;m an indie app developer based in Brasil!</span>
      </div>
      <div className="flex gap-24 mt-8 ">
        <div>
          <h1 className="text-2xl font-medium">Douglas Silva</h1>
          <h1 className=" font-light ">
            Technology lover (Software Engineer - UX/UI - Girl&apos;s Father)
          </h1>
        </div>
        <div>
          <img
            className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src={avatarImg.src}
            alt=""
          />
        </div>
      </div>
      <Work />
      <OnTheWeb />
      <Bio />
      <ILike />
      <ContactMe />
    </div>
  );
}

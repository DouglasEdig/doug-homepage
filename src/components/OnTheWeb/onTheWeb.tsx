"use client";

import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import instagramIcon from "../../assets/instagram.svg";
import xIcon from "../../assets/twitter.svg";

export default function OnTheWeb() {
  return (
    <div className="mt-8">
      <h3 className=" text-2xl font-semibold underline pl-4">On the web</h3>
      <div
        className=" h-1/2 rounded-lg flex px-4 py-4 text-xl font-light"
        style={{ width: 650 }}
      >
        <ul>
          <li>
            <a
              href="https://github.com/DouglasEdig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-2 underline ">
                <span>
                  <img src={githubIcon.src} alt="github" />
                </span>
                @douglasEdig
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/douglasmsilvadev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-2 underline mt-2">
                <span>
                  <img src={linkedinIcon.src} alt="linkedin" />
                </span>
                Douglas Silva
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dodo_odouglas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-2 underline mt-2">
                <span>
                  <img src={instagramIcon.src} alt="instagram" />
                </span>
                @dodo_odouglas
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Ediigas1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-2 underline mt-2">
                <span>
                  <img src={xIcon.src} alt="x" />
                </span>
                @Ediigas1
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

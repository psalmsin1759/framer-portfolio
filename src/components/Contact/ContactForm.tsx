import React from "react";
import TitleLine from "../shared/TitleLine";
import { user } from "@/utils/data";

export default function ContactForm() {
  return (
    <div className="flex flex-col mt-16">
      <TitleLine title="Contact" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 mt-16">
          <p className="text-xl font-semibold">
            Looking to start a project or you need consultation? Feel free to
            contact me.
          </p>
          <p className="text-primary">{user.email}</p>
          <p>{user.primaryPhoneNumber}</p>
          <p>{user.secondaryPhoneNumber}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
          <div className="grid col-span-2 md:col-span-1">
            <input
              type="text"
              className="my-input"
              placeholder="Your name..."
            />
          </div>
          <div className="grid col-span-2 md:col-span-1">
            <input
              type="text"
              className="my-input"
              placeholder="Your email..."
            />
          </div>
          <div className="grid col-span-2">
            <textarea
              className="my-input"
            rows={5}
            placeholder="Message..."
            ></textarea>
          </div>
          <div className="grid col-span-2">
            <button className="w-full btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

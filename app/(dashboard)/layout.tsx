import React, {PropsWithChildren} from "react";
import {NavBar} from "@/components/NavBar";
import {SideBar} from "@/components/SideBar";

export default function layout({
  children,
}: PropsWithChildren) {
  return (
    <main className='grid lg:grid-cols-5'>
      {/* first-col hide on small screen */}
      <div className="hidden lg:block lg:col-span-1 lg: min-h-screen">
        <SideBar />
      </div>
      {/* second-col hide  dropdown on big screen */}
      <div className='lg:col-span-4'>
          {/* eslint-disable-next-line react/jsx-no-undef */}
            <NavBar />
          <div className='py-16 px-4 sm:px-8 lg:px-16'>{children}</div>
      </div>

    </main>
  );
}

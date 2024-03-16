import HeaderMobile from "@/components/Sidebar/HeaderMobile";
import MarginWidthWrapper from "@/components/Sidebar/MarginWidthWrapper";
import PageWrapper from "@/components/Sidebar/PageWrapper";
import SideNavBar from "@/components/Sidebar/SideNav";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex w-full">
        <SideNavBar />
        <main className="flex-1 flex items-center bg-primarycolor justify-center">
          <MarginWidthWrapper>
            <PageWrapper>
              <HeaderMobile />
              <div className="md:w-[85vw] w-[90vw] relative top-[35px] flex justify md:h-[93vh] h-[90vh]">
                {children}
              </div>
            </PageWrapper>
          </MarginWidthWrapper>
        </main>
      </div>
    </div>
  );
}

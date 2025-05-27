import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import MapWithDetails from "./map-with-details";
import SidebarContent from "./sidebar-content";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const MapPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="w-full h-[calc(100dvh-60px)] overflow-y-auto">
      <div
        className={`w-full h-full grid ${
          sidebarOpen ? "lg:grid-cols-[249px_1fr]" : "lg:grid-cols-[60px_1fr]"
        } transition-all duration-200`}
      >
        <div className="w-full">
          {/* Desktop Sidebar */}
          {sidebarOpen ? (
            <div className="w-full overflow-y-auto relative h-full max-h-[calc(100dvh-60px)] max-lg:hidden small-scroll-bar">
              <SidebarContent onClose={toggleSidebar} />
            </div>
          ) : (
            <div className="max-lg:hidden h-[60px] pt-2  z-10">
              <button
                onClick={toggleSidebar}
                className="p-2 m-2 hover:bg-gray-100 cursor-pointer rounded-lg bg-white shadow-sm"
              >
                <PanelLeftOpen className="size-5" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Sidebar */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <div className="w-full flex items-center justify-start border-b">
              <div className="w-full p-4 gap-2 flex items-center justify-between">
                <p className="font-black text-lg">Settings</p>
                <PanelLeftClose className="cursor-pointer size-6 shrink-0" />
              </div>
            </div>
          </SheetTrigger>
          <SheetContent
            className="bg-white w-[250px] !p-0 border-none"
            side="left"
          >
            <SidebarContent />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div
          className={`w-full h-full ${
            sidebarOpen ? "lg:p-5" : "lg:p-0"
          } max-h-[calc(100dvh-60px)] small-scroll-bar overflow-y-auto`}
        >
          <MapWithDetails />
        </div>
      </div>
    </div>
  );
};

export default MapPage;

import { ChevronDown, PanelLeftClose, Search } from "lucide-react";

const SidebarContent = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="w-full h-full relative flex flex-col ">
      {/* top  */}
      <div className="w-full p-4 pb-2 flex items-center justify-between">
        <p className="font-black text-lg">Settings</p>
        <button onClick={onClose}>
          <PanelLeftClose className="cursor-pointer size-6 shrink-0" />
        </button>
      </div>
      {/* main content  */}
      <div className="w-full bg-white p-4 grow ">
        <h2 className="uppercase text-[#0F172ACC] font-semibold text-[11px] mb-2">
          Visualization
        </h2>
        <div className="mt-1.5 flex items-center justify-start gap-2">
          <button className="size-9 shrink-0 aspect-square rounded-[4px] bg-[#E1EDF4] hover:bg-[#E1EDF4] cursor-pointer flex items-center justify-center">
            <img
              src="/map-illion.svg"
              className="w-full max-w-[11.5px] shrink-0"
              alt=""
            />
          </button>
          <button className="size-9 shrink-0 aspect-square rounded-[4px] bg-[#0F172A0D] hover:bg-[#E1EDF4] cursor-pointer flex items-center justify-center">
            <img
              src="/before-union.svg"
              className="w-full max-w-[20px] shrink-0"
              alt=""
            />
          </button>
          <button className="size-9 shrink-0 aspect-square rounded-[4px] bg-[#0F172A0D] hover:bg-[#E1EDF4] cursor-pointer flex items-center justify-center">
            <img
              src="/window.svg"
              className="w-full max-w-[20px] shrink-0"
              alt=""
            />
          </button>
        </div>
        <div className="w-full !h-[2px] mt-[22px] mb-5 bg-[#0F172A26]" />
        <h2 className="uppercase font-semibold text-[11px] mb-2 text-[#0F172ACC]">
          Geography
        </h2>
        <div className="mt-[14px] grid grid-cols-2 gap-1">
          <button className="bg-[#E1EDF4] h-[28px] w-full font-semibold rounded-[4px] text-base text-[#106AA2] hover:bg-[#E1EDF4] transition-all cursor-pointer">
            Counties
          </button>
          <button className="bg-[#0F172A0D] h-[28px] w-full font-semibold rounded-[4px] text-base text-[#0F172A] hover:text-[#106AA2] transition-all hover:bg-[#E1EDF4] cursor-pointer">
            Zip codes
          </button>
        </div>
        <div className="mt-4 w-full h-[32px] border-[2px] border-[#0F172A26] rounded-[4px] flex relative items-center">
          <input
            type="text"
            className="w-full h-full px-2 text-sm pr-10"
            placeholder="Country Name"
          />
          <Search className="absolute right-3 size-3.5" strokeWidth={2.5} />
        </div>
        <div className="w-full !h-[2px] mt-[22px] mb-5 bg-[#0F172A26]" />
        <h2 className="uppercase font-semibold text-[11px] mb-[14px] text-[#0F172ACC]">
          Indicators
        </h2>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="Exposure indicator"
            className="text-sm font-semibold text-[#0F172ACC]"
          >
            Exposure indicator
          </label>
        </div>
        <div className="mt-1 w-full h-[32px] border-[2px] border-[#0F172A26] rounded-[4px] relative flex items-center">
          <select
            className="appearance-none w-full h-full px-2 pr-10 font-[500] text-sm text-[#0F172A] bg-transparent outline-none cursor-pointer"
            defaultValue="all"
          >
            <option value="all">All exposures</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <ChevronDown
            className="absolute right-3 pointer-events-none size-3.5 text-[#0F172A]"
            strokeWidth={2.5}
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <label
            htmlFor="Sensitivity indicator"
            className="text-sm font-semibold text-[#0F172ACC]"
          >
            Sensitivity indicator
          </label>
        </div>
        <div className="mt-[14px] space-y-2.5">
          <button className="bg-[#106AA2] h-[28px] text-center w-full px-3 font-semibold rounded-[4px] text-base text-[white] hover:opacity-80 transition-all cursor-pointer">
            Select indicator
          </button>
          <div className="w-full h-[28px] border-[2px] border-[#0F172A26] rounded-[4px] flex relative items-center">
            <input
              type="text"
              className="w-full h-full px-2 text-sm"
              value={"All sensitivities"}
              placeholder="All sensitivities"
            />
          </div>
        </div>
        <div className="w-full !h-[2px] mt-[22px] mb-5 bg-[#0F172A26]" />
        <h2 className="uppercase font-semibold text-[11px] text-[#0F172ACC]">
          Vulnerability layer
        </h2>
        <div className="mt-[14px] space-y-2.5">
          <button className="bg-[#E1EDF4] h-[28px] text-start w-full px-3 font-semibold rounded-[4px] text-base text-[#106AA2] hover:bg-[#E1EDF4] transition-all cursor-pointer">
            Exposure vs. sensitivity
          </button>
          <button className="bg-[#0F172A0D] text-start h-[28px] w-fit px-3 font-semibold rounded-[4px] text-base text-[#0F172A] hover:text-[#106AA2] transition-all hover:bg-[#E1EDF4] cursor-pointer">
            Overall vulnerability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;

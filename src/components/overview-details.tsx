import { Maximize2 } from "lucide-react";

const OverviewDetails = () => {
  return (
    <div className="w-full h-full bg-white shadow-sm rounded-xl overflow-y-auto small-scroll-bar p-4 space-y-5">
      {/* top  */}
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-black text-xl text-[#0F172A]">
            Overview Details
          </h2>
          <button className="bg-[#0F172A0D] cursor-pointer hover:opacity-70 min-w-[36px] !aspect-[36/28] flex items-center justify-center !h-[28px] rounded-[4px]">
            <Maximize2 className="size-4" strokeWidth={2.5} />
          </button>
        </div>
        <p className="font-[500] text-base text-[#0F172A]">
          This is some descriptive text of some kind that might show up in a
          paragraph.
        </p>
        <a
          href="#"
          className="cursor-pointer text-base font-[500] text-[#106AA2] hover:opacity-80"
        >
          Download this summary
        </a>
      </div>
      {/* Most Vulnerable Areas  */}
      <div className="w-full">
        <h2 className="text-[#0F172A] font-black text-base">
          Most Vulnerable Areas
        </h2>
        <div className="mt-2.5 flex flex-col w-full gap-1">
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Iroquois</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-full !h-4 bg-[#3f6f45] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">60</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Vermilion</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[80%] !h-4 bg-[#3f6f45] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">56</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Champaign</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[70%] !h-4 bg-[#3f6f45] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">53</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Ford</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[63%] !h-4 bg-[#3f6f45] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">51</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Kankakee</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[55%] !h-4 bg-[#3f6f45] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">45</p>
            </div>
          </div>
        </div>
        <button className="mt-4 text-base font-[600] text-[#106AA2] hover:opacity-80 cursor-pointer">
          View all
        </button>
      </div>
      {/* Highest Impact Exposures  */}
      <div className="w-full">
        <h2 className="text-[#0F172A] font-black text-base">
          Highest Impact Exposures
        </h2>
        <p className="mt-1 font-[500] text-xs text-[#0F172ACC]">
          Based on percent of counties with “high” exposure
        </p>
        <div className="mt-2.5 flex flex-col w-full gap-1">
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">
              Flooding events
            </h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-full !h-4 bg-[#CDDF9F] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">60</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">
              Extreme heat days
            </h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[80%] !h-4 bg-[#CDDF9F] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">56</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Lyme Disease</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[70%] !h-4 bg-[#CDDF9F] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">53</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Air quality</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[63%] !h-4 bg-[#CDDF9F] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">51</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Extreme cold</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[55%] !h-4 bg-[#CDDF9F] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">45</p>
            </div>
          </div>
        </div>
        <button className="mt-4 text-base font-[600] text-[#106AA2] hover:opacity-80 cursor-pointer">
          View all
        </button>
      </div>
      {/* Highest Impact Exposures  */}
      <div className="w-full">
        <h2 className="text-[#0F172A] font-black text-base">
          Highest Impact Sensitivities
        </h2>
        <p className="mt-1 font-[500] text-xs text-[#0F172ACC]">
          Based on percent of counties with “high” sensitivity
        </p>
        <div className="mt-2.5 flex flex-col w-full gap-1">
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">Poverty</h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-full !h-4 bg-[#9FC7DF] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">60</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">
              Physical disability
            </h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[80%] !h-4 bg-[#9FC7DF] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">56</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">
              Housing cost burden
            </h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[70%] !h-4 bg-[#9FC7DF] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">53</p>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-[500] text-[#0F172A] text-sm">
              Transportation barriers
            </h3>
            <div className="w-full flex items-center justify-start gap-1.5">
              <div className="w-[63%] !h-4 bg-[#9FC7DF] rounded-tr-[4px] rounded-br-[4px]"></div>
              <p className="font-[600] shrink-0 text-xs text-[#0F172ACC]">51</p>
            </div>
          </div>
        </div>
        <button className="mt-4 text-base font-[600] text-[#106AA2] hover:opacity-80 cursor-pointer">
          View all
        </button>
      </div>
    </div>
  );
};

export default OverviewDetails;

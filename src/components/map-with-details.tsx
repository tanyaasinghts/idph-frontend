import { Maximize2 } from "lucide-react"
import OverviewDetails from "./overview-details"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const MapWithDetails = () => {
    return (
        <div className="w-full h-full  gap-3 grid lg:grid-cols-[1fr_340px] relative">
            <div className="w-full flex flex-col gap-5 h-full max-h-[calc(100dvh-60px)] small-scroll-bar overflow-y-auto lg:px-0 p-4">
                <div>
                    <h1 className="text-[#0F172A] font-black text-2xl">
                        Vulnerability
                    </h1>
                    <p className="mt-0.5 font-[500] text-sm">
                        Vulnerability is based on <strong>exposure</strong> (to a climate hazard) and <strong>sensitivity</strong> (from aspects of the population or place that tend to increase susceptibility to climate hazards). Counties are assigned to the bottom (least), middle, or top (most) third for both exposure and sensitivity. Learn more
                    </p>
                </div>
                <div className="bg-white grow rounded-[8px] py-10">
                    <img src="/Graph area.png" className="w-full max-w-[700px] mx-auto" alt="" />
                </div>
            </div>
            {/* overview  */}
            <Sheet>
                <SheetTrigger className="lg:hidden absolute top-[14px] right-4">
                    <div className="w-full flex items-center justify-start lg:px-4 ">
                        <Button variant={"default"} className="cursor-pointer bg-transparent border-[2px] size-7 border-gray-400 my-1 mr-auto text-black shadow-none rounded-[4px]" size={"icon"}>
                            <Maximize2 className="cursor-pointer size-4 shrink-0" />
                        </Button>
                    </div>
                </SheetTrigger>
                <SheetContent className="bg-white w-[320px] !p-0 border-none overflow-y-auto !pb-4" side="right">
                    <div>
                        <OverviewDetails />
                    </div>
                </SheetContent>
            </Sheet>
            <div className="w-full h-full max-h-[calc(100dvh-60px)]  overflow-y-auto max-lg:hidden">
                <OverviewDetails />
            </div>
        </div>
    )
}

export default MapWithDetails

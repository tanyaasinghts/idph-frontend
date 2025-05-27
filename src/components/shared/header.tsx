import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger
} from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "../ui/button"
const Header = () => {
    return (
        <div className="w-full flex items-center justify-center px-4 lg::px-5 bg-[linear-gradient(90deg,_#054F7D_0%,_#106AA2_100%)] shadow-[0px_2px_8px_0px_var(--ShadowNeutralDark)]">
            <div className="w-full h-[60px] flex items-center justify-between">
                <h1 className="text-white text-lg font-black">
                    IDPH Climate & Health Explorer
                </h1>
                <div className="hidden 1200:flex items-center font-[600] text-white text-base justify-center gap-1">
                    <button className="px-3 h-[36px] cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                        Dashboard
                    </button>
                    <button className="px-3 h-[36px] cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                        Overview
                    </button>
                    <button className="px-3 h-[36px] cursor-pointer bg-[#E1EDF4] text-[#106AA2] hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                        Vulnerability
                    </button>
                    <button className="px-3 h-[36px] cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                        Correlations
                    </button>
                    <button className="px-3 h-[36px] cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                        Projections
                    </button>
                    <button className="px-3 h-[36px] cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                        Solutions
                    </button>
                    <button className="px-3 h-[36px] cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                        Data
                    </button>
                    <button className="px-3 h-[36px] flex items-center justify-center gap-1 cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                        About
                        <ChevronDown className="size-4" strokeWidth={3} />
                    </button>
                </div>
                <Sheet>
                    <SheetTrigger className="1200:hidden">
                        <Button variant={"default"} className="cursor-pointer " size={"icon"}>
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="bg-primary w-[250px] !p-0 !pt-10 border-none">
                        <SheetHeader>
                            <div className="flex items-center !p-0 flex-col font-[600] text-white text-base justify-center gap-1">
                                <button className="px-3 h-[36px] w-full cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                                    Dashboard
                                </button>
                                <button className="px-3 h-[36px] w-full cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                                    Overview
                                </button>
                                <button className="px-3 h-[36px] w-full cursor-pointer bg-[#E1EDF4] text-[#106AA2] hover:bg-[#E1EDF4]  transition-all hover:text-[#106AA2] rounded-[4px]">
                                    Vulnerability
                                </button>
                                <button className="px-3 h-[36px] w-full cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                                    Correlations
                                </button>
                                <button className="px-3 h-[36px] w-full cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                                    Projections
                                </button>
                                <button className="px-3 h-[36px] w-full cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                                    Solutions
                                </button>
                                <button className="px-3 h-[36px] w-full cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                                    Data
                                </button>
                                <button className="px-3 h-[36px] w-full flex items-center justify-center gap-1 cursor-pointer hover:bg-[#E1EDF4] transition-all hover:text-[#106AA2] rounded-[4px]">
                                    About
                                    <ChevronDown className="size-4" strokeWidth={3} />
                                </button>
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Header

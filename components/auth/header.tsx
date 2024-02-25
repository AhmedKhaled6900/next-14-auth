import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({ subsets: ["latin"], weight: "600" });
interface HederProps {
    label: string
}
export const Header =({label}:HederProps)=>{

    return (
        <header className=" w-full flex-col flex gap-y-2 items-center justify-center">
            <h1 className={cn("text-3xl font-semibold", font.className)}>
Store Authentication
            </h1>
            <p className="text-muted-foreground text-md font-semibold">{label}</p>
        </header>
    )
} 
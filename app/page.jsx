import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
///////import-components//////////
import Social from "@/components/ui/Social"
import Photox from "@/components/Photox"
import Stats from "@/components/Stats"
//////////////////////////////////
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto ">
        <div className="container flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

        {/* text homepage */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software  Developer</span>
          <h1 className="h1 mb-6">
            Hello Im <br/> <span className="text-accent">Surasak Jantapan</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            &nbsp;&nbsp;ผมมีความสามารถในด้าน Wep Programming เทคโนโลยีต่างที่ผมใช้ในการพัฒนา เช่น React.js Next.Js html5 Css3 javascript Node.Js Tailwind
            และกำลังจะพัฒนาไปเป็น Full Stack.
          </p>
          {/* btn & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              
              <Button 
                variant="outline"
                className="uppercase flex items-center gap-2"
                >
                <span>Download Cv</span>
                <FiDownload className="text-xl"/>
              </Button>
              
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex 
                justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
            </div>
        </div>

        {/* Photo */}
        <div className="order-1 xl:order-none mb-30 xl:mb-0">
          <Photox />
        </div>
        </div>
      </div>
      <Stats /> 
    </section>
  );
}

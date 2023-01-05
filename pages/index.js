import Collaboration from "../components/Collaboration";
import Cooperation from "../components/Cooperation";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";



export default function Home() {
  return (
   <>
   <div className="h-[105vh] main-sec"> 
   <Navigation />
   <Hero />
   </div>
   <div className="bg-[#03131E]">
    <Cooperation />
   </div>
   <Collaboration />
   </>
  )
}

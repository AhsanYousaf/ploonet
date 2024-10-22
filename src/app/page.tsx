import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MakingProcess from "@/components/MakingProcess";
import PreviousWorksSection from "@/components/PreviousWorksSection";
import VideoForm from "@/components/VideoForm";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="w-full h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-screen">
        <Header />
        <HeroSection />
      </div>
      <VideoSection />
      <PreviousWorksSection />
      <MakingProcess />
      <VideoForm />
    </div>
  );
}

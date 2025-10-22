"use client";

import React from "react";
import ButtonDownloadDemo from "@/components/ui/demo";
import { Typewriter } from "@/components/ui/typewriter";
import dynamic from "next/dynamic";
import { Timeline } from "@/components/ui/timeline";
const ShaderBackground = dynamic(
  () =>
    import("@/components/ui/infinite-hero").then((mod: unknown) => {
      const m = mod as { ShaderBackground?: unknown; default?: unknown } | unknown;
      const comp = (m as { ShaderBackground?: unknown })?.ShaderBackground ?? (m as { default?: unknown })?.default ?? mod;
      return comp as unknown as React.ComponentType<{ className?: string }>;
    }),
  { ssr: false }
);

// Small wrapper with explicit props so TS accepts <ShaderBackground className="..." />
function ShaderBackgroundWrapper(props: { className?: string }) {
  const Comp = ShaderBackground as unknown as React.ComponentType<{ className?: string }>;
  return <Comp {...props} />;
}

const InteractiveImageBentoGalleryDemo = dynamic(
  () =>
    import("@/components/ui/bento-gallery-demo").then((mod: unknown) => {
      const m = mod as { default?: unknown } | unknown;
      const comp = (m as { default?: unknown })?.default ?? mod;
      return comp as unknown as React.ComponentType<unknown>;
    }),
  { ssr: false, loading: () => <div className="h-48 bg-white/5 rounded-lg animate-pulse" /> }
);
import { useIsLowEndDevice } from "@/lib/useDevicePerformance";
import Image from "next/image";
import { Footer } from "@/components/ui/footer-section";

export default function Home() {
  const isLowEnd = useIsLowEndDevice();
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      import("@/lib/lenis").then(({ initLenis }) => {
        initLenis();
      });
    }
  }, []);

  // Smooth scroll for nav links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden">
        {/* Animated shader background (disabled on low-end devices) */}
        {!isLowEnd ? (
          <div className="absolute inset-0 z-0">
            <ShaderBackgroundWrapper className="w-full h-full" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-black/80" />
        )}

        {/* Transparent Header */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-30 backdrop-blur-sm bg-black/20 border border-white/10 rounded-full px-8 py-3">
          <div className="flex items-center gap-8">
            <a href="#" className="font-mono text-sm font-semibold text-orange-500 hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.7)] transition-all cursor-pointer">PORTFOLIO</a>
            <nav className="flex items-center gap-6">
              <a href="#about" onClick={handleSmoothScroll} className="font-mono text-xs text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-colors">ABOUT</a>
              <a href="#work" onClick={handleSmoothScroll} className="font-mono text-xs text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-colors">EXPERIENCE</a>
              <a href="#footer" onClick={handleSmoothScroll} className="font-mono text-xs text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-colors">GET IN TOUCH</a>
            </nav>
          </div>
        </header>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          {/* Main showcase */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-light flex flex-col items-center gap-4">
                <span className="text-white font-mono">Engineering the future with</span>
                <Typewriter
                  text={["Machine Learning","Deep Learning","AI_Ethics"]}
                  speed={40}
                  className="text-orange-500 font-bold"
                  showCursor={true}
                  cursorChar={"|"}
                  cursorClassName="ml-1"
                  loop={true}
                />
                <div className="pt-6 flex justify-center">
                  {/* Resume Download Button */}
                  <a href="/SANJAY%20Resume.pdf" download target="_blank" rel="noopener noreferrer">
                    <ButtonDownloadDemo />
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Status indicator - bottom right corner */}
        <div className="fixed bottom-6 right-6 z-20 space-y-1">
          <h3 className="text-xs font-mono text-white/70 tracking-wider uppercase">STATUS</h3>
          <div className="text-sm font-mono">
            <Typewriter
              text={["LIVE", "ONLINE"]}
              speed={60}
              className="text-orange-500 font-bold"
              showCursor={true}
              cursorChar={"|"}
              cursorClassName="ml-1"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
  <section id="about" className="relative min-h-screen bg-black text-white pt-24 pb-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center font-mono">
            {/* Left column - Text content */}
            <div className="space-y-8 flex flex-col justify-center items-center h-full">
              <div className="space-y-4">
                <p className="text-2xl font-mono text-orange-500 tracking-wider uppercase font-bold">About</p>
                <h2 className="text-4xl md:text-5xl font-mono font-light leading-tight">
                  AI Research Engineer
                </h2>
              </div>
              
              <div className="space-y-6 text-white/70 text-base font-mono leading-relaxed">
                <p className="font-mono">
                  I believe in the power of Artificial Intelligence to solve some of the world’s most pressing challenges. Today, my focus is on one of the most critical frontiers in technology: building responsible and secure AI. My goal is not just to build AI, but to build a future where technology empowers everyone and contributes to a more secure and equitable world.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70">AWS</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70">Docker</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70">Python</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70">Google Cloud</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70">Linux</span>
              </div>

              {/* Tech icons row - left aligned, matches badges */}
              <div className="flex flex-wrap gap-6 pt-3 items-center">
                <a href="https://aws.amazon.com" target="_blank" rel="noreferrer" title="AWS" className="group">
                  <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width={36} height={36} className="opacity-80 group-hover:opacity-100 transition" />
                </a>
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer" title="Docker" className="group">
                  <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" width={36} height={36} className="opacity-80 group-hover:opacity-100 transition" />
                </a>
                <a href="https://www.python.org" target="_blank" rel="noreferrer" title="Python" className="group">
                  <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width={36} height={36} className="opacity-80 group-hover:opacity-100 transition" />
                </a>
                <a href="https://cloud.google.com" target="_blank" rel="noreferrer" title="Google Cloud" className="group">
                  <Image src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="Google Cloud" width={36} height={36} className="opacity-80 group-hover:opacity-100 transition" />
                </a>
                <a href="https://www.linux.org/" target="_blank" rel="noreferrer" title="Linux" className="group">
                  <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" width={36} height={36} className="opacity-80 group-hover:opacity-100 transition" />
                </a>
              </div>

            {/* Developer Community section */}
            <div className="col-span-2 flex flex-col items-center justify-start py-10">
              <span className="text-orange-500 font-mono text-lg font-bold whitespace-nowrap mb-6">Developer Community</span>
              <div className="flex flex-wrap gap-10 items-center justify-center">
                <Image src="/Python-01.svg" alt="Python" width={100} height={100} />
                <Image src="/Google-Developers-01.svg" alt="Google Developers" width={120} height={120} />
                <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width={60} height={60} />
                <Image src="/Google_Maps-Logo.wine.svg" alt="Google Map Developer" width={120} height={120} />
                <Image src="/DeepLearning.AI.png" alt="DeepLearning.AI" width={120} height={120} />
                <Image src="/CCAI-logo_full_green@2x-4-Priya-Donti-1440x615.png" alt="CCAI" width={120} height={120} />

              </div>
            </div>
            </div>

            {/* Right column - Visual element */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm p-0 flex items-center justify-center overflow-hidden relative">
                  <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 pb-8 flex flex-col items-center">
                  <div className="text-6xl font-mono font-bold text-orange-500 drop-shadow-lg">2.5+</div>
                  <div className="text-sm font-mono text-white/50 uppercase tracking-wider">Years Experience</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}

      <section id="work" className="relative bg-black pt-0">
        <h2 className="text-2xl font-mono text-orange-500 tracking-wider uppercase font-bold text-center">My Professional Journey</h2>
        <div className="flex justify-center mb-8">
            <div className="w-full">
              {isLowEnd ? (
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/3 border border-white/6 p-6 flex items-center justify-center text-white/60">Visual preview</div>
              ) : (
                <InteractiveImageBentoGalleryDemo />
              )}
          </div>
        </div>
        
        {/* Story Section - centered above timeline */}
        <div className="max-w-3xl mx-auto px-4 -mt-4 text-center">
          <p className="text-white/80 font-mono text-sm md:text-base leading-relaxed">
            Over the past three years, my journey has been shaped by collaboration and curiosity.
            From engaging with vibrant developer communities to working alongside brilliant scientists
            in R&amp;D departments, I’ve learned that innovation thrives at the intersection of diverse perspectives.
            Whether debugging code with fellow developers at midnight or brainstorming breakthrough solutions
            with research teams, each experience has reinforced a simple truth: the best ideas emerge when
            we learn together, challenge assumptions, and build on each other’s insights.
          </p>
        </div>
        
        <Timeline data={experienceData} />
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

const experienceData = [
  {
    title: (
      <div className="flex flex-col items-start gap-2">
          <span className="font-mono">Present</span>
        <Image src="/nissan-seeklogo.png" alt="Nissan Motor Company" width={120} height={60} />
      </div>
    ),
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-4 font-mono">
          <span className="font-bold font-mono">Gen AI Engineer</span> at Renault Nissan Technology Business Centre - R&D (NISSAN)
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✨ LLM Fine-tuning and optimization
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✨ Integrating Gen AI into production systems
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✨ Research and development of new AI technologies
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✨ Startup evaluation and prototyping
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
    <div className="flex flex-col items-start gap-2">
          <span className="font-mono">2023-2024</span>
  <Image src="/drdo_logo.png" alt="DRDO" width={150} height={50} />
      </div>
    ),
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-4 font-mono">
          <span className="font-bold font-mono">Project Trainee</span> at DRDO – Centre for Artificial Intelligence and Robotics
        </p>
        <p className="text-white text-xs md:text-sm font-normal mb-4 font-mono">
          Government of India, Bengaluru, Karnataka
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Developed advanced algorithm for SAR satellite image object detection
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Achieved 15% improvement in accuracy, 20% reduction in false positives
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Data annotation and labeling for ML models
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Created plugins for QGIS integration
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Integrated algorithms with HITACI Tool
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex flex-col items-start gap-2">
          <span className="font-mono">2022</span>
        <Image src="/Technocolabs.png" alt="Technocolabs Software Inc." width={200} height={100} />
      </div>
    ),
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-4 font-mono">
          <span className="font-bold font-mono">Machine Learning Engineer</span> at Technocolabs Software Inc.
        </p>
        <p className="text-white text-xs md:text-sm font-normal mb-8 font-mono">
          Indore, Madhya Pradesh
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Worked with cross-functional teams on ML projects
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Developed ML model predicting company acquisition (91.5% accuracy)
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Integrated ML models with production systems
          </div>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex flex-col items-start gap-2">
          <span className="font-mono">2022-Present</span>
        <Image src="/CCAI-logo_full_green@2x-4-Priya-Donti-1440x615.png" alt="Climate Change AI" width={160} height={80} />
      </div>
    ),
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-4 font-mono">
          <span className="font-bold font-mono">Community Volunteer</span> at Climate Change AI
        </p>
        <p className="text-white text-xs md:text-sm font-normal mb-8 font-mono">
          Research project focused on Hurricane Prediction using AI and Machine Learning
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Collaborating with experts in the field
          </div>
          <div className="flex gap-2 items-center text-white/70 text-xs md:text-sm font-mono">
            ✅ Contributing to AI for social good initiatives
          </div>
        </div>
      </div>
    ),
  },
];

import type { CSSProperties } from "react";
import { Download, MapPin, Award, Smartphone, Code2, ShieldCheck } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = './resume.pdf'; // This would need to be added to public folder
    link.download = 'Kshitij_Tiwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 section-surface">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary-custom/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex animate-rise items-center rounded-full border border-primary-custom/15 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-custom shadow-sm backdrop-blur">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Enterprise mobile engineering, shipped with care
            </div>
            <h1 className="animate-rise-delay-1 text-4xl font-bold leading-tight text-gray-950 md:text-6xl">
              Kshitij <span className="gradient-text">Tiwari</span>
            </h1>
            <p className="animate-rise-delay-2 mt-6 text-xl font-semibold text-gray-700 md:text-2xl">
              Lead Consultant & Mobile App Developer
            </p>
            <p className="animate-rise-delay-2 mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 lg:mx-0">
              Experienced IT Professional with 10+ years of expertise in React Native, Redux, and Ionic. 
              Building innovative mobile solutions for enterprise and fintech clients.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={scrollToContact}
                className="btn-primary-glow w-full rounded-lg px-8 py-3 font-semibold text-white sm:w-auto"
              >
                Get In Touch
              </button>
              <button
                onClick={downloadResume}
                className="btn-outline-glow flex w-full items-center justify-center gap-2 rounded-lg border border-primary-custom/30 px-8 py-3 font-semibold text-primary-custom sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
            <div className="animate-rise-delay-2 mt-8 flex flex-col items-center gap-4 text-gray-500 sm:flex-row lg:justify-start">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Kanpur, India</span>
              </div>
              <div className="flex items-center">
                <Award className="mr-2 h-4 w-4 text-accent-custom" />
                <span>Sirius Award Winner 2023</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md animate-rise-delay-1">
            <div className="absolute inset-4 rounded-full bg-primary-custom/20 blur-3xl" />
            <div className="animate-pulse-ring absolute inset-8 rounded-full border border-primary-custom/30" />
            <div className="glass-panel relative rounded-lg p-6">
              <div className="mx-auto mb-6 flex h-36 w-36 animate-float items-center justify-center rounded-full bg-gradient-to-br from-primary-custom via-secondary-custom to-accent-custom text-5xl font-bold text-white shadow-2xl shadow-primary-custom/20">
                KT
              </div>
              <div className="space-y-4">
                {[
                  { icon: Smartphone, label: "React Native", value: "Mobile platforms" },
                  { icon: Code2, label: "Native Bridges", value: "Android + iOS" },
                  { icon: Award, label: "Leadership", value: "10+ years" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="stagger-item flex items-center rounded-lg border border-gray-200/80 bg-white/78 p-4"
                    style={{ "--stagger": index } as CSSProperties & Record<"--stagger", number>}
                  >
                    <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-custom/10 text-primary-custom">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-950">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

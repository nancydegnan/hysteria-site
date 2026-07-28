import { Footer, SubpageNav } from "../components";

export default function MovePage() {
  return (
    <div className="min-h-screen bg-background text-black">
      <SubpageNav />

      <div className="border-b border-gray-mid">
        <header className="px-6 pt-24 pb-12 md:pt-28 md:pb-16 max-w-6xl mx-auto">
          <p className="section-label text-sm text-gray-text mb-3">
            move
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="font-black">move</span>{" "}
            <em className="playfair-italic font-light">your body.</em>
          </h1>
          <p className="font-['Helvetica','Arial',sans-serif] text-base leading-[1.4] tracking-tight mt-1 text-charcoal max-w-2xl">
            Coming soon.
          </p>
        </header>
      </div>

      <main className="px-6 pb-20 md:pb-28 max-w-6xl mx-auto pt-16 md:pt-24">
      </main>

      <Footer />
    </div>
  );
}

import Image from "next/image";

export default function Screenshots() {
  return (
    <section className="relative py-24 bg-bg-2">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              See It In Action
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
            Your codebase,
            <br />
            <span className="text-white/45">finally visible.</span>
          </h2>
        </div>

        {/* Screenshot placeholders — 16:9 aspect ratio */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Call graph view */}
          <div className="flex flex-col gap-3">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "1525 / 944" }}
            >
              <Image
                src="/graph-view.png"
                alt="Call graph — full project view"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <p className="text-sm text-white/35 font-mono px-1">
              Call graph — full project view
            </p>
          </div>

          {/* NumPy — large repository overview */}
          <div className="flex flex-col gap-3">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "1525 / 944" }}
            >
              <Image
                src="/numpy-graph.png"
                alt="Full call graph of the NumPy repository"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <p className="text-sm text-white/35 font-mono px-1">
              NumPy — instant overview of 2 000+ functions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Code2, Sparkles, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <span className="inline-block mb-5 px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold">
            ⚡ AI Powered Code Review
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Write Better Code  
            <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              With Instant AI Reviews
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
            Paste your JavaScript code and get instant feedback on bugs,
            performance, security, and best practices — powered by AI.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/editor"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl
                         bg-gradient-to-r from-green-400 to-emerald-500
                         text-black font-bold hover:scale-105 transition"
            >
              Start Reviewing
              <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="px-7 py-3 rounded-xl border border-gray-700
                         hover:bg-gray-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why Developers Love It ❤️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code2 />}
            title="Clean Code Suggestions"
            desc="Get best practices, refactoring tips, and cleaner logic instantly."
          />
          <FeatureCard
            icon={<Sparkles />}
            title="AI-Powered Review"
            desc="Smart analysis for bugs, performance issues, and improvements."
          />
          <FeatureCard
            icon={<ShieldCheck />}
            title="Secure & Reliable"
            desc="Detect risky patterns and write safer production-ready code."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-800 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to improve your code?
          </h3>
          <p className="text-gray-400 mb-8">
            Start reviewing your JavaScript code in seconds.
          </p>

          <a
            href="/editor"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                       bg-gradient-to-r from-green-400 to-emerald-500
                       text-black font-bold hover:scale-105 transition"
          >
            Get Started Free
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
}

/* FEATURE CARD */
 function FeatureCard({ icon , title , desc }) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800
                    rounded-2xl p-6 text-center hover:scale-[1.03]
                    transition shadow-lg">
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-green-500/10
                      flex items-center justify-center text-green-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

 
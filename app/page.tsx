import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans relative overflow-hidden">
        <div className="relative z-10">
          {/* Premium Header */}
          <header className="pt-16 pb-24 text-center relative">
            <div className="max-w-5xl mx-auto px-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-sm font-medium text-purple-200">
                  Next-Gen Development Framework
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Catalyst
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                The ultimate TypeScript fullstack framework that transforms
                ideas into
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  {" "}
                  production-ready applications
                </span>{" "}
                in record time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/docs"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Start Building Now</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </Link>
                <button className="px-8 py-4 border border-slate-600 rounded-xl font-semibold text-lg hover:border-purple-400 hover:text-purple-300 transition-all duration-300 backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-6 pb-20">
            {/* Features Grid */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Everything You Need
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Battle-tested tools and frameworks, perfectly integrated for
                  maximum productivity
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🚀",
                    title: "Next.js SSR",
                    description:
                      "Lightning-fast server-side rendering with automatic optimization",
                    gradient: "from-blue-600 to-cyan-600",
                  },
                  {
                    icon: "🎨",
                    title: "ShadCn + TweakCn",
                    description:
                      "Beautiful, accessible UI components that adapt to your brand",
                    gradient: "from-purple-600 to-pink-600",
                  },
                  {
                    icon: "🗃️",
                    title: "Drizzle ORM",
                    description:
                      "Type-safe database operations with zero-runtime overhead",
                    gradient: "from-green-600 to-emerald-600",
                  },
                  {
                    icon: "🔒",
                    title: "Better Auth",
                    description:
                      "Enterprise-grade authentication with multiple providers",
                    gradient: "from-orange-600 to-red-600",
                  },
                  {
                    icon: "💳",
                    title: "Polar Payments",
                    description:
                      "Seamless payment processing with subscription management",
                    gradient: "from-indigo-600 to-purple-600",
                  },
                  {
                    icon: "🤖",
                    title: "AI Integration",
                    description:
                      "Powered by Langchain for intelligent application features",
                    gradient: "from-cyan-600 to-blue-600",
                  },
                  {
                    icon: "📊",
                    title: "PostHog Analytics",
                    description:
                      "Advanced analytics and feature flags out of the box",
                    gradient: "from-pink-600 to-rose-600",
                  },
                  {
                    icon: "⚡",
                    title: "Performance First",
                    description:
                      "Optimized for speed with built-in caching and CDN support",
                    gradient: "from-yellow-600 to-orange-600",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 text-2xl`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Start Section */}
            <section className="mb-20">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Ready to Launch
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                      Get your production-ready application running in minutes,
                      not hours
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-2xl font-bold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        Configure Environment
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Set up your{" "}
                        <code className="bg-slate-700 px-2 py-1 rounded text-purple-300">
                          .env
                        </code>{" "}
                        variables for NeonDB, MailGun, and other services
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 flex items-center justify-center text-2xl font-bold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        Run Migrations
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Initialize your database schema with Drizzle ORM's
                        type-safe migrations
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-600 to-pink-700 flex items-center justify-center text-2xl font-bold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        Start Developing
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Launch with{" "}
                        <code className="bg-slate-700 px-2 py-1 rounded text-cyan-300">
                          pnpm run dev
                        </code>{" "}
                        and start building amazing features
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <Link
                      href="/docs"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Documentation
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Premium Footer */}
          <footer className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm py-12">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold mr-3">
                    C
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Catalyst
                  </span>
                </div>
                <p className="text-slate-400 mb-6">
                  Built with passion for developers who demand excellence
                </p>
                <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()} Catalyst all rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        <div className="relative z-10">
          {/* Header */}
          <header className="pt-16 pb-24 text-center relative">
            <div className="max-w-5xl mx-auto px-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                <span className="text-sm font-medium text-blue-200">
                  Next-Gen Development Framework
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
                Welcome to
                <span className="block text-blue-400">Catalyst</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                The ultimate TypeScript fullstack framework that transforms
                ideas into{" "}
                <span className="text-blue-400 font-semibold">
                  production-ready applications
                </span>{" "}
                in record time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/docs"
                  className="group relative px-8 py-4 bg-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="relative z-10">Start Building Now</span>
                </Link>
                <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-lg hover:border-blue-400 hover:text-blue-300 transition-all duration-300 backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-6 pb-20">
            {/* Features Grid */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Everything You Need
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                  },
                  {
                    icon: "🎨",
                    title: "ShadCn + TweakCn",
                    description:
                      "Beautiful, accessible UI components that adapt to your brand",
                  },
                  {
                    icon: "🗃️",
                    title: "Drizzle ORM",
                    description:
                      "Type-safe database operations with zero-runtime overhead",
                  },
                  {
                    icon: "🔒",
                    title: "Better Auth",
                    description:
                      "Enterprise-grade authentication with multiple providers",
                  },
                  {
                    icon: "💳",
                    title: "Polar Payments",
                    description:
                      "Seamless payment processing with subscription management",
                  },
                  {
                    icon: "🤖",
                    title: "AI Integration",
                    description:
                      "Powered by Langchain for intelligent application features",
                  },
                  {
                    icon: "📊",
                    title: "PostHog Analytics",
                    description:
                      "Advanced analytics and feature flags out of the box",
                  },
                  {
                    icon: "⚡",
                    title: "Performance First",
                    description:
                      "Optimized for speed with built-in caching and CDN support",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-6 text-2xl">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
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
                <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                      Ready to Launch
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                      Get your production-ready application running in minutes,
                      not hours
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold">
                        1
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        Configure Environment
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Set up your{" "}
                        <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">
                          .env
                        </code>{" "}
                        variables for NeonDB, MailGun, and other services
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold">
                        2
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        Run Migrations
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Initialize your database schema with Drizzle ORM&apos;s
                        type-safe migrations
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold">
                        3
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        Start Developing
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Launch with{" "}
                        <code className="bg-gray-800 px-2 py-1 rounded text-blue-300">
                          pnpm run dev
                        </code>{" "}
                        and start building amazing features
                      </p>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <Link
                      href="/docs"
                      className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
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

          {/* Footer */}
          <footer className="border-t border-gray-800 bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                    C
                  </div>
                  <span className="text-xl font-bold text-white">Catalyst</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Built with passion for developers who demand excellence
                </p>
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Catalyst all rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;

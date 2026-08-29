import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Header } from "@/components/Header";
import { Github, CheckCircle2, GitPullRequest, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Open Source Project - FOSSRadar.dev",
  description: "Add your project to India's leading FOSS directory. Step-by-step guide with TOML examples, validation scripts & PR workflow. Get discovered by 1000s of developers across India.",
  keywords: [
    "submit project",
    "add project fossradar",
    "list project",
    "open source submission",
    "foss directory india",
    "github pull request",
    "project listing",
  ],
  openGraph: {
    title: "Submit Your Project - FOSSRadar.dev",
    description: "Step-by-step guide to submit your open source project to FOSSRadar.dev",
    url: "https://fossradar.dev/submit",
    type: "website",
  },
  alternates: {
    canonical: "https://fossradar.dev/submit",
  },
};

export default function SubmitPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I submit my project to FOSSRadar.dev?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fork the FOSSRadar.dev GitHub repository, create a TOML file in data/projects/ with your project details, validate it using 'npm run validate', and submit a pull request. Our team will review and merge it within 2-3 business days."
        }
      },
      {
        "@type": "Question",
        "name": "Is my project eligible for FOSSRadar.dev?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your project is eligible if it meets any one of these criteria: Founded in India, has core contributors from India, maintained by Indian organizations, or serves the Indian community."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get the verified badge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Add 'fossradar' as a GitHub topic to your repository and include the FOSSRadar.dev badge in your README. Once we verify this, your project will receive the verified status."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the review process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our maintainers typically review submissions within 2-3 business days. If changes are needed, we'll comment on your pull request with specific feedback."
        }
      }
    ]
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://fossradar.dev" },
    { name: "Submit Project", url: "https://fossradar.dev/submit" },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Submit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-500">Project</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Get your open source project listed on FOSSRadar.dev and reach India's vibrant FOSS community. Follow these simple steps to submit your project.
            </p>
          </div>

          {/* Eligibility Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Is Your Project Eligible?
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              Your project is eligible if it meets <strong className="text-white">any one</strong> of these criteria:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Founded in India</h3>
                    <p className="text-sm text-gray-400">Project created by founders or organizations based in India</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Core Contributors</h3>
                    <p className="text-sm text-gray-400">Significant contributions from developers based in India</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Indian Organization</h3>
                    <p className="text-sm text-gray-400">Maintained by companies or organizations headquartered in India</p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 rounded-xl border border-gray-800 bg-gray-900/50">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Community Impact</h3>
                    <p className="text-sm text-gray-400">Serves the Indian community or solves local challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Steps */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <GitPullRequest className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Submission Steps
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              FOSSRadar.dev uses a Git-based submission workflow. Follow these steps to submit your project:
            </p>
            <ol className="space-y-6 text-gray-300">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">1</span>
                <div>
                  <strong className="text-white block mb-2">Fork the Repository</strong>
                  <p className="text-gray-400 mb-3">
                    Visit the FOSSRadar.dev GitHub repository and click the "Fork" button to create your own copy.
                  </p>
                  <Link
                    href="https://github.com/wbfoss/fossradar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 text-white text-sm font-medium transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View Repository
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">2</span>
                <div>
                  <strong className="text-white block mb-2">Create Project File</strong>
                  <p className="text-gray-400 mb-3">
                    In the <code className="px-2 py-1 rounded bg-gray-800 text-sm text-orange-400">data/projects/</code> directory, create a new <code className="px-2 py-1 rounded bg-gray-800 text-sm text-orange-400">.toml</code> file named after your project (e.g., <code className="px-2 py-1 rounded bg-gray-800 text-sm text-orange-400">my-project.toml</code>).
                  </p>
                  <div className="p-4 rounded-lg bg-gray-900 text-gray-100 overflow-x-auto border border-gray-800">
                    <pre className="text-sm"><code>{`slug = "your-project-slug"
name = "Your Project Name"
short_desc = "Your project description"
repo = "<Link to your project's repository/source code>"
website = "<Link to your project's website>"
license = "Your project's license"
added_at = "2025-12-01"
primary_lang = "TypeScript"
category = "Your project's category"
tags = ["python", "dataviz", "data", "library"]
looking_for_contributors = true

# Location
location_city = "City of your project"
location_indian_state = "State of your project"

# India connection
india_connection = "organization"
india_connection_details = "How is your project connected through India? Is it made by Indians, used in India, or made for Indian audience?"`}</code></pre>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">3</span>
                <div>
                  <strong className="text-white block mb-2">Add Project Logo (Optional)</strong>
                  <p className="text-gray-400">
                    Place a <code className="px-2 py-1 rounded bg-gray-800 text-sm text-orange-400">logo.png</code> or <code className="px-2 py-1 rounded bg-gray-800 text-sm text-orange-400">logo.svg</code> file in <code className="px-2 py-1 rounded bg-gray-800 text-sm text-orange-400">public/logos/your-project-slug/</code>. Recommended size: 200x200px.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">4</span>
                <div>
                  <strong className="text-white block mb-2">Validate Your Submission</strong>
                  <p className="text-gray-400">
                    Run the validation script to ensure your project file is correctly formatted:
                  </p>
                  <div className="mt-3 p-4 rounded-lg bg-gray-900 text-gray-100 border border-gray-800">
                    <code className="text-sm text-green-400">npm run validate</code>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">5</span>
                <div>
                  <strong className="text-white block mb-2">Create Pull Request</strong>
                  <p className="text-gray-400 mb-3">
                    Commit your changes and create a pull request to the main repository. Use a clear title like "Add [Project Name]" and describe your project briefly in the PR description.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">6</span>
                <div>
                  <strong className="text-white block mb-2">Get Verified (Optional)</strong>
                  <p className="text-gray-400 mb-3">
                    To get the verified badge:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                    <li>Add <code className="px-2 py-1 rounded bg-gray-800 text-sm text-green-400">fossradar</code> as a GitHub topic to your repository</li>
                    <li>Include the FOSSRadar.dev badge in your README (we'll provide the markdown)</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>

          {/* What Happens Next */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                What Happens Next?
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                <h3 className="font-semibold text-orange-400 mb-2">Review Process</h3>
                <p className="text-sm text-gray-300">
                  Our maintainers will review your submission within 2-3 business days. We'll check that your project meets our eligibility criteria and that all required information is provided.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                <h3 className="font-semibold text-orange-400 mb-2">Feedback & Approval</h3>
                <p className="text-sm text-gray-300">
                  If any changes are needed, we'll comment on your PR with specific requests. Once approved, your PR will be merged and your project will appear on FOSSRadar.dev within an hour.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                <h3 className="font-semibold text-green-400 mb-2">Automatic Updates</h3>
                <p className="text-sm text-gray-300">
                  Once listed, we automatically update your project's star count, contributors, and other metadata daily via GitHub Actions. No need for manual updates!
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-12">
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-orange-500/20 to-green-500/20 border border-orange-500/30">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Submit?
              </h2>
              <p className="text-base sm:text-lg mb-6 text-gray-300">
                Head over to our GitHub repository and start the submission process. We're excited to showcase your project to India's FOSS community!
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="https://github.com/wbfoss/fossradar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 text-white font-medium transition-colors"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors"
                >
                  Browse Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Need Help */}
          <div className="text-center p-6 rounded-xl border border-gray-800 bg-gray-900/50">
            <h3 className="text-lg font-semibold text-white mb-2">
              Need Help?
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              If you have questions about the submission process, feel free to open an issue on GitHub or reach out to the maintainers.
            </p>
            <Link
              href="https://github.com/wbfoss/fossradar/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:underline text-sm font-medium"
            >
              Open an Issue
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                &copy; 2025{" "}
                <Link href="/" className="text-orange-400 hover:underline">
                  FOSSRadar.dev
                </Link>
                . Open source directory.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                An initiative by{" "}
                <Link
                  href="https://wbfoss.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  wbfoss
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/wbfoss/fossradar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Head from 'next/head'
import { useState, useEffect } from 'react'
import siteConfig from '../site.config'

export default function Home() {
  const [imgError, setImgError] = useState(false)
  const [overrides, setOverrides] = useState(null)

  useEffect(() => {
    async function loadOverrides() {
      try {
        const res = await fetch('/admin/site.content.json', { cache: 'no-store' })
        if (!res.ok) return
        const json = await res.json()
        setOverrides(json)
      } catch (e) {
        // ignore; fallback to siteConfig
      }
    }
    loadOverrides()
  }, [])
  return (
    <>
      <Head>
        <title>{(overrides && overrides.title) || siteConfig.title}</title>
        <meta name="description" content={(overrides && overrides.description) || siteConfig.description} />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm text-slate-500">Senior Manager — Data & Gen AI Engineering</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">{(overrides && overrides.siteName) || siteConfig.siteName}</h1>
            <p className="mt-2 text-xl text-slate-700 lead">13.6+ years building data platforms, AI systems, and enterprise analytics at scale — Amazon, Infosys, Merck, Xiaomi.</p>

            <p className="mt-6 text-slate-600">I lead cross-functional engineering teams to deliver trusted data platforms and GenAI-enabled analytics that translate into measurable business outcomes — faster launches, accurate forecasts, and actionable intelligence for leadership.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={(overrides && overrides.resume) || siteConfig.resume} download className="inline-flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-md shadow-sm hover:opacity-95">Download Resume</a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-300 px-4 py-3 rounded-md text-slate-700 hover:bg-slate-100">Contact</a>
            </div>

            <div className="mt-6 text-sm text-slate-600 flex gap-4">
              <a href={(overrides && overrides.social && overrides.social.linkedin) || siteConfig.social.linkedin} target="_blank" rel="noopener" className="underline">LinkedIn</a>
              <a href={(overrides && overrides.social && overrides.social.github) || siteConfig.social.github} target="_blank" rel="noopener" className="underline">GitHub</a>
              <a href={(overrides && overrides.social && overrides.social.medium) || siteConfig.social.medium} target="_blank" rel="noopener" className="underline">Medium</a>
            </div>

            <ul className="mt-8 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-slate-500">•</span><span><strong>Leadership:</strong> Built and led multi-regional data engineering teams and platform programs.</span></li>
              <li className="flex items-start gap-3"><span className="text-slate-500">•</span><span><strong>Scale & Impact:</strong> Architected lakehouse solutions, real-time ingestion, and GenAI features for business users.</span></li>
              <li className="flex items-start gap-3"><span className="text-slate-500">•</span><span><strong>Delivery:</strong> Strong product-oriented program management with measurable business outcomes.</span></li>
            </ul>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <div className="hero-image bg-white rounded-xl p-6 shadow-md soft-appear" id="profileCard" style={{width:320}}>
              <div className="w-full h-72 rounded-md overflow-hidden bg-gradient-to-tr from-slate-100 to-slate-50 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={(overrides && overrides.portrait) || siteConfig.portrait}
                    alt="Rahul Sounder portrait"
                    className="object-cover w-full h-full"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Profile placeholder">
                    <defs>
                      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#eef2ff"/><stop offset="1" stopColor="#fef3c7"/></linearGradient>
                    </defs>
                    <rect width="200" height="200" rx="16" fill="url(#g)"/>
                    <g transform="translate(30,30)" fill="#374151">
                      <circle cx="70" cy="40" r="28" fill="#111827" opacity="0.08" />
                      <rect x="0" y="80" width="140" height="12" rx="6" fill="#111827" opacity="0.06" />
                    </g>
                  </svg>
                )}
              </div>
              <div className="mt-4 text-sm text-slate-600">
                <div className="font-semibold">Rahul Sounder</div>
                <div className="text-slate-500">Senior Manager — Data & GenAI Engineering</div>
                <div className="mt-3 text-xs text-slate-500">Bengaluru, India • Open to executive leadership roles</div>
              </div>
            </div>
          </div>
        </section>

        <section id="career-snapshot" className="mt-16 bg-white border border-slate-100 rounded-xl p-6 soft-appear">
          <h2 className="text-2xl font-semibold">Career Snapshot</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-slate-500">Years</div>
              <div className="mt-1 font-bold text-2xl">13.6+</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Domains</div>
              <div className="mt-1 font-medium">Data Engineering · AI & GenAI · Cloud · Platforms</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Leadership Scope</div>
              <div className="mt-1 font-medium">Multi-team programs, cross-region delivery, platform ownership</div>
            </div>
          </div>
        </section>

        <section id="journey" className="mt-12">
          <h2 className="text-2xl font-semibold">Professional Journey</h2>
          <ol className="mt-6 space-y-6">
            <li className="bg-white border border-slate-100 rounded-xl p-5 soft-appear">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-semibold">Xiaomi Technology — Senior Project Manager, Data</div>
                  <div className="text-sm text-slate-500">Feb 2020 – Present (3.6 yrs)</div>
                </div>
                <div className="text-sm text-slate-500">Bengaluru, India</div>
              </div>
              <p className="mt-3 text-slate-600">Led GTM Analytics lakehouse, sales performance platforms, PLC & inventory analytics and GenAI enablement across South Asia. Architected Iceberg-based data models, PySpark pipelines, and real-time ingestion to provide reliable metrics for leadership decisions.</p>
            </li>

            <li className="bg-white border border-slate-100 rounded-xl p-5 soft-appear">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-semibold">Merck Group — Project Manager 2 (Delivery)</div>
                  <div className="text-sm text-slate-500">Feb 2020 – Jun 2022</div>
                </div>
                <div className="text-sm text-slate-500">Bengaluru, India</div>
              </div>
              <p className="mt-3 text-slate-600">Delivered secure, scalable data platforms for connected medical devices and HR analytics. Focused on GDPR-safe ingestion, telemetry analytics, and workforce intelligence for global stakeholders.</p>
            </li>

            <li className="bg-white border border-slate-100 rounded-xl p-5 soft-appear">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-semibold">Infosys — Lead Data Engineer</div>
                  <div className="text-sm text-slate-500">Sep 2016 – Feb 2020</div>
                </div>
                <div className="text-sm text-slate-500">Chennai, India</div>
              </div>
              <p className="mt-3 text-slate-600">Built Hadoop-based data lakes and ETL pipelines enabling production analytics and supply chain visibility for electronics and manufacturing domains.</p>
            </li>

            <li className="bg-white border border-slate-100 rounded-xl p-5 soft-appear">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-semibold">Amazon Development Centre — Data Specialist</div>
                  <div className="text-sm text-slate-500">Sep 2012 – Sep 2016</div>
                </div>
                <div className="text-sm text-slate-500">Bengaluru, India</div>
              </div>
              <p className="mt-3 text-slate-600">Built competitive monitoring systems, automated product matching, and pricing intelligence platforms supporting multiple geographies.</p>
            </li>
          </ol>
        </section>

        <section id="leadership" className="mt-12 bg-white border border-slate-100 rounded-xl p-6 soft-appear">
          <h2 className="text-2xl font-semibold">Leadership & Impact</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li><strong>GenAI Enablement:</strong> Delivered natural-language BI, automated insights, and AI-assisted data quality checks for enterprise users.</li>
            <li><strong>Platform Ownership:</strong> Led lakehouse architecture (Iceberg), governance, and cross-region data contracts to ensure a single source of truth.</li>
            <li><strong>Team Leadership:</strong> Scaled teams, planned headcount with directors, and drove cross-functional stakeholder alignment.</li>
            <li><strong>Business Outcomes:</strong> Standardized GTM KPIs, improved inventory visibility, and enabled faster launch decisions with reliable analytics.</li>
          </ul>
        </section>

        <section id="expertise" className="mt-12">
          <h2 className="text-2xl font-semibold">Expertise</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-100 rounded-xl p-4 soft-appear">
              <div className="font-semibold">Data Engineering</div>
              <div className="text-sm text-slate-500 mt-1">Lakehouses, ETL/ELT, PySpark, Iceberg, Delta, governance</div>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-4 soft-appear">
              <div className="font-semibold">AI & GenAI</div>
              <div className="text-sm text-slate-500 mt-1">Natural-language BI, automated insights, AI-assisted data quality</div>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-4 soft-appear">
              <div className="font-semibold">Cloud & Platforms</div>
              <div className="text-sm text-slate-500 mt-1">AWS / Azure / GCP, Databricks, Snowflake, real-time ingestion</div>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-4 soft-appear">
              <div className="font-semibold">Architecture</div>
              <div className="text-sm text-slate-500 mt-1">Scalable data models, schema evolution, performance, security</div>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-4 soft-appear">
              <div className="font-semibold">Engineering Leadership</div>
              <div className="text-sm text-slate-500 mt-1">Program delivery, Agile (Meego/Jira), stakeholder management</div>
            </div>
          </div>
        </section>

        <section id="thought" className="mt-12 bg-white border border-slate-100 rounded-xl p-6 soft-appear">
          <h2 className="text-2xl font-semibold">Thought Leadership</h2>
          <p className="mt-3 text-slate-600">Selected writing and projects that show practical leadership in data and AI.</p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li><a className="underline" href="https://medium.com/" target="_blank" rel="noopener">How to operationalize GenAI in enterprise analytics — Medium</a></li>
            <li><a className="underline" href="https://github.com/" target="_blank" rel="noopener">Example: Lakehouse ingestion patterns — GitHub</a></li>
          </ul>
        </section>

        <section id="trust" className="mt-12">
          <h2 className="text-2xl font-semibold">Trust & Credibility</h2>
          <div className="mt-4 bg-white border border-slate-100 rounded-xl p-6 flex items-center gap-6 soft-appear">
            <div className="flex-1">
              <div className="text-slate-500 text-sm">Companies</div>
              <div className="mt-3 flex flex-wrap gap-6 items-center">
                <div className="opacity-90 font-medium">Amazon</div>
                <div className="opacity-90 font-medium">Infosys</div>
                <div className="opacity-90 font-medium">Merck Group</div>
                <div className="opacity-90 font-medium">Xiaomi</div>
              </div>
            </div>
            <div>
              <div className="text-slate-500 text-sm">Awards & Certs</div>
              <div className="mt-3 text-slate-700 text-sm">Analytics Project Leader of the Year (2025) · Databricks Architect (2023) · AWS SAA (2021)</div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 bg-white border border-slate-100 rounded-xl p-6 soft-appear">
          <h2 className="text-2xl font-semibold">Contact & Next Steps</h2>
          <p className="mt-3 text-slate-600">For leadership roles, strategic advisory, or confidential conversations:</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4">
              <div className="text-sm text-slate-500">Email</div>
              <div className="mt-1 font-medium">{(overrides && overrides.social && overrides.social.email) || siteConfig.social.email}</div>
            </div>
            <div className="p-4">
              <div className="text-sm text-slate-500">Resume</div>
              <div className="mt-1"><a href="/resume-Rahul-Sounder.pdf" className="underline">Download PDF</a></div>
            </div>
            <div className="p-4">
              <div className="text-sm text-slate-500">Open to</div>
              <div className="mt-1">Senior leadership roles — Head of Data, Director/VP of Data & AI, Principal/Staff Engineer</div>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-sm text-slate-500">
          <div className="flex justify-between items-center">
            <div>© Rahul Sounder — Senior Manager, Data & GenAI Engineering</div>
            <div className="space-x-4"><a className="underline" href="#">Privacy</a><a className="underline" href="#">Terms</a></div>
          </div>
        </footer>
      </main>

      <script dangerouslySetInnerHTML={{__html:`(function(){function reveal(){document.querySelectorAll('.soft-appear').forEach((el,i)=>{setTimeout(()=>el.classList.add('show'),80*i)})}if(typeof window!=='undefined')window.addEventListener('load',reveal)})()`}} />
    </>
  )
}

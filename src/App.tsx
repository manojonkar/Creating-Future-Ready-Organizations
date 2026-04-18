import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Eye,
  Globe,
  Mail,
  MessageSquare,
  Monitor,
  Phone,
  Quote,
  Route,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

const CONFIG = {
  FACULTY_NAME: 'Manoj Onkar',
  FACULTY_ROLE: 'Master Coach, Trainer, and OD Consultant',
  FACULTY_IMAGE_URL: '/manoj-onkar.jpeg',
  WHATSAPP: '+91-9106456725',
  EMAIL: 'manoj@managementinnovations.co.in',
  WEBSITE: 'managementinnovations.co.in',
  TESTIMONIALS_URL: 'exoorg.com/ODeX',
  REGISTRATION_URL: 'https://razorpay.me/@Management',
} as const;

type IconCard = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

type SnapshotCard = {
  icon: LucideIcon;
  label: string;
  value: string;
  detail: string;
};

type CurriculumDay = {
  day: string;
  title: string;
  copy: string;
  topics: string[];
};

function absUrl(value: string) {
  const trimmed = value.trim();
  return trimmed.startsWith('http://') || trimmed.startsWith('https://')
    ? trimmed
    : `https://${trimmed}`;
}

const WA_HREF = `https://wa.me/${CONFIG.WHATSAPP.replace(/\D/g, '')}`;
const MAIL_HREF = `mailto:${CONFIG.EMAIL}`;
const SITE_HREF = absUrl(CONFIG.WEBSITE);
const TESTIMONIALS_HREF = absUrl(CONFIG.TESTIMONIALS_URL);

const NAV_LINKS = [
  { label: 'Program', href: '#program' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Voices', href: '#testimonials' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Contact', href: '#contact' },
] as const;

const HERO_SNAPSHOT: SnapshotCard[] = [
  {
    icon: Calendar,
    label: 'Duration',
    value: '2 immersive live days',
    detail: 'A deep-dive experience, not a passive webinar.',
  },
  {
    icon: Monitor,
    label: 'Format',
    value: 'Online interactive workshop',
    detail: 'Reflection, dialogue, exercises, and facilitated practice.',
  },
  {
    icon: Target,
    label: 'Foundation',
    value: 'MIT Theory U',
    detail: 'Applied to culture, leadership, and stakeholder relationships.',
  },
];

const DIFFERENTIATORS: IconCard[] = [
  {
    icon: Target,
    title: 'See beyond visible symptoms',
    copy:
      'Move from firefighting surface issues to reading the deeper system patterns shaping culture, performance, and trust.',
  },
  {
    icon: MessageSquare,
    title: 'Transform culture through conversation',
    copy:
      'Use deep listening and practical dialogue tools to shift how teams think, decide, and collaborate together.',
  },
  {
    icon: Award,
    title: 'Lead with head, heart, and soul',
    copy:
      'Build organizations where clarity, purpose, and human energy strengthen each other instead of competing.',
  },
];

const LEADER_OUTCOMES: IconCard[] = [
  {
    icon: Target,
    title: 'Sharpen strategic vision',
    copy:
      'See your organization, industry, and stakeholders with more clarity and fewer blind spots.',
  },
  {
    icon: Users,
    title: 'Deepen stakeholder relationships',
    copy:
      'Practice forms of listening that unlock trust, empathy, and better alignment across the system.',
  },
  {
    icon: MessageSquare,
    title: 'Shift team conversations',
    copy:
      'Reframe day-to-day dialogue so culture evolves through repeated high-quality interactions.',
  },
  {
    icon: CheckCircle2,
    title: 'Make wiser decisions',
    copy:
      'Tap collective intelligence and move from reactive decision-making to more grounded, future-aware choices.',
  },
  {
    icon: BookOpen,
    title: 'Apply Theory U practically',
    copy:
      'Translate concepts into real leadership situations through cases, interviews, empathy walks, and role plays.',
  },
  {
    icon: ArrowRight,
    title: 'Convert insight into movement',
    copy:
      'Leave with language, practices, and momentum to shape future-ready teams and cultures immediately.',
  },
];

const THEORY_U_ESSENCE = [
  {
    icon: Eye,
    title: 'Sensing',
    copy:
      'Opening the mind and heart to see the system as a whole—not only what is visible on the surface.',
  },
  {
    icon: Sparkles,
    title: 'Presencing',
    copy:
      'Connecting to the source of inspiration and will—accessing the stillness where the future can emerge.',
  },
  {
    icon: Route,
    title: 'The U journey',
    copy:
      'Moving down the left side of the U into depth, and up the right into aligned action and new possibilities.',
  },
] as const;

const THEORY_U_STEPS = [
  {
    step: '01',
    title: 'Co-Initiating',
    copy: 'Clarify intent, align around purpose, and begin from a place of authentic commitment.',
  },
  {
    step: '02',
    title: 'Co-Sensing',
    copy: 'Observe the system with fresh eyes and notice patterns, tensions, and emerging possibilities.',
  },
  {
    step: '03',
    title: 'Presencing',
    copy: 'Pause deeply enough to connect with the future that wants to emerge through the organization.',
  },
  {
    step: '04',
    title: 'Co-Creating',
    copy: 'Prototype new responses, conversations, and ways of leading with stakeholders.',
  },
  {
    step: '05',
    title: 'Co-Evolving',
    copy: 'Scale what works and embed new awareness into culture, systems, and execution.',
  },
] as const;

const CURRICULUM: CurriculumDay[] = [
  {
    day: 'Day 1',
    title: 'Foundation and Awareness: shifting perspectives',
    copy:
      'The first day helps leaders see differently by challenging inherited assumptions and expanding their capacity to listen, sense, and diagnose.',
    topics: [
      'Discover the limits of current management thinking and explore a new paradigm of leadership and culture.',
      'Move from learning only from the past to learning from the emerging future.',
      'Shift from symptom-based thinking to root-cause and systems thinking.',
      'Practice deep listening techniques that transform relationships with stakeholders.',
    ],
  },
  {
    day: 'Day 2',
    title: 'Transformation and Mastery: from insight to impact',
    copy:
      'The second day focuses on practical transformation: how leaders change culture, conversations, and collective action inside real organizations.',
    topics: [
      'Identify non-productive team cultures and understand how to reshape them into high-performance cultures.',
      'Use performance-transforming conversations to shift alignment, accountability, and trust.',
      'Solve problems through collective intelligence and deeper organizational awareness.',
      'Work through empathy walks, stakeholder interviews, role plays, and case clinics.',
    ],
  },
];

const NAMED_TESTIMONIALS = [
  {
    quote:
      'We do intelligent sounding junk. We literally try to please the boss. This workshop made me realize that the most powerful thing I can bring to the table is my own authentic presence, not just a polished report.',
    name: 'Sarath',
    role: 'Senior Manager',
  },
  {
    quote:
      "Brain is my enemy. Speed is nonsense. Leadership is not about you. It's about the space you hold for others. I've shifted from being a 'fixer' to being a 'facilitator' of the future that wants to emerge.",
    name: 'Vipul',
    role: 'COO',
  },
  {
    quote:
      'To go fast, you have to go slow. Deep listening is the strength that opens everything. In the IT industry, we are obsessed with speed, but this journey taught me that true innovation comes from the silence between the words.',
    name: 'Harshal Shah',
    role: 'Founder, IT industry',
  },
  {
    quote:
      'I was in the ego system. Now I have converted to ecosystem. That perspective has changed everything—from how I treat my employees to how I view my competitors. We are all part of one living system now.',
    name: 'Mahendra Kumar Yadav',
    role: 'Business leader',
  },
  {
    quote:
      'Consider every stakeholder as a source, not a resource — and you will get new, multiple ideas. This shift in perspective has unlocked a level of creativity in our infrastructure projects that I never thought possible.',
    name: 'Shaher Mohammad',
    role: 'Real estate and infrastructure',
  },
  {
    quote:
      'The person who entered the workshop was a victim hiding behind excuses. The one who left... is a leader with intention for life. I no longer wait for permission to lead; I lead from the future that I want to create.',
    name: 'Siddharth',
    role: 'Entrepreneur',
  },
  {
    quote:
      'The dialysis unit still holds the space of healing and compassion. Patients come and get treated... despite civil war. This work gave us the inner strength to maintain our humanity when everything around us was falling apart.',
    name: 'Usha Kulkarni',
    role: 'Healthcare leader, Ethiopia',
  },
  {
    quote:
      'I feel limitless right now. The boundaries I thought were real were just patterns of the past. I am now leading my company with a sense of freedom and purpose that is infectious to my entire team.',
    name: 'Jayshree Kunju',
    role: 'CEO, iBas Global',
  },
] as const;

const SHORT_TESTIMONIALS = [
  {
    quote:
      'What made it truly distinctive was that it did not feel like a module we studied. It was leadership practiced in real time, and the live exercises forced me to step out of my assumptions.',
    role: 'Founder and CEO',
  },
  {
    quote:
      'This program is, without a doubt, a game-changer for leaders and founders aiming to cultivate extraordinary organizations. You can literally see perspectives changing.',
    role: 'Managing Director',
  },
  {
    quote:
      'These sessions have been immensely valuable, driving immediate and meaningful shifts in alignment and collaboration, not just within our leadership team but across the organization.',
    role: 'Chairman and Founder',
  },
  {
    quote:
      'The emphasis on self-awareness and accountability helped me reflect deeply on my leadership style. The experience was practical, demanding, and genuinely transformative.',
    role: 'Director, Sales',
  },
] as const;

const CONTACT_CARDS = [
  { icon: Phone, label: 'WhatsApp', value: CONFIG.WHATSAPP, href: WA_HREF },
  { icon: Mail, label: 'Email', value: CONFIG.EMAIL, href: MAIL_HREF },
  { icon: Globe, label: 'Website', value: CONFIG.WEBSITE, href: SITE_HREF },
  {
    icon: MessageSquare,
    label: 'Testimonials',
    value: CONFIG.TESTIMONIALS_URL,
    href: TESTIMONIALS_HREF,
  },
] as const;

const AUDIENCE_LEADERS = [
  'Founders and promoters',
  'CXOs and business heads',
  'CHRO, OD, and culture leaders',
  'Strategy and transformation teams',
] as const;

const AUDIENCE_COMMUNITY = [
  'Business owners',
  'CEOs and COOs',
  'Entrepreneurs',
  'IT professionals',
  'Healthcare workers and surgeons',
  'Doctors and Ayurvedic doctors',
  'Ophthalmologists',
  'Teachers and school educators',
  'Artists',
  'NGO leaders',
  'Lawyers',
  'Management consultants',
] as const;

const FACULTY_METRICS = [
  { value: '30+', label: 'years of leadership and OD experience' },
  { value: '50K+', label: 'leaders, managers, and professionals engaged' },
  { value: '30+', label: 'industries represented' },
  { value: '10+', label: 'countries and organizational contexts' },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionHeader({
  icon: Icon,
  kicker,
  title,
  subtitle,
  tone = 'light',
}: {
  icon: LucideIcon;
  kicker: string;
  title: string;
  subtitle: string;
  tone?: 'light' | 'dark';
}) {
  const titleClass =
    tone === 'dark' ? 'text-white' : 'text-[var(--ink)]';
  const subtitleClass = tone === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const kickerClass =
    tone === 'dark'
      ? 'border-white/15 bg-white/8 text-[#f5dfad]'
      : '';

  return (
    <div className="max-w-3xl">
      <span className={`section-label ${kickerClass}`}>
        <Icon size={16} />
        {kicker}
      </span>
      <h2
        className={`mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl ${titleClass}`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${subtitleClass}`}>{subtitle}</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <section className="relative bg-[var(--ink)] text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,174,82,0.25),transparent_35%),radial-gradient(circle_at_82%_16%,rgba(120,150,255,0.18),transparent_24%),linear-gradient(135deg,#0c1a31_0%,#07101f_58%,#03070f_100%)]"
        />
        <div aria-hidden className="hero-grid absolute inset-0 opacity-60" />
        <div
          aria-hidden
          className="absolute left-12 top-24 h-40 w-40 rounded-full bg-[#d4ae52]/20 blur-3xl md:h-72 md:w-72"
        />
        <div
          aria-hidden
          className="absolute right-0 top-1/3 h-48 w-48 rounded-full bg-sky-300/10 blur-3xl md:h-80 md:w-80"
        />

        <div className="section-shell relative pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
          <nav className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl md:mb-20 md:px-6">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#f5dfad]">
                Theory U India · Management Innovations
              </p>
              <p className="font-serif text-lg tracking-[0.02em] text-white">
                Creating Future-Ready Organizations
              </p>
            </div>

            <div className="hidden flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[0.8125rem] text-slate-200 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#f5dfad]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f5dfad]">
                Leadership workshop for founders, CXOs, and transformation teams
              </span>

              <h1 className="mt-12 max-w-5xl pt-3 font-serif text-[clamp(3.2rem,8vw,7rem)] leading-[0.98] tracking-[-0.045em] text-white drop-shadow-[0_14px_30px_rgba(0,0,0,0.35)] md:mt-14 md:pt-4">
                <span className="block">Creating</span>
                <span className="block text-[#f5dfad]">Future-Ready</span>
                <span className="block">Organizations</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                A two-day leadership intensive rooted in MIT Theory U, designed to help
                senior leaders transform culture, deepen stakeholder connection, and build
                organizations where people contribute their head, heart, and soul.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-slate-100">
                  MIT Theory U methodology
                </span>
                <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-slate-100">
                  Deep listening and systems thinking
                </span>
                <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-slate-100">
                  Culture and stakeholder transformation
                </span>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={CONFIG.REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4ae52] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#081223] transition-all hover:-translate-y-0.5 hover:bg-[#dfbb63] hover:shadow-[0_18px_35px_rgba(212,174,82,0.25)]"
                >
                  Register Now
                  <ArrowRight size={16} />
                </a>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Speak on WhatsApp
                </a>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {[
                  { value: '2 days', label: 'Immersive live experience' },
                  { value: '50K+', label: 'Leaders engaged across programs' },
                  { value: '30+', label: 'Industries represented' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-5 backdrop-blur-md"
                  >
                    <p className="font-serif text-3xl text-[#f5dfad]">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside {...fadeUp} className="dark-surface p-6 sm:p-8">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#f5dfad]">
                Workshop Snapshot
              </p>

              <div className="mt-6 space-y-4">
                {HERO_SNAPSHOT.map(({ icon: Icon, label, value, detail }) => (
                  <div
                    key={label}
                    className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 rounded-full bg-[#d4ae52]/18 p-3 text-[#f5dfad]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">
                          {label}
                        </p>
                        <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="metal-line my-7 h-px" />

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#f5dfad]">
                  What shifts for leaders
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Greater clarity about culture and systemic patterns',
                    'Better conversations with teams and stakeholders',
                    'Practical methods to move from insight to execution',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#d4ae52]" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="mt-6 rounded-[1.75rem] border border-white/10 bg-black/15 p-6 text-sm leading-7 text-slate-200">
                Creating organizations where people bring their head, heart, and soul.
              </blockquote>
            </motion.aside>
          </div>
        </div>
      </section>

      <section id="program" className="section-space">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <motion.div {...fadeUp}>
              <SectionHeader
                icon={Target}
                kicker="Why this program matters"
                title="A leadership experience built for organizations navigating complexity."
                subtitle="This is not theory for theory’s sake. It is a high-involvement workshop for leaders who want to sense change earlier, create healthier cultures, and lead future-shaping conversations with more maturity."
              />
            </motion.div>

            <motion.div {...fadeUp} className="surface-card p-8 sm:p-10">
              <p className="text-lg leading-8 text-slate-700">
                The workshop blends strategic reflection, systems thinking, deep listening,
                and practical transformation methods so leaders can move from reactive
                management to purposeful, future-oriented leadership.
              </p>

              <div className="metal-line my-8 h-px" />

              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8c6a21]">
                Best suited for
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {AUDIENCE_LEADERS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d4ae52]/30 bg-[#d4ae52]/8 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="metal-line my-10 h-px" />

              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8c6a21]">
                Who joins the shift
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Senior leaders anchor the room—and the community spans sectors where stakes for people
                and performance are high.
              </p>
              <div id="community" className="mt-4 flex flex-wrap gap-3">
                {AUDIENCE_COMMUNITY.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {DIFFERENTIATORS.map(({ icon: Icon, title, copy }, index) => (
              <motion.article
                key={title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="surface-card h-full p-8"
              >
                <div className="w-fit rounded-full bg-[var(--ink)]/95 p-3 text-[#f5dfad]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 font-serif text-3xl tracking-[-0.03em] text-[var(--ink)]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="methodology"
        className="section-space bg-[linear-gradient(180deg,rgba(8,18,35,0.03),transparent_28%,rgba(8,18,35,0.05)_100%)]"
      >
        <div className="section-shell">
          <motion.div {...fadeUp}>
            <SectionHeader
              icon={BookOpen}
              kicker="MIT Theory U"
              title="Leading from the future as it emerges."
              subtitle="Developed by Otto Scharmer at MIT, Theory U is a journey of sensing, presencing, and realizing that helps leaders move beyond past patterns—so organizations can respond to what is emerging, not only what has been."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {THEORY_U_ESSENCE.map(({ icon: Icon, title, copy }, index) => (
              <motion.article
                key={title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="surface-card h-full p-8"
              >
                <div className="w-fit rounded-full bg-[#d4ae52]/14 p-3 text-[#8c6a21]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-[-0.03em] text-[var(--ink)]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-16">
            <SectionHeader
              icon={Target}
              kicker="The Theory U arc"
              title="A practical journey from observation to transformation."
              subtitle="The full pathway moves from shared intent through deep sensing and presencing into co-creation and lasting evolution—so insight becomes coordinated change."
            />
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {THEORY_U_STEPS.map((item, index) => (
              <motion.article
                key={item.step}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="surface-card h-full p-6"
              >
                <p className="font-serif text-5xl text-[#d4ae52]">{item.step}</p>
                <h3 className="mt-5 font-serif text-2xl tracking-[-0.03em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell">
          <motion.div {...fadeUp}>
            <SectionHeader
              icon={Award}
              kicker="Leader outcomes"
              title="What leaders build during and after the workshop."
              subtitle="The emphasis is on practical capability. Leaders leave with sharper diagnosis, more intentional conversations, and clearer ways to shape culture and performance."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {LEADER_OUTCOMES.map(({ icon: Icon, title, copy }, index) => (
              <motion.article
                key={title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="surface-card h-full p-8"
              >
                <div className="w-fit rounded-full bg-[#d4ae52]/14 p-3 text-[#8c6a21]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="section-space relative overflow-hidden bg-[var(--ink)] text-white">
        <div className="section-shell relative">
          <motion.div {...fadeUp}>
            <SectionHeader
              icon={Calendar}
              kicker="Two-day workshop design"
              title="A structured agenda that moves from awareness to transformation."
              subtitle="The sequence is designed to deepen insight first and then convert that awareness into new conversations, experiments, and culture-shaping action."
              tone="dark"
            />
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {CURRICULUM.map((day, index) => (
              <motion.article
                key={day.day}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <div className="inline-flex rounded-full bg-[#d4ae52] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#081223]">
                  {day.day}
                </div>
                <h3 className="mt-6 font-serif text-4xl tracking-[-0.03em] text-white">
                  {day.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{day.copy}</p>

                <ul className="mt-8 space-y-4">
                  {day.topics.map((topic) => (
                    <li key={topic} className="flex gap-3 text-sm leading-7 text-slate-200">
                      <CheckCircle2 className="mt-1 shrink-0 text-[#d4ae52]" size={17} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-space">
        <div className="section-shell">
          <motion.div {...fadeUp}>
            <SectionHeader
              icon={Quote}
              kicker="Real voices. Real shifts."
              title="What leaders experience in the room."
              subtitle="Named stories from participants across sectors—followed by short reflections from senior leadership cohorts."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {NAMED_TESTIMONIALS.map((item, index) => (
              <motion.blockquote
                key={`${item.name}-${index}`}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                className="surface-card relative h-full p-8"
              >
                <Quote className="absolute right-8 top-8 text-[#d4ae52]/25" size={44} />
                <p className="pr-8 text-lg leading-8 text-slate-700">{item.quote}</p>
                <footer className="mt-8 border-t border-slate-200/80 pt-6">
                  <p className="font-serif text-lg text-[var(--ink)]">{item.name}</p>
                  <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#8c6a21]">
                    {item.role}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-20">
            <SectionHeader
              icon={MessageSquare}
              kicker="Leadership voices"
              title="Perspective from the C-suite and founding teams."
              subtitle="Concise reflections from leaders who wanted depth, practice, and immediate relevance—not another leadership slide deck."
            />
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SHORT_TESTIMONIALS.map((item, index) => (
              <motion.blockquote
                key={`short-${index}`}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="surface-card relative h-full p-8"
              >
                <Quote className="absolute right-8 top-8 text-[#d4ae52]/25" size={44} />
                <p className="pr-8 text-lg leading-8 text-slate-700">{item.quote}</p>
                <footer className="mt-8 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#8c6a21]">
                  {item.role}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
      <section id="faculty" className="section-space bg-[linear-gradient(180deg,rgba(212,174,82,0.08),rgba(255,255,255,0)_28%,rgba(8,18,35,0.03)_100%)]">
        <div className="section-shell">
          <motion.div {...fadeUp}>
            <SectionHeader
              icon={Users}
              kicker="Faculty spotlight"
              title="Guided by Manoj Onkar."
              subtitle="Theory U India brings together rigorous facilitation and lived organizational practice—so leaders leave with clarity they can use on Monday morning."
            />
          </motion.div>

          <div className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_420px] xl:items-start">
            <div className="surface-card p-8 sm:p-10 lg:p-12">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8c6a21]">
                Faculty and facilitator
              </p>
              <h3 className="mt-4 font-serif text-5xl leading-none tracking-[-0.04em] text-[var(--ink)] md:text-6xl">
                {CONFIG.FACULTY_NAME}
              </h3>
              <p className="mt-4 text-lg font-medium text-slate-700">{CONFIG.FACULTY_ROLE}</p>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                Manoj Onkar is an experienced OD consultant, master coach, and trainer who
                has worked with leaders across industries to build more conscious,
                collaborative, and future-ready organizations. His work brings together
                deep reflection, practical transformation, and real-world leadership
                application.
              </p>

              <div className="metal-line my-8 h-px" />

              <p className="max-w-3xl text-base leading-8 text-slate-600">
                Since 2015, Manoj and his team have applied Theory U through workshops and
                consulting engagements that raise the quality of awareness, relationships,
                and performance across organizations, teams, and leadership groups.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {FACULTY_METRICS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-[#d4ae52]/20 bg-white/70 p-5"
                  >
                    <p className="font-serif text-4xl text-[var(--ink)]">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--ink-soft)]"
                >
                  Connect with Manoj
                </a>
                <a
                  href={MAIL_HREF}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[#d4ae52] hover:text-[#8c6a21]"
                >
                  Email the team
                </a>
              </div>
            </div>

            <div className="surface-card p-4 sm:p-5">
              <div className="rounded-[2rem] bg-[linear-gradient(180deg,#f9f5ee_0%,#efe4cf_100%)] p-4">
                <img
                  src={CONFIG.FACULTY_IMAGE_URL}
                  alt="Portrait of Manoj Onkar"
                  width={1128}
                  height={928}
                  className="block w-full rounded-[1.6rem] border border-white/80 bg-white shadow-[0_24px_60px_rgba(8,18,35,0.16)]"
                />
              </div>
              <div className="px-3 pb-2 pt-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#8c6a21]">
                  Workshop faculty
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--ink)]">
                  Manoj Onkar
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Featured faculty for the Creating Future-Ready Organizations workshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space relative overflow-hidden bg-[var(--ink)] text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,174,82,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,rgba(255,255,255,0.02)_100%)]"
        />
        <div className="section-shell relative">
          <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f5dfad]">
              Registration and contact
            </span>
            <h2 className="mt-6 font-serif text-5xl tracking-[-0.04em] text-white md:text-6xl">
              Invest in the future capacity of your leadership team.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Join a leadership experience that helps organizations sense more clearly,
              relate more deeply, and create the future with greater intention.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <motion.div {...fadeUp} className="dark-surface p-8 sm:p-10">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#f5dfad]">
                Your investment
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-black/15 p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
                    Individual
                  </p>
                  <p className="mt-4 font-serif text-5xl text-white">₹47,000</p>
                  <p className="mt-2 text-sm text-slate-400">+ GST</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-black/15 p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
                    Group (3+)
                  </p>
                  <p className="mt-4 font-serif text-5xl text-white">₹40,000</p>
                  <p className="mt-2 text-sm text-slate-400">+ GST per participant</p>
                </div>
              </div>

              <p className="mt-8 text-base leading-8 text-slate-300">
                This investment is designed to create outsized returns through stronger
                culture, sharper leadership awareness, and more future-ready decisions.
              </p>

              <a
                href={CONFIG.REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d4ae52] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#081223] transition-all hover:-translate-y-0.5 hover:bg-[#dfbb63]"
              >
                Secure Your Seat
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div {...fadeUp} className="grid gap-5 sm:grid-cols-2">
              {CONTACT_CARDS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 text-left shadow-[0_28px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors hover:border-[#d4ae52]/45 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ae52] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081223]"
                >
                  <div className="w-fit rounded-full bg-[#d4ae52]/18 p-3 text-[#f5dfad]">
                    <Icon size={20} />
                  </div>
                  <p className="mt-6 text-[0.68rem] uppercase tracking-[0.28em] text-[#f5dfad]">
                    {label}
                  </p>
                  <p className="mt-3 break-words text-lg font-medium leading-7 text-white">
                    {value}
                  </p>
                </a>
              ))}
            </motion.div>
          </div>

          <div className="mt-20 border-t border-white/10 pt-10 text-center">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-slate-400">
              © Management Innovations · Theory U India
            </p>
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">
              Creating Future-Ready Organizations — building extraordinary organizations
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

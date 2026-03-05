import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Monitor, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2,
  Quote,
  Mail,
  Globe,
  Phone
} from 'lucide-react';

/**
 * EASILY EDITABLE CONFIGURATION
 * Change these values to update the brochure content quickly.
 */
const CONFIG = {
  FACULTY_NAME: "Manoj Onkar",
  // If the image below is not visible, replace this URL with your own link.
  FACULTY_IMAGE_URL: "https://image2url.com/r2/default/images/1772694729525-716cf1e3-a887-4083-9627-f25b1ced48b4.jpg",
  WHATSAPP: "+91-9106456725",
  EMAIL: "manoj@managementinnovations.co.in",
  WEBSITE: "managementinnovations.co.in",
  TESTIMONIALS_URL: "exoorg.com/ODeX",
  REGISTRATION_URL: "https://razorpay.me/@Management"
};

const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-[#1a2b4a] flex items-center justify-center text-[#c9a227]">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2b4a]">{title}</h2>
    </div>
    <div className="w-20 h-1 bg-[#c9a227] mb-4" />
    {subtitle && <p className="text-lg text-slate-600 max-w-2xl">{subtitle}</p>}
  </div>
);

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#f4e4ba] selection:text-[#1a2b4a]">
      {/* Hero Section - Fixed Overlap */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center luxury-gradient text-white overflow-hidden py-20 px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto flex-grow flex flex-col justify-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-[#c9a227] text-[#1a2b4a] text-xs font-bold tracking-[0.2em] uppercase mb-8 self-center">
            2-Day Transformative Workshop
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6">
            CREATING<br />FUTURE READY<br />ORGANIZATIONS
          </h1>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-light text-[#f4e4ba] mb-12 max-w-3xl mx-auto italic">
            "Creating Organizations Where People Bring Their Head, Heart, and Soul"
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <Calendar className="mx-auto mb-3 text-[#c9a227]" size={32} />
              <p className="text-[10px] uppercase tracking-widest text-[#c9a227] mb-1">Duration</p>
              <p className="font-semibold">2 Full Days</p>
            </div>
            <div className="text-center">
              <Monitor className="mx-auto mb-3 text-[#c9a227]" size={32} />
              <p className="text-[10px] uppercase tracking-widest text-[#c9a227] mb-1">Format</p>
              <p className="font-semibold">Online Interactive</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-3 text-[#c9a227]" size={32} />
              <p className="text-[10px] uppercase tracking-widest text-[#c9a227] mb-1">Methodology</p>
              <p className="font-semibold">MIT Theory U</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-10 mt-16 text-xs tracking-[0.3em] uppercase opacity-50"
        >
          Management Innovations
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeader 
              icon={Target} 
              title="About This Program" 
              subtitle="This immersive 2-day online interactive workshop equips senior leaders with MIT-developed Theory U frameworks to transform organizational culture, sharpen strategic vision, and build authentic stakeholder relationships."
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn} className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-[#f4e4ba] mb-6">MIT's Proven Framework: Theory U</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Developed by Dr. Otto Scharmer at MIT Sloan, Theory U represents three decades of rigorous action research blending science, consciousness, and profound social innovation.
                </p>
                <div className="flex justify-between items-center bg-white/5 p-6 rounded-2xl border border-white/10">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#c9a227] text-[#1a2b4a] flex items-center justify-center font-bold text-sm mb-2">
                        {num}
                      </div>
                      <div className="h-0.5 w-4 bg-white/20 hidden last:hidden" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-5 gap-2 mt-4 text-[8px] uppercase tracking-tighter text-center font-bold text-slate-400">
                  <span>Co-Initiating</span>
                  <span>Co-Sensing</span>
                  <span>Presencing</span>
                  <span>Co-Creating</span>
                  <span>Co-Evolving</span>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years Experience', val: '30+' },
                { label: 'Leaders Trained', val: '50K+' },
                { label: 'Industries', val: '30+' },
                { label: 'Countries', val: '10+' }
              ].map((stat, i) => (
                <div key={i} className="bg-stone-100 p-8 rounded-2xl border-b-4 border-[#c9a227]">
                  <p className="text-4xl font-serif font-bold text-[#1a2b4a] mb-2">{stat.val}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="section-padding bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeader icon={BookOpen} title="Program Curriculum" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="bg-white p-10 rounded-3xl shadow-sm relative">
              <div className="absolute -top-4 left-8 bg-[#c9a227] text-[#1a2b4a] px-6 py-2 rounded-full font-bold text-sm">DAY 1</div>
              <h3 className="text-2xl font-serif text-[#1a2b4a] mt-4 mb-8">Foundation & Awareness: Shifting Perspectives</h3>
              <ul className="space-y-6">
                {[
                  { t: 'Paradigm Shift', d: 'Discover the bankruptcy of current management theory and introduction to a new paradigm of leadership and culture.' },
                  { t: 'Future-Oriented Learning', d: 'Transition from "Learning from the Past" to "Learning from the Emerging Future".' },
                  { t: 'Systems Thinking', d: 'Shift from symptom-based thinking to understanding root causes and systemic patterns.' },
                  { t: 'Deep Listening Mastery', d: 'Discover and practice deep listening techniques that transform stakeholder relationships.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 shrink-0" />
                    <div>
                      <p className="font-bold text-[#1a2b4a] mb-1">{item.t}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white p-10 rounded-3xl shadow-sm relative">
              <div className="absolute -top-4 left-8 bg-[#c9a227] text-[#1a2b4a] px-6 py-2 rounded-full font-bold text-sm">DAY 2</div>
              <h3 className="text-2xl font-serif text-[#1a2b4a] mt-4 mb-8">Transformation & Mastery: From Insight to Impact</h3>
              <ul className="space-y-6">
                {[
                  { t: 'Culture Transformation', d: 'Discover non-productive team cultures and learn proven methods to transform them into high-performance cultures.' },
                  { t: 'Conversational Frameworks', d: 'Master performance-transforming conversational techniques that shift team dynamics.' },
                  { t: 'Collective Intelligence', d: 'Problem-solving through collective consciousness and tapping organizational wisdom.' },
                  { t: 'Practical Application', d: 'Hands-on exercises including empathy walks, stakeholder interviews, role plays, and case clinics.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 shrink-0" />
                    <div>
                      <p className="font-bold text-[#1a2b4a] mb-1">{item.t}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeader icon={Award} title="Key Benefits & Transformations" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, t: 'Strategic Vision', d: 'See your industry, organization, and stakeholders with new clarity. Break out of blind spots.' },
              { icon: Users, t: 'Authentic Connections', d: 'Practice deep listening to build genuine, trust-based relationships with all stakeholders.' },
              { icon: MessageSquare, t: 'Cultural Shift', d: 'Reframe team conversations to shape a healthier, high-performance culture.' },
              { icon: CheckCircle2, t: 'Better Decisions', d: 'Tap collective intelligence for wiser, faster choices. Move from reactive to proactive.' },
              { icon: Award, t: 'Purpose-Driven', d: 'Align to your authentic purpose and values. Lead with meaning and inspire your teams.' },
              { icon: ArrowRight, t: 'Accelerated Results', d: 'Co-create the future with key stakeholders. Transform insights into measurable impact.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 hover:border-[#c9a227] transition-colors group"
              >
                <benefit.icon className="text-[#c9a227] mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold text-[#1a2b4a] mb-4">{benefit.t}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeader icon={MessageSquare} title="What Leaders Are Saying" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "What made it truly distinctive was that it didn't feel like a 'module we studied' — it was leadership practiced in real time. The live exercises forced me to step out of my own assumptions.", r: "Founder & CEO" },
              { q: "This program is, without a doubt, a game-changer for leaders and founders aiming to cultivate extraordinary organizations. One can literally see perspectives changing.", r: "Managing Director" },
              { q: "These sessions have been immensely valuable, driving immediate and meaningful shifts in alignment and collaboration—not just within our leadership team.", r: "Chairman & Founder" },
              { q: "This training program was a truly transformative experience. The emphasis on self-awareness and accountability helped me reflect deeply on my leadership style.", r: "Director – Sales" }
            ].map((test, i) => (
              <motion.div key={i} {...fadeIn} className="bg-white p-10 rounded-3xl shadow-sm border-l-4 border-[#c9a227] relative">
                <Quote className="absolute top-8 right-8 text-[#c9a227] opacity-20" size={48} />
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{test.q}"</p>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{test.r}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilitator */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <SectionHeader icon={Users} title="Your Facilitator" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-center bg-stone-50 p-12 rounded-[3rem]">
            <div className="w-64 h-64 rounded-3xl overflow-hidden shrink-0 bg-slate-200 shadow-xl border-4 border-white">
              <img 
                src={CONFIG.FACULTY_IMAGE_URL} 
                alt={CONFIG.FACULTY_NAME} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-[#1a2b4a] mb-2">{CONFIG.FACULTY_NAME}</h3>
              <p className="text-[#c9a227] font-bold uppercase tracking-widest text-sm mb-6">World-Class Trainer, Coach & OD Consultant</p>
              <p className="text-slate-600 leading-relaxed mb-8">
                An adept OD consultant, master coach, and trainer who has trained and certified hundreds of trainers and coaches across diverse sectors. Since 2015, Manoj and his team have leveraged Theory U for specialized workshops and consulting, elevating consciousness in organizations, society, and individuals.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-serif font-bold text-[#1a2b4a]">30+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Years</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-[#1a2b4a]">50K+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Leaders</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-[#1a2b4a]">10+</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-padding luxury-gradient text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-serif font-bold mb-12 text-[#f4e4ba]">Your Investment</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-[#c9a227] mb-4">Individual</p>
                <p className="text-5xl font-serif font-bold mb-2">₹47,000</p>
                <p className="text-sm opacity-60">+ GST</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-[#c9a227] mb-4">Group (3+)</p>
                <p className="text-5xl font-serif font-bold mb-2">₹40,000</p>
                <p className="text-sm opacity-60">+ GST per participant</p>
              </div>
            </div>
            <p className="text-lg italic text-[#f4e4ba] opacity-80">
              "This investment helps you transform the future of your organization by 100X or more."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Transform Your Leadership</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-16">
              Join leaders worldwide creating future-ready cultures of authentic connection, co-creation, and purpose-driven impact.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Phone, l: 'WhatsApp', v: CONFIG.WHATSAPP },
                { icon: Mail, l: 'Email', v: CONFIG.EMAIL },
                { icon: Globe, l: 'Website', v: CONFIG.WEBSITE },
                { icon: MessageSquare, l: 'Testimonials', v: CONFIG.TESTIMONIALS_URL }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <item.icon className="mx-auto mb-4 text-[#c9a227]" size={24} />
                  <p className="text-[10px] uppercase tracking-widest text-[#c9a227] mb-2">{item.l}</p>
                  <p className="text-sm font-medium break-words">{item.v}</p>
                </div>
              ))}
            </div>

            <a 
              href={CONFIG.REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a227] text-[#1a2b4a] px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#dab32e] transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Register Now
            </a>

            <div className="mt-24 pt-12 border-t border-white/10 opacity-50">
              <div className="w-20 h-0.5 bg-[#c9a227] mx-auto mb-8" />
              <p className="text-xs tracking-[0.4em] uppercase">© Management Innovations</p>
              <p className="text-[10px] tracking-[0.2em] uppercase mt-2">Building Extraordinary Organizations</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default App;

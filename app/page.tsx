import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SkillBars from "@/components/SkillBars";
import { profile, projects, skillGroups } from "@/data/portfolio";

const socialIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Discord: MessageSquare,
};

function Head({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="sec-head">
      <h2 className="sec-title">{title}</h2>
      <p className="sec-sub">{sub}</p>
    </div>
  );
}

export default function Home() {
  const contacts: {
    Icon: LucideIcon;
    label: string;
    value: string;
    href: string;
  }[] = [
    {
      Icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      Icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[\s-]/g, "")}`,
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="wrap py-12 md:py-16">
          <div className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-8 md:flex-row md:gap-14">
            <div className="flex-1 text-center md:text-left">
              <p className="chip mb-4">{profile.role}</p>
              <h1 className="text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
                Hi, I’m {profile.name.split(" ")[0]}. I build clean, responsive
                websites.
              </h1>
              <p className="muted mt-3 max-w-md md:max-w-lg">
                {profile.tagline}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a className="btn" href={profile.resume} download>
                  <Download size={16} /> Download resume
                </a>
                <Link className="btn btn-ghost" href="/#projects">
                  See my projects <ArrowRight size={16} />
                </Link>
              </div>
              <div
                className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start"
                aria-label="Social links"
              >
                {profile.socials.map((s) => {
                  const Icon = socialIcons[s.label] ?? ArrowUpRight;
                  return (
                    <a
                      key={s.label}
                      className="chip"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={15} /> {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className="aspect-square w-44 shrink-0 rounded-full border-4 object-cover md:w-60"
              style={{ borderColor: "var(--line)", background: "var(--soft)" }}
            />
          </div>
        </section>

        <section id="about" className="alt">
          <div className="sec wrap">
            <Head
              title="About me"
              sub="My journey, what I like building, and what I do away from the keyboard."
            />
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
              <div className="space-y-4">
                <p>
                  I started with HTML and CSS, then moved on to Git, GitHub and
                  modern JavaScript (ES6). Seeing a page I wrote appear in the
                  browser is what got me hooked.
                </p>
                <p>
                  Today I build with React, TypeScript, Next.js and Tailwind
                  CSS, and I’m growing on the backend with Express, MongoDB and
                  JWT. My recent projects include a grocery price tracker with a
                  Bengali interface, a gym workout library, a tech-stack picker
                  and an online library app.
                </p>
                <p>
                  I enjoy work where design and logic meet: layouts that adapt
                  to every screen and small details that make an interface feel
                  considered.
                </p>
              </div>
              <div className="card self-start">
                <h3 className="mb-2 font-semibold">Outside of code</h3>
                <p className="muted">
                  When I’m not coding I enjoy reading books, listening to music
                  and traveling. Visiting new places gives me fresh ideas, and I
                  bring that curiosity into my work: I like to learn something
                  new every week and understand how things work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="sec wrap">
          <Head
            title="Skills"
            sub="The tools I use to turn designs into working websites."
          />
          <SkillBars groups={skillGroups} />
        </section>

        <section id="projects" className="alt">
          <div className="sec wrap">
            <Head
              title="Projects"
              sub="Some of the sites I designed, built and deployed."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.id}
                  className="card flex flex-col overflow-hidden !p-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={`Preview of ${p.name}`}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="muted text-sm">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="chip !px-2.5 !py-0.5 !text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      className="btn mt-auto self-start"
                      href={`/projects/${p.id}`}
                    >
                      View details <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sec wrap">
          <Head
            title="Contact"
            sub="Have a project or an opportunity in mind? Send me a message and I’ll reply as soon as I can."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {contacts.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="card transition-colors hover:border-[var(--acc)]"
              >
                <Icon size={22} color="var(--acc)" />
                <div className="muted mt-3 text-sm">{label}</div>
                <div className="break-all font-medium">{value}</div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer
        className="muted border-t py-6 text-center text-sm"
        style={{ borderColor: "var(--line)" }}
      >
        © 2026 {profile.name}. Built with Next.js and Tailwind CSS.
      </footer>
    </>
  );
}

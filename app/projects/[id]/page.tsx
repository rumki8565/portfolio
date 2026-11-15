import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Rocket,
  TriangleAlert,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ id: string }>;
}

const findProject = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);

export function generateStaticParams(): { id: string }[] {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const p = findProject(id);
  return { title: p ? `${p.name} — Rumki Akter` : "Project not found" };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const index = projects.findIndex((x) => x.id === id);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <main>
      <section className="alt border-b" style={{ borderColor: "var(--line)" }}>
        <div className="wrap py-10">
          <Link className="chip" href="/#projects">
            <ArrowLeft size={15} /> Back to projects
          </Link>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            {p.name}
          </h1>
          <p className="muted mt-2 max-w-2xl">{p.description}</p>
        </div>
      </section>

      <div className="wrap grid gap-10 py-10 lg:grid-cols-[1.8fr_1fr]">
        <div className="space-y-9">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={`Preview of ${p.name}`}
            className="w-full rounded-2xl border"
            style={{ borderColor: "var(--line)" }}
          />
          <section>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
              <TriangleAlert size={19} color="var(--acc)" /> Challenges faced
            </h2>
            <div className="space-y-3">
              {p.challenges.map((c) => (
                <div key={c} className="card !p-4">
                  {c}
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
              <Rocket size={19} color="var(--acc)" /> Future plans and
              improvements
            </h2>
            <div className="space-y-3">
              {p.future.map((f) => (
                <div key={f} className="card !p-4">
                  {f}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="self-start lg:sticky lg:top-20">
          <div className="card space-y-5">
            <div>
              <h2 className="mb-3 font-semibold">Main technology stack</h2>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                className="btn justify-center"
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} /> Live project
              </a>
              <a
                className="btn btn-ghost justify-center"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} /> GitHub repository (client)
              </a>
            </div>
          </div>
          <Link
            href={`/projects/${next.id}`}
            className="card mt-5 flex items-center justify-between"
          >
            <span>
              <span className="muted block text-sm">Next project</span>
              <span className="font-medium">{next.name}</span>
            </span>
            <ArrowRight size={18} />
          </Link>
        </aside>
      </div>
    </main>
  );
}

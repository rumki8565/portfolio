import type { SkillGroup } from "@/data/portfolio";

export default function SkillBars({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.title} className="card">
          <h3 className="mb-4 font-semibold">{g.title}</h3>
          <div className="space-y-3.5">
            {g.skills.map((s) => (
              <div key={s.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="muted">{s.level}%</span>
                </div>
                <div
                  className="h-2 overflow-hidden rounded-full"
                  style={{ background: "var(--soft)" }}
                  role="img"
                  aria-label={`${s.name} ${s.level} percent`}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.level}%`, background: "var(--acc)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

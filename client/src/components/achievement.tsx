import { Award, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { achievements, type AchievementItem } from "@/data/achievements";

function imageUrl(file: string) {
  return `${import.meta.env.BASE_URL}achievements/${file}`;
}

function AchievementCard({ item }: { item: AchievementItem }) {
  const Icon = item.type === "Certificate" ? Award : Trophy;
  const meta = [item.issuer, item.year].filter(Boolean).join(" • ");

  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
        {item.image ? (
          <a
            href={imageUrl(item.image)}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={imageUrl(item.image)}
              alt={item.label}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </a>
        ) : (
          <Icon className="w-16 h-16 text-accent-custom" />
        )}
      </div>
      <div className="p-5 flex-1">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-custom mb-2">
          <Icon className="w-3.5 h-3.5" />
          {item.type}
        </span>
        <h3 className="text-lg font-bold text-gray-900">{item.label}</h3>
        {meta && <p className="text-sm text-gray-500 mt-1">{meta}</p>}
        {item.description && (
          <p className="text-sm text-gray-600 mt-3">{item.description}</p>
        )}
      </div>
    </Card>
  );
}

export default function Achievement() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements &amp; Certificates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition and credentials earned along the way.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <AchievementCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

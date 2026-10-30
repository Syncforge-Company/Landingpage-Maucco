import { Marquee } from "@/components/ui/marquee";
import { serviceKeywords } from "@/constants/services";

export function KeywordsMarquee() {
  return (
    <div aria-hidden="true" className="bg-brand-ink py-2 text-white/70">
      <Marquee pauseOnHover className="[--duration:60s] [--gap:3rem]">
        {serviceKeywords.map((keyword) => (
          <span key={keyword} className="text-sm font-medium whitespace-nowrap">
            {keyword}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

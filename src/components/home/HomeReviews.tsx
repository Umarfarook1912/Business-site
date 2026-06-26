"use client";

import { Star, Quote } from "lucide-react";
import { CLIENT_REVIEWS } from "@/lib/constants";
import { MotionSection } from "@/components/common/MotionSection";
import { MotionStagger, MotionStaggerItem } from "@/components/common/MotionStagger";

export function HomeReviews() {
  return (
    <section className="bg-off-white py-16 border-y border-[#E2E8F0]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection className="max-w-xl mb-10">
          <p className="section-label mb-2">Client Reviews</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-tight">
            What Our Clients Say
          </h2>
        </MotionSection>

        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLIENT_REVIEWS.map((review) => (
            <MotionStaggerItem key={review.id}>
              <article className="h-full bg-white border border-[#E2E8F0] rounded-xl p-5 flex flex-col hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-shadow">
                <Quote size={18} className="text-sky/60 mb-3 flex-shrink-0" />
                <p className="text-xs text-[#64748B] leading-relaxed flex-1 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{review.name}</p>
                  <p className="text-[11px] text-[#94A3B8]">{review.role}</p>
                </div>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

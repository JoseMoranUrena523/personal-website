"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import LogoBadge from "@/components/logo-badge";
import SectionHeading from "@/components/section/section-heading";
import { DATA } from "@/data/resume";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

const BLUR_FADE_DELAY = 0.04;

const CONGRESSIONAL_TITLE = "Certificate of Special Congressional Recognition";
const LEADERSHIP_TITLE = "Leadership Participation Award";

const leadershipImages = [
  "/yonkers-pal-certificate.jpg",
  "/office-of-the-mayor-certificate.jpg",
  "/state-senate-certificate.jpg",
  "/state-assembly-certificate.jpg"
];

export default function AwardsSection() {
  const [openCongressional, setOpenCongressional] = useState(false);
  const [openLeadership, setOpenLeadership] = useState(false);
  const [leadershipImage, setLeadershipImage] = useState(0);

  const nextLeadershipImage = () => {
    setLeadershipImage((prev) => (prev + 1) % leadershipImages.length);
  };

  const prevLeadershipImage = () => {
    setLeadershipImage(
      (prev) => (prev - 1 + leadershipImages.length) % leadershipImages.length,
    );
  };

  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <SectionHeading>Awards and Certifications</SectionHeading>
      </BlurFade>

      <div className="flex flex-col gap-8">
        {DATA.awards.map((award, index) => {
          const isCongressional = award.title === CONGRESSIONAL_TITLE;
          const isLeadership = award.title === LEADERSHIP_TITLE;

          const content = (
            <>
              <div className="flex min-w-0 flex-1 items-start gap-x-3">
                <LogoBadge src={award.image} alt={award.title} />

                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-center gap-2 font-semibold leading-none">
                    {award.title}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {award.description}
                  </div>
                </div>
              </div>

              <div className="flex-none text-right text-xs tabular-nums text-muted-foreground">
                {award.date}
              </div>
            </>
          );

          return (
            <BlurFade
              key={award.title}
              delay={BLUR_FADE_DELAY + index * 0.05}
            >
              {isCongressional ? (
                <Dialog
                  open={openCongressional}
                  onOpenChange={setOpenCongressional}
                >
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="group flex w-full items-start justify-between gap-x-3 text-left"
                    >
                      {content}
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-h-[90vh] max-w-4xl overflow-hidden p-6">
                    <DialogTitle className="sr-only">
                      {award.title}
                    </DialogTitle>

                    <DialogDescription className="sr-only">
                      Official Certificate of Special Congressional
                      Recognition.
                    </DialogDescription>

                    <button
                      type="button"
                      onClick={() => setOpenCongressional(false)}
                      className="absolute right-3 top-3 z-20 rounded-full border bg-background/80 p-2 backdrop-blur"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="flex max-h-[75vh] items-center justify-center overflow-auto">
                      <Image
                        src="/certificate-of-special-congressional-recognition.png"
                        alt="Certificate of Special Congressional Recognition"
                        width={1600}
                        height={1200}
                        className="max-h-[75vh] w-auto rounded-lg object-contain shadow"
                        priority
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : isLeadership ? (
                <Dialog
                  open={openLeadership}
                  onOpenChange={setOpenLeadership}
                >
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="group flex w-full items-start justify-between gap-x-3 text-left"
                    >
                      {content}
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-h-[90vh] max-w-5xl overflow-hidden p-6">
                    <DialogTitle className="sr-only">
                      {award.title}
                    </DialogTitle>

                    <DialogDescription className="sr-only">
                      Leadership Participation Award certificates.
                    </DialogDescription>

                    <button
                      type="button"
                      onClick={() => setOpenLeadership(false)}
                      className="absolute right-3 top-3 z-20 rounded-full border bg-background/80 p-2 backdrop-blur"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center justify-center gap-4">
                        <button
                          type="button"
                          onClick={prevLeadershipImage}
                          className="rounded-full border p-2 transition hover:bg-muted"
                          aria-label="Previous certificate"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>

                        <div className="flex max-h-[70vh] items-center justify-center overflow-auto">
                          <Image
                            src={leadershipImages[leadershipImage]}
                            alt={`Leadership Participation Award Certificate ${
                              leadershipImage + 1
                            }`}
                            width={1600}
                            height={1200}
                            className="max-h-[70vh] w-auto rounded-lg object-contain shadow"
                            priority
                          />
                        </div>

                        <button
                          type="button"
                          onClick={nextLeadershipImage}
                          className="rounded-full border p-2 transition hover:bg-muted"
                          aria-label="Next certificate"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex gap-2">
                        {leadershipImages.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setLeadershipImage(index)}
                            className={`h-3 w-3 rounded-full border ${
                              leadershipImage === index
                                ? "bg-foreground"
                                : "bg-muted"
                            }`}
                            aria-label={`View certificate ${index + 1}`}
                          />
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground">
                        Certificate {leadershipImage + 1} of{" "}
                        {leadershipImages.length}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Link
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-x-3"
                >
                  {content}
                </Link>
              )}
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}

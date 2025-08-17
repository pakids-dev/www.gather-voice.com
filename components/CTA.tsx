"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function CTA() {
  const { t } = useTranslation()
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t("ctaTitle")}
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            {t("ctaSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background hover:bg-background/90 text-foreground px-8 py-3"
            >
              {t("startFreeTrial")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 bg-transparent"
            >
              {t("scheduleDemo")}
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 mt-6">
            {t("ctaDisclaimer")}
          </p>
        </div>
      </div>
    </section>
  )
}

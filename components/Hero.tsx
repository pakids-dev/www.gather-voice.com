"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp, MessageSquare } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t("heroTitle")}
            <span className="text-primary">{t("heroTitleHighlight")}</span>
            {t("heroTitleEnd")}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              {t("startTrial")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t("customerEngagement")}</h3>
              <p className="text-sm text-muted-foreground">{t("customerEngagementDesc")}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t("dataDrivenDecisions")}</h3>
              <p className="text-sm text-muted-foreground">{t("dataDrivenDecisionsDesc")}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t("betterProducts")}</h3>
              <p className="text-sm text-muted-foreground">{t("betterProductsDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

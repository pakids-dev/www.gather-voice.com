"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Upload, Vote, BarChart3 } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function HowItWorks() {
  const { t } = useTranslation()
  
  const steps = [
    {
      icon: Upload,
      titleKey: "submitFeaturesTitle" as const,
      descriptionKey: "submitFeaturesDesc" as const,
    },
    {
      icon: Vote,
      titleKey: "customersVoteTitle" as const,
      descriptionKey: "customersVoteDesc" as const,
    },
    {
      icon: BarChart3,
      titleKey: "analyzeResultsTitle" as const,
      descriptionKey: "analyzeResultsDesc" as const,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("howItWorksTitle")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorksSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center h-full">
              <Card className="bg-card border-border mb-6 w-full h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{t(step.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{t(step.descriptionKey)}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

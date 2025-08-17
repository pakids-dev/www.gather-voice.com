"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function Pricing() {
  const { t } = useTranslation()
  const plans = [
    {
      nameKey: "starterPlan" as const,
      price: "$29",
      periodKey: "perMonth" as const,
      descriptionKey: "starterDesc" as const,
      featureKeys: [
        "upTo100Votes" as const,
        "fiveFeatureRequests" as const,
        "basicAnalytics" as const,
        "emailSupport" as const,
        "publicVotingBoard" as const,
      ],
      popular: false,
    },
    {
      nameKey: "professionalPlan" as const,
      price: "$79",
      periodKey: "perMonth" as const,
      descriptionKey: "professionalDesc" as const,
      featureKeys: [
        "upTo1000Votes" as const,
        "unlimitedFeatureRequests" as const,
        "advancedAnalytics" as const,
        "prioritySupport" as const,
        "customBranding" as const,
        "privateVotingBoards" as const,
        "teamCollaborationTitle" as const,
      ],
      popular: true,
    },
    {
      nameKey: "enterprisePlan" as const,
      price: "Custom",
      periodKey: "" as const,
      descriptionKey: "enterpriseDesc" as const,
      featureKeys: [
        "unlimitedVotes" as const,
        "unlimitedFeatureRequests" as const,
        "advancedAnalyticsReporting" as const,
        "dedicatedSupport" as const,
        "customIntegrations" as const,
        "ssoAuthentication" as const,
        "apiAccess" as const,
        "whiteLabelSolution" as const,
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("pricingTitle")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pricingSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`bg-card border-border relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    {t("mostPopular")}
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-card-foreground">{t(plan.nameKey)}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.periodKey && t(plan.periodKey)}</span>
                </div>
                <CardDescription className="mt-4 leading-relaxed">{t(plan.descriptionKey)}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.featureKeys.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                  size="lg"
                >
                  {plan.nameKey === "enterprisePlan" ? t("contactSales") : t("startTrial")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

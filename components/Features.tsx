"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Vote, BarChart3, Bell, Shield, Zap, Users } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

export default function Features() {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: Vote,
      titleKey: "easyVotingTitle" as const,
      descriptionKey: "easyVotingDesc" as const,
    },
    {
      icon: BarChart3,
      titleKey: "realTimeAnalyticsTitle" as const,
      descriptionKey: "realTimeAnalyticsDesc" as const,
    },
    {
      icon: Bell,
      titleKey: "smartNotificationsTitle" as const,
      descriptionKey: "smartNotificationsDesc" as const,
    },
    {
      icon: Shield,
      titleKey: "securePrivateTitle" as const,
      descriptionKey: "securePrivateDesc" as const,
    },
    {
      icon: Zap,
      titleKey: "quickSetupTitle" as const,
      descriptionKey: "quickSetupDesc" as const,
    },
    {
      icon: Users,
      titleKey: "teamCollaborationTitle" as const,
      descriptionKey: "teamCollaborationDesc" as const,
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("featuresTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("featuresSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{t(feature.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {t(feature.descriptionKey)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

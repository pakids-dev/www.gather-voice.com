"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslation } from "@/hooks/useTranslation"
import { Globe } from "lucide-react"

export default function Header() {
  const { language, toggleLanguage } = useLanguage()
  const { t } = useTranslation()

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="https://uhglbvdvhoxwdoqyyudm.supabase.co/storage/v1/object/public/static/logo.png"
            alt="GatherVoice"
            width={200}
            height={100}
            className="rounded-lg"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("features")}
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("howItWorks")}
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("pricing")}
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            {t("testimonials")}
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            {language === "en" ? "한" : "EN"}
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex">
            {t("signIn")}
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {t("getStarted")}
          </Button>
        </div>
      </div>
    </header>
  )
}

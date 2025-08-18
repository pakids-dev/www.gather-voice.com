"use client"

import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="https://uhglbvdvhoxwdoqyyudm.supabase.co/storage/v1/object/public/static/logo.png"
                alt="Logo"
                width={200}
                height={100}
                className="rounded-lg"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              {t("footerDescription")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">{t("product")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("features")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("pricing")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("api")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("integrations")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">{t("support")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("helpCenter")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("contactUs")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("privacyPolicy")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("termsOfService")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 회사 정보 섹션 */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="text-center space-y-2">
            <div className="text-sm text-muted-foreground whitespace-pre-line">
              {t("companyInfo")}
            </div>
            <p className="text-muted-foreground mt-4">{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
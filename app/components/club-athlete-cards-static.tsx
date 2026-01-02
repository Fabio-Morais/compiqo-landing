import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  CheckCircle2,
  Layout as LayoutIcon,
  Dumbbell,
  ChevronRight,
} from "lucide-react";
import { Translations } from "../lib/i18n";

export function ClubCardStatic({ t }: { t: Translations }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl blur-xl" />
      <Card className="relative border-2 border-orange-200 dark:border-orange-900 h-full">
        <CardHeader className="pb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white mb-4">
            <LayoutIcon className="w-8 h-8" />
          </div>
          <CardTitle className="text-2xl">{t.club.title}</CardTitle>
          <CardDescription className="text-base">
            {t.club.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {t.club.features.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
          <Button
            disabled
            className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 opacity-60 cursor-not-allowed"
          >
            {t.club.cta} <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function AthleteCardStatic({ t }: { t: Translations }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl" />
      <Card className="relative border-2 border-blue-200 dark:border-blue-900 h-full">
        <CardHeader className="pb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-4">
            <Dumbbell className="w-8 h-8" />
          </div>
          <Badge className="w-fit mb-2 bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-950 dark:text-green-400">
            {t.athlete.free}
          </Badge>
          <CardTitle className="text-2xl">{t.athlete.title}</CardTitle>
          <CardDescription className="text-base">
            {t.athlete.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {t.athlete.features.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
          <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
            <p className="text-sm text-muted-foreground text-center">
              {t.athlete.athleteNote}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


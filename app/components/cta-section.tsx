"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 text-center relative z-10"
    >
      <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
        Pronto para transformar o seu clube?
      </h2>
      <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
        Junte-se a clubes que já estão a usar o Compiqo para preparar
        atletas campeões. Comece gratuitamente hoje.
      </p>
      <div className="flex justify-center">
        <Link href="/club">
          <Button
            size="lg"
            className="h-14 px-10 text-lg rounded-full bg-white text-orange-600 hover:bg-gray-100 shadow-xl"
          >
            Criar o Meu Clube <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}


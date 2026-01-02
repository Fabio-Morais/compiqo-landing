"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="hidden sm:inline-flex text-base font-medium"
        >
          Entrar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Escolha o seu perfil</DialogTitle>
          <DialogDescription>
            Como deseja aceder à plataforma?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            disabled
            className="w-full justify-between h-14 text-lg opacity-60 cursor-not-allowed"
          >
            Clube / Ginásio{" "}
            <span className="text-sm text-muted-foreground">Brevemente</span>
          </Button>
          <Button
            variant="outline"
            disabled
            className="w-full justify-between h-14 text-lg opacity-60 cursor-not-allowed"
          >
            Atleta{" "}
            <span className="text-sm text-muted-foreground">Brevemente</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../alert-dialog";
import { useState } from "react";

interface BaseDecisionDialogProps {
  title?: string;
  description: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onConfirm: () => Promise<void>;
}

export function BaseDecisionDialog({
  title = "Confirmar operação",
  description,
  isOpen,
  setIsOpen,
  onConfirm,
}: BaseDecisionDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleConfirm(): Promise<void> {
    setIsLoading(true);

    try {
      await onConfirm();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction disabled={isLoading} onClick={handleConfirm}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

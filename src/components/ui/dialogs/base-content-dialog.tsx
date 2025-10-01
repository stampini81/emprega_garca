import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { ComponentProps } from "react";

interface BaseContentDialogProps extends ComponentProps<"div"> {
  title: string;
  description?: string;
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

export function BaseContentDialog({
  title,
  description,
  children,
  isOpen,
  setIsOpen,
}: BaseContentDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent style={{ maxHeight: "90vh" }}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description || ""}</DialogDescription>
        </DialogHeader>
        <ScrollArea
          style={{
            maxHeight: "70vh",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

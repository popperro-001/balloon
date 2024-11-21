import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

interface Props {
  children: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({ children, open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full min-w-[70vw] p-2 border-none overflow-y-auto hide-scrollbar h-[85vh]">
        {children}
      </DialogContent>
    </Dialog>
  );
};

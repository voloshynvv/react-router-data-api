import { DialogBackdrop, Dialog, DialogPanel } from '@headlessui/react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />

      <div className="fixed inset-0 flex w-screen">
        <DialogPanel>{children}</DialogPanel>
      </div>
    </Dialog>
  );
};

import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';

import { Drawer } from '@/components/ui/drawer';
import { Sidebar } from '@/components/sidebar';

export const AppBar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    handleClose();
  }, [pathname]);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <header className="flex h-12 items-center justify-between gap-x-4 border-b px-4">
      <h1 className="font-medium">React Router Data API</h1>

      <button aria-label="menu" onClick={handleOpen}>
        <IoMenuOutline className="size-6" />
      </button>

      <Drawer isOpen={open} onClose={handleClose}>
        <Sidebar />
      </Drawer>
    </header>
  );
};

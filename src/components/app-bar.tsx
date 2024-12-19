import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { Drawer } from './ui/drawer';
import { Sidebar } from './sidebar';

export const AppBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex h-11 items-center justify-between gap-x-4 border-b px-4">
      <h1 className="font-medium">React Router Data API</h1>

      <button aria-label="menu" onClick={() => setOpen(true)}>
        <IoMenuOutline className="size-6" />
      </button>

      <Drawer isOpen={open} onClose={() => setOpen(false)}>
        <Sidebar />
      </Drawer>
    </header>
  );
};

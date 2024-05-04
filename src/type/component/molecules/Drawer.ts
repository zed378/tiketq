import { ReactNode } from "react";

export interface DrawerType {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

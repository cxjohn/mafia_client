import { useState, useCallback, useMemo } from "react";

export default function useDisclosure(defaultIsOpen: boolean) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen);
  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);
  const toggle = useCallback(() => setIsOpen((prevIsOpen) => !prevIsOpen), []);

  const disclosure = useMemo(() => {
    return {
      isOpen,
      close,
      open,
      toggle,
    };
  }, [close, isOpen, open, toggle]);

  return disclosure;
}

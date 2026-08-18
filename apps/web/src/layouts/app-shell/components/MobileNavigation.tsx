import { useEffect, useRef, type RefObject } from "react";
import { X } from "lucide-react";
import { Dialog, IconButton } from "@sintacks/design-system";
import { OrganizationContext } from "./OrganizationContext.js";
import { SidebarNavigation } from "./SidebarNavigation.js";
import { UserContext } from "./UserContext.js";
import styles from "../../../styles/layouts/app-shell/components/MobileNavigation.module.css";

export function MobileNavigation({
  open,
  onOpenChange,
  returnFocusRef,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }
    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function close() {
    onOpenChange(false);
    returnFocusRef.current?.focus();
  }

  return (
    <Dialog ref={dialogRef} title="Navigation" onCancel={close} onClose={close}>
      <div className={styles.root}>
        <div className={styles.header}>
          <strong>Sintacks Books</strong>
          <IconButton icon={X} label="Close navigation" type="button" onClick={close} />
        </div>
        <OrganizationContext />
        <SidebarNavigation onNavigate={close} />
        <UserContext />
      </div>
    </Dialog>
  );
}

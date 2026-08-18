import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Search, X } from "lucide-react";
import { Button, Dialog, IconButton, SearchField } from "@sintacks/design-system";
import { searchableNavigationItems } from "../../../app/config/navigation.js";
import styles from "../../../styles/layouts/app-shell/components/GlobalSearchTrigger.module.css";

export function GlobalSearchTrigger() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const results = searchableNavigationItems.filter((item) =>
    `${item.label} ${item.description}`.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  function closeDialog() {
    setOpen(false);
    setQuery("");
    triggerRef.current?.focus();
  }

  return (
    <>
      <Button
        ref={triggerRef}
        type="button"
        variant="secondary"
        iconStart={Search}
        onClick={() => setOpen(true)}
      >
        Search
      </Button>
      <Dialog ref={dialogRef} title="Search routes" onCancel={closeDialog} onClose={closeDialog}>
        <div className={styles.dialog}>
          <div className={styles.dialogHeader}>
            <SearchField
              autoFocus
              id="route-search"
              label="Search shell destinations"
              placeholder="Search routes"
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
            />
            <IconButton icon={X} label="Close search" type="button" onClick={closeDialog} />
          </div>
          <ul className={styles.results}>
            {results.map((item) => (
              <li key={item.id}>
                <button
                  className={styles.result}
                  type="button"
                  onClick={() => {
                    void navigate(item.path);
                    closeDialog();
                  }}
                >
                  <span>{item.label}</span>
                  <small>{item.description}</small>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
}

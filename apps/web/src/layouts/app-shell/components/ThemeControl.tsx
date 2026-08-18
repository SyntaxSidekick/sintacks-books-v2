import { Monitor, Moon, Sun } from "lucide-react";
import { Icon } from "@sintacks/design-system";
import { useTheme, type ThemeMode } from "../../../app/providers/index.js";
import styles from "../../../styles/layouts/app-shell/components/ThemeControl.module.css";

const themeOptions: Array<{ mode: ThemeMode; label: string; icon: typeof Sun }> = [
  { mode: "light", label: "Light", icon: Sun },
  { mode: "dark", label: "Dark", icon: Moon },
  { mode: "system", label: "System", icon: Monitor },
];

export function ThemeControl() {
  const { mode, setMode } = useTheme();

  return (
    <fieldset className={styles.root}>
      <legend className={styles.legend}>Theme</legend>
      {themeOptions.map((option) => (
        <button
          aria-pressed={mode === option.mode}
          className={styles.option}
          key={option.mode}
          title={`${option.label} theme`}
          type="button"
          onClick={() => setMode(option.mode)}
        >
          <Icon icon={option.icon} size="sm" />
          <span>{option.label}</span>
        </button>
      ))}
    </fieldset>
  );
}

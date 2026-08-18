# Responsive Behavior

Desktop viewports use a persistent `<aside>` sidebar with expanded and collapsed states. The collapsed preference is stored with the `sintacks-books:shell:sidebar-collapsed` key and safely ignored when storage is unavailable.

Below the shell breakpoint, the persistent sidebar is replaced by a native-dialog mobile navigation surface. It reuses the same navigation configuration, closes after navigation, supports Escape through the native dialog cancel event, and restores focus to the menu trigger.

The header keeps breadcrumbs, route search, theme controls, notifications entry, and context presentation. At smaller widths, header controls wrap so touch targets remain usable.

Theme behavior supports light, dark, and system modes. Explicit choices are stored with `sintacks-books:theme-mode`; system mode follows `prefers-color-scheme` changes.

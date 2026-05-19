import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { commandItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function CommandPalette({ open, onOpenChange, onToggleTheme }) {
  const [search, setSearch] = useState("");

  const runCommand = useCallback(
    (href) => {
      onOpenChange(false);
      setSearch("");

      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else if (href === "action:theme") {
        onToggleTheme?.();
      } else if (href === "external:github") {
        window.open(profile.github, "_blank");
      } else if (href === "external:linkedin") {
        window.open(profile.linkedin, "_blank");
      }
    },
    [onOpenChange, onToggleTheme]
  );

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange((o) => !o);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange]);

  if (!open) return null;

  const groups = [...new Set(commandItems.map((i) => i.group))];

  return (
    <div className="fixed inset-0 z-[150] p-4">
      <div
        className="absolute inset-0 theme-overlay backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div className="absolute left-1/2 top-[10%] sm:top-[20%] w-full max-w-lg -translate-x-1/2">
        <Command
          className="glass-strong rounded-2xl overflow-hidden shadow-2xl border theme-border"
          label="Command Menu"
        >
          <div className="flex items-center gap-3 border-b theme-border-subtle px-4">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search commands..."
              className="flex h-12 sm:h-14 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden sm:inline text-xs text-muted-foreground glass px-2 py-1 rounded border theme-border-subtle">
              ESC
            </kbd>
          </div>
          <Command.List className="max-h-[50vh] sm:max-h-72 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>
            {groups.map((group) => (
              <Command.Group
                key={group}
                heading={group}
                className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-muted-foreground"
              >
                {commandItems
                  .filter((item) => item.group === group)
                  .map((item) => (
                    <Command.Item
                      key={item.id}
                      value={item.label}
                      onSelect={() => runCommand(item.href)}
                      className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2.5 text-sm aria-selected:ui-nav-active"
                    >
                      {item.label}
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}

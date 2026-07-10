import type { ReactNode } from "react";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: Readonly<SiteShellProps>) {
  return <>{children}</>;
}

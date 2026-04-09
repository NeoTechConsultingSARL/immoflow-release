import { Link, usePage } from "@inertiajs/react";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  className?: string;
  activeClassName?: string;
  href?: string;
  to?: string; // Support for existing 'to' prop
  children?: ReactNode;
  end?: boolean;
  [key: string]: any;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, href, to, end, ...props }, ref) => {
    const { url } = usePage();
    const targetHref = href || to || "#";
    
    // Improved active detection
    const isActive = end 
      ? url === targetHref
      : url.startsWith(targetHref);

    return (
      <Link
        ref={ref}
        href={targetHref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
export default NavLink;

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigationItems = [
  { path: "/member/information", label: "Personal information" },
  { path: "/member/booking", label: "Class booking" },
  { path: "/member/shopping", label: "Shopping record" },
  { path: "/member/point", label: "Point record" },
];

export default function MemberLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link
                className={`text-lg focus:text-neutral-content focus:bg-neutral`}
                href={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

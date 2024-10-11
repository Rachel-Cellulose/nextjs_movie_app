import React from "react";
import Link from "next/link";

export default function MainMenu({ title, address, Icon }) {
  return (
    <Link href={address}>
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
        {Icon && <Icon size={24} />}
        <span>{title}</span>
      </div>
    </Link>
  );
}

import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div >
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-7 bg-cyan-600 text-white mt-auto">
      <aside>
        <div className="text-3xl font-black italic mb-2">WATER_BOTTLE</div>
        <p className="font-bold">
          ACME Industries Ltd. <br />
          Providing reliable hydration since 2026
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
}
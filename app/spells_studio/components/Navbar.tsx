"use client";
import { LogOut } from "@/app/auth/logout";
import { usePathname, useRouter } from 'next/navigation';
import { ImExit } from "react-icons/im";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <nav className="mb-4">
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/spells_studio">🏴‍☠️ Chat</a>
      <a className={`mr-4 ${pathname === "/structured_output" ? "text-white border-b" : ""}`} href="/spells_studio/structured_output">🧱 Structured Output</a>
      <a className={`mr-4 ${pathname === "/agents" ? "text-white border-b" : ""}`} href="/spells_studio/agents">🦜 Agents</a>
      <a className={`mr-4 ${pathname === "/retrieval" ? "text-white border-b" : ""}`} href="/spells_studio/retrieval">🐶 Retrieval</a>
      <a className={`mr-4 ${pathname === "/retrieval_agents" ? "text-white border-b" : ""}`} href="/spells_studio/retrieval_agents">🤖 Retrieval Agents</a>
      <div className="flex justify-end">
        <div className="flex items-center">
          <ImExit className="text-2xl text-[#D64979] md:block hidden cursor-pointer" onClick={() => LogOut(router)} />
          <span className="text-sm font-medium text-gray-500 ml-2 cursor-pointer" onClick={() => LogOut(router)}>Logout</span>
        </div>
      </div>
    </nav>
  );
}
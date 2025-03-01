"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex items-center justify-start bg-[#0075be] px-[15px] py-3">
      <Image src="https://i.imgur.com/zXT74IQ.png" width={230} height={28} className="w-[120px]" alt="logo" />
    </div>
  );
}

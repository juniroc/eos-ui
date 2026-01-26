'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ChatArea() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: 메시지 전송 로직 구현
      setMessage('');
    }
  };

  return (
    <div className="box-border flex flex-col justify-between items-start p-3 gap-[10px] w-[288px] h-full bg-[#F5F5F5] border border-[#D9D9D9] shrink-0">
      <div>
        <Image src="/eos-logo.svg" alt="EOS Logo" width={80} height={28} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center py-1 px-3 gap-3 mx-auto w-[264px] h-9 bg-white">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="내용을 입력해주세요."
          className="text-xs leading-none text-[#B3B3B3] border-none outline-none flex-1 placeholder:text-[#B3B3B3]"
        />
        <button
          type="submit"
          className="flex justify-center items-center p-1.5 w-7 h-7 bg-[#2C2C2C] border-none cursor-pointer hover:bg-[#1a1a1a]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3L8 13M8 3L3 8M8 3L13 8"
              stroke="#F3F3F3"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}


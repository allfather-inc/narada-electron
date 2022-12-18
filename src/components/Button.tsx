import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <div className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
      <span
        role="button"
        tabIndex={0}
        className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
        onClick={onClick}
        onKeyDown={onClick}
      >
        {text}
      </span>
    </div>
  );
}

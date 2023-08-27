import React from 'react';

interface Props {
  isActive: string;
  text: string;
  setTabState: any;
}

const Tab: React.FC<Props> = ({ isActive, text, setTabState }) => {
  return (
    <span
      className={`text-sm text-neutral-700 cursor-pointer   ${
        isActive == text ? 'text-blue-400 font-medium pb-1 border-b-4 border-blue-400' : ''
      }`}
      onClick={() => setTabState(text)}
    >
      {text}
    </span>
  );
};

export default Tab;

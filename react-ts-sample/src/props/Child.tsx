import React from "react";

interface ChildProps {
  name: string;
  onClick: () => void;
}

const Child = ({ name, onClick }: ChildProps) => {
  return (
    <div>
      {name}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

const ChildAsFC: React.FC<ChildProps> = ({ name, onClick }) => {
  return (
    <div>
      {name}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export { Child, ChildAsFC };

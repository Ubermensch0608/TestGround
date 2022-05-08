import React, { ReactNode } from "react";

export type SliderProps = {
  isToggled?: boolean;
};

export interface ToggleProps {
  htmlFor: string;
  id: string;
  reactRef?: string;
  isToggled?: boolean;
  onChange: React.ChangeEventHandler;
}

export interface ButtonProps {
  children: ReactNode;
  onClick: React.MouseEventHandler;
}

export interface ModalContentProps {
  onClick: React.MouseEventHandler;
}

export interface TabProps {
  id: string;
  clickedTab: string;
  onClick: React.MouseEventHandler;
}

export class TagsProps {
  text: string;
  id: string;

  constructor(currentText: string) {
    const index = () => {
      for (let i = 0; i++; ) {
        return i.toString();
      }
    };

    this.text = currentText;
    this.id = index();
  }
}

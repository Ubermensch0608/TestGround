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

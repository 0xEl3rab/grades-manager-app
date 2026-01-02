import type { ReactNode } from "react";

export interface IProps {
  Average_Moudel: string;
  Examn: number;
  TP: number;
  input1: number;
  input2: number;
  Average: number;
  num : number;
  id: string;
  onDelete: (id:string) => void;
  onUpdate: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}
export interface IResult {
   elem_session: ReactNode;
   elem_averag: ReactNode;
   elem_state: ReactNode
}
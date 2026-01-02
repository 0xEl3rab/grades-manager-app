
export interface IProps {
  Average_Moudel: string;
  Examn: number;
  TP: number;
  input1: number;
  input2: number;
  Average: number;
  num : number;
  id: string | number; 
  onDelete: (id: string | number) => void;
  onUpdate: (e: React.ChangeEvent<HTMLInputElement>, id: string | number) => void;
}

import type { IProps } from "../interface"
import { v4 as uuid } from "uuid";




const INITIAL_MODULES:IProps[] = [
    {
        id: uuid(),
        num:1,
        Average: 5,
        input1:0.40,
        input2:0.60,
        TP:0,
        Examn:0,
        Average_Moudel:"0",
    }


]

export default INITIAL_MODULES;
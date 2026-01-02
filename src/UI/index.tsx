import type { IProps } from "../interface";


const Data = ({num, onDelete,id,onUpdate, Average_Moudel}: IProps) => {


  return (
      <tr className="bg-[#1e293b] ">
        <td className=" rounded-2xl " onClick={()=> {onDelete(id)}}><span className="flex justify-center bg-red-500 p-2 rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /> </svg></span></td>
        <td><p className="text-center">{Average_Moudel}</p></td>
        <td><input name="Examn" onChange={(e) => onUpdate(e, id)} style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }} className=" border  text-center border-gray-400 rounded-md" type="number" min="0" max="20" placeholder="النقطة"/></td>
        <td><input name="TP" onChange={(e) => onUpdate(e, id)} style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }} className=" border  text-center border-gray-400 rounded-md" type="number" min="0" max="20" placeholder="النقطة"/></td>
        <td className="grid items-center">
          <input name="input1" onChange={(e) => onUpdate(e, id)} style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }} className="flex justify-center border  text-center border-gray-400 rounded-md" type="number" min="0" max="1" placeholder="0.40"/>
          <p>-----</p>
          <input name="input2" onChange={(e) => onUpdate(e, id)} style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }} className=" border  text-center border-gray-400 rounded-md" type="number" min="0" max="1" placeholder="0.60"/>
        </td>
        <td ><input name="Average" onChange={(e) => onUpdate(e, id)} style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }} className=" border  text-center border-gray-400 rounded-md" type="number" min="0" max="10" placeholder="معامل"/></td>
        <td><p className="text-center">{num}</p></td>
      </tr>

  )
}
export default Data;
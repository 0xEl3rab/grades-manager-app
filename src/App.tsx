
import { useState} from 'react'
import './App.css'
import type { IProps } from './interface'
import INITIAL_MODULES from './data';
import Data from './UI/index';
import { v4 as uuid } from "uuid";


function App() {

  const [modules, setModules] = useState<IProps[]>([INITIAL_MODULES[0]]);
  const [showResults, setShowResults] = useState(false);





  const deleteModule = (id: string) => {
    const updateModules = modules.filter(mou => mou.id !== id);
    setModules(updateModules)
  }
  const updateModulesValue = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const { name, value } = e.target;
    setModules(prev => {
        const nextState = prev.map(mou => mou.id === id ? {...mou, [name]: value} : mou);
        console.log("المصفوفة الجديدة ستكون:", nextState);
        return nextState;
    })
  }
    const StateAv = () => { 
    if (FinalAverage < 10) {
      return (
        <div className='grid col-end-1 justify-center my-2'>
            <p className='text-red-500 flex justify-center text-3xl font-black my-3'>حاول اكثر يمكنك فعلها</p>
            <img src="https://media.giphy.com/media/GwJySDxO1vWXRV76lB/giphy.gif" alt="img"/>
        </div>
      );
    }
    else{
      if (FinalAverage >= 10 && FinalAverage < 12) {
            return (
              <div className='grid col-end-1 justify-center my-2'>
                <p className='text-yellow-300 flex justify-center text-3xl font-black my-3'>نسبة مقبولة, واصل التقدم</p>
                <img src="https://media.giphy.com/media/pynZagVcYxVUk/giphy.gif" alt="img"/>
              </div>
            );
      }
      else{
        if (FinalAverage >= 12 && FinalAverage < 16) {
            return (
              <div className='grid col-end-1 justify-center my-2'>
                <p className='text-green-400 flex justify-center text-3xl font-black my-3'>ممتاز اداء رائع </p>
                <img src="https://media.giphy.com/media/pcKnpFrumIM7TtzayE/giphy.gif" alt="img"/>
              </div>
            );
        }else {
          if (FinalAverage >= 16 && FinalAverage <= 20) {
            console.log("مذهل انت متفوق");
            return (
              <div className='grid col-end-1 justify-center my-2'>
                <p className='text-blue-400 flex justify-center text-3xl font-black my-3'>مذهل انت متفوق</p>
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3d1eDdobDJra2F2bWd1ZWs1bmpvZWc0c2ltb29hYzAwZ3lvczBiNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LCo3JuJ8ca3XXJQqlM/giphy.gif" alt="img"/>
              </div>
            );
          }
        }
      }
    }
    return null;
  }

    const a = modules.reduce((ac,mou) => {
      const tpScore = (Number(mou.input1) || 0) * (Number(mou.TP) || 0);  
      const examScore = (Number(mou.input2) || 0) * (Number(mou.Examn) || 0);
      const currentModuleTotal = tpScore + examScore;
      const avScore = Number(mou.Average);
      const total_value_of_average = avScore * currentModuleTotal;
      return ac + total_value_of_average
    },0)
    const totalAverage = modules.reduce((acc,moud) => {
      const all_values = acc + Number(moud.Average);
      return all_values;
  },0)
    const FinalAverage = a/totalAverage;
    console.log("معدلك هو : ",FinalAverage)
  const rerenderMoudel = modules.map((mou,index) => {
    const tpScore = (Number(mou.input1) || 0) * (Number(mou.TP) || 0);  
    const examScore = (Number(mou.input2) || 0) * (Number(mou.Examn) || 0);
    const currentModuleTotal = tpScore + examScore;





    return (<Data key={mou.id}  {...mou} num={index + 1} onDelete={deleteModule} onUpdate={updateModulesValue} Average_Moudel={currentModuleTotal.toFixed(2)}/>)})
 


  return (
    <div>
      <header className=''>
        <h1 className='flex justify-center text-4xl text-[#818cf8] p-2 font-black'>نظام حساب المعدل الجامعي</h1>
        <h3 className='flex justify-center text-xl text-gray-300 p-3'>أدخل بيانات مقاييسك واحصل على معدلك الفصلي بدقة</h3>
        <p className='flex justify-center w-3/3 p-3 font-black'>ملاحظة : يرجى معرفة ان خانة النسبة المئوية اولها خاص بالأعمال الموجهة و اسفلها خاصة ب الامتحان</p>
      </header>
      <main className='md:flex md:justify-center w-full md:flex-row-reverse '>
        <div className=' w-full bg-[]-200 m-3 p-3 rounded-2xl shadow-2xl  'style={{backgroundColor: 'rgba(30, 41, 59, 0.7)'}} >
          <div className="Moudels  flex justify-center  ">
            <table className="w-full border-separate border-spacing-y-4 text-center">
              <thead className="text-slate-400">
                <tr className='text-[#818cf8] '>
                  <th>حذف</th>
                  <th>معدل المقياس</th>
                  <th>الامتحان</th>
                  <th>اعمال الموجهة</th>
                  <th>النسبة المئوية</th>
                  <th>المعامل</th>
                  <th>رقم المقياس</th>
                </tr>
              </thead>
              <tbody>{rerenderMoudel}</tbody>
            </table>
          </div>
          <div className="btn flex justify-around m-4 border-[#818cf8] border-t-2 p-4 rounded-2xl" >
            <button className="btn flex bg-green-500 to-blue-500 p-4 rounded-2xl cursor-pointer" onClick={() => setShowResults(!showResults)}>حساب المعدل
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
              </svg>
            </button>
            <button className="btn flex bg-[#818cf8] p-4 rounded-2xl cursor-pointer" onClick={() => 
              {
                const newModule = {
                  ...INITIAL_MODULES[0],
                  id: uuid(),
                  num: modules.length+1
                }
                setModules([...modules, newModule])
                }}>اضافة مقياس
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="results md:w-1/2 h-1/2 m-4 border-[#818cf8] border-t-2 p-4 rounded-2xl" style={{backgroundColor: 'rgba(30, 41, 59, 0.7)'}} >
          <h1 className='flex justify-end text-2xl text-[#818cf8] p-2 font-black rounded-2xl border border-gray-400' >النتائج والتقييم <span className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
            </svg></span>
          </h1>
          {showResults && <div className=' border border-gray-400 rounded-2xl my-2'>
            <h1 className='flex justify-center text-3xl'>المعدل الفصلي</h1>
            <h2 className='flex justify-center text-3xl font-black my-3 text-[#818cf8] '>{FinalAverage}</h2>
            {StateAv()}
          </div>}
            
        </div>
      </main>
    </div>
  )
}

export default App

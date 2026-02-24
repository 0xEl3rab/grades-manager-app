import { useState } from 'react'
import './App.css'
import type { IProps } from './interface'
import INITIAL_MODULES from './data'
import Data from './UI/index'
import { v4 as uuid } from "uuid"

function App() {
  const [modules, setModules] = useState<IProps[]>([INITIAL_MODULES[0]])
  const [showResults, setShowResults] = useState(false)

  const deleteModule = (id: string | number) => {
    const updateModules = modules.filter(mou => mou.id !== id)
    setModules(updateModules)
  }

  const updateModulesValue = (e: React.ChangeEvent<HTMLInputElement>, id: string | number) => {
    const { name, value } = e.target
    setModules(prev => {
      const nextState = prev.map(mou =>
        mou.id === id ? { ...mou, [name]: value } : mou
      )
      return nextState
    })
  }

  const calculateMetrics = () => {
    const a = modules.reduce((ac, mou) => {
      const tpScore = (Number(mou.input1) || 0) * (Number(mou.TP) || 0)
      const examScore = (Number(mou.input2) || 0) * (Number(mou.Examn) || 0)
      const currentModuleTotal = tpScore + examScore
      const avScore = Number(mou.Average)
      const total_value_of_average = avScore * currentModuleTotal
      return ac + total_value_of_average
    }, 0)

    const totalAverage = modules.reduce((acc, moud) => acc + Number(moud.Average), 0)
    return a / totalAverage
  }

  const FinalAverage = calculateMetrics()

  const StateAv = () => {
    if (FinalAverage < 10) {
      return (
        <div className="result-card result-poor">
          <div className="result-icon">😟</div>
          <p className="result-text">حاول أكثر، يمكنك فعلها!</p>
          <div className="result-emoji">
            <img src="https://media.giphy.com/media/GwJySDxO1vWXRV76lB/giphy.gif" alt="encouragement" />
          </div>
        </div>
      )
    } else if (FinalAverage >= 10 && FinalAverage < 12) {
      return (
        <div className="result-card result-fair">
          <div className="result-icon">😊</div>
          <p className="result-text">نسبة مقبولة، واصل التقدم!</p>
          <div className="result-emoji">
            <img src="https://media.giphy.com/media/pynZagVcYxVUk/giphy.gif" alt="keep going" />
          </div>
        </div>
      )
    } else if (FinalAverage >= 12 && FinalAverage < 16) {
      return (
        <div className="result-card result-good">
          <div className="result-icon">🎉</div>
          <p className="result-text">ممتاز! أداء رائع جداً</p>
          <div className="result-emoji">
            <img src="https://media.giphy.com/media/pcKnpFrumIM7TtzayE/giphy.gif" alt="excellent" />
          </div>
        </div>
      )
    } else {
      return (
        <div className="result-card result-excellent">
          <div className="result-icon">🌟</div>
          <p className="result-text">مذهل! أنت متفوق جداً</p>
          <div className="result-emoji">
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3d1eDdobDJra2F2bWd1ZWs1bmpvZWc0c2ltb29hYzAwZ3lvczBiNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LCo3JuJ8ca3XXJQqlM/giphy.gif" alt="superb" />
          </div>
        </div>
      )
    }
  }

  const rerenderModules = modules.map((mou, index) => {
    const tpScore = (Number(mou.input1) || 0) * (Number(mou.TP) || 0)
    const examScore = (Number(mou.input2) || 0) * (Number(mou.Examn) || 0)
    const currentModuleTotal = tpScore + examScore

    return (
      <Data
        key={mou.id}
        {...mou}
        num={index + 1}
        onDelete={deleteModule}
        onUpdate={updateModulesValue}
        Average_Moudel={currentModuleTotal.toFixed(2)}
      />
    )
  })

  return (
    <div className="app">
      <header className="header-section glass">
        <div className="brand">
          <div className="logo">📊</div>
          <div>
            <h1 className="app-title">نظام حساب المعدل الجامعي</h1>
            <p className="app-subtitle">احسب معدلك الفصلي بدقة واحترافية</p>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="controls-panel glass">
          <h2 className="panel-title">إضافة المقاييس</h2>
          <p className="panel-note">ملاحظة: النسبة المئوية العليا للأعمال الموجهة والسفلى للامتحان</p>
          <button
            className="btn btn-add"
            onClick={() => {
              const newModule = {
                ...INITIAL_MODULES[0],
                id: uuid(),
                num: modules.length + 1
              }
              setModules([...modules, newModule])
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            إضافة مقياس جديد
          </button>
        </div>

        <div className="modules-container">
          <h2 className="section-title">المقاييس الخاصة بك</h2>
          <div className="modules-grid">
            {rerenderModules}
          </div>
          {modules.length === 0 && (
            <div className="empty-state">
              <p>لا توجد مقاييس حالياً</p>
              <p className="text-small">أضف مقياس جديد للبدء</p>
            </div>
          )}
        </div>

        <div className="results-section glass">
          <div className="results-header">
            <h2 className="section-title">النتائج والتقييم</h2>
            <button
              className="btn btn-calc"
              onClick={() => setShowResults(!showResults)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3v.01M12 21c5.523 0 10-4.477 10-10S17.523 1 12 1 2 5.477 2 11s4.477 10 10 10z" />
              </svg>
              {showResults ? 'إخفاء النتائج' : 'حساب المعدل'}
            </button>
          </div>

          {showResults && (
            <div className="results-content">
              <div className="final-average">
                <span className="label">معدلك الفصلي:</span>
                <span className="value">{isNaN(FinalAverage) ? '0.00' : FinalAverage.toFixed(2)}</span>
              </div>
              {StateAv()}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App

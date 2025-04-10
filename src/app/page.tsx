"use client"
import React, {useState} from "react"
import {NextPage} from "next"


const MainPage: NextPage = () => {
  // 入力した名前と表示用のメッセージを State として管理  
  const [name, setName] = useState("")   
  const [message, setMessage] = useState("")
  
  // Submit ボタン選択時に実行する関数
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault()
    try {
      // API の呼出し      
      const response = await fetch("/api/hello", {        
        method: "POST",        
        headers: {          
          "Accept": "application/json",          
          "Content-Type": "application/json"        
        },        
        body: JSON.stringify({          
          yourname : name        
        })       
      })
      // API の実行結果の取得    
      const jsonData = await response.json()

      // 実行結果の表示
      setMessage(jsonData.message)
    } catch {          
      alert("handleSubmit Error")
    }  
    
  }    
  return (    
    <div>      
      <h1>Next.js サンプル</h1>      
      <form onSubmit={handleSubmit}>        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="yourname" placeholder="お名前を入力" required />        
        <button>Greeting</button>      
      </form>    
      <h3>{message}</h3>
    </div>
  )
}

export default MainPage
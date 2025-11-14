import { useState } from "react"
import { useNavigate } from "react-router-dom"






export default function Home() {
  const [genre, setGenre] = useState<string>("sport");
  const nav = useNavigate()
  const handleStart = () =>{
    nav("/quiz" ,{
      state:{genre}
    })


  }

  return (
    <div className="home">
      <h2 className="title">Home</h2>

      <label htmlFor="">
        ジャンルを選択：
        <select name="" id="" value={genre} onChange={e=>setGenre(e.target.value)}>
          <option value="sport">スポーツ</option>
          <option value="history">歴史</option>
          <option value="science">科学</option>
          <option value="anime">アニメ</option>
        </select>
      </label>

      <div className="router">
        <button onClick={handleStart}>スタート</button>
      </div>

    </div>
  )
}

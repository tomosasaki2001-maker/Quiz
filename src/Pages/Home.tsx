import { useState } from "react"
import { useNavigate } from "react-router-dom"






export default function Home() {
  const [genre, setGenre] = useState<string>("sport");
  const [difficulty, setDifficulty] = useState<string>("easy")
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
          <option value="onepiece">ワンピース</option>
        </select>
        <select name="" id="" value={difficulty} onChange={e=>setDifficulty(e.target.value)}>
          <option value="easy">かんたん</option>
          <option value="nomal"> ふつう</option>
          <option value="hard">むずかしい</option>
        </select>
      </label>

      <div className="router">
        <button onClick={handleStart}>スタート</button>
      </div>

    </div>
  )
}

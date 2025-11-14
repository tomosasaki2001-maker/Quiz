import { Link, useLocation } from "react-router-dom"
import Loadng from "./Loadng";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'


export default function ResultPage() {
  const location = useLocation();
  const correctNum = location.state.correctNum;
  const maxQuizLen = location.state.maxQuizLen;
  const genre = location.state.genre;

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 2000);
  }, [])


  return (

    <div className="result">
      <Confetti/>
      
      <Loadng active={active} />
      <h2 className="title">Result</h2>

      <div className="r">
        あなたの正解数は
        <span className="big">{maxQuizLen}問中{correctNum}問</span>
        でした！
      </div>



      <div className="router">
        <Link to="/quiz" state={{genre}}><button>もう一度挑戦</button></Link>

        <Link to="/"><button>Home</button></Link>
      </div>

    </div>
  )
}

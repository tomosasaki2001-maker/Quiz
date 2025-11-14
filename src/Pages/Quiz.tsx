import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


interface Quiz{
    question:string,
    select:string[],
    answer:string,
}



export default function Quiz() {
    const [currect, setCurrect] = useState<number>(0);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [quizDate, setQuizDate] = useState<Quiz[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const location =useLocation();
    const genre = location.state.genre;
    

    const shuffle = (array:string[]) =>{
        const result = [...array];
        for(let i =result.length-1; i>0; i--){
            const j = Math.floor(Math.random()*(i+1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return(result);

    }
    const nav = useNavigate();

    useEffect(()=>{
        const fetchQuiz = async() =>{
            try{
                setLoading(true);
                const res = await fetch("https://raw.githubusercontent.com/tomosasaki2001-maker/Quiz/refs/heads/main/public/quiz.json");
                const data = await res.json();

                const formatted:Quiz[]  = data.map((q:any)=>({
                    question:q.question,
                    select:shuffle(q.select),
                    answer:q.answer,
                }));
                setQuizDate(formatted);
                setLoading(false)
            }catch(err){
                console.error("クイズ取得エラー",err);
                setLoading(false);
            }
        }
        fetchQuiz();
    },[]);

    const handleNext = (s:string) =>{
        if(!quizDate[currect])return
        const isCorrect:boolean = s===quizDate[currect].answer;
        setAnswers((prev)=>[...prev, isCorrect]);

        if(currect+1 < quizDate.length){
            setCurrect((prev)=>prev+1);
        }else{
            const correctNum = [...answers, isCorrect].filter(Boolean).length;
            nav("/result",{
                state:{
                    correctNum:correctNum,
                    maxQuizLen: quizDate.length
                }
            })
        }
        
    }

    const handleReset = () => {
        setCurrect(0);
        setAnswers([]);
    }
  return (
    <div className="quiz">
        <h2 className="title">Quiz</h2>
        {quizDate.length > currect &&(
            <div className="Q">
                <h3>Q{currect+1}. {quizDate[currect].question}</h3>
                {quizDate[currect].select.map((s,i)=>(
                    <button key={i} onClick={()=>handleNext(s)}>{s}</button>
                ))}
            </div>
        )}

        <div className="router">
            <button onClick={handleReset}>最初から</button>
            
            <Link to = "/"><button>Home</button></Link>
        </div>

    </div>
  )
}

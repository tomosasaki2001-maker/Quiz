import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


interface Quiz{
    question:string,
    select:string[],
    answer:string,
}

interface quizDate{
    question:string,
    correct_answer:string,
    incorrect_answers:string[],

}

export default function Quiz() {
    const [correct, setCorrect] = useState<number>(0);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [quizDate, setQuizDate] = useState<Quiz[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

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
                const res = await fetch();
                const data = await res.json();

                const formatted:Quiz[]  = data.map((q:any)=>({
                    question:q.question,
                    select:q.select,
                    answers:q.answers,
                }));
                setQuizDate(formatted);
                setLoading(false)
            }catch(err){
                console.error("クイズ取得エラー",err);
                setLoading(false);
            }
        }
    },[])
  return (
    <div className="quiz">
        <h2 className="title">Quiz</h2>

        <div className="router">
            
            <Link to = "/"><button>Home</button></Link>
        </div>

    </div>
  )
}

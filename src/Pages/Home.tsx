import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="home">
        <h2 className="title">Home</h2>
        <div className="router">
            <Link to="quiz"><button>スタート</button> </Link>
        </div>

    </div>
  )
}

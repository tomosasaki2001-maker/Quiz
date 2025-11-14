

interface Props{
  active:boolean
}
export default function Loadng({active}:Props) {
  return (
    <div className={`loading ${active ? "active":""}`}>
      <h2>～結果発表～</h2>
    </div>
  )
}

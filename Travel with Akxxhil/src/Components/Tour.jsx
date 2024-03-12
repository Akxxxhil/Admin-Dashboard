
import Card from "./Cards"
function Tour({tour,notIntrested}){
return <>
<div className="heading">
    Travel With Akxxhil
  </div>
<div className="tour">
    {
        tour.map((toureach)=>{
            return <Card {...toureach} notIntrested={notIntrested}></Card>
        })
    }
   
</div>
</>
}
export default Tour
import '../App.css'

const FlashCard = (props) => {


function flash() {
    if (props.side % 2 == 0) {
      return props.question;
    }
    return props.answer;
}


  return (
    <>
        <div>
             <img src= {props.icon} width='25%'/>
             <h2 > {flash()} </h2>
        </div>
    </>
  )
}

export default FlashCard
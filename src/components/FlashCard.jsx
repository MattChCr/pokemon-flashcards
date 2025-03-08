import '../App.css'

const FlashCard = (props) => {

const [qside, setQSide] = useState(true);

  return (
    <>
      <div className="question-side" onClick={setQSide(!qside)}> 
        
           <h2> {qside ?  props.question : props.answer}   </h2>
      </div>
    </>
  )
}

export default FlashCard
import { QuoteContainer, ButtonsContainer } from "./QuoteBox.styled"
import { faCopy, faRedo } from "@fortawesome/free-solid-svg-icons"
import { Toaster, toast } from "react-hot-toast"
import QuoteButton from "../QuoteButton/QuoteButton"
import QuoteText from "../QuoteText/QuoteText"

const QuoteBox = ({quoteText, quoteAuthor, color, handleRandomQuote}) => {
	return (
		<QuoteContainer color={color}>
			<QuoteText text={quoteText} type={"quote"}/>
			<QuoteText text={quoteAuthor} type={"author"}/>
			<ButtonsContainer>
				<Toaster/>
				<QuoteButton color={color} type={"copy"} action={toast} icon={faCopy} text={quoteText}/>
				<QuoteButton color={color} type={"random"} action={handleRandomQuote} icon={faRedo}/>
			</ButtonsContainer>
		</QuoteContainer>
	)
}

export default QuoteBox

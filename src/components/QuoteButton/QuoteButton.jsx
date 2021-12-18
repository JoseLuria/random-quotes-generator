import { Button } from "./QuoteButton.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CopyToClipboard } from "react-copy-to-clipboard"

const QuoteButton = ({action, color, icon, type, text}) => {
	
	const handleButton = () => {
		if(type === "copy"){
			return(
				<CopyToClipboard text={text}>
					<Button color={color} onClick={() => action.success("Text copied")}>
						<FontAwesomeIcon icon={icon}/>
					</Button>
				</CopyToClipboard>	
			)
		}else{
			return(
				<Button color={color} onClick={action}>
					<FontAwesomeIcon icon={icon}/>
				</Button>	
			)
		}
	}

	return (
		handleButton()	
	)
}

export default QuoteButton

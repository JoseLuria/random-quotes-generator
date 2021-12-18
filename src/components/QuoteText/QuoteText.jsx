import { Text } from "./QuoteText.styled"

const QuoteText = ({text, type}) => {
	return (
		<Text type={type}>
			{text}
		</Text>
	)
}

export default QuoteText

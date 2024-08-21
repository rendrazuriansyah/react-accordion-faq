export default function AccordionItem({ number, question, answer }) {
	return (
		<div className="item">
			<p className="number">{number}</p>
			<p className="title">{question}</p>
			<p className="icon">+</p>
			<div className="content-box">{answer}</div>
		</div>
	);
}

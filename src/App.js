import "./App.css";
import Accordion from "./components/Accordion";

const faqs = [
	{
		question: "What is the purpose of Warung Mitra?",
		answer: "Warung Mitra is an e-commerce platform that aims to connect customers with small and medium-sized enterprises (SMEs) in Indonesia. Our purpose is to provide a convenient and secure online shopping experience that benefits both customers and SMEs.",
	},
	{
		question: "Who is behind Warung Mitra?",
		answer: "Warung Mitra is a project initiated by the Indonesian Government, particularly the Ministry of Communication and Information Technology. We are a team of passionate individuals who are committed to supporting the growth of SMEs in Indonesia.",
	},
	{
		question: "Where can I find Warung Mitra?",
		answer: "Warung Mitra is an online platform, which means you can access it from anywhere with an internet connection. Simply visit our website at [www.warungmitra.id](http://www.warungmitra.id) to start shopping.",
	},
	{
		question: "When can I shop on Warung Mitra?",
		answer: "Warung Mitra is available 24 hours a day, 7 days a week. You can shop with us at any time that is convenient for you.",
	},
	{
		question: "How does Warung Mitra work?",
		answer: "Warung Mitra connects customers with SMEs through an online platform. Customers can browse and purchase products from various categories, while SMEs can sell their products and reach a wider market.",
	},
	{
		question: "Why should I shop on Warung Mitra?",
		answer: "Shopping on Warung Mitra supports the growth of SMEs in Indonesia. By shopping with us, you are contributing to the development of the Indonesian economy and helping SMEs to grow and thrive.",
	},
];

function App() {
	return (
		<div>
			<Accordion data={faqs} />
		</div>
	);
}

export default App;

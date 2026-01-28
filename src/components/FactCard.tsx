interface FactCardProps {
  question: string
  answer: string
}

export default function FactCard({ question, answer }: FactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-gray-900 text-lg mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  )
}

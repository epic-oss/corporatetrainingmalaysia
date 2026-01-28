interface QuickAnswerProps {
  question: string
  answer: string
}

export default function QuickAnswer({ question, answer }: QuickAnswerProps) {
  return (
    <div className="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-lg">
      <p className="font-semibold text-teal-900">{question}</p>
      <p className="mt-2 text-teal-800">{answer}</p>
    </div>
  )
}

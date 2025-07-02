
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CapabilityAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      question: "What is your primary healthcare focus area?",
      options: ["Diagnostics", "Medical Devices", "Digital Health", "Pharmaceuticals", "Laboratory Equipment"]
    },
    {
      question: "What is your target market?",
      options: ["Latin America", "Asia-Pacific", "Africa", "Middle East", "Multiple Regions"]
    },
    {
      question: "What is your current stage of market development?",
      options: ["Research Phase", "Planning Stage", "Ready to Deploy", "Currently Operating", "Expansion Phase"]
    },
    {
      question: "What is your primary challenge?",
      options: ["Regulatory Compliance", "Local Partnerships", "Supply Chain", "Technology Transfer", "Market Access"]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  const isComplete = Object.keys(answers).length === questions.length;

  return (
    <section className="py-20 bg-primary-lightest">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Capability Assessment Tool</h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Quick needs assessment to identify the right capabilities for your healthcare initiative
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            {!isComplete ? (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{currentStep + 1} of {questions.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-medium h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Current Question */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {questions[currentStep].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {questions[currentStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="w-full text-left p-4 bg-primary-lightest hover:bg-primary-very-light rounded-lg transition-colors border border-transparent hover:border-primary-light"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Back Button */}
                {currentStep > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="mr-4"
                  >
                    Back
                  </Button>
                )}
              </>
            ) : (
              /* Results */
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-primary-very-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-medium text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Assessment Complete</h3>
                  <p className="text-gray-600 mb-6">
                    Based on your responses, we've identified key capability areas that align with your needs.
                  </p>
                </div>

                {/* Summary of Answers */}
                <div className="bg-primary-lightest rounded-lg p-6 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Your Profile Summary</h4>
                  <div className="space-y-3">
                    {questions.map((question, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 truncate mr-4">{question.question}</span>
                        <span className="text-sm font-medium text-primary-dark bg-white px-3 py-1 rounded">
                          {answers[index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Capabilities */}
                <div className="bg-gradient-to-r from-primary-medium to-primary-light rounded-lg p-6 text-white mb-8">
                  <h4 className="font-semibold mb-4">Recommended Capability Focus Areas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary-light rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Primary Focus</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Regulatory Navigation</li>
                        <li>• Strategic Partnerships</li>
                      </ul>
                    </div>
                    <div className="bg-primary-light rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Secondary Focus</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Technology Transfer</li>
                        <li>• Supply Chain Architecture</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary-medium hover:bg-primary-light text-white px-8">
                    Schedule Detailed Consultation
                  </Button>
                  <Button variant="outline" onClick={resetAssessment}>
                    Retake Assessment
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityAssessment;


import { useState } from "react";

const PartnershipModelDiagrams = ({ type }: { type: string }) => {
  const [activeStep, setActiveStep] = useState(0);

  const diagrams = {
    'Joint Ventures': {
      steps: [
        { title: 'Market Analysis', description: 'Comprehensive market assessment and opportunity identification' },
        { title: 'Partner Identification', description: 'Strategic partner selection based on capabilities and alignment' },
        { title: 'Due Diligence', description: 'Thorough evaluation of partner qualifications and market position' },
        { title: 'Structure Design', description: 'Joint venture structure optimization for mutual benefit' },
        { title: 'Implementation', description: 'Launch and ongoing management of joint venture operations' }
      ],
      diagram: (
        <div className="relative w-full min-h-[12rem] md:h-48 bg-gradient-to-br from-primary-lightest to-primary-very-light rounded-lg p-4 md:p-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0 md:justify-between h-full">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-medium rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                Client
              </div>
              <div className="text-xs text-primary-dark">Local Partner</div>
            </div>
            
            <div className="flex-1 flex flex-col items-center space-y-2">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                JV
              </div>
              <div className="text-xs text-primary-dark text-center">Joint Venture Entity</div>
              <div className="flex space-x-4 text-xs text-primary-medium">
                <span>Shared Risk</span>
                <span>•</span>
                <span>Shared Reward</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                CN
              </div>
              <div className="text-xs text-primary-dark">Chinese Partner</div>
            </div>
          </div>
          
          {/* Connection Lines Removed */}
        </div>
      )
    },
    'OEM Relationships': {
      steps: [
        { title: 'Technical Assessment', description: 'Evaluation of technical requirements and manufacturing capabilities' },
        { title: 'Quality Alignment', description: 'Quality standards harmonization and certification processes' },
        { title: 'Contract Negotiation', description: 'Terms and conditions negotiation for OEM agreement' },
        { title: 'Integration', description: 'Supply chain integration and production setup' },
        { title: 'Quality Control', description: 'Ongoing quality assurance and performance monitoring' }
      ],
      diagram: (
        <div className="relative w-full min-h-[12rem] md:h-48 bg-gradient-to-br from-primary-lightest to-primary-very-light rounded-lg p-4 md:p-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0 md:justify-between h-full">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                🏭
              </div>
              <div className="text-xs text-primary-dark text-center">Chinese Manufacturer</div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-4 h-4 bg-primary-medium rounded-full"></div>
              <div className="text-xs text-primary-dark">Products</div>
              <div className="w-4 h-4 bg-primary-medium rounded-full"></div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                OEM
              </div>
              <div className="text-xs text-primary-dark text-center">Brand Partner</div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-4 h-4 bg-primary-medium rounded-full"></div>
              <div className="text-xs text-primary-dark">Market</div>
              <div className="w-4 h-4 bg-primary-medium rounded-full"></div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-medium rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                🌍
              </div>
              <div className="text-xs text-primary-dark text-center">Global Markets</div>
            </div>
          </div>
        </div>
      )
    },
    'Technology Transfer': {
      steps: [
        { title: 'Knowledge Audit', description: 'Assessment of technology and knowledge transfer requirements' },
        { title: 'Transfer Planning', description: 'Development of comprehensive knowledge transfer strategy' },
        { title: 'Training Design', description: 'Custom training program development for local teams' },
        { title: 'Implementation', description: 'Hands-on technology transfer and capability building' },
        { title: 'Validation', description: 'Verification of successful technology transfer and competency' }
      ],
      diagram: (
        <div className="relative w-full min-h-[12rem] md:h-48 bg-gradient-to-br from-primary-lightest to-primary-very-light rounded-lg p-4 md:p-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-0 md:justify-between h-full">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                🧠
              </div>
              <div className="text-xs text-primary-dark text-center">Chinese Expertise</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-medium rounded-full flex items-center justify-center text-white text-sm md:text-base">
                📚
              </div>
              <div className="text-xs text-primary-dark">Training</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-light rounded-full flex items-center justify-center text-white text-sm md:text-base">
                ⚙️
              </div>
              <div className="text-xs text-primary-dark">Transfer</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-medium rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                👥
              </div>
              <div className="text-xs text-primary-dark text-center">Local Team</div>
            </div>
          </div>
          
          {/* Flow arrows removed */}
        </div>
      )
    },
    'Market Entry Support': {
      steps: [
        { title: 'Market Research', description: 'Comprehensive market analysis and opportunity assessment' },
        { title: 'Strategy Development', description: 'Market entry strategy formulation and planning' },
        { title: 'Stakeholder Mapping', description: 'Key stakeholder identification and relationship building' },
        { title: 'Entry Execution', description: 'Implementation of market entry strategy and launch' },
        { title: 'Optimization', description: 'Continuous optimization based on market feedback' }
      ],
      diagram: (
        <div className="relative w-full min-h-[16rem] md:h-48 bg-gradient-to-br from-primary-lightest to-primary-very-light rounded-lg p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-full">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white">
                🔍
              </div>
              <div className="text-xs text-primary-dark text-center">Market Research</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 bg-primary-medium rounded-full flex items-center justify-center text-white">
                📋
              </div>
              <div className="text-xs text-primary-dark text-center">Strategy Development</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white">
                🤝
              </div>
              <div className="text-xs text-primary-dark text-center">Stakeholder Mapping</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 bg-primary-medium rounded-full flex items-center justify-center text-white">
                🚀
              </div>
              <div className="text-xs text-primary-dark text-center">Market Entry</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white">
                📈
              </div>
              <div className="text-xs text-primary-dark text-center">Growth & Scale</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white">
                ⚡
              </div>
              <div className="text-xs text-primary-dark text-center">Optimization</div>
            </div>
          </div>
        </div>
      )
    }
  };

  const currentDiagram = diagrams[type as keyof typeof diagrams];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="mb-6">
        {currentDiagram.diagram}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {currentDiagram.steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              activeStep === index
                ? 'bg-primary-medium text-white'
                : 'bg-primary-lightest text-primary-dark hover:bg-primary-very-light'
            }`}
          >
            {index + 1}. {step.title}
          </button>
        ))}
      </div>
      
      <div className="text-sm text-primary-medium">
        <strong>{currentDiagram.steps[activeStep].title}:</strong> {currentDiagram.steps[activeStep].description}
      </div>
    </div>
  );
};

export default PartnershipModelDiagrams;

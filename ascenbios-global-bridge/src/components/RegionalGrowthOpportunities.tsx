
const RegionalGrowthOpportunities = () => {
  const opportunities = [
    {
      region: 'Latin America',
      description: 'Expanding biotechnology infrastructure with focus on accessible healthcare solutions',
      growth_rate: '+15% annually',
      key_markets: ['Brazil', 'Mexico', 'Colombia', 'Argentina'],
      investment_focus: 'Manufacturing & Distribution Hubs',
      timeline: '2024-2027'
    },
    {
      region: 'Southeast Asia',
      description: 'Digital health transformation driving demand for integrated healthcare platforms',
      growth_rate: '+22% annually',
      key_markets: ['Singapore', 'Thailand', 'Vietnam', 'Philippines'],
      investment_focus: 'Digital Infrastructure & Telemedicine',
      timeline: '2024-2026'
    },
    {
      region: 'Middle East & Africa',
      description: 'Healthcare modernization initiatives creating opportunities for technology transfer',
      growth_rate: '+18% annually',
      key_markets: ['UAE', 'Saudi Arabia', 'South Africa', 'Kenya'],
      investment_focus: 'Clinical Excellence & Training Programs',
      timeline: '2025-2028'
    },
    {
      region: 'Eastern Europe',
      description: 'EU market integration enabling streamlined regulatory pathways and partnerships',
      growth_rate: '+12% annually',
      key_markets: ['Poland', 'Czech Republic', 'Romania', 'Hungary'],
      investment_focus: 'Regulatory Compliance & Market Access',
      timeline: '2024-2025'
    }
  ];

  return (
    <section className="py-20 bg-primary-lightest">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Regional Growth Opportunities
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Strategic expansion initiatives across high-growth healthcare markets worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary-very-light">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary-dark">{opportunity.region}</h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary-light">{opportunity.growth_rate}</div>
                  <div className="text-xs text-primary-medium">Growth Rate</div>
                </div>
              </div>

              <p className="text-primary-medium mb-6 leading-relaxed">{opportunity.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-dark mb-2">Key Markets:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.key_markets.map((market, marketIndex) => (
                      <span key={marketIndex} className="text-xs bg-primary-lightest text-primary-dark px-3 py-1 rounded-full">
                        {market}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary-dark">Investment Focus:</span>
                    <p className="text-primary-medium">{opportunity.investment_focus}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-primary-dark">Timeline:</span>
                    <p className="text-primary-medium">{opportunity.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-medium to-primary-dark text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Global Expansion Strategy</h3>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Systematic approach to regional market development, combining local expertise with global healthcare innovation
          </p>
          <div className="text-center">
            <button className="bg-primary-lightest text-primary-dark px-8 py-3 rounded-full font-semibold hover:bg-primary-very-light transition-colors">
              Explore Partnership Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalGrowthOpportunities;


const CoreValuesVisual = ({ value }: { value: string }) => {
  const visuals = {
    'Trust': (
      <div className="w-full">
        <div className="relative aspect-w-16 aspect-h-9">
          <img 
            src="/trust.jpg" 
            alt="Trust"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    ),
    'Innovation': (
      <div className="w-full">
        <div className="relative aspect-w-16 aspect-h-9">
          <img 
            src="/innovation.jpg" 
            alt="Innovation"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    ),
    'Adaptability': (
      <div className="w-full">
        <div className="relative aspect-w-16 aspect-h-9">
          <img 
            src="/adaptability.jpg" 
            alt="Adaptability"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    ),
    'Excellence': (
      <div className="w-full">
        <div className="relative aspect-w-16 aspect-h-9">
          <img 
            src="/excellence.jpg" 
            alt="Excellence"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    ),
    'Global Perspective': (
      <div className="w-full">
        <div className="relative aspect-w-16 aspect-h-9">
          <img 
            src="/global.jpg" 
            alt="Global Perspective"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    )
  };

  return visuals[value as keyof typeof visuals] || <div>Visual not found</div>;
};

export default CoreValuesVisual;

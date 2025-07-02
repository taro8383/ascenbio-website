
import { Button } from "@/components/ui/button";

const JoinMission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Transforming
            <span className="bg-gradient-to-r from-primary-lightest to-primary-very-light bg-clip-text text-transparent"> Global Healthcare Access</span>
          </h2>
          
          <p className="text-xl text-primary-lightest mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with us to bridge the gap between healthcare innovation and global market access. 
            Together, we can create sustainable solutions that improve lives worldwide.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary-light hover:bg-primary-very-light text-primary-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Career Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;

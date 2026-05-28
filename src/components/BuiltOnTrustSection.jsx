import React from 'react';

const BuiltOnTrustSection = () => {
  return (
    <div className="w-full gsap-fade-in -mt-12 md:-mt-20 -mb-12 md:-mb-20 relative z-20 pointer-events-none" id="built-on-trust">
      <section className="w-full bg-transparent" style={{ contain: 'layout style paint' }}>
        <div className="relative overflow-hidden bg-transparent">
          <div className="relative mx-auto max-w-[1536px] px-6 py-0">
            <div className="flex flex-col items-center gap-2">
              <h2
                className="[font-family:var(--typography-font-family)] text-center font-bold tracking-tight text-[#060603] -mt-4 md:-mt-8"
                style={{
                  fontSize: 'clamp(2rem, 3vw, 3rem)',
                }}
              >
                Built On Trust
              </h2>

              <div className="w-full max-w-6xl mx-auto overflow-x-auto hide-scrollbar snap-x snap-mandatory rounded-[20px] pointer-events-auto">
                <div className="min-w-[600px] w-full flex justify-center items-center h-[80px] md:h-[120px] lg:h-[150px] snap-start">
                  <img
                    alt="Built On Trust section showing 20-Year Legacy, German Tech Fire Resistance, BIS Certified, and Bulk-Ready Supply"
                    className="w-full h-full object-contain drop-shadow-md"
                    style={{ objectPosition: 'center' }}
                    draggable="false"
                    src="/images/built-on-trust.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuiltOnTrustSection;

import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex flex-col md:flex-row h-screen w-full">
        {/* טקסט */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 order-2 md:order-1">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-light mb-6">MY STORY</h1>
            <p className="text-gray-600 leading-relaxed">
              Studio Ben Horin was founded with a vision to blend art and architecture...
              {/* כאן יבוא שאר הטקסט שלך */}
            </p>
          </div>
        </div>
        
        {/* תמונה */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative order-1 md:order-2">
          <img 
            src="/about-image.jpg" 
            alt="Studio Ben Horin"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
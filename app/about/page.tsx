import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <section className="flex flex-col md:flex-row min-h-screen w-full">
        {/* צד שמאל: טקסט */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 pt-24 md:pt-16 order-2 md:order-1">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl font-light mb-8">MY STORY</h1>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Many years of thought and action in the educational field led me to understand how spatial design affects human relationships, learning, and the sense of security.
            </p>
          </div>
        </div>
        
        {/* צד ימין: תמונה */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2">
          <img 
            src="/about-image.jpg" 
            alt="Ofer Ben Horin"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
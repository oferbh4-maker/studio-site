import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <section className="flex flex-col md:flex-row min-h-screen w-full">
        
        {/* תמונה - במובייל היא תהיה למעלה, בדסקטופ בצד ימין */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2">
          <img 
            src="/about-image.jpg" 
            alt="Ofer Ben Horin"
            className="w-full h-full object-cover"
          />
        </div>

        {/* טקסט - במובייל הוא יהיה מתחת לתמונה */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 pt-12 md:pt-16 order-2 md:order-1">
          <div className="max-w-md w-full">
            <h1 className="text-3xl md:text-4xl font-light mb-8 text-black">MY STORY</h1>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Many years of thought and action in the educational field led me to understand how spatial design affects human relationships, learning, and the sense of security.
              </p>
              <p>
                Studio Ben Horin was founded with a vision to blend art and architecture, creating environments that aren't just functional but also inspire those who inhabit them.
              </p>
              <p>
                We believe that every space has a story to tell, and our mission is to help you tell yours through meticulous design, sustainable materials, and a deep understanding of human needs.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default AboutPage;
const Message = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[300px]">
              <img 
                src="https://www.cdpcelliiitmg.info/images/director.jpg" 
                alt="First message" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Message from Director</h3>
              <p className="text-gray-600 leading-relaxed">
                Dear Alumnus,<br />

Warm greetings to all! <br />

Here at ABV-IIITM, we have stayed together as a family having each other's back throughout one's journey in this institute. It gives me immense pleasure to welcome you all on the ABV-IIITM Alumni Portal which acts as a marvelous common platform for all the alumni of our institute present at different corners of the world to meet and share about their journeys of life. We look forward to the alumni to connect with their Alma Mater. It would give us immense joy to stay connected with you all. The portal here provides with innumerable features that will enable you to stay connected with us and help you commemorate your time here at ABV-IIITM. Looking forward that all will join us on this Alumni Portal and will also help in getting connected with your other batch mates. <br />

Thanks,
<br />
Prof. Sri Niwas Singh
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[300px]">
              <img 
                src="https://www.iiitm.ac.in/images/demo/teachers/1686288088_pksingh%20(2).jpg" 
                alt="Second message" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Message from Dean, Alumni and External Relations</h3>
              <p className="text-gray-600 leading-relaxed">
                                Dear Alumnus,<br />

Warm greetings to all! <br />

On behalf of office of Career Development & Placement Cell services at IIITM Gwalior and my personal behalf, I welcome you to our webpage. It's a matter of great pride to mention that we IIITians at Gwalior, celebrating the 25th year of establishment. We are the one of the most preferred institutes in the area of IT and CS to a number of industries hiring the quality candidates skilled with IT as well as Management skills. So far our experience has been fantastic in getting very good feedback from our recruiters in India or overseas, especially on the capability, skill set, intellect and the professional readiness displayed by our students. We always believe in the philosophy of a long term partnership with our recruiters and alumni of IIITM Gwalior and remain committed in making their experience as scintillating as possible. Its my proud privilege inviting the organizations and students to work on finding the best match between the recruiters need and the satisfaction of the students. Wish you all the best! <br />

Thanks,
<br />
Prof. Pramod Kumar Singh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message; 
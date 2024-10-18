import React from 'react';


const AboutUs = () => {
  return (
    <div className="bg-white animate__animated animate__fadeIn">
      {/* <header className="bg-black/90 text-white text-center py-12">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header> */}

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Our Mission and Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to simplify group expense management, providing a transparent and fair way for friends, families, and colleagues to share costs. We value trust, transparency, and user satisfaction in everything we do.
        </p>
        {/* <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">1000+</h3>
            <p className="text-gray-700">Happy Users</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">5+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div> */}
      </section>



      

      <section className="text-center py-12 px-28">


        <h2 className="text-2xl font-bold">Our Key Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">

          <div className="p-4 shadow-lg rounded-lg bg-black/80 hover:bg-black/50 text-white transition-colors">
            <h3 className="text-xl font-bold">Easy Group Creation</h3>
          </div>
          
          <div className="p-4 shadow-lg rounded-lg bg-black/80 hover:bg-black/50 text-white transition-colors">
            <h3 className="text-xl font-bold">Expense Tracking</h3>
          </div>
          
          <div className="p-4 shadow-lg rounded-lg bg-black/80 hover:bg-black/50 text-white transition-colors">
            <h3 className="text-xl font-bold">Group Management</h3>
          </div>
          
          <div className="p-4 shadow-lg rounded-lg bg-black/80 hover:bg-black/50 text-white transition-colors">
            <h3 className="text-xl font-bold">Settle Up</h3>
          </div>
          {/* <div className="p-4 shadow-lg rounded-lg bg-black/80 hover:bg-black/50 text-white transition-colors">
            <h3 className="text-xl font-bold">Expense Tracking</h3>
          </div> */}
         
        </div>
      </section>






      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">User-Friendly Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
        <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold">Track Settlements</h3>
      <p className="text-gray-700 mt-2">Keep track of who has paid and who still owes with real-time.</p>
    </div>
    <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold">Expense Categories</h3>
      <p className="text-gray-700 mt-2">Organize expenses into categories for a clearer financial.</p>
    </div>
    <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold">Instant Expense Splitting</h3>
      <p className="text-gray-700 mt-2">Quickly calculate and divide expenses with precision.</p>
    </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Detailed Reports</h3>
            <p className="text-gray-700 mt-2">Get insights into your spending habits with our detailed reports.</p>
          </div>
        </div>
      </section>

          
      

      {/* <section className="bg-black/70 text-white text-center py-12 mb-10 px-4">
      
        <h2 className="text-2xl font-bold">User Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white text-black hover:bg-black/90 hover:text-white transition-colors">
            <p>"This app has transformed how we manage our expenses as a group. Highly recommended!"</p>
            <h3 className="mt-4 font-bold">- User A</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white text-black hover:bg-black/90 hover:text-white transition-colors">
            <p>"It makes splitting bills so easy and hassle-free. I can't imagine managing without it!"</p>
            <h3 className="mt-4 font-bold">- User B</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white text-black hover:bg-black/90 hover:text-white  transition-colors">
            <p>"Great app with a user-friendly interface. It really helps keep track of expenses."</p>
            <h3 className="mt-4 font-bold">- User C</h3>
          </div>
        </div>
      </section> */}

      {/* <section className="text-center py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">How do I create a group for splitting expenses?</h3>
            <p className="mt-2 text-gray-700">You can create a group directly through our app by entering the names of the members.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">Can I track individual expenses?</h3>
            <p className="mt-2 text-gray-700">Yes, our app allows you to track individual expenses and settle them accordingly.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">Is the app secure?</h3>
            <p className="mt-2 text-gray-700">Absolutely! We prioritize security and privacy for all user data.</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;

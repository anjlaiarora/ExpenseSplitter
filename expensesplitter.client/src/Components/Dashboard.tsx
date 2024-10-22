import { Carousel } from "antd";
import FaQs from "./FaQs";
import React from "react";
import imgs1 from './imges/6203338.jpg'

const Dashboard = () => {
  const contentStyle: React.CSSProperties = {
    height: "550px",
   color: "#fff",
  
   textAlign: "center",
   
   maxHeight:"550px",
   width:"100%",

 };
 return (
   <>
   
   <section className="py-5">
  <div className="container flex flex-wrap items-center justify-center mx-auto  md:px-12 md:flex-row">
    <div className="mb-14 lg:mb-0 lg:w-1/2">
      <h2 className="max-w-xl text-[2.9rem] leading-none text-black  font-sans text-center lg:text-5xl lg:text-left lg:leading-tight mb-5">
        Simplify Your Expenses with Ease.
        Manage and split costs effortlessly.
      </h2>
      <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
        Tracking expenses shouldn’t be a hassle. Our expense splitter allows you to easily divide bills and keep everything transparent between friends, colleagues, or family.
      </p>

      
   
    </div>
    <div className="lg:w-1/2">
    <img className="ml-auto" src="./rb_3900.png" alt="" />
      </div>
  </div>
</section>

    
      <section className="py-5" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center text-decoration: underline">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                // src="https://splitpal.io/wp-content/uploads/2022/12/group-of-friends-travel-together-driving-a-car-and-2022-09-05-22-26-08-utc-768x512.jpg.webp"

                src="https://img.freepik.com/free-vector/hand-drawn-flat-tourists-illustration_23-2149051160.jpg?t=st=1729231925~exp=1729235525~hmac=3efda7384ae7181d4a0d77877502f0c6803c9fca1b89a9a1977f6d9cb2db3dc9&w=1060"
                alt="Group Travel Expense Management"
                className="w-full h-64 object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Travel Expense Management
                </h3>
                <p className="text-gray-700 text-base">
                  Going on a road trip with friends? Keep track of fuel,
                  lodging, and meal expenses effortlessly. Our tool ensures all
                  costs are shared fairly, so you can focus on the fun while we
                  handle the math.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                

                src="https://img.freepik.com/free-vector/flat-design-business-coffee-illustration_23-2149484588.jpg?t=st=1729232268~exp=1729235868~hmac=64847fe1aac5a1b840a1341cc7b8a21aa2097d391d4749ef639b65493e5b0800&w=740"
                alt="Splitting Restaurant Bills"
                className="w-full h-64 object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Restaurant Bill Splitting
                </h3>
                <p className="text-gray-700 text-base">
                  Eating out with friends? Split the restaurant bill with ease.
                  Our app helps you divide the costs fairly, making sure
                  everyone pays their share, whether it’s drinks, appetizers, or
                  the main course.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                // src="https://splitpal.io/wp-content/uploads/2022/12/two-female-roommates-using-their-smartphones-onlin-2022-06-14-17-34-44-utc-768x512.jpg.webp"

                src="https://img.freepik.com/free-vector/two-girls-sitting-couch-dringking-coffee-gossiping-inside-home_1150-39736.jpg?t=st=1729232681~exp=1729236281~hmac=00239abfff066a65dfb0bbdf6f74a885564e400f3e558ad3d8a6f39c1390cec6&w=740"
                alt="Roommate Expense Sharing"
                className="w-full h-64 object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Roommate Expense Sharing
                </h3>
                <p className="text-gray-700 text-base">
                  Living with roommates? Easily split household expenses like
                  rent, utilities, and groceries. Our tool keeps everything
                  organized, so you can focus on living together harmoniously
                  without financial confusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 mt-10" id="aboutus  ">
        <div className="container mx-auto py-1 px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg ml-0">
              <h2 className=" font-bold text-gray-800 mb-4 text-left text-4xl">
                Why Choose Us
              </h2>
              <p className="mt-4 text-gray-600 text-xl">
                Our expense splitter platform makes group finances easy and
                transparent. Whether you're planning a trip with friends,
                sharing household expenses, or managing group activities, we
                simplify the process of splitting costs, ensuring fairness for
                everyone involved.
              </p>
            </div>
            <div className="mt-12 md:mt-0 ml-16 ">
              <img
                     src="./download2.png"
                alt="Expense Management"
                
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4px- py-12">
        <FaQs />
      </div>
   </>
 );
};

export default Dashboard;

import { Carousel } from "antd";
import FaQs from "./FaQs";
import React from "react";
import imgs1 from './imges/6203338.jpg'

const Home = () => {
  const contentStyle: React.CSSProperties = {
     height: "550px",
    color: "#fff",
   
    textAlign: "center",
    
    maxHeight:"550px",
    width:"100%",
 
  };
  return (
    <>
    
      <Carousel effect="scrollx" autoplay={true}>
  <div>
   
    <img src="src\components\imges\pixeel.jpg" style={contentStyle} alt="" />
    
    </div>
  {/* <div>
    <div style={contentStyle} className="imgcover bg-[url('https://img.freepik.com/free-vector/hand-drawn-illustrated-business-planning_52683-76277.jpg?w=996&t=st=1729157895~exp=1729158495~hmac=7721115e07790c8cfb44e766d0d2fb02c2322b5e5c061b67ef4a3d66b29a2401')] bg-center bg-cover bg-no-repeat ">

    </div>
    
  </div> */}
  <div>
  <img src="src\components\imges\tormarch35.jpg" style={contentStyle}></img>
  </div>
  <div>
  <img src="src\components\imges\6203338.jpg" style={contentStyle}></img>
  </div>
  
</Carousel>

<section className="py-10" id="services">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center ">
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          // src="https://splitpal.io/wp-content/uploads/2022/12/group-of-friends-travel-together-driving-a-car-and-2022-09-05-22-26-08-utc-768x512.jpg.webp"

          src="https://img.freepik.com/free-vector/hand-drawn-flat-tourists-illustration_23-2149051160.jpg?t=st=1729231925~exp=1729235525~hmac=3efda7384ae7181d4a0d77877502f0c6803c9fca1b89a9a1977f6d9cb2db3dc9&w=1060"

          alt="Group Travel Expense Management"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
             Travel Expense Management
          </h3>
          <p className="text-gray-700 text-base">
            Going on a road trip with friends? Keep track of fuel, lodging, and
            meal expenses effortlessly. Our tool ensures all costs are shared
            fairly, so you can focus on the fun while we handle the math.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          // src="https://splitpal.io/wp-content/uploads/2022/12/friends-splitting-the-bill-in-restaurant-2022-05-08-22-16-16-utc-768x512.jpg.webp"

          src="https://img.freepik.com/free-vector/flat-design-business-coffee-illustration_23-2149484588.jpg?t=st=1729232268~exp=1729235868~hmac=64847fe1aac5a1b840a1341cc7b8a21aa2097d391d4749ef639b65493e5b0800&w=740"

          alt="Splitting Restaurant Bills"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
           Restaurant Bill Splitting
          </h3>
          <p className="text-gray-700 text-base">
            Eating out with friends? Split the restaurant bill with ease. Our
            app helps you divide the costs fairly, making sure everyone pays
            their share, whether it’s drinks, appetizers, or the main course.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          // src="https://splitpal.io/wp-content/uploads/2022/12/two-female-roommates-using-their-smartphones-onlin-2022-06-14-17-34-44-utc-768x512.jpg.webp"

          src="https://img.freepik.com/free-vector/two-girls-sitting-couch-dringking-coffee-gossiping-inside-home_1150-39736.jpg?t=st=1729232681~exp=1729236281~hmac=00239abfff066a65dfb0bbdf6f74a885564e400f3e558ad3d8a6f39c1390cec6&w=740"
          
          alt="Roommate Expense Sharing"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Roommate Expense Sharing
          </h3>
          <p className="text-gray-700 text-base">
            Living with roommates? Easily split household expenses like rent,
            utilities, and groceries. Our tool keeps everything organized, so
            you can focus on living together harmoniously without financial
            confusion.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-gray-100" id="aboutus ">
  <div className="container mx-auto py-1 px-4 sm:px-6 lg:px-8 ">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg ml-6">
        <h2 className=" font-bold text-gray-800 mb-8 text-left text-4xl ">
          Why Choose Us
        </h2>
        <p className="mt-4 text-gray-600 text-xl">
          Our expense splitter platform makes group finances easy and transparent. Whether you're planning a trip with friends, sharing household expenses, or managing group activities, we simplify the process of splitting costs, ensuring fairness for everyone involved.
        </p>
      </div>
      <div className="mt-12 md:mt-0 ">
        <img
          
          // src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-2383.jpg?t=st=1729234162~exp=1729237762~hmac=fdf1eed02055e44340273bb99988e4549939645a14429e9dca04af173bc819fc&w=740"

          src="src\components\imges\download.png"


          alt="Expense Management"
          // className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>


      <div className="px-0 py-12">
        <FaQs />
      </div>
    </>
  );
};

export default Home;

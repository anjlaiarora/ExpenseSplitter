import { Carousel } from "antd";
import FaQs from "./FaQs";
import React from "react";

const Dashboard = () => {
  const contentStyle: React.CSSProperties = {
     height: "500px",
    color: "#fff",
   
    textAlign: "center",
    background: "#364d79",
    maxHeight:"500px",
    width:"100%",
    backgroundColor: "gray",
  };
  return (
    <>
    
      <Carousel effect="scrollx" autoplay={true}>
  <div>
   
    <img src="https://www.shutterstock.com/shutterstock/photos/267048551/display_1500/stock-photo-man-and-woman-calculating-hot-to-split-little-money-concept-of-poverty-267048551.jpg" style={contentStyle} alt="" />
    
    </div>
  <div>
    <h3 style={contentStyle}>2</h3>
  </div>
  <div>
    <h3 style={contentStyle}>3</h3>
  </div>
  <div>
    <h3 style={contentStyle}>4</h3>
  </div>
  
</Carousel>

      <section className="py-10" id="services ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://splitpal.io/wp-content/uploads/2022/12/group-of-friends-travel-together-driving-a-car-and-2022-09-05-22-26-08-utc-768x512.jpg.webp"
                alt="Shared Expense Tracking"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Seamless Shared Expense Tracking
                </h3>
                <p className="text-gray-700 text-base">
                  Easily manage and split expenses for group activities with our
                  streamlined expense tracking feature. Whether it's for
                  groceries, trips, or other shared costs, ensure transparency
                  and fairness for everyone involved.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://splitpal.io/wp-content/uploads/2022/12/friends-splitting-the-bill-in-restaurant-2022-05-08-22-16-16-utc-768x512.jpg.webp"
                alt="Group Expense Management"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Effortless Group Expense Management
                </h3>
                <p className="text-gray-700 text-base">
                  Managing group expenses can be a hassle, but with our service,
                  it's simple. Track your shared expenses, split costs fairly,
                  and keep everyone accountable. Perfect for trips, events, and
                  everyday shared activities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://splitpal.io/wp-content/uploads/2022/12/two-female-roommates-using-their-smartphones-onlin-2022-06-14-17-34-44-utc-768x512.jpg.webp"
                alt="Expense Splitting"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Simplify Your Expenses
                </h3>
                <p className="text-gray-700 text-base">
                  Our expense splitter makes it easy to manage group expenses.
                  Whether it's a trip, dinner, or a shared bill, split the cost
                  fairly with just a few clicks. Get detailed breakdowns and
                  keep track of who owes what.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100" id="aboutus">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Why Choose Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Our expense splitter platform makes group finances easy and transparent. Whether you're planning a trip with friends, sharing household expenses, or managing group activities, we simplify the process of splitting costs, ensuring fairness for everyone involved.
        </p>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
          alt="Expense Management"
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>


      <div className="px-0 py-24">
        <FaQs />
      </div>
    </>
  );
};

export default Dashboard;

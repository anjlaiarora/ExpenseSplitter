import { Carousel } from "antd";
import FaQs from "./FaQs";
// const Home = () => {
//   const contentStyle: React.CSSProperties = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '460px',
//     textAlign: 'center',
//     background: '#364d79',
//     minHeight: '500px',
//     backgroundColor:"gray",

//   };
//   return (
//     <>
//     <Carousel effect="scrollx" autoplay={true}>
//     <div>
//       {/* <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" className='h-96 w-full' alt="" /> */}
//       <h3 style={contentStyle}>1</h3>

//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
//   <div className='px-0 py-24'>
//   <FaQs/>
//   </div>
//   </>
//   )
// }

// export default Home
import React from "react";

const Home = () => {
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

      {/* <div className="relative  w-full h-[320px]" id="home">
      <div className="absolute inset-0 opacity-70">
  <img
    src="https://splitpal.io/wp-content/uploads/2023/02/married-couple-shopping-online-at-home-1024x683.jpg.webp"
    alt="Background Image"
    className="object-cover object-center w-full h-full"
  />
</div>
<div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
  <div className="md:w-1/2 mb-4 md:mb-0">
    <h1 className="text-black font-medium text-4xl md:text-5xl leading-tight mb-2">
      Expense Splitter
    </h1>
    <p className="font-regular text-xl mb-8 mt-4 text-black">
      Your ultimate solution for hassle-free expense sharing and management.
    </p>
    <a
      href="#getStarted"
      className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
    >
      Get Started
    </a>
  </div>
</div>

      </div> */}

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

            {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chilli pounding"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Chilli Pounding</h3>
              <p className="text-gray-700 text-base">
                We specialize in the production of high-quality chili powder made from the finest chilies, retaining
                their full flavor and aroma.
              </p>
            </div>
          </div> */}

            {/* <div className="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
            <div className="text-center text-white font-medium">Special Product</div>
            <img
              src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww"
              alt="Flavored Spaghetti"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Flavored Spaghetti</h3>
              <p className="text-gray-700 text-base">
                Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste
                buds.
              </p>
            </div>
          </div> */}
            {/* 
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU="
              alt="Rice Papad"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Rice Papad</h3>
              <p className="text-gray-700 text-base">
                We produce high-quality rice papad, using traditional methods to provide a unique flavor and texture.
              </p>
            </div>
          </div> */}
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

export default Home;

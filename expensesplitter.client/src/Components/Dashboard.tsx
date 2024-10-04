import { Carousel, Col, Container, Image, Row } from "react-bootstrap";

const Dashboard = () => {
  

  return (
    <>
      <div className="">
        {/* <Row className="justify-content-center relative">
          <Col xs={12} md={6} className="pt-5 ps-5">
            <p className="text-primary fs-5 ms-4">SPLIT YOUR AMOUNT</p>
            <p className=" fs-5 bold ms-4">A split payment is when a total purchase cost is divided<br /> up among multiple payment methods or sources.<br /> This can be useful when sharing expenses with roommates,<br /> buying group gifts, or dining out with friends.</p>
          </Col>
          <Col xs={6} md={4} className="me-5">
            <Image className="img-fluid max-w-full" src="https://media.istockphoto.com/id/1291977082/vector/a-young-woman-multitasking-abstract-concept-of-active-work-deadline-information-search-on.jpg?s=612x612&w=0&k=20&c=Hb_4Ywd1d3diVk4CH3D1REnzg388TR6DeRFidMGsYKo=" />
          </Col>
        </Row> */}
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="d-flex flex-row">
        <img
          className="d-block w-50"
          src="https://media.gettyimages.com/id/1142243912/photo/group-of-friends-paying-with-a-credit-card-at-a-restaurant-and-splitting-the-bill.jpg?s=612x612&w=0&k=20&c=-ai3qtpcRXlSo-syi68qGL1Lx9hRiu1DkGXPEBu81zA="
          alt="First slide"
        />
        <img
          className="d-block w-50"
          src="https://media.gettyimages.com/id/1312208687/photo/two-men-look-at-a-bill-in-a-cafe-and-divide-payment-with-mobile-application-shot-from-above.jpg?s=612x612&w=0&k=20&c=zsj-IcoztlZ6rfQ2nXJGTxatnfl6Z8OT7Is_DjjQtzs="
          alt="First slide"
        /></div>
        <Carousel.Caption className="text-light">
          <h5 className="fs-1">Split Restaurant & Cafe Bills</h5>
          <p className="bold fs-5">Splitify is developed to resolve complex itemized calculations<br/> on the spot and easily share with your friends. Assign each item and let the app calculate tip and taxes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-row ">
        <img
          className="d-block w-50"
          src="https://www.togetherprice.com/us/static/6b52ad2e41287219c2f2207d29fc1642/2b1ae/3a4b719a-577e-4f39-8751-f9af68f6ccb5.jpg"
          alt="Second slide"
        /> 
        <img
        className="d-block w-50"
        src="https://stories.td.com/volumes/default/article/_1094xAUTO_crop_center-center_100_none/travelhacks_hero.png"
        alt="Second slide"
      /></div>
        <Carousel.Caption className="text-light">
          <h5 className="fs-1">Split Travel Expenses</h5>
          <p className="fs-5">Figuring out splitting expenses during your vacation sure would<br/> be tiring with big group. Splitify here to help with splitting travel expenses with different participants for each activity.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex flex-row ">
        <img
          className="d-block w-50"
          src="https://www.honorsociety.org/sites/default/files/styles/fb_sharing/public/How_to_Find_a_Roommate_For_College.jpeg?itok=Fsld3Gz7
 "
          alt="Third slide"
        />
        <img
          className="d-block w-50"
          src="https://res.cloudinary.com/apartmentlist/image/fetch/f_auto,q_auto,t_renter_life_article/https://images.ctfassets.net/jeox55pd4d8n/2Y7u7y3t5W43RmXoRb86Ak/b14d5ee8185f5e5b56da456566564d3c/Two_roommates_checking_bank_mails_on_line_with_a_laptop_sitting_on_a_couch_in_the_living_room_at_home.jpg"
          alt="Third slide"
        /></div>
        <Carousel.Caption className="text-light">
          <h5 className="fs-1">Split Rent, Utilities with Roommates</h5>
          <p className="fs-5">
          Use Splitify as a roommate expense tracker to freely add <br/>your monthly expenses such as groceries, rent, utilities and so on with an ability of sharing through a simple link.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="pt-5 text-dark text-center">
      <p className="fs-1">Split Bills Easily
      <p className="fs-4">Easily manage shared expenses with our convenient expense sharing app</p></p>

      <div className="d-flex flex-row justify-content-center">
        <>
        <p>
        <p className="bg-primary fs-2 text-light p-5">Easy to use
        <p className="fs-5">Quickly add expenses with one click using the quick<br/> expense feature</p></p>
        <p className="fs-2 text-dark p-5 bg-info">Registration needed
        <p className="fs-5">Create and share expenses directly without signing up.<br/> Or you can sign-in with Gmail, AppleID or Email to track<br/> your expense.</p></p>
        </p>
        </>
        <>
        <p>
        <p className="bg-info fs-2 text-light p-5">Collaboration made easy
        <p className="fs-5">After creating your group simply hit "Share Group Link".<br/> You can send the create link to your group to expense together.</p></p>
        <p className="bg-primary fs-2 text-light p-5">One click to pay
        <p className="fs-5">Venmo integration makes payments easier! After<br/> settling, you can pay or request your expense amount<br/> with others.</p></p>
        </p>
        </>
      </div>
    </div>
    <div className="text-center">
    <p className="fs-2">Have a Question?</p>
      <p className="fs-3">FAQ</p>
      <p className="fs-5">Here you can discover more about to Splitify. How to work this app and all details are avalable! <a href="/aboutus"> Click here</a></p>
    </div>
      </div>
    </>

  );
};

export default Dashboard;

{/* <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px'}}>
<Col lg="2">

    <div >
      <p style={{ color: 'blue', fontSize: '28px', fontWeight: 'bold', paddingTop: '50px' }}>SPLIT YOUR AMOUNT</p>
      <p style={{ color: 'black', fontSize: '17px', paddingTop: '5px' }}>A split payment is when a total purchase cost is divided<br /> up among multiple payment methods or sources.<br /> This can be useful when sharing expenses with roommates,<br /> buying group gifts, or dining out with friends.
      </p>
    </div>
    </Col>
    <div>
      <Col md="auto">
        <img src="https://media.istockphoto.com/id/1291977082/vector/a-young-woman-multitasking-abstract-concept-of-active-work-deadline-information-search-on.jpg?s=612x612&w=0&k=20&c=Hb_4Ywd1d3diVk4CH3D1REnzg388TR6DeRFidMGsYKo=" alt="" width={300}/>
      </Col>
    </div>
    </div> */}
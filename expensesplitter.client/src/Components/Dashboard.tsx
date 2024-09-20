import Nav from 'react-bootstrap/Nav';
import FancyText from '@carefully-coded/react-text-gradient';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarCom from './NavbarCom';
const Dashboard = () => {
  

  const navigate2 = useNavigate(); //const variable for useNavigate.

  // const handleButtonClick = () => {//function to navigate splitter by routing.
  //   navigate2('/Splitter');
  // };




  const handleButtonClick = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      navigate2('/splitter');
    } else {
      navigate2('/login');
    }
  };
  
  const size = { fontSize: '25px', color: 'rgb(41, 42, 94)' };
  const size1 = { fontSize: '17px' };

  return (
    <div>
      {/* <NavbarCom/> */}
      <div style={{ justifyContent: 'space-between', display: 'flex' , marginLeft:'500px' }}>
        <div>
          <FancyText
            gradient={{ from: 'rgb(215 210 220)', to: 'rgb(49 25 129)' }}
            animate
            animateDuration={1000}
            style={{ fontSize: '100px', marginTop: '100px', fontFamily: 'cursive', paddingLeft:'60px'}}
          >
            SPLITIFY
          </FancyText>
          <p style={{fontSize:'25px', fontFamily:'monospace', color:'blue', paddingLeft:'25px'}}><b>Easy way for split amount and saving time</b></p>
          
    <button style={{borderRadius:'10px', borderColor:'slateblue', fontSize:'20px', padding:'10px 80px 10px 80px', marginLeft:'180px', backgroundColor:'teal', color:'white'}} onClick={handleButtonClick}>Get Start</button>
    </div>
    {/* <div>
      <img src='https://inci.sgp1.cdn.digitaloceanspaces.com/incipientinfo.web/assets/images/portfolio-img/website/cost-split.png' width={700}/>
      </div> */}
    </div>
    <div style={{paddingTop:'50px'}}>
      <p style={{fontSize:'50px', paddingLeft:'280px', color:'rgb(41, 42, 94)'}}><b>Split your expenses on different scenarios</b>     
       <p style={{paddingLeft:'100px', fontSize:'20px', fontFamily:'cursive'}}>Regardless of your use case, Splitify is here to help track and split your expenses right away</p>
      </p>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <p style={{paddingLeft:'20px'}}><img src='https://splitpal.io/wp-content/uploads/2022/12/friends-splitting-the-bill-in-restaurant-2022-05-08-22-16-16-utc-300x200.jpg.webp' width={400}/></p>
        <p><img src='https://splitpal.io/wp-content/uploads/2022/12/group-of-friends-travel-together-driving-a-car-and-2022-09-05-22-26-08-utc-300x200.jpg.webp' width={400}/></p>
        <p><img src='https://splitpal.io/wp-content/uploads/2022/12/two-female-roommates-using-their-smartphones-onlin-2022-06-14-17-34-44-utc-300x200.jpg.webp' width={400}/></p>
      </div>

      <div style={{display:'flex', justifyContent:'space-evenly', textAlign:'center'}}>
        <p style={{paddingLeft:'25px', fontSize:'25px', color:'rgb(41, 42, 94)'}}>Split Restaurant Bills<p style={size1}>Splitify is developed to resolve complex itemized <br/> calculations on the spot and easily share with <br/>your friends. Assign each item and let the app<br/> calculate tip and taxes.</p></p>
        <p style={size}>Split Travel Expenses<p style={size1}>Figuring out splitting expenses during your<br/> vacation sure would be tiring with big group.<br/> Splitify here to help with splitting travel expenses<br/> with different participants for each activity.</p></p>
        <p style={size}>Split Rent, Utilities with Roommates<p style={size1}>Use Splitify as a roommate expense tracker to<br/> freely add your monthly expenses such as<br/> groceries, rent, utilities and so on with an ability <br/>of sharing through a simple link.</p></p>
      </div>
    </div>
    <div style={{backgroundColor:'blue', borderRadius:'200px', textAlign:'center', paddingTop:'50px', color:'white' }}>
      <p style={{fontSize:'40px'}}>Split Bills Easily
      <p style={{fontSize:'20px'}}>Easily manage shared expenses with our convenient expense sharing app</p></p>

      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <>
        <p>
        <p style={{fontSize:'30px'}}>Easy to use</p>
        <p style={{fontSize:'18px'}}>Quickly add expenses with one click using the quick<br/> expense feature</p>
        <p style={{fontSize:'30px'}}>Registration needed</p>
        <p style={{fontSize:'18px'}}>Create and share expenses directly without signing up.<br/> Or you can sign-in with Gmail, AppleID or Email to track<br/> your expense.</p>
        </p>
        </>
        <>
        <p>
        <p style={{fontSize:'30px'}}>Collaboration made easy</p>
        <p style={{fontSize:'18px'}}>After creating your group simply hit "Share Group Link".<br/> You can send the create link to your group to expense<br/> together.</p>
        <p style={{fontSize:'30px'}}>One click to pay</p>
        <p style={{fontSize:'18px'}}>Venmo integration makes payments easier! After<br/> settling, you can pay or request your expense amount<br/> with others.</p>
        </p>
        </>
      </div>
    </div>


    <div style={{display:'flex', justifyContent:'space-evenly', paddingTop:'100px'}}>
      <>
      <p>
      <p>Have a Question?</p>
      <p>FAQ</p>
      <p>Here you can discover more about Splitify’s <br/>awesome features. If you wish more features<br/> to come into the app, please contact us with<br/> your ideas!</p>
      </p>
      </>
      <>
      <Accordion defaultActiveKey="0" style={{width:'600px'}}>
        <Accordion.Item eventKey="0">
            <Accordion.Header>How do I Login & SignUp?</Accordion.Header>
            <Accordion.Body>
            <p>First You Click Get Started</p>
            <p>Log In or Sign Up:</p>
            <p>Begin by logging into your account. If you don’t have an account yet,<br/> sign up by providing your email, creating a password,<br/> and completing any required verification steps.</p>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>How do I create a new group?</Accordion.Header>
            <Accordion.Body>
          <p>Log In or Sign Up:</p>
          <p>Begin by logging into your account. If you don’t have an account yet,<br/> sign up by providing your email, creating a password,<br/> and completing any required verification steps.</p>
          <p>Navigate to the 'Create Group' Section:</p>
          <p>Once logged in, you’ll be directed to the dashboard.<br/>  Look for the option that says "Create Group" or<br/>  navigate to a section labeled “Groups.”</p>
          
          <p>Enter the Group Name:</p>
          <p>In the 'Create Group' section, you’ll see a field <br/> labeled “Group Name.” Enter a descriptive name for your<br/> group, such as "Weekend Getaway," "Office Lunches," or "Monthly Bills."</p>
          
          <p>Add Members:</p>
          <p>Next, add the members of your group. <br/> You can typically do this by entering their email<br/>  addresses or selecting contacts from a list. Each member added<br/>  will receive an invitation to join the group.</p>

            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>How do I Add Expense?</Accordion.Header>
            <Accordion.Body>
          <p>Navigate to 'Add Expense':</p>
          <p>In the group’s main page, look for the "Add Expense"<br/>  button or option. This will usually be prominently<br/>  displayed on the group’s dashboard.</p>
          
          <p>Enter Expense Details:</p>
          <p>Expense Name: Enter a descriptive name for the expense,<br/>  such as "Dinner at Joe's," "Hotel Booking," or "Groceries."<br/> 
          <br/>Payee (or Paid By): Select or enter the name of the person who paid<br/> for the expense. This could be you or another group member.<br/> 
          <br/>Amount: Enter the total amount of the expense. Make sure to <br/> input the correct amount to ensure accurate splitting later.</p>
          
          <p>Add Members:</p>
          <p>Once you’ve filled in all the details, click on the “Save” or “Add Expense” button. The expense will now be added to the group’s expense list.<br/>  will receive an invitation to join the group.</p>

</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="3">
<Accordion.Header>How to see the Expense Details?</Accordion.Header>
<Accordion.Body>
<p>View the Expense List:</p>
<p>In the Expense Details section, you will see a list of all the expenses that have been added to the group. Each expense entry will typically display the following information:<br/>
  <br/>Expense Name: The title or description of the expense.<br/>
  <br/>Payee (Paid By): The name of the person who paid for the expense.<br/>
  <br/>Amount: The total amount of the expense.<br/>
  <br/>Date: When the expense was added or incurred.</p>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="4">
<Accordion.Header>How do I Amount Split?</Accordion.Header>
<Accordion.Body>
<p>Navigate to the Amount Split Section:</p>
<p>Equal Split:<br/>
<br/>By default, many applications will split the total amount equally among all group members. If everyone is contributing equally, this option will work best.<br/>
<br/> Custom Split:<br/>
<br/>If members have contributed different amounts or if you want to assign specific amounts to each member, choose the custom split option. Here, you can manually enter the amount each person is responsible for.</p>
</Accordion.Body>
</Accordion.Item>
</Accordion>
</>
</div>
<hr/>
    <div>
      <Nav className="justify-content-center" activeKey="/home" style={{paddingBottom:'20px'}}>
        <Nav.Item>
          <Nav.Link href="/home">Create Group</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Add Expense</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Expense Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            Split Amount
          </Nav.Link>
        </Nav.Item>
      </Nav>

    </div>
       </div>
    

  );
};

export default Dashboard;

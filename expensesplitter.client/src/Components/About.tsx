
const About = () => {
  return (
    <>
      <div style={{width:'1150px'}}>
        <div style={{ display: 'flex', gap: '100px', justifyContent:'center',paddingTop:'180px'}}>
          <img src="https://img.freepik.com/free-vector/discussion-concept-illustration_114360-5209.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726963200&semt=ais_hybrid" alt="" width={450} height={450}/>
          <div>
            <p style={{ color: 'black', fontSize: '30px' }}>About Us</p>
            <p style={{ color: 'black', fontSize:'18px' }}>We are a dedicated team of IT students with a vision to simplify<br /> the way people manage shared expenses. Our passion for<br /> solving real-world problems through technology led us to <br />develop Expense Splitter, a tool that ensures fairness and transparency <br />when handling group expenses. <br/><br/>Whether it’s a weekend trip, a group dinner, or shared <br/>household costs, Expense Splitter makes it easier<br /> to divide expenses accurately and effortlessly.</p>
          </div>
        </div>
        <div style={{ display: 'flex',marginTop:'50px', justifyContent:'center' }}>
          <div>
            <p style={{ color: 'black', fontSize: '30px' }}>Our Mission</p>
            <p style={{ color: 'black', fontSize:'18px' }}>Our mission is to eliminate the stress and confusion that often <br/>arise when managing group expenses. We believe that financial<br/> management in group settings should be clear, simple, and fair. <br/>Our goal is to provide a tool that automates the process, making <br/>it as smooth as possible so that users can focus on enjoying <br/>their experiences instead of worrying about who owes what.</p>
            <p style={{color:'black', fontSize:'18px'}}>Our Core Values
            <ul>
            <li>Transparency</li>
            <li>User-Friendliness</li>
            <li>Accuracy</li>
            <li>Security</li>
            <li>Collaboration</li></ul></p> 
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1493201691/vector/account-managers-liaise-between-the-agency-and-clients.jpg?s=612x612&w=0&k=20&c=u2XghPG17wPVL_j0JMImXRRd1jPJozFETWnzkN3v8qc=" alt="" width={700} height={600} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '150px'}}>
          <img src="https://img.freepik.com/free-vector/cooperation-collaboration-work-business-meeting-coworkers-briefing-employees-teamwork-colleagues-conference-room-discussing-project-vector-isolated-concept-metaphor-illustration_335657-2778.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726963200&semt=ais_hybrid" alt="" width={520}/>
          <div>
            <p style={{ color: 'black', fontSize: '30px',marginTop:'100px'  }}>Our Vision</p>
            <p style={{ color: 'black', fontSize:'18px' }}>We aim to revolutionize how people manage group finances <br/>by creating a solution that is adaptable to any situation involving <br/>shared expenses. Our vision is for Expense Splitter to become <br/>the go-to tool for group financial management, whether in <br/>personal or professional settings. We want to expand the application’s<br/> capabilities to incorporate more advanced features like payment integration,<br/> currency conversion, and expense categories to serve a broader audience.</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent:'center'}}>
          <div>
            <p style={{ color: 'black', fontSize: '30px',marginTop:'80px' }}>Our Solution</p>
            <p>
            <ul style={{color:'black', fontSize:'18px',paddingLeft:'20px'}}>
            <li><u>Secure Login & Sign Up: </u>Users can create a secure account<br/> to manage multiple groups and their associated expenses.</li><br/>
            <li><u>Create Groups:</u> Users can create unique groups for different activities,<br/> such as trips, events, or shared living situations.</li><br/>
            <li><u>Add and Track Expenses:</u> With the ability to log expenses by name, amount,<br/> and payee, users can easily keep track of all financial contributions.</li><br/>
            <li><u>Amount Split:</u> Automatically splits expenses fairly among group members,<br/> with options for custom splits when needed.</li><br/>
            <li><u>Expense Summary:</u> A detailed overview of all expenses, who paid for what,<br/> and how much each member owes, making the settlement process easier.</li></ul></p> 
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2024/05/07/00/39/schedule-8744592_640.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About

{/* */}
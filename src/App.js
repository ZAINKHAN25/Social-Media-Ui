import logo from './logo.png'
import './App.css';


// const area

// groups data in first side bar
const groupsdata = [
  {
    groupimg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',
    groupname: 'Figma Group'
  },{
    groupimg: 'https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png',
    groupname: 'Github Group'
  }
]
// friend in firls side bar
const friendsdata = [
  {
    friendname: "Kabir",
    frinedimgurl : 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    isonlinetrue: false
  },{
    friendname: "Shabir",
    frinedimgurl : 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg',
    isonlinetrue: true
  },{
    friendname: "Naveed",
    frinedimgurl : 'https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg',
    isonlinetrue: false
  },{
    friendname: "Talha",
    frinedimgurl : 'https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg',
    isonlinetrue: true
  },{
    friendname: "Ismail",
    frinedimgurl : 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
    isonlinetrue: false
  },{
    friendname: "Hassan",
    frinedimgurl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqEo3uMHd7bxEtVlVb3cp63pvn8WZtzEvGg&usqp=CAU',
    isonlinetrue: true
  },{
    friendname: "Sudais",
    frinedimgurl : 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
    isonlinetrue: true
  },{
    friendname: "Shayan",
    frinedimgurl : 'https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png',
    isonlinetrue: true
  }
]


// main body of react js
function App() {
  return (
    <div className="bodyone d-flex flex-wrap justify-content-center align-itmes-stretch">
      <Firstsidebar />
      <Secondsidebar />
      <Thirdsidebar />
    </div>
  );
}

// Search and groups bar 
function Firstsidebar(){
  return (
    <div className='firstsidebar'>
      {/* search box */}
      <div className='searchcontent d-flex'>
        <img className='logooffirst me-2' src={logo} alt=""/>
        <input className="form-control searchboxfirstinput" type="text" placeholder="Search" aria-label="default input example"></input>
      </div>
      {/* your groups */}
      <div className='mt-4'>
        <h6 className='mb-3'>Your Groups</h6>
        {groupsdata.map((x,i) => <Singlegroupdiv key={i} data={x} />)}
      </div>
      {/* your friends */}
      <div className='mt-4'>
        <h6 className='mb-3'>Friends</h6>
        {friendsdata.map((x,i) => <Singlefrienddiv key={i} data={x} />)}
      </div>

    </div>
  )
}

// Main Content
function Secondsidebar(){
  return (
    <div className='secondsidebar'>
      hello world
    </div>
  )
}

// sponser and friend area
function Thirdsidebar(){
  return (
    <div className='thirdsidebar'>
      hello world
    </div>
  )
}



// Sigle Div area

// single group Div
function Singlegroupdiv({data}){
  return (
    <div className='d-flex siglegroupdiv align-items-center justify-content-start my-2 py-1 px-3 rounded'>
      <img src={data.groupimg} className='imgofgroupsinglediv' alt=""/>
      <p className='my-auto'>{data.groupname}</p>
    </div>
  )
}
// single friend div
function Singlefrienddiv({data}){
  return (
    <div className='d-flex siglefrienddiv align-items-center justify-content-start my-2 py-1 px-3 rounded'>
      <img src={data.frinedimgurl} className='imgoffriendsinglediv' alt=""/>
      <p className='my-auto'>{data.friendname}</p>
      <span className={data.isonlinetrue === true ? 'logintrue' : ''}></span>
    </div>
  )
}

export default App;

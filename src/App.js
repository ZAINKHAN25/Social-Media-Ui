import logo from './logo.png'
import './App.css';


// const area

// groups data in first side bar
const groupsdata = [
  {
    groupimg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',
    groupname: 'Figma Group'
  }, {
    groupimg: 'https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png',
    groupname: 'Github Group'
  }
]
// friend in first side bar
const friendsdata = [
  {
    friendname: "Kabir",
    frinedimgurl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    isonlinetrue: false
  }, {
    friendname: "Shabir",
    frinedimgurl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg',
    isonlinetrue: true
  }, {
    friendname: "Naveed",
    frinedimgurl: 'https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg',
    isonlinetrue: false
  }, {
    friendname: "Talha",
    frinedimgurl: 'https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg',
    isonlinetrue: true
  }, {
    friendname: "Ismail",
    frinedimgurl: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
    isonlinetrue: false
  }, {
    friendname: "Hassan",
    frinedimgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqEo3uMHd7bxEtVlVb3cp63pvn8WZtzEvGg&usqp=CAU',
    isonlinetrue: true
  }, {
    friendname: "Sudais",
    frinedimgurl: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
    isonlinetrue: true
  }, {
    friendname: "Shayan",
    frinedimgurl: 'https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png',
    isonlinetrue: true
  }
]


// status of person in second bar
const statuspersonsarr = [
  {
    statuspersonname: 'Kabir',
    statuspersonurl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }, {
    statuspersonname: 'Shabir',
    statuspersonurl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg'
  }, {
    statuspersonname: 'Naveed',
    statuspersonurl: 'https://img.freepik.com/free-photo/portrait-handsome-man-with-dark-hairstyle-bristle-toothy-smile-dressed-white-sweatshirt-feels-very-glad-poses-indoor-pleased-european-guy-being-good-mood-smiles-positively-emotions-concept_273609-61405.jpg'
  }
]
// main post arr of persons in second bar
const mainpostarr = [
  {
    postpersonname: "Zain Khan",
    postpersonimgurl: 'https://avatars.githubusercontent.com/u/121414309?v=4',
    posthoursago: '12 hours ago',
    postdescription: 'Hello my name is Zain Khan and you are in my website',
    likes: 10,
    ismelike: true,
    veiws: "15K",
    postimgurl: 'https://avatars.githubusercontent.com/u/121414309?v=4'
  }, {
    postpersonname: "Talha",
    postpersonimgurl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    posthoursago: '2 hours ago',
    postdescription: `It's a very good website and i like it thanks to Zain who builds this website and please support him`,
    likes: 20,
    ismelike: false,
    veiws: "2K",
    postimgurl: ''
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
function Firstsidebar() {
  return (
    <div className='firstsidebar'>
      {/* search box */}
      <div className='searchcontent d-flex'>
        <img className='logooffirst me-2' src={logo} alt="" />
        <input className="form-control searchboxfirstinput" type="text" placeholder="Search" aria-label="default input example"></input>
      </div>
      {/* your groups */}
      <div className='mt-4'>
        <h6 className='mb-3'>Your Groups</h6>
        {groupsdata.map((x, i) => <Singlegroupdiv key={i} data={x} />)}
      </div>
      {/* your friends */}
      <div className='mt-4'>
        <h6 className='mb-3'>Friends</h6>
        {friendsdata.map((x, i) => <Singlefrienddiv key={i} data={x} />)}
      </div>

    </div>
  )
}

// Main Content
function Secondsidebar() {
  return (
    <div className='secondsidebar'>
      {/* navbar */}
      <div className='navbarofmain py-2 px-1 d-flex justify-content-around flex-wrap rounded align-items-center overflow-y-hidden'>

        <i title='house' className="rounded fs-4 fa-solid fa-house selectedareamain"></i>
        <i title='message' className="rounded fs-4 fa-regular fa-message"></i>
        <i title='shop' className="rounded fs-4 fa-solid fa-shop"></i>
        <i title='settings' className="rounded fs-4 fa-solid fa-gear"></i>
        <i title='leader board' className="rounded fs-4 fa-regular fa-flag"></i>

      </div>
      {/* status area */}
      <div className='d-flex justify-content-around mt-3 overflow-y-hidden border-bottom'>
        {statuspersonsarr.map((x, i) => <Singlestatusdiv key={i} data={x} />)}
      </div>
      {/* main post area */}
      <div className='d-flex flex-column align-items-center justify-content-cneter'>
        {mainpostarr.map((x, i) => <Singlepostdiv key={i} data={x} />)}
      </div>
    </div>
  )
}

// sponser and friend area
function Thirdsidebar() {
  return (
    <div className='thirdsidebar'>
      hello world
    </div>
  )
}



// Sigle Div area


// First Bar

// single group Div
function Singlegroupdiv({ data }) {
  return (
    <div className='d-flex siglegroupdiv align-items-center justify-content-start my-2 py-1 px-3 rounded'>
      <img src={data.groupimg} className='imgofgroupsinglediv' alt="" />
      <p className='my-auto'>{data.groupname}</p>
    </div>
  )
}
// single friend div
function Singlefrienddiv({ data }) {
  return (
    <div className='d-flex siglefrienddiv align-items-center justify-content-start my-2 py-1 px-3 rounded'>
      <img src={data.frinedimgurl} className='imgoffriendsinglediv' alt="" />
      <p className='my-auto'>{data.friendname}</p>
      <span className={data.isonlinetrue === true ? 'logintrue' : ''}></span>
    </div>
  )
}


// Second Bar

// single status div
function Singlestatusdiv({ data }) {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-2'>
      <img className='imgofstatus' src={data.statuspersonurl} alt="" />
      <p>{data.statuspersonname}</p>
    </div>
  )
}
// single post 
function Singlepostdiv({ data }) {
  return (
    <div className='singlepostdiv p-3 rounded my-2 shadow'>
      <div className='firstline mb-1 d-flex align-items-start'>
        <img src={data.postpersonimgurl} className='postpersonimg me-4' alt="" />
        <div className='firstlinesecondtextcontent d-flex flex-column'>
          <h5 className='border-bottom  pb-2'>{data.postpersonname}</h5>
          <p>{data.posthoursago}</p>
        </div>
      </div>
      <div className='secondline'>
        <p>{data.postdescription}</p>
        {data.postimgurl == '' ? '' : <img className='mainpicofpost' src={data.postimgurl} alt="" />}
      </div>
      <div className='thirdlive d-flex justify-content-around my-2'>


        <div className='d-flex likefather align-items-center'>
          {
            data.ismelike === true ? (
              <i class="fa-solid fa-thumbs-up veiwtrue fs-2 me-2 "></i>
            ) : (
              <i class="fa-solid fa-thumbs-up fs-2 me-2 notveiwtrue"></i>
            )

          }
          <p className='fs-5 my-auto'>{data.likes}</p>
        </div>
        <p className='mt-2'>{data.veiws} Veiws</p>
      </div>
    </div>
  )
}


export default App;

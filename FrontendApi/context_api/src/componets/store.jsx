// import React from 'react'
// import Header from './Header'
// import styles from './Features.module.css'
// import header_1 from "../assets/img/header_1.png"
// import header_2 from "../assets/img/header_2.png"
// import create from "../assets/img/create.png"
// import footer from "../assets/img/footer.png"
// import home from "../assets/img/home.png"
// import login from "../assets/img/login.png"
// import signup from "../assets/img/signup.png"
// import update from "../assets/img/update.png"
// import Footer from "../ui/Footer"
// import menu from "../assets/img/menu.png"
// import search from "../assets/img/search.png"
// import contact from "../assets/img/contact.png"

// const Features = () => {
//   return (
//     <div>
//         <Header />
//         <div className={styles.featuresContainer}>
//           <div className={styles.featuresHeader}>Site Features</div>
          
//           <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Header Component</h1>
//             <div className={styles.firstImage}>
//               <img src={header_1} alt="Feature 1" className={styles.img_1} />
//               <img src={header_2} alt="Feature 1" className={styles.img_1} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The header component is made up of two parts, the first shows a header for the logged out user, while the second shows a header for the logged in user with both having excellent slide shows that describe the various features of the app</p>
//             </div>
//           </div>



//            <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Sign Up Component</h1>
//             <div className={styles.firstImage}>
//               <img src={signup} alt="Sign Up" className={styles.img_2} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The Sign Up component consist of input fields for username, password, phone number and email, after succesfully fill this information, the user will immediately be redirected to the login component where they can immediately log in and write their own customised note</p>
//             </div>
//           </div>




//            <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Login Component</h1>
//             <div className={styles.firstImage}>
//               <img src={login} alt="Login" className={styles.img_3} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The login component is one of the most exciting features of this app, it allows users to access their own customised and personalised notes given users absolute privacy</p>
//             </div>
//           </div>


          
//           <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Menu Component</h1>
//             <div className={styles.firstImage}>
//               <img src={menu} alt="Menu" className={styles.img_4} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The menu component is the go to naviagtion system on the site, with a couple of clicks users can access any page on the site.</p>
//             </div>
//           </div>




//            <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Notes Component</h1>
//             <div className={styles.firstImage}>
//               <img src={home} alt="Notes" className={styles.img_4} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The home component is the nexus of this app, it contains all user notes with buttons that allows for deleting notes and updating notes</p>
//             </div>
//           </div>



//            <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Create Component</h1>
//             <div className={styles.firstImage}>
//               <img src={create} alt="Create" className={styles.img_5} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The create component serves as perhaps the most important component, with a single click of the plus icon users can be able to create as much notes as they want which will be displayed at both frontend and backend</p>
//             </div>
//           </div>




//            <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Update Component</h1>
//             <div className={styles.firstImage}>
//               <img src={update} alt="Update" className={styles.img_6} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The update component is just like the create component difference been that it allows for the editing of already created notes</p>
//             </div>
//           </div>



//           <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Search Component</h1>
//             <div className={styles.firstImage}>
//               <img src={search} alt="Search" className={styles.img_4} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>No notes app is complete without a search function, by typing words from their notes in the search box users can access notes with the correspondant words making it easy to find old notes.</p>
//             </div>
//           </div>



//            <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Contact Component</h1>
//             <div className={styles.firstImage}>
//               <img src={contact} alt="Contact" className={styles.img_4} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The contact component can be used by users to send a direct message to the developer via the Django admin panel.</p>
//             </div>
//           </div>



//            <div className={styles.firstFeature}>
//             <h1 className={styles.firstHeader}>Footer Component</h1>
//             <div className={styles.firstImage}>
//               <img src={footer} alt="Footer" className={styles.img_7} />
//             </div>
//             <div className={styles.firstText}>
//               <p className={styles.p_1}>The footer provides important imformation about the site such as developer info and sitemap allowing for seamless navigation</p>
//             </div>
//           </div>




           



           



           



           
        
        
        
//         </div>
//         <Footer />
//     </div>
//   )
// }

// export default Features








// .featuresContainer {
//   background-color: black;
//   padding: 0;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-attachment: fixed;
//   height: 100%;
//   min-height: 100vh;
//   margin: 0;
//   box-sizing: border-box;
//   font-family: Arial, Helvetica, sans-serif;
//   border: 5px solid white;
//   margin-top: 3rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
 
// }
// .featuresHeader {
//     font-size: 2.5rem;
//     font-family: Arial, Helvetica, sans-serif;
//     color: white;
//     margin-top: 2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: all .5s;
// }

// .firstFeature {
 
//   /* display: flex;
//   justify-content: center;
//   align-items: center; */
//   background-color: black;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-attachment: fixed;
//   height: 50%;
//   min-height: 50vh;
//   width: 70%;
//   margin: 0;
//   box-sizing: border-box;
//   font-family: Arial, Helvetica, sans-serif;
//   border: 3px solid rgba(0, 255, 255, 0.705);
//   border-radius: 10px;
//   margin-top: 3rem;
//   color: white;
//   margin-bottom: 3rem;
 
// }
// .firstFeature:hover {
 
//   box-shadow:0 0 30px #0ff;
// }
// .firstHeader {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
// .firstText {
//     padding-left: 1rem;
//     font-size: 1.3rem;
// }
// .img_1 {
//   width: 40%;
//   height: 40%;
//   padding-left: 3.5rem;
// }
// .img_2 {
//   width: 60%;
//   height: 40%;
//   padding-left: 3.5rem;
 
// }
// .img_3 {
//   width: 60%;
//   height: 40%;
//   padding-left: 3.5rem;
 
// }
// .img_4 {
//   width: 60%;
//   height: 40%;
//   padding-left: 3.5rem;
 
// }
// .img_5 {
//   width: 60%;
//   height: 40%;
//   padding-left: 3.5rem;
 
// }
// .img_6 {
//   width: 60%;
//   height: 40%;
//   padding-left: 3.5rem;
 
// }
// .img_7 {
//   width: 60%;
//   height: 40%;
//   padding-left: 3.5rem;
 
// }
// .img_8 {
//   width: 60%;
//   height: 40%;
//   padding-left: 3.4rem;
 
// }
// @media (max-width: 600px) {
//   .featuresContainer {
//     padding: 1rem;
//     border: 3px solid rgba(0, 255, 255, 0.705);
//   }
//   .featuresHeader {
//     font-size: 2rem;
//     margin-top: 1.5rem;
//   }
//   .firstFeature {
//     width: 95%;
//     min-height: 40vh;
//     margin-top: 2rem;
//     margin-bottom: 2rem;
//     padding: 1rem;
//     border: 3px solid rgba(0, 255, 255, 0.705);
//   }
//   .firstText {
//     font-size: 1rem;
//     padding-left: 0;
//     text-align: center;
//   }
//   .img_1,
//   .img_2,
//   .img_3,
//   .img_4,
//   .img_5,
//   .img_6,
//   .img_7,
//   .img_8 {
//     width: 90%;
//     height: auto;
//     padding-left: 0;
//     margin: 0 auto;
//     display: block;
//   }
// }
// @media (min-width: 601px) and (max-width: 1024px) {
//   .featuresContainer {
//     padding: 1.5rem;
//     border: 4px solid red;
//   }
//   .featuresHeader {
//     font-size: 2.2rem;
//     margin-top: 1.8rem;
//   }
//   .firstFeature {
//     width: 85%;
//     min-height: 45vh;
//     margin-top: 2.5rem;
//     margin-bottom: 2.5rem;
//     padding: 1.5rem;
//     border: 4px solid red;
//   }
//   .firstText {
//     font-size: 1.15rem;
//     padding-left: 0.5rem;
//   }
//   .img_1,
//   .img_2,
//   .img_3,
//   .img_4,
//   .img_5,
//   .img_6,
//   .img_7,
//   .img_8 {
//     width: 80%;
//     height: auto;
//     padding-left: 1rem;
//   }
// }

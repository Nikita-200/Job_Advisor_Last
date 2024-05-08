import React from 'react';
import './Landing.css'

const Landing = () => {
  

  return (
    <>
    <section className="home">
      <div className="description">
        <h1 className="title">
          <span className="gradient-text">Be Seen</span> <br/><br/><span className="gradient-text">Be Heard</span><br/><br/><span className="gradient-text">Be Hired</span>
        </h1>
        {/* <p className="paragraph">
          Find Jobs easily
        </p> */}

      </div>

      <div className="users-color-container">
        <span className="item" style={{ '--i': 1 }}></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/274f29ce-0d3f-4ac2-a2aa-f9b7bd188b2a"
          style={{ '--i': 2 }}
          alt="" />
        <span className="item" style={{ '--i': 3 }}></span>
        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9"
          style={{ '--i': 4 }}
          alt="" />

        <img
          className="item"
          src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/03e51e1e-9750-45a5-b75e-a1e341d4562a"
          style={{ '--i': 10 }}
          alt="" />
        <span className="item" style={{ '--i': 11 }}></span>
        <img className="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5eb50f89-3e5a-480e-860c-8d40d3ba9ffe" style={{ '--i': 12 }} alt="" />
        <span className="item" style={{ '--i': 5 }}></span>

        <span className="item" style={{ '--i': 9 }}></span>
        <img className="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735" style={{ '--i': 8 }} alt="" />
        <span className="item" style={{ '--i': 7 }}></span>
        <img className="item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/97ef9643-5202-41aa-80f0-ceeabccdd099" style={{ '--i': 6 }} alt="" />
      </div>
    </section>


    <section className="main-content">
      <section className="guides">
        <div className="guides_content landingcontainer">
          <div className="guide" id="guide1">
            <div className="guide_description">
              <div className="guide_number">01</div>
              <p className="hero_pre-text">get started</p>
              <h1><a href="jobs">Search For Job</a></h1>
              <div className="guide_text">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </div>

            </div>
            <div className="guide_image"><img src="https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhcmNoJTIwam9ifGVufDB8fDB8fHww" alt="" /></div>
          </div>
          <div className="guide" id="guide2">
            <div className="guide_description">
              <div className="guide_number">02</div>
              <p className="hero_pre-text">Keep Going</p>
              <h1>Apply For Job</h1>
              <div className="guide_text">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</div>
   
            </div>
            <div className="guide_image"><img src="https://images.unsplash.com/photo-1452457750107-cd084dce177d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlsbCUyMGZvcm0lMjBvbiUyMGNvbXB1dGVyfGVufDB8fDB8fHww" alt="" /></div>
          </div>
          <div className="guide" id="guide3">
            <div className="guide_description">
              <div className="guide_number">03</div>
              <p className="hero_pre-text">where you go is the key</p>
              <h1>Get a Job</h1>
              <div className="guide_text">To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</div>
 
            </div>
            <div className="guide_image"><img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoYWtpbmclMjBoYW5kc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
          </div>
        </div>
      </section>
    </section>
        

    </>

  );
};

export default Landing;

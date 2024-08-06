import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <h2>Secure Task Management for Teams</h2>
      <h1>Your Team.<span className='ali'>Aligned.</span></h1>
      <button className='google'><i class="fa-brands fa-google"></i>  Continue With Google</button>
      <div className='lap'><img src='https://cdn2.meistertask.com/assets/content/home/2021/hero-3b3598a6039de0ace7dba6a36e403d1569316a937342b62054f1d798c1e82fab.jpg'/></div>
      <div className='cards'>
        <div className='card'>
          <div className='p1'></div>
          <h4>Secure</h4>
          <p>and compliant</p>
        </div>
        <div className='card'> 
          <div className='p2'></div>
          <h4>Happy teams</h4>
          <p>worldwide</p>
        </div>
        <div className='card'>
          <div className='p3'></div>
          <h4>Editor's Choice</h4>
          <p>iOS App Store</p>
        </div>
        <div className='card'>
          <div className='p4'></div>
          <h4>4.7 Stars</h4>
          <p>Google Play Store</p>
        </div>
      </div>
      <p className='p5'>The Need for Task Management</p>
      <h3 className='h3'>It’s Time to Get Organized.</h3>
      <p className='p6'>Task management is the link between planning to do something and getting it done. Your task management software should provide an overview of work in progress that enables tracking from conception to completion. Enter MeisterTask: join teams everywhere who use our Kanban-style project boards to digitalize workflows and gain a clear overview of task progress. Let's get organized together!</p>
      <div className='multiy'></div>

    </div>
  )
}

export default Home
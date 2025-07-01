import './App.css'

function App() {

  // When the user scrolls down 50px from the top of the document, resize the header's font size
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("logo").style.borderRadius = "1rem 0 0 1rem";
      document.getElementById("logo").style.color = "white";
      document.getElementById("header").style.backgroundColor = "#F2F2F2";
      document.getElementById("header").style.borderRadius = "1rem";
      document.getElementById("header").style.top = "0.5rem";
      document.getElementById("header").style.width = "90%";
      document.getElementById("header").style.boxShadow = "0px 0px 25px hsl(0, 100%, 0%, 0.15)";
    } else {
      document.getElementById("logo").style.borderRadius = "1rem 0 0 1rem";
      document.getElementById("logo").style.color = "#1a1a1a";
      document.getElementById("header").style.backgroundColor = "white";
      document.getElementById("header").style.top = "0rem";
      document.getElementById("header").style.borderRadius = "0rem";
      document.getElementById("header").style.width = "100%";
      document.getElementById("header").style.boxShadow = "0px 0px 25px hsl(0, 100%, 0%, 0)";
    }
  }
  return (
    <>
      <div className="notification is-secondary is-position-fixed right-bottom-notification">
        <button className="delete" onClick={() => { document.querySelectorAll('.notification .delete').forEach(el => { el.parentNode.remove(); }); }}></button>
        This is my <strong>portfolio website</strong>. It may start small, but will grow over time as I gain more experience.
      </div>
      <header id="header">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a id="logo" className="navbar-item is-size-5 logo" href="/"><strong>Karlsson, K.</strong></a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary white-color-text">
                    <strong>Contact</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='spacer'></div>
      <main>
        <section className="section " >
          <div className="container is-flex is-flex-direction-column is-align-items-center has-text-centered pb-6">
            <h1 className="title is-size-1 is-size-3-mobile">
              Webmaster / Webdeveloper
            </h1>
            <p className="subtitle is-size-4">
              I like building websites. Simple, effecient and userfriendly
            </p>
            <figure className="image is-128x128">
              <img src="./src/assets/profile.svg" alt='Profile image' />
            </figure>
            <figure className="pt-6">
              <img src="./src/assets/website.svg" width='500' height='100' alt='Website image' />
            </figure>
          </div>
        </section >
        <section className="section has-background-primary" >
          <div className="container pt-6 pb-6 mb-6 is-flex is-flex-direction-column  has-text-centered">
            <h2 className="title is-size-3 is-size-4-mobile has-text-white is-hidden-mobile">
              Hello! I'm Kristoffer.
            </h2>
            <p className="is-size-5 has-text-light is-hidden-mobile">
              After spending the last few years studying web development, I’m excited to start my career and gain hands-on work experience. Now that I’ve completed my studies, I look forward to learning from others, working on real projects, and making a meaningful impact. I’m always ready for new challenges and committed to growing as a developer every step of the way.
            </p>
            <h2 className="title is-size-3 is-size-4-mobile has-text-white is-hidden-tablet has-text-left">
              Hello! I'm Kristoffer
            </h2>
            <p className="is-size-5 has-text-light is-hidden-tablet has-text-left">
              After spending the last few years studying web development, I’m excited to start my career and gain hands-on work experience. Now that I’ve completed my studies, I look forward to learning from others, working on real projects, and making a meaningful impact. I’m always ready for new challenges and committed to growing as a developer every step of the way.
            </p>
          </div>
        </section >

        {/* Desktop only */}
        <section className="section is-hidden-touch" >
          <div className="container is-flex is-flex-direction-column is-align-items-center has-text-centered">
            <div className='columns offset-top box p-0'>
              <div className="column p-6 is-one-third is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-layer-group"></i>
                </span>
                <h3 className='title'>Designer</h3>
                <p className='subtitle'>I like crafting simple, clean and user-friendly designs.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2 has-text-centered'>Things I enjoy designing:</p>
                  <p>UX, UI, Web, Apps</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Design Tools</p>
                  <ul className='mt-0 has-text-left'>
                    <li>Figma</li>
                    <li>Wireframes</li>
                  </ul>
                </div>
              </div>
              <div className="column p-6 border-right-1 border-left-1 is-one-third is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-code"></i>
                </span>
                <h3 className='title'>Frontend Developer</h3>
                <p className='subtitle'>I enjoy coding things from scratch and bringing ideas to life right in the browser.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2 has-text-centered'>Languages I'm intressted in:</p>
                  <p>HTML, CSS, JavaScript, TypeScript</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Dev Tools</p>
                  <ul className='mt-0 has-text-left'>
                    <li>React</li>
                    <li>Bulma</li>
                    <li>Github</li>
                    <li>Tailwind CSS</li>
                    <li>VS Code</li>
                    <li>Lighthouse</li>
                    <li>Google Search Console</li>
                    <li>Font Awesome</li>
                    <li>Google Fonts</li>
                    <li>Squoosh</li>
                    <li>WordPress</li>
                  </ul>
                </div>
              </div>
              <div className="column p-6 is-one-third is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-graduation-cap"></i>
                </span>
                <h3 className='title'>Fresh from the books</h3>
                <p className='subtitle'>I’m newly graduated and eager to apply my fresh knowledge in web development to real-world projects.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2'>Experiences I draw from:</p>
                  <p>Web development programs, hands-on coding projects, free-time coding, thesis comparing TypeScript and JavaScript</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Fresh Stats</p>
                  <ul className='mt-0 has-text-left'>
                    <li>Recently completed a web development program</li>
                    <li>2 years of immersive learning the newest technologies in web development</li>
                    <li>Built several small-scale projects to practice core concepts</li>
                    <li>Dedicated hundreds of hours to coding</li>
                    <li>Continuously exploring new tools and techniques</li>
                    <li>Ready and motivated to take on new challenges and grow as a developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Tablet only */}
        <section className="section is-hidden-desktop is-hidden-mobile" >
          <div className="container is-flex is-flex-direction-column is-align-items-center has-text-centered">
            <div className='columns offset-top box is-multiline p-0'>
              <div className="column p-6 is-half is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-layer-group"></i>
                </span>
                <h3 className='title'>Designer</h3>
                <p className='subtitle'>I like crafting simple, clean and user-friendly designs.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2 has-text-centered'>Things I enjoy designing:</p>
                  <p>UX, UI, Web, Apps</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Design Tools</p>
                  <ul className='mt-0 has-text-left'>
                    <li>Figma</li>
                    <li>Wireframes</li>
                  </ul>
                </div>
              </div>
              <div className="column p-6 border-left-1 is-half is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-code"></i>
                </span>
                <h3 className='title'>Frontend Developer</h3>
                <p className='subtitle'>I enjoy coding things from scratch and bringing ideas to life right in the browser.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2 has-text-centered'>Languages I'm intressted in:</p>
                  <p>HTML, CSS, JavaScript, TypeScript</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Dev Tools</p>
                  <ul className='mt-0 has-text-left'>
                    <li>React</li>
                    <li>Bulma</li>
                    <li>Github</li>
                    <li>Tailwind CSS</li>
                    <li>VS Code</li>
                    <li>Lighthouse</li>
                    <li>Google Search Console</li>
                    <li>Font Awesome</li>
                    <li>Google Fonts</li>
                    <li>Squoosh</li>
                    <li>WordPress</li>
                  </ul>
                </div>
              </div>
              <div className="column border-top-1 p-6 is-full is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-graduation-cap"></i>
                </span>
                <h3 className='title'>Fresh from the books</h3>
                <p className='subtitle'>I’m newly graduated and eager to apply my fresh knowledge in web development to real-world projects.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2'>Experiences I draw from:</p>
                  <p>Web development programs, hands-on coding projects, free-time coding, thesis comparing TypeScript and JavaScript</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Fresh Stats</p>
                  <ul className='mt-0 has-text-left'>
                    <li>Recently completed a web development program</li>
                    <li>2 years of immersive learning the newest technologies in web development</li>
                    <li>Built several small-scale projects to practice core concepts</li>
                    <li>Dedicated hundreds of hours to coding</li>
                    <li>Continuously exploring new tools and techniques</li>
                    <li>Ready and motivated to take on new challenges and grow as a developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Mobile only */}
        <section className="section is-hidden-tablet" >
          <div className="container is-flex is-flex-direction-column is-align-items-center has-text-centered">
            <div className='columns offset-top box p-0'>
              <div className="column p-6 is-one-third is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-layer-group"></i>
                </span>
                <h3 className='title'>Designer</h3>
                <p className='subtitle'>I like crafting simple, clean and user-friendly designs.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2 has-text-centered'>Things I enjoy designing:</p>
                  <p>UX, UI, Web, Apps</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Design Tools</p>
                  <ul className='mt-0 has-text-left'>
                    <li>Figma</li>
                    <li>Wireframes</li>
                  </ul>
                </div>
              </div>
              <div className="column p-6 border-top-1 border-bottom-1 is-one-third is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-code"></i>
                </span>
                <h3 className='title'>Frontend Developer</h3>
                <p className='subtitle'>I enjoy coding things from scratch and bringing ideas to life right in the browser.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2 has-text-centered'>Languages I'm intressted in:</p>
                  <p>HTML, CSS, JavaScript, TypeScript</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Dev Tools</p>
                  <ul className='mt-0 has-text-left'>
                    <li>React</li>
                    <li>Bulma</li>
                    <li>Github</li>
                    <li>Tailwind CSS</li>
                    <li>VS Code</li>
                    <li>Lighthouse</li>
                    <li>Google Search Console</li>
                    <li>Font Awesome</li>
                    <li>Google Fonts</li>
                    <li>Squoosh</li>
                    <li>WordPress</li>
                  </ul>
                </div>
              </div>
              <div className="column p-6 is-one-third is-narrow is-flex is-flex-direction-column is-align-items-center">
                <span className="icon is-large is-circle has-background-primary has-text-white mb-5">
                  <i className="fa-solid fa-graduation-cap"></i>
                </span>
                <h3 className='title'>Fresh from the books</h3>
                <p className='subtitle'>I’m newly graduated and eager to apply my fresh knowledge in web development to real-world projects.</p>
                <div className='content is-medium has-text-black'>
                  <p className='has-text-primary py-1 px-5 mb-0 br-2'>Experiences I draw from:</p>
                  <p>Web development programs, hands-on coding projects, free-time coding, thesis comparing TypeScript and JavaScript</p>
                  <p className='stats-title p-1 mb-2 br-2 has-text-centered'>Fresh Stats</p>
                  <ul className='mt-0 has-text-left'>
                    <li>Recently completed a web development program</li>
                    <li>2 years of immersive learning the newest technologies in web development</li>
                    <li>Built several small-scale projects to practice core concepts</li>
                    <li>Dedicated hundreds of hours to coding</li>
                    <li>Continuously exploring new tools and techniques</li>
                    <li>Ready and motivated to take on new challenges and grow as a developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section >
        <section className="section" >
          <div className="container is-flex is-flex-direction-column is-align-items-center has-text-centered">
            <h2 className='title'>My Recent Work</h2>
            <p className='subtitle'>Here are a few projects that I've worked on or is currently working on</p>
            <div className='columns is-hidden-tablet-only pt-6'>
              <div className="column bgtitan br-1 p-0 is-one-third is-narrow">
                <div className='overlay-content p-6 is-flex is-flex-direction-column is-justify-content-center'>
                  <h3 className='title white-color-text'>TITANGYM</h3>
                  <p className='subtitle white-color-text'>A website I built for a fictional gym, created as a child theme of the "Hello Elementor" theme in WordPress, using Elementor and some custom code.</p>
                  <div className='buttons is-centered'>
                    <a className='button' href='https://kristofferkarlsson.se/titangym/'>Website</a>
                  </div>
                </div>
              </div>
              <div className="column bgaud br-1 p-0 is-one-third is-narrow">
                <div className='overlay-content p-6 is-flex is-flex-direction-column is-justify-content-center'>
                  <h3 className='title white-color-text'>Audiory</h3>
                  <p className='subtitle white-color-text'>A radiowebsite where you are able to search, save your favorites and listen to radiostations from any country all around the world. Developed using React, styled with CSS and powered by RadioBrowser API.</p>
                  <div className='buttons is-centered'>
                    <a className='button'>Under construction...</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='columns is-multiline is-hidden-desktop is-hidden-mobile pt-6'>
              <div className="column bgtitan br-1 p-0 is-half is-narrow">
                <div className='overlay-content p-6 is-flex is-flex-direction-column is-justify-content-center'>
                  <h3 className='title white-color-text'>TITANGYM</h3>
                  <p className='subtitle white-color-text'>A website I built for a fictional gym, created as a child theme of the "Hello Elementor" theme in WordPress, using Elementor and some custom code.</p>
                  <div className='buttons is-centered'>
                    <a className='button' href='https://kristofferkarlsson.se/titangym/'>Website</a>
                  </div>
                </div>
              </div>
              <div className="column bgaud br-1 p-0 is-half is-narrow">
                <div className='overlay-content p-6 is-flex is-flex-direction-column is-justify-content-center'>
                  <h3 className='title white-color-text'>Audiory</h3>
                  <p className='subtitle white-color-text'>A radiowebsite where you are able to search, save your favorites and listen to radiostations from any country all around the world. Developed using React, styled with CSS and powered by RadioBrowser API.</p>
                  <div className='buttons is-centered'>
                    <a className='button'>Under construction...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </main >
      <div className='spacer'></div>
      <footer>
        <div className='section has-background-primary is-flex is-flex-direction-column is-gap-2 is-align-items-center has-text-centered'>
          <div className='has-text-light is-size-4 mt-6'><cite>Matthew Farley - "Living, learning, & leveling up one day at a time."</cite></div>
          <div className='is-flex is-gap-2 is-justify-content-center mb-6 mt-6'>
            <a href="https://linkedin.com/in/kristoffer-karlsson-084ba134b">
              <span className='icon is-small is-circle p-5 border-full-1 socials'>
                <i class="fa-brands fa-linkedin-in  "></i>
              </span>
            </a>
          </div>
          <p className='is-size-5 has-text-light'>Developed by <strong>Kristoffer Karlsson</strong></p>
          <div className='bulmalogo has-text-centered'>
            <a href="https://bulma.io/">
              <img src="./src/assets/BulmaLogoWhite.png" alt="Made with Bulma" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

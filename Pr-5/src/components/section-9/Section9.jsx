import React from 'react'
import './section9.css'

const Section9 = () => {
  return (
    <>
       <section class="recent-news">
          <div class="container">
            <div class="row d-flex justify-center">
              <div className='col-12'>
                <div className='mb-4'>
                  <div className='cr-banner'>
                    <h2>Latest News</h2>
                  </div>
                  <div className='cr-banner-sub-title'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                      </p>
                  </div>
                </div>
              </div>
                <div class="col-4">
                  <div className='cr-blog'>
                    <div class="cr-blog-content">
                        <span>
                          <code>By Admin</code> | <a href="#">Snacks</a>
                        </span>
                        <h5>Urna pretium elit mauris cursus <br></br> at elit Vestibulum.</h5>
                        <a className='read' href="#">Read More</a>
                    </div>
                    <div class="cr-blog-image">
                    	  <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg" width="100%"/>
                        <div className='cr-blog-date'>
                          <span>
                            10
                            <code>oct</code>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div className='cr-blog'>
                    <div class="cr-blog-content">
                        <span>
                          <code>By Admin</code> | <a href="#">Food</a>
                        </span>
                        <h5>Best guide to Shopping for <br></br> organic ingredients.</h5>
                        <a className='read' href="#">Read More</a>
                    </div>
                    <div class="cr-blog-image">
                    	  <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg" width="100%"/>
                        <div className='cr-blog-date'>
                          <span>
                            9
                            <code>oct</code>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div className='cr-blog'>
                    <div class="cr-blog-content">
                        <span>
                          <code>By Admin</code> | <a href="#">Snacks</a>
                        </span>
                        <h5>Cursus at elit vestibulum urna <br></br> pretium elit mauris.</h5>
                        <a className='read' href="#">Read More</a>
                    </div>
                    <div class="cr-blog-image">
                    	  <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg" width="100%"/>
                        <div className='cr-blog-date'>
                          <span>
                            12
                            <code>oct</code>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Section9

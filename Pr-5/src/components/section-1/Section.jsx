import React from "react";
import './section.css'

const Section = () => {
  return (
    <>
      <section class="slider">
        <div class="container-fluid">
          <div class="row">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/banner/banner.jpg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>
                      <span>100%</span>
                      Organic Vegetables
                    </h5>
                    <h1>The best way to stuff your wallet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br></br> reiciendis beatae consequuntur.</p>
                    <div class="cr-buttons mt-4">
                        <a href="#" class="cr1-button">
                          shop now
                        </a>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/banner/banner-2.jpg" class="d-block w-100" alt="..."/>
                  <div class="carousel-caption col-6 d-none d-md-block">
                    <h5>
                      <span>100%</span>
                      Organic Fruits
                    </h5>
                    <h1>Explore fresh & juicy fruits.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br></br> reiciendis beatae consequuntur.</p>
                    <div class="cr-buttons mt-4">
                        <a href="#" class="cr1-button">
                          shop now
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
	    </section>
    </>
  );
};

export default Section;

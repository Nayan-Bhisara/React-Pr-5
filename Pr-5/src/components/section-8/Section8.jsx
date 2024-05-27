import React from 'react'
import './section8.css'
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const Section8 = () => {
  return (
    <>
    <section class="section-testimonial">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-4">
                        <div class="cr-banner">
                            <h2>Great Words From People</h2>
                        </div>
                        <div class="cr-banner-sub-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore lacus vel facilisis. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="cr-testimonial-slider swiper-container">
                        <div class="swiper-wrapper d-flex cr-testimonial-pt-50">
                            <div class="swiper-slide col-4" data-aos="fade-up" data-aos-duration="2000">
                                <div class="cr-testimonial me-4">
                                    <div class="cr-testimonial-image">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/1.jpg" alt="businessman"/>
                                    </div>
                                    <div class="cr-testimonial-inner">
                                        <span>Co Founder</span>
                                        <h4 class="title">Stephen Smith</h4>
                                        <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <div class="cr-star">
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide col-4" data-aos="fade-up" data-aos-duration="2000">
                                <div class="cr-testimonial ">
                                    <div class="cr-testimonial-image">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/2.jpg" alt="businessman"/>
                                    </div>
                                    <div class="cr-testimonial-inner">
                                        <span>Manager</span>
                                        <h4 class="title">Lorem Robinson</h4>
                                        <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <div class="cr-star">
                                            <IoMdStar />   
                                            <IoMdStar />   
                                            <IoMdStar />   
                                            <IoMdStar />   
                                            <IoMdStarOutline />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide col-4" data-aos="fade-up" data-aos-duration="2000">
                                <div class="cr-testimonial ms-4">
                                    <div class="cr-testimonial-image">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/3.jpg" alt="businessman"/>
                                    </div>
                                    <div class="cr-testimonial-inner">
                                        <span>Team Leader</span>
                                        <h4 class="title">Saddika Alard</h4>
                                        <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel
                                            facilisis.”
                                        </p>
                                        <div class="cr-star">
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />
                                            <IoMdStar />                                           
                                        </div>
                                    </div>
                                </div>
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

export default Section8

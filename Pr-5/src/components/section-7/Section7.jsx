import React from 'react'
import './section7.css'
import { popularList } from './Data';
import { IoBagOutline } from "react-icons/io5";

const Section7 = () => {
  return (
    <>
      <section className='section7'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-12">
                    <div className="popular-box">
                        <div className="row d-flex">
                            {
                                popularList.map((val) => {
                                    return (
                                    <div className="col-2" key={val.id}>
                                        <div className="cat-container">
                                            <div className="cat-img">
                                                <img src={val.img}className="w-100" alt="" />
                                                <div className="cat-cart">
                                                    <a href="">
                                                        <IoBagOutline />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="cat-text">
                                                <a href="">{val.name}</a>
                                                <div className='cr-star'>
                                                    {val.stars}
                                                    <span>{val.star1}</span>
                                                </div>
                                                <p>{val.p}</p>
                                            </div>
                                            <div className="cat-price">
                                                <span>${val.price}</span>
                                                <del>${val.del}</del>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })
                            }
                            <div className="col-6">
                                <div className="popular-inner-box">
                                    <h4>Organic & Healthy <br></br> Vegetables</h4>
                                    <span>
                                        25%
                                        <code>off</code>
                                    </span>
                                    <div class="cr7-button">
                                        <a href="#" class="cr-button">shop now</a>
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
  );
}

export default Section7

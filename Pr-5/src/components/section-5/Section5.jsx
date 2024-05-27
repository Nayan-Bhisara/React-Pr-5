import React from 'react'
import './section5.css'
import { GiBoxUnpacking } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyDollarBoxLine } from "react-icons/ri";





const Section5 = () => {
  return (
    <>
    <section className="shopify-main">
		<div class="container">
			<div class="row">
				<div class="col-3">
					<div class="shopify d-flex align-items-center">
						<div class="i">
							<a href="#"><GiBoxUnpacking /></a>
						</div>
						<div class="service-content">
							<h4>Product Packing</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
						</div>
					</div>
				</div>
				<div class="col-3">
					<div class="shopify d-flex align-items-center">
						<div class="i">
							<a href="#"><BiSupport /></a>
						</div>
						<div class="service-content">
							<h4>24X7 Support</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
						</div>
					</div>
				</div>
				<div class="col-3">
					<div class="shopify d-flex align-items-center">
                        <div class="i">
                                <a href="#"><TbTruckDelivery /></a>
                        </div>
                        <div class="service-content">
                            <h4>Delivery in 5 Days</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
			        </div>
				</div>
				<div class="col-3">
					<div class="shopify d-flex align-items-center">
						<div class="i">
							<a href="#"><RiMoneyDollarBoxLine /></a>
						</div>
						<div class="service-content">
							<h4>Payment Secure</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Section5

import React from 'react'
import './header.css'
import { RiUser3Line } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { GrPhone } from "react-icons/gr";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";




const Header = () => {
  return (
    <>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="top-header">
                        <a href="index.html" class="cr-logo">
                          <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="logo" class="logo"/>
                        </a>
                        <form class="cr-search">
                            <input class="search-input" type="text" placeholder="Search For items..."/>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>All Categories</option>
                                <option value="1">Mens</option>
                                <option value="2">Womens</option>
                                <option value="3">Electronics</option>
                            </select>
                            <a href="javascript:void(0)" class="search-btn">
                              <FiSearch />
                            </a>
                        </form>
                        <div class="cr1-right-bar">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle cr1-right-bar-item" href="javascript:void(0)">
                                        <RiUser3Line />
                                        <span>Account</span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="register.html">Register</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="checkout.html">Checkout</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="login.html">Login</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="wishlist.html" class="cr1-right-bar-item">
                                <IoHeartOutline />
                                <span>Wishlist</span>
                            </a>
                            <a href="javascript:void(0)" class="cr1-right-bar-item Shopping-toggle">
                                <RiShoppingCartLine />
                                <span>Cart</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cr-fix" id="cr-main-menu-desk">
            <div class="container">
                <div class="cr-menu-list">
                    <div class="cr-category-icon-block">
                        <div class="cr-category-menu">
                            <div class="cr-category-toggle">
                              <IoReorderThreeOutline />
                            </div>
                        </div>
                        <div class="cr-cat-dropdown">
                            <div class="cr-cat-block">
                                <div class="cr-cat-tab">
                                    <div class="cr-tab-list nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-home" type="button" role="tab"
                                            aria-controls="v-pills-home" aria-selected="true">
                                            Dairy &amp; Bakery</button>
                                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-profile" type="button" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="false" tabindex="-1">
                                            Fruits &amp; Vegetable</button>
                                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-messages" type="button" role="tab"
                                            aria-controls="v-pills-messages" aria-selected="false" tabindex="-1">
                                            Snack &amp; Spice</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-settings" type="button" role="tab"
                                            aria-controls="v-pills-settings" aria-selected="false" tabindex="-1">
                                            Juice &amp; Drinks </button>
                                        <a class="nav-link" href="shop-left-sidebar.html">
                                            View All </a>
                                    </div>
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                            aria-labelledby="v-pills-home-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Dairy</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Milk</a></li>
                                                        <li><a href="shop-left-sidebar.html">Ice cream</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cheese</a></li>
                                                        <li><a href="shop-left-sidebar.html">Frozen
                                                                custard</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Frozen
                                                                yogurt</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Bakery</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Cake and
                                                                Pastry</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Rusk Toast</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Bread &amp;
                                                                Buns</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Chocolate
                                                                Brownie</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cream Roll</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                            aria-labelledby="v-pills-profile-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Fruits</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Cauliflower</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Bell
                                                                Peppers</a></li>
                                                        <li><a href="shop-left-sidebar.html">Broccoli</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cabbage</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Tomato</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Vegetable</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Cauliflower</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Bell
                                                                Peppers</a></li>
                                                        <li><a href="shop-left-sidebar.html">Broccoli</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cabbage</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Tomato</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                            aria-labelledby="v-pills-messages-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Snacks</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">French
                                                                fries</a></li>
                                                        <li><a href="shop-left-sidebar.html">potato
                                                                chips</a></li>
                                                        <li><a href="shop-left-sidebar.html">Biscuits &amp;
                                                                Cookies</a></li>
                                                        <li><a href="shop-left-sidebar.html">Popcorn</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Rice Cakes</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Spice</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Cinnamon
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cumin
                                                                Powder</a></li>
                                                        <li><a href="shop-left-sidebar.html">Fenugreek
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Pepper
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Long Pepper</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                            aria-labelledby="v-pills-settings-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Juice</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Mango Juice</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Coconut
                                                                Water</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Tetra Pack</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Apple
                                                                Juices</a></li>
                                                        <li><a href="shop-left-sidebar.html">Lychee
                                                                Juice</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">soft drink</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Breizh Cola</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Green Cola</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Jolt Cola</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Mecca Cola</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Topsia Cola</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg">
                        <a href="javascript:void(0)" class="navbar-toggler shadow-none">
                            <i class="ri-menu-3-line"></i>
                        </a>
                        <div class="cr-header-buttons">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="javascript:void(0)">
                                        <i class="ri-user-3-line"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="register.html">Register</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="checkout.html">Checkout</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="login.html">Login</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="wishlist.html" class="cr1-right-bar-item">
                                <i class="ri-heart-line"></i>
                            </a>
                            <a href="javascript:void(0)" class="cr1-right-bar-item Shopping-toggle">
                                <i class="ri-shopping-cart-line"></i>
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Category <IoIosArrowDown />
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="shop-left-sidebar.html">Shop Left
                                                sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="shop-right-sidebar.html">Shop
                                                Right
                                                sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="shop-full-width.html">Full
                                                Width</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Products <IoIosArrowDown />
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="product-left-sidebar.html">product
                                                Left
                                                sidebar </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="product-right-sidebar.html">product
                                                Right
                                                sidebar </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="product-full-width.html">Product
                                                Full
                                                Width
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Pages <IoIosArrowDown />
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="contact-us.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="cart.html">Cart</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="checkout.html">Checkout</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="track-order.html">Track Order</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="wishlist.html">Wishlist</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="faq.html">Faq</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="login.html">Login</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="register.html">Register</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="policy.html">Policy</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Blog <IoIosArrowDown />
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="blog-left-sidebar.html">Left
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-right-sidebar.html">Right
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-full-width.html">Full
                                                Width</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-detail-left-sidebar.html">Detail
                                                Left
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-detail-right-sidebar.html">Detail
                                                Right
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-detail-full-width.html">Detail
                                                Full
                                                Width</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Elements <IoIosArrowDown />
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="elements-products.html">Products</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="elements-typography.html">Typography</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="elements-buttons.html">Buttons</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="cr-calling">
                        <GrPhone />
                        <a href="javascript:void(0)">+123 ( 456 ) ( 7890 )</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
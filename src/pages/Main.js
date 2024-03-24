import React from "react";
import { Link } from "react-router-dom";

const main = () => {
  return (
    <>
      {/* header section start */}
      <div class="header_section">
        <nav class="destop_header navbar navbar-expand-lg navbar-light bg-light">
          <div class="logo"></div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="logo_main" href="index.html">
                  <img src="images/logo.png" />
                </a>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* banner section start */}
      <div class="banner_section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 padding_0">
              <div id="main_slider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="banner_bg">
                      <div class="banner_taital_main">
                        <h1 class="banner_taital">
                          Providing appropritate
                          <br />
                          health care for
                          <br />
                          seniors and childrens
                        </h1>
                        <p class="long_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        {/* <div class="btn_main">
                          <div class="about_us"><a href="#">About Us</a></div>
                          <div class="about_bt"><a href="#">Get Appointment</a></div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="banner_bg">
                      <div class="banner_taital_main">
                        <h1 class="banner_taital">
                          Providing appropritate 1
                          <br />
                          health care for
                          <br />
                          seniors and childrens
                        </h1>
                        <p class="long_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        {/* <div class="btn_main">
                          <div class="about_us">
                            <a href="#">About Us</a>
                          </div>
                          <div class="about_bt">
                            <a href="#">Get Appointment</a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="banner_bg">
                      <div class="banner_taital_main">
                        <h1 class="banner_taital">
                          Providing appropritate 2
                          <br />
                          health care for
                          <br />
                          seniors and childrens
                        </h1>
                        <p class="long_text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        {/* <div class="btn_main">
                          <div class="about_us">
                            <a href="#">About Us</a>
                          </div>
                          <div class="about_bt">
                            <a href="#">Get Appointment</a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#main_slider"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  class="carousel-control-next"
                  href="#main_slider"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6 padding_0">
              <div class="banner_img"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about section start --> */}
      <div class="about_section layout_padding">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="about_taital">
                <h4 class="about_text">About</h4>
                <h1 class="highest_text">The Highest provide health care</h1>
                <p class="lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposedIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                <div class="read_bt"><a href="#">Read More</a></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="image_2" href="#"><img src="images/img-2.png"/></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- care section start --> */}
      <div class="care_section layout_padding">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div class="image_3" href="#"><img src="images/img-3.png"/></div>
            </div>
            <div class="col-md-6">
              <div class="care_taital">
                <h4 class="finest_text">Finest Patient</h4>
                <h1 class="care_text">Care & Amenities</h1>
                <p class="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <div class="read_bt_2"><a href="#">Read More</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- care section end --> */}
      {/* <!-- services section start --> */}
      <div class="services_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="call_box">
                <div class="call_image"><img src="images/call-icon.png"/></div>
                <h2 class="emergency_text">Emergency Cases</h2>
                <h1 class="call_text">1-800-400-5768</h1>
                <p class="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="call_box active">
                <div class="call_image"><img src="images/time-seat-icon.png"/></div>
                <h2 class="emergency_text">Doctors timetable</h2>
                <h1 class="call_text">1-800-400-5768</h1>
                <p class="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="call_box">
                <div class="call_image"><img src="images/watch-icon.png"/></div>
                <h2 class="emergency_text">Opening hours</h2>
                <h1 class="call_text">1-800-400-5768</h1>
                <p class="dolor_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- services section end --> */}
      {/* <!-- doctor section start --> */}
      <div class="doctor_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6 padding_top0">
              <h4 class="about_text">Best Laboratory</h4>
                <h1 class="highest_text">Tests Available</h1>
                <p class="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </p>
                <div class="read_main">
                  <div class="read_bt"><a href="#">Read More</a></div>
                </div>
            </div>
            <div class="col-md-6">
              <div class="image_4"><img src="images/img-4.png"/></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- doctor section end --> */}
      {/* <!-- contact section start --> */}
      <div class="contact_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 class="contact_text">Contact Us</h1>
                <form action="/action_page.php">
                  <div class="form-group">
                    <input type="text" class="email-bt" placeholder="Name" name="Name"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="email-bt" placeholder="Email" name="Email"/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="email-bt" placeholder="Subject" name="Email"/>
                  </div>
                    <div class="form-group">
                      <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="text"></textarea>
                    </div>
                  </form>
                  <div class="main_bt"><a href="#">Send</a></div>
              </div>
            <div class="col-md-6">
              <h1 class="contact_text">What syas our peasant</h1>
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <h2 class="selfideno_text">Selfideno</h2>
                    <div class="client_main">
                      <div class="image_5"><img src="images/img-5.png"/></div>
                      <p class="lorem_ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </p>
                      <div class="quote_icon"><img src="images/quote-icon.png"/></div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <h2 class="selfideno_text">Selfideno</h2>
                    <div class="client_main">
                      <div class="image_5"><img src="images/img-5.png"/></div>
                      <p class="lorem_ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </p>
                      <div class="quote_icon"><img src="images/quote-icon.png"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact section end --> */}
      {/* <!-- appointment section start --> */}
      <div class="appointment_section">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3 class="need_text">Need a doctor for check-Up </h3>
              <h1 class="make_text">Make An Appointment & You're Done </h1>
            </div>
            <div class="col-md-6">
              <div class="appointment_bt_main">
                <div class="appointment_bt"><a href="#">Get Appointment</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- appointment section end --> */}
      {/* <!-- footer section start --> */}
      {/* <!-- info section --> */}
    <div class="info_section layout_padding">
      <div class="container ">
        <div class="info_content">
              <div>
          <div class="row">
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  Medical Care
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Cancer Oncology
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Dental Surgery
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Diagnose & Research
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Drug / Medicines
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  The Services
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Cancer Oncology
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Dental Surgery
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Diagnose & Research
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Drug / Medicines
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex">
                <h5>
                  Departments
                </h5>
              </div>
              <div class="d-flex ">
                <ul>
                  <li>
                    <a href="">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      About Departments
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="ml-3 ml-md-5">
                  <li>
                    <a href="">
                      Cancer Oncology
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Dental Surgery
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Diagnose & Research
                    </a>
                  </li>
                  <li>
                    <a href="">
                      Drug / Medicines
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
          <div class="social-box">
            <a href="">
              <img src="images/fb-icon.png" alt="" />
            </a>

            <a href="">
              <img src="images/twitter-icon.png" alt="" />
            </a>
            <a href="">
              <img src="images/linkedin-icon.png" alt="" />
            </a>
            <a href="">
              <img src="images/instagram-icon.png" alt="" />
            </a>
          </div>
          <div class="form_container mt-5">
            <form action="">
              <label for="subscribeMail">
                Newsletter
              </label>
              <input
                type="email"
                placeholder="Enter Your email"
                id="subscribeMail"
              />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
    {/* <!-- end info section --> */}
    {/* <!-- footer section end --> */}
    {/* <!-- copyright section start --> */}
    <div class="copyright_section">
      <div class="container">
        <p class="copyright">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
      </div>
    </div>

    </>
  );
};

export default main;

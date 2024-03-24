import React from "react";
import { Link } from "react-router-dom";

const main = () => {
  return (
    <>
      {/* <!-- header section start --> */}
      <div class="header_section">
        <nav class="destop_header navbar navbar-expand-lg navbar-light bg-light">
          <div class="logo"></div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="doctor.html">Doctor</a>
              </li>
              <li class="nav-item">
                <a class="logo_main" href="index.html"><img src="images/logo.png"/></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>                       
            </ul>
          </div>
        </nav>
        <nav class="mobile_header navbar navbar-expand-lg navbar-light bg-light">
          <div class="logo"><a href="index.html"><img src="images/logo.png"/></a></div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent2">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="doctor.html">Doctor</a>
              </li>                            
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>                       
            </ul>
          </div>
        </nav>
      </div>
      {/* banner section start */}
      <div className="banner_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 padding_0">
              <div
                id="main_slider"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="banner_bg">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">
                          Providing appropriate
                          <br />
                          health care through
                          <br />
                          Unconventional Homeopathy
                        </h1>
                        <p className="long_text">
                          Homeopathy emphasizes personalized treatment that
                          considers the whole person, not just specific
                          symptoms. With our approach, we aim to provide
                          holistic healthcare solutions tailored to your
                          individual needs.
                        </p>

                        {/* <div className="btn_main">
                    <div className="about_us"><a href="#">About Us</a></div>
                    <div className="about_bt"><a href="#">Get Appointment</a></div>
                  </div> */}
                      </div>
                    </div>
                  </div>
                  {/* Add more carousel items here if needed */}
                </div>
                {/* <a
            className="carousel-control-prev"
            href="#main_slider"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left"></i>
          </a>
          <a
            className="carousel-control-next"
            href="#main_slider"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right"></i>
          </a> */}
              </div>
            </div>
            <div className="col-md-6 padding_0">
              <div className="banner_img"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- about section start --> */}
      <div className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital">
                <h4 className="about_text">About</h4>
                <h1 className="highest_text">
                  Unconventional Homeopathy: Providing the Best Care
                </h1>
                <p className="lorem_text">{/* Your about text goes here */}</p>
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_2" href="#">
                <img src="images/img-2.png" alt="About Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- care section start --> */}
      {/* <!-- care section start --> */}
      <div className="care_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="image_3" href="#">
                <img src="images/img-3.png" alt="Homeopathy Image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="care_taital">
                <h4 className="finest_text">Finest Patient</h4>
                <h1 className="care_text">Holistic Homeopathic Care</h1>
                <p className="ipsum_text">
                  Homeopathy offers a holistic approach to healing, addressing
                  the root cause of ailments while considering individual needs.
                  Our care emphasizes natural remedies and patient-centered
                  treatments to promote overall well-being.
                </p>
                <div className="read_bt_2">
                  <a href="#">Read More</a>
                </div>
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
                <div class="call_image">
                  <img src="images/call-icon.png" />
                </div>
                <h2 class="emergency_text">Emergency Cases</h2>
                <h1 class="call_text">1-800-400-5768</h1>
                <p class="dolor_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="call_box active">
                <div class="call_image">
                  <img src="images/time-seat-icon.png" />
                </div>
                <h2 class="emergency_text">Doctors timetable</h2>
                <h1 class="call_text">1-800-400-5768</h1>
                <p class="dolor_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="call_box">
                <div class="call_image">
                  <img src="images/watch-icon.png" />
                </div>
                <h2 class="emergency_text">Opening hours</h2>
                <h1 class="call_text">1-800-400-5768</h1>
                <p class="dolor_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- services section end --> */}
      {/* <!-- doctor section start --> */}
      {/* <!-- doctor section start --> */}
      <div className="doctor_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 padding_top0">
              <h4 className="about_text">Expert Homeopathic Care</h4>
              <h1 className="highest_text">Specialized Treatments</h1>
              <p className="lorem_text">
                Homeopathy offers specialized treatments tailored to individual
                needs, providing holistic healing and addressing the root cause
                of ailments. Our expert practitioners utilize natural remedies
                and patient-centered approaches to promote overall well-being.
              </p>
              <div className="read_main">
                <div className="read_bt">
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_4">
                <img src="images/img-4.png" alt="Homeopathy Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- contact section start --> */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="contact_text">Contact Us</h1>
              <form action="/action_page.php">
                <div className="form-group">
                  <input
                    type="text"
                    className="email-bt"
                    placeholder="Name"
                    name="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="email-bt"
                    placeholder="Email"
                    name="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="email-bt"
                    placeholder="Subject"
                    name="Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="massage-bt"
                    placeholder="Message"
                    rows="5"
                    id="comment"
                    name="text"
                  ></textarea>
                </div>
              </form>
              <div className="main_bt">
                <a href="#">Send</a>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="contact_text">What Our Patients Say</h1>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h2 className="selfideno_text">Patient 1</h2>
                    <div className="client_main">
                      <div className="image_5">
                        <img src="images/img-5.png" alt="Patient 1" />
                      </div>
                      <p className="lorem_ipsum_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur{" "}
                      </p>
                      <div className="quote_icon">
                        <img src="images/quote-icon.png" alt="Quote Icon" />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <h2 className="selfideno_text">Patient 2</h2>
                    <div className="client_main">
                      <div className="image_5">
                        <img src="images/img-5.png" alt="Patient 2" />
                      </div>
                      <p className="lorem_ipsum_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur{" "}
                      </p>
                      <div className="quote_icon">
                        <img src="images/quote-icon.png" alt="Quote Icon" />
                      </div>
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
                <div class="appointment_bt">
                  <a href="#">Get Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- appointment section end --> */}
      {/* <!-- footer section start --> */}
      {/* <!-- info section --> */}
      <div class="info_section layout_padding">
        <div class="container">
          <div class="info_content">
            <div class="row">
              <div class="col-md-4">
                <div class="d-flex">
                  <h5>Medical Care</h5>
                </div>
                <div class="d-flex">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-4">
              <div class="social-box">
                <a href="#">
                  <img src="images/fb-icon.png" alt="Facebook" />
                </a>
                <a href="#">
                  <img src="images/twitter-icon.png" alt="Twitter" />
                </a>
                <a href="#">
                  <img src="images/linkedin-icon.png" alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src="images/instagram-icon.png" alt="Instagram" />
                </a>
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
          <p class="copyright">
            2020 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free html Templates</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default main;

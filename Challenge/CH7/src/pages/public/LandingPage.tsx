import "./landingpage.css"
const LandingPage = () => {
  return (
    <>
      <header className="sticky-top">
        <nav
          className="navbar navbar-expand-lg padding--all navbar__color"
          aria-label="Offcanvas navbar large"
        >
          <div className="container-fluid px-0">
            <a className="navbar-brand logo-placeholder" href="#hero"></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar2"
              aria-labelledby="offcanvasNavbar2Label"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                  BCR
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end column-gap-lg-3 flex-grow-1">
                  <li className="nav-item navigation me-0">
                    <a className="nav-link text-black" href="#our-services">
                      Our Services
                    </a>
                  </li>
                  <li className="nav-item navigation me-0">
                    <a className="nav-link text-black" href="#why-us">
                      Why Us
                    </a>
                  </li>
                  <li className="nav-item navigation me-0">
                    <a className="nav-link text-black" href="#testimonial">
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item navigation me-0">
                    <a className="nav-link text-black" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item navigation me-0">
                    <a className="btn btn-success" href="#hero">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section id="hero">
        <div className="d-flex flex-column flex-lg-row align-items-center navbar__color row-gap-2 column-gap-lg-5">
          <div className="d-flex flex-column padding--all pe-5">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p style={{textAlign: "justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/cars">
              <button className="btn btn-success">Mulai Sewa Mobil</button>
            </a>
          </div>
          <div className="padding--hero">
            <img
              src="https://i.ibb.co/mvyLpRS/image.png"
              className="img__car"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="our-services">
        <div className="d-flex flex-column row-gap-2 flex-lg-row mt-5 padding--all column-gap-lg-5">
          <div className="d-flex flex-column align-items-center me-lg-5">
            <img
              src="https://i.ibb.co/X81BK1c/image.png"
              className="img__our-services"
              alt=""
            />
          </div>
          <div className="d-flex flex-column row-gap-1 ms-lg-5">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p style={{textAlign: "justify"}}>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="d-flex flex-column row-gap-1">
              <p>
                <span className="me-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p>
                <span className="me-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </span>
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p>
                <span className="me-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </span>
                Sewa Mobil Jangka Panjang Bulanan
              </p>
              <p>
                <span className="me-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </span>
                Gratis Antar - Jemput Mobil di Bandara
              </p>
              <p>
                <span className="me-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#CFD4ED" />
                    <path
                      d="M17.3333 8L9.99996 15.3333L6.66663 12"
                      stroke="#0D28A6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </span>
                Layanan Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="why-us">
        <div className="d-flex flex-column row-gap-2 align-items-center mt-3">
          <h2 className="align-self-lg-start padding--all pb-lg-0">Why us?</h2>
          <p className="align-self-lg-start padding--all pt-lg-0">
            Mengapa harus pilih Binar Car Rental?
          </p>
          <div className="d-flex flex-column flex-lg-row column-gap-lg-4 row-gap-3 padding--all">
            <div className="why-us__box d-flex flex-column row-gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#F9CC00" />
                <path
                  d="M11.8333 24.3333H9.33329C8.89127 24.3333 8.46734 24.1577 8.15478 23.8452C7.84222 23.5326 7.66663 23.1087 7.66663 22.6667V16.8333C7.66663 16.3913 7.84222 15.9674 8.15478 15.6548C8.46734 15.3423 8.89127 15.1667 9.33329 15.1667H11.8333M17.6666 13.5V10.1667C17.6666 9.50362 17.4032 8.86774 16.9344 8.3989C16.4656 7.93006 15.8297 7.66666 15.1666 7.66666L11.8333 15.1667V24.3333H21.2333C21.6352 24.3379 22.0253 24.197 22.3315 23.9367C22.6378 23.6763 22.8397 23.3141 22.9 22.9167L24.05 15.4167C24.0862 15.1778 24.0701 14.9339 24.0027 14.7019C23.9354 14.4698 23.8184 14.2552 23.6598 14.0729C23.5013 13.8906 23.305 13.7449 23.0846 13.646C22.8642 13.5471 22.6249 13.4973 22.3833 13.5H17.6666Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>Mobil Lengkap</h3>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
            <div className="why-us__box d-flex flex-column row-gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FA2C5A" />
                <path
                  d="M23.1583 17.175L17.1833 23.15C17.0285 23.305 16.8447 23.4279 16.6424 23.5118C16.44 23.5956 16.2232 23.6388 16.0041 23.6388C15.7851 23.6388 15.5682 23.5956 15.3659 23.5118C15.1636 23.4279 14.9797 23.305 14.825 23.15L7.66663 16V7.66666H16L23.1583 14.825C23.4687 15.1373 23.6429 15.5597 23.6429 16C23.6429 16.4403 23.4687 16.8627 23.1583 17.175V17.175Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8334 11.8333H11.8417"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>Harga Murah</h3>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
            <div className="why-us__box d-flex flex-column row-gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#0D28A6" />
                <path
                  d="M16 24.3333C20.6023 24.3333 24.3333 20.6024 24.3333 16C24.3333 11.3976 20.6023 7.66666 16 7.66666C11.3976 7.66666 7.66663 11.3976 7.66663 16C7.66663 20.6024 11.3976 24.3333 16 24.3333Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 11V16L19.3333 17.6667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>Layanan 24 Jam</h3>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
            <div className="why-us__box d-flex flex-column row-gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#5CB85F" />
                <path
                  d="M16.0001 18.5C19.2217 18.5 21.8334 15.8883 21.8334 12.6667C21.8334 9.44501 19.2217 6.83334 16.0001 6.83334C12.7784 6.83334 10.1667 9.44501 10.1667 12.6667C10.1667 15.8883 12.7784 18.5 16.0001 18.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.8416 17.575L11.8333 25.1667L15.9999 22.6667L20.1666 25.1667L19.1583 17.5667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>Sopir Profesional</h3>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column padding--all row-gap-2 align-items-center">
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari pelanggan kami</p>
          </div>
          <div
            className="carousels margin--carousel"
            data-flickity='{"wrapAround":true, "pageDots":false}'
          >
            <div className="carousels-cell">
              <div className="d-flex flex-column flex-lg-row column-gap-lg-5 align-items-center carousel__box row-gap-4">
                <div>
                  <img
                    className="img__carousel"
                    src="https://i.ibb.co/zFNJGm7/image.png"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column row-gap-4">
                  <div className="d-flex flex-row align-self-center align-self-lg-start">
                    {/* <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon> */}
                  </div>
                  <p style={{textAlign: "justify"}}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod” <br />
                    <span className="fw-bold">John Dee 32, Bromo</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousels-cell">
              <div className="d-flex flex-column flex-lg-row column-gap-lg-5 align-items-center carousel__box row-gap-4">
                <div>
                  <img
                    className="img__carousel"
                    src="https://i.ibb.co/zFNJGm7/image.png"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column row-gap-4">
                  <div className="d-flex flex-row align-self-center align-self-lg-start">
                    {/* <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon> */}
                  </div>
                  <p style={{textAlign: "justify"}}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod” <br />
                    <span className="fw-bold">John Dee 32, Bromo</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousels-cell">
              <div className="d-flex flex-column flex-lg-row column-gap-lg-5 align-items-center carousel__box row-gap-4">
                <div>
                  <img
                    className="img__carousel"
                    src="https://i.ibb.co/zFNJGm7/image.png"
                    alt=""
                  />
                </div>
                <div className="d-flex flex-column row-gap-4">
                  <div className="d-flex flex-row align-self-center align-self-lg-start">
                    {/* <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon>
                    <ion-icon name="star" style="color: #f9cc00"></ion-icon> */}
                  </div>
                  <p style={{textAlign: "justify"}}>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod” <br />
                    <span className="fw-bold">John Dee 32, Bromo</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cta-banner" className="padding--all">
        <div className="d-flex flex-column align-items-center cta-banner__box m-2 row-gap-3">
          <h2 className="text-white text-center">
            Sewa Mobil di (Lokasimu) Sekarang
          </h2>
          <p className="text-center text-white fw-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button className="btn btn-success">Mulai Sewa Mobil</button>
          </div>
        </div>
      </section>
      <section id="faq">
        <div className="d-flex flex-column flex-lg-row column-gap-lg-5 justify-content-lg-between row-gap-4 padding--all mt-3 mb-lg-5 align-items-center align-items-lg-start">
          <div className="d-flex flex-column row-gap-3 me-lg-5">
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex-grow-1 ms-lg-5">
            <div className="accordion faq__accordion">
              <div className="accordion-item mb-4">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam perferendis ipsum eum, omnis ad numquam vero
                    obcaecati. Nam, officiis laborum.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam perferendis ipsum eum, omnis ad numquam vero
                    obcaecati. Nam, officiis laborum.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam perferendis ipsum eum, omnis ad numquam vero
                    obcaecati. Nam, officiis laborum.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-4">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam perferendis ipsum eum, omnis ad numquam vero
                    obcaecati. Nam, officiis laborum.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam perferendis ipsum eum, omnis ad numquam vero
                    obcaecati. Nam, officiis laborum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="d-flex flex-lg-row justify-content-lg-between flex-column mt-3 padding--all row-gap-3 mt-lg-5">
          <div className="d-flex flex-column">
            <p>
              Jalan Suroyo No. 161 Mayangan Kota <br />
              Probolonggo 672000
            </p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="d-flex flex-column justify-content-between row-gap-3 fw-bolder">
            <a className="nav-link" href="#our-services">
              Our Services
            </a>
            <a className="nav-link" href="#why-us">
              Why Us
            </a>
            <a className="nav-link" href="#testimonial">
              Testimonial
            </a>
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </div>
          <div className="d-flex flex-column">
            <p>Connect with us</p>
            {/* <div className="d-flex flex-row column-gap-3">
              <ion-icon
                name="logo-facebook"
                size="large"
                style="color: #0d28a6"
              ></ion-icon>
              <ion-icon
                name="logo-instagram"
                size="large"
                style="color: #0d28a6"
              ></ion-icon>
              <ion-icon
                name="logo-twitter"
                size="large"
                style="color: #0d28a6"
              ></ion-icon>
              <ion-icon
                name="mail"
                size="large"
                style="color: #0d28a6"
              ></ion-icon>
              <ion-icon
                name="logo-twitch"
                size="large"
                style="color: #0d28a6"
              ></ion-icon>
            </div> */}
          </div>
          <div className="d-flex flex-column row-gap-1">
            <p>Copyright Binar 2022</p>
            <div className="logo-placeholder"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;

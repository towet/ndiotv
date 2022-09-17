import React from 'react';


import './price.css';


  {/* Hello world */}

  const MovieList = () => {
    return (
        <>
  <meta charSet="UTF-8" />
  <title>Pricing Table</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="style.css" />
  <section className='clear-fix'>
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="title">
                <i className="fa fa-paper-plane" aria-hidden="true" />
                <h2>GOLD</h2>
              </div>
              <div className="price">
                <h4>
                  <sup></sup>1500sh
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> 360 camera{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> hd 
                    camera{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> 
                    {" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-times" aria-hidden="true" /> Live
                    Support{" "}
                  </li>
                </ul>
              </div>
              <a href="#">Order Now </a>
            </div>
          </div>
          {/* END Col one */}
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="title">
                <i className="fa fa-plane" aria-hidden="true" />
                <h2>silver</h2>
              </div>
              <div className="price">
                <h4>
                  <sup></sup>900sh
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> 1 user{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> 2cameras
                    Names{" "}
                  </li>
                
                  <li>
                    {" "}
                    <i className="fa fa-times" aria-hidden="true" /> Live
                    Support{" "}
                  </li>
                </ul>
              </div>
              <a href="#">Order Now </a>
            </div>
          </div>
          {/* END Col two */}
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="title">
                <i className="fa fa-rocket" aria-hidden="true" />
                <h2>PLATINUM</h2>
              </div>
              <div className="price">
                <h4>
                  <sup></sup>3000sh
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> Unlimited
                    camera Space{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> hd
                    {" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> 4 users{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> Live
                    Support{" "}
                  </li>
                </ul>
              </div>
              <a href="#">Order Now </a>
            </div>
          </div>
          {/* END Col three */}
        </div>
      </div>
    </div>
  </section>
</>

);
}

export default MovieList;


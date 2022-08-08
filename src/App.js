import './App.css';

function App() {
  return (
    <div className="bg-container">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="heading mt-5">Portfolio</h1>
                    <h1 className="heading1 mt-3 mb-3">Projects I have done</h1>
                </div>
                <div className="col-12 col-md-6">
                    <div className="cardcontainer">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-1-img.png" className="cardimg" alt="img1" />
                        <div className="card1container">
                            <h1 className="card1h">Web design</h1>
                            <h1 className="card1h1">Royal Grand Hotel</h1>
                            <p className="card1para">
                                Royal Grand Hotel is a Simple
                                Static Website. We can use this
                                layout for building the other
                                websites...
                            </p>
                            <a className="card1para1" href="!#">
                                Read More <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="cardcontainer">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-project-2-img.png" className="cardimg" alt="img2" />
                        <div className="card1container">
                            <h1 className="card1h">Web design</h1>
                            <h1 className="card1h1">Royal Grand Hotel</h1>
                            <p className="card1para">
                                Royal Grand Hotel is a Simple
                                Static Website. We can use this
                                layout for building the other
                                websites...
                            </p>
                            <a className="card1para1" href="!#">
                                Read More <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

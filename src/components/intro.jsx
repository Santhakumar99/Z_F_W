export const Introduction = (props) => {
    return (
      <div id="intro">
        <div className="container">
          <div className="row">
            {/* <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/food-waste-img1.jpg" className="img-responsive" alt="" />{" "}
            </div> */}
            <div className="col-xs-12 col-md-12">
                        <div className="about-text">
                        <h2>Introduction</h2>
                {/* <h2>{props.data ? props.data.title:"" }</h2> */}
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                {/* <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
import React from "react";


var listOfImages =[];
function importAll(r) {
  return r.keys().map(r);
}
function componentWillMount() {
  listOfImages = importAll(require.context('../assets/img/svg/language-logo/', false, /\.(png|jpe?g|svg)$/));
}
function AllSvgLogo(){
    componentWillMount();
    return(
      <div id="SvgLogo" className="d-flex flex-wrap justify-content-center">
          {
            listOfImages.map(
              (image, index) =>    <img className="col-1" key={index} src={image}/>
            )
          }
      </div>
    )

  }
export default AllSvgLogo
import "./App.css";

function Dog() {
  fetch("https://dog.ceo/api/breeds/list/all").then((res) => {
    console.log(res);
  });

  function getDogImage() {
    // let url = "https://dog.ceo/api/breed" + select + "/images/random";
  }
  return <></>;
}

export default Dog;

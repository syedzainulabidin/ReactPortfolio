import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
// import Card from "./components/card";
import Header from "./components/Header";
import Menubar from "./components/menuBar";
import ModelBox from "./components/modalBox";
import Faq from "./components/faq";
import { product } from "./components/productData";
import {
  faCartArrowDown,
  faCartFlatbed,
  faCartShopping,
  faDollar,
  faEdit,
  faFileEdit,
  faHome,
  faL,
  faShoppingBag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import Footer from "./components/footer";
import btn from "./button.module.css";
function App() {
  let sendProps = {
    brand: "XENON",
    contact: +923452570478,
  };

  let [pstatus, pSetStatus] = useState(false);
  let [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="main">
      {/* <Header data={sendProps}>
        <h1>Thank you</h1>
      </Header> */}
      <Menubar>
        <button
          className="bg-purple-600 p-3 rounded-full"
          onClick={() => {
            setModalStatus(true);
          }}
        >
          Enquire Now
        </button>
      </Menubar>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {product.map((v, i) => {
          return (
            <Card
              data={v}
              key={i}
              icons={<FontAwesomeIcon icon={faDollar} />}
            />
          );
        })}
      </div>
      <div className="w-full flex justify-center p-6">
        <input type={pstatus ? "text" : "password"} />
        <button
          className={`${btn.simple}`}
          onClick={() => {
            pSetStatus(!pstatus);
          }}
        >
          {pstatus ? "HIDE" : "SHOW"}
        </button>
      </div>
      {!modalStatus ? (
        ""
      ) : (
        <ModelBox>
          <button
            className="absolute right-0 rounded-full mx-1 p-2 bg-purple-700"
            onClick={() => {
              setModalStatus(false);
            }}
          >
            &#10006;
          </button>
        </ModelBox>
      )}
      <Faq>
        <h1>Frequently Asked Question</h1>
      </Faq>
    </div>
  );
}

export default App;

let Card = ({ data, icons }) => {
  let temp = "";
  const [desc, setDesc] = useState(data.description);
  const [review, setReview] = useState(false);
  let buyNow = () => {
    alert(data.availabilityStatus);
  };
  let price = (val) => {
    alert("Price is " + val);
  };
  let changeData = () => {
    setDesc(prompt("Enter new Description"));
  };

  if (review) {
    temp = (
      <div className="w-full bg-slate-900 text-slate-400 h-full absolute z-10 top-0 p-6">
        <span className="flex flex-col items-center">
          <h1 className="text-center font-bold text-[20px]">REVIEWS</h1>
          <ul>
            <li>
              <span className="font-bold">Rating: </span>
              {data.reviews[0].rating}
            </li>
            <li>
              <span className="font-bold">Comments: </span>
              {data.reviews[0].comment}
            </li>
            <li>
              <span className="font-bold">Date: </span>
              {data.reviews[0].date}
            </li>
            <li>
              <span className="font-bold">Reviewed By: </span>
              {data.reviews[0].reviewerName}
            </li>
            <li>
              <span className="font-bold">Reviewer Email: </span>
              {data.reviews[0].reviewerEmail}
            </li>
          </ul>
          <button
            className="mt-6 bg-red-700 w-fit p-2 rounded-md font-bold text-sm"
            onClick={() => {
              setReview(!review);
            }}
          >
            HIDE REVIEWS
          </button>
        </span>
      </div>
    );
  } else {
    temp = "";
  }

  return (
    <div className="card relative">
      <img className="image" src={data.thumbnail} />
      <div className="content">
        <a href="#">
          <span className="title">{data.title}</span>
        </a>

        <p className="desc">{desc}</p>

        <a className="action mr-2" href="#" onClick={buyNow}>
          BUY NOW
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <p
          className={`action cursor-pointer ${btn.error}`}
          href="#"
          onClick={() => {
            price(data.price);
          }}
        >
          {data.price}
          {icons}
        </p>
        <br />
        <p
          className={`action cursor-pointer ${btn.warning}`}
          href="#"
          onClick={() => {
            setReview(true);
          }}
        >
          Reviews
          <FontAwesomeIcon icon={faStar} />
        </p>
        <p className="action cursor-pointer" href="#" onClick={changeData}>
          Change Description
          <FontAwesomeIcon icon={faFileEdit} />
        </p>
      </div>
      {temp}
    </div>
  );
};

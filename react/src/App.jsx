import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BtnPrimary from "./components/BtnPrimary";
import Card from "./components/Card";
import Users from "./components/user";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  // ! first
  // const [a, setA] = useState(0);
  // ! second
  // let formSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(inputChange);
  //   setinputChange("");
  // };

  // const [inputChange, setinputChange] = useState("");

  // ! fourth

  // const [data, setData] = useState([]);

  // let getData = async () => {
  //   let response = await axios.get("https://picsum.photos/v2/list");
  //   console.log(response.data);
  //   setData(response.data);
  // };

  return (
    // ! first
    // <div className="flex flex-col items-center justify-center gap-3">
    //   <h1 className="text-5xl">Counter <span className="font-bold">{a}</span></h1>
    //   <div className="flex gap-4">
    //     <button className="p-3 rounded bg-gray-900"
    //       onClick={() => {
    //         setA(a + 1);
    //       }}
    //     >
    //       INCREMENT
    //     </button>
    //     <button className="p-3 rounded bg-gray-900"
    //       onClick={() => {
    //         setA(a - 1);
    //       }}
    //     >
    //       DECREMENT
    //     </button>
    //   </div>
    // </div>

    // ! second
    // <div className="flex flex-col items-center justify-center gap-3">
    //   <form
    //     className="flex flex-col gap-2"
    //     onSubmit={(e) => {
    //       formSubmit(e);
    //     }}
    //   >
    //     <h1 className="text-4xl font-bold uppercase italic">
    //       Form <span className="text-gray-600">Handling</span>
    //     </h1>
    //     <input
    //       type="text"
    //       name="name"
    //       value={inputChange}
    //       className="bg-gray-950 p-3 rounded outline-0"
    //       placeholder="Enter name"
    //       onChange={(e) => {
    //         setinputChange(e.target.value);
    //       }}
    //     />
    //     <button className="bg-green-950 p-3 rounded">Submit</button>
    //   </form>
    // </div>
    // ! third
    // <>
    //   <Header />
    //   <div className="content">
    //     <div className="flex flex-wrap w-full gap-3 p-4">
    //       {Users.map((e, k) => {
    //         return (
    //           <Card key={k}
    //             name={e.Name}
    //             picture={e.Picture}
    //             age={e.Age}
    //             city={e.City}
    //           />
    //         );
    //       })}
    //     </div>
    //     {/* <BtnPrimary value="Content" /> */}
    //   </div>
    //   <Footer />
    // </>

    // ! Fourth
    // <>
    //   <div className="p-10 w-full">
    //     <button
    //       onClick={getData}
    //       className={`bg-emerald-900 px-5 py-2 rounded active:scale-50`}
    //     >
    //       Get Data
    //     </button>
    //     {data.map((el, k) => {
    //       return (
    //         <div className="p-5 mt-5 bg-emerald-950 rounded-2xl w-full flex items-center justify-between">
    //           <img key={k} className="w-80 rounded" src={el.download_url} alt="" />
    //           <h1 className="font-bold text-2xl">{el.author}</h1>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>

    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default App;

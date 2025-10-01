import React, { useState } from "react";
import { data } from "./faqData";
export default function faq() {
  return (
    <div className="w-full bg-neutral-900 text-white">
      <h1 className="font-bold text-3xl text-center">
        Frequently Asked Questions
      </h1>
      <div>
        <ul className="flex flex-col p-5">
          {data.map((v) => {
            let [faqStatus, setFaqStatus] = useState(false);
            return (
              <li className="flex justify-between place-items-center">
                <span className="flex flex-col relative overflow-hidden w-full">
                  <span className="cursor-pointer w-full" onClick={()=>{setFaqStatus(!faqStatus)}}>{v.question}</span>
                  <span className={`text-yellow-400 ${faqStatus ? 'static z-10' : 'absolute -z-10'}`}>{v.answer}</span>
                </span>
                <span>{faqStatus ? '-' : '+'}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
// import React, { useState } from "react";
// import { data } from "./faqData";
// export default function faq() {
//   return (
//     <div className="w-full bg-neutral-900 text-white">
//       <h1 className="font-bold text-3xl text-center">
//         Frequently Asked Questions
//       </h1>
//       {data.map((v, i) => {
//         let [faqStatus, setFaqStatus] = useState(false);
//         return (
//           <div>
//             <ul className="w-full py-[22px] relative overflow-hidden px-10 ">
//               <li
//                 className="cursor-pointer absolutetop-0 w-full flex justify-between"
//                 onClick={() => {
//                   setFaqStatus(!faqStatus);
//                 }}
//               >
//                 <span>Q. {v.question}</span>
//                 <span className="text-2xl">{faqStatus?"-":"+"}</span>
//               </li>
//               <li className={`absolute text-yellow-400 ${faqStatus ? `top-15` : `-top-full`}`}>
//                 A. {v.answer}
//               </li>
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

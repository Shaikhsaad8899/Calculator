import React, { useState } from "react";
import ReactDOM from "react-dom";
import { TextField } from "@mui/material";

// import "./styles.css";
import "./common.css";

export const ReactCalculator = () => {
  /* eslint no-eval: 0 */

  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="wrapper">
      {" "}
      <div className="show-input">
        <input className="inputbox" type="text" name="" id="" value={input} />
        <br />
      </div>
      <div className="digits flex">{calcBtns}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={(e) => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={(e) => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button onClick={(e) => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>
        {/* "=" btn */}
        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// import React, { useState } from "react";
// // import ReactDOM from "react-dom";
// import "./calcy.css";
// export const ReactCalculator = () => {
//   const [data, setData] = useState("");
//   const calcBtns = [];
//   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
//     calcBtns.push(
//       <button
//         onClick={(e) => {
//           setData(data + e.target.value);
//         }}
//         value={item}
//         key={item}
//       >
//         {item}
//       </button>
//     );
//   });
//   return (
//     <div className="wrapper">
//       <div className="show-input">{data}</div>
//       <div className="show-input">{calcBtns}</div>;
//       <div className="modifiers subgrid">
//         <button onClick={() => setData(data.substring(0, data.length - 1))}>
//           Clear
//         </button>
//         <button onClick={() => setData("")}>AC</button>
//         <div className="operations subgrid">
//           <Button onClick={(e) => setData(data + e.target.value)} value="+">
//             +
//           </button>
//           <button onClick={(e) => setData(data + e.target.value)} value="+">
//             -
//           </button>
//           <button onClick={(e) => setData(data + e.target.value)} value="*">
//             *
//           </button>
//           <button onClick={(e) => setData(data + e.target.value)} value="/">
//             /
//           </button>
//           <button
//             onClick={(e) => {
//               try {
//                 setData(
//                   String(eval(data)).length > 3 &&
//                     String(eval(data)).includes(".")
//                     ? String(eval(data).toFixed(4))
//                     : String(eval(data))
//                 );
//               } catch (err) {
//                 console.log(err);
//               }
//             }}
//             value="="
//           >=</button>
//         </div>
//       </div>
//     </div>
//   );
// };

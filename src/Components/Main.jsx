import { useState, useEffect } from "react";
import { menu, allCategory } from "./data";
import Article from "./Article";
import Select from "./Select";
let arr;
export default function Main() {
  let [data, setData] = useState([]);
  let [val, setValue] = useState("");
  let [index, setIndex] = useState(0);
  useEffect(() => {
    arr = [...menu];
    setData(arr);
  }, []);
  function btnClc(category, ind) {
    console.log(category);
    setValue("");
    setIndex(ind);
    if (category === "all") {
      setData(arr);
      return;
    }
    let newArr = arr.filter((i) => i.category === category);
    setData(newArr);
  }
  function filter(e) {
    let q = e.target.value;
    setValue(q);
    if (q === "rating") {
      let newArr = [...data];
      newArr.sort((b, a) => a.rating - b.rating);
      setData(newArr);
    } else if (q === "htl") {
      let newArr = [...data];
      newArr.sort((b, a) => a.price - b.price);
      setData(newArr);
    } else if (q === "lth") {
      let newArr = [...data];
      newArr.sort((a, b) => a.price - b.price);
      setData(newArr);
    }
  }
  return (
    <>
      <h1>Our Menu</h1>
      <hr id="menu-hr" />
      <div id="btns">
        {allCategory.map((i, ind) => (
          <button
            onClick={() => btnClc(i, ind)}
            key={ind}
            className={`${ind === index && "btn"}`}
          >
            {i}
          </button>
        ))}
      </div>
      <Select filter={filter} val={val} />
      <section id="menu-section">
        {data.map((i) => (
          <Article {...i} />
        ))}
      </section>
    </>
  );
}

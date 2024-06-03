import React, { useEffect, useState } from "react";
import "./InfiniteScroll.css";

export default function InfiniteScroll() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    // handleScroll function to scroll the page of window related to its height
    const handleScroll = (e) => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setCount((prevCount) => prevCount + 10);
      }
    };
    window.addEventListener("scroll", handleScroll); // adding event listen to use useEffect on scroll by a function
    return () => {
      window.removeEventListener("scroll", handleScroll); // returning a call back function for cleanup, so that it will stop infinte loop of the scroll untill needed
    };
  }, []);

  //   creating a loop over element
  let element = [];
  for (let i = 0; i < count; i++) {
    element.push(
      <div id="card" key={i}>
        {i + 1}
      </div>
    );
  }

  //   console.log(count);  // check console to see the number of counting increasing
  return <div className="infinite-scroll">{element}</div>;
}

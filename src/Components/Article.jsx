import React from "react";

export default function Article({ id, img, title, price, desc, rating }) {
  return (
    <article key={id}>
      <img src={img} alt="img" />
      <div>
        <h2>
          {title}
          <span>$ {price}</span>
        </h2>
        <hr />
        <p>{desc}</p>
        <p>
          <i className="fa fa-star"></i> {rating}
        </p>
      </div>
    </article>
  );
}

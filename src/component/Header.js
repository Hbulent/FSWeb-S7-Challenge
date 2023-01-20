import React from "react";
import Store from "./Store";
import "./Header.css";

const fakeStores = [
  {
    image:
      "https://cdn.eleman.net/images/ozel_ilan_resimleri/409330/mcdonaldslogo.png",
    restaurant: "McDonald's",
    explanation: "$ - American - Fast Food - Burger",
    preptime: "20-30 Min",
    cost: "$5.99 Delivery Free ",
  },
  {
    image:
      "https://www.specialtyfood.com/media/uploads/articles/sweetgreen-salmon.jpg.370x370_q85.jpg",
    restaurant: "Sweetgreen",
    explanation: "$ - Healthy - Salads",
    preptime: "30-45 Min",
    cost: "$3.99 Delivery Free ",
  },
  {
    image:
      "https://www.atlantisavm.com.tr/wp-content/uploads/2019/04/starbucks.gif",
    restaurant: "Starbucks",
    explanation: "$ - Cafe - Coffee and Tea ",
    preptime: "10-20 Min",
    cost: "$2.99 Delivery Free ",
  },
];

export default function Header() {
  return (
    <div className="home">
      <div className="pizza">
        <img
          src="https://www.arcadium.com.tr/Blog/wp-content/uploads/2018/02/pizza-1132x670.jpg"
          alt="pizza"
          className="pizzaImg"
        />
      </div>
      <div className="stores">
        {fakeStores.map((event) => (
          <Store fakeStores={event} />
        ))}
      </div>
    </div>
  );
}

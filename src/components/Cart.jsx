import React from "react";
import { FaRupeeSign } from "react-icons/fa";

import "./cart.css";
export default function Cart() {
  return (
    <div className="cart">
      <div className="cartCard ">
        <img
          className="cartImg"
          src="https://rukminim2.flixcart.com/image/832/832/xif0q/security-software/e/w/h/-original-imagtvhkjmjf5tzm.jpeg?q=70"
          alt="apple img"
        />
        <p className="text">
          Protect your PCs and laptops against keyloggers, adware, spyware and
          riskware with the Quick Heal AntiVirus Pro software. It comes with
          features such as Web Security, Anti-Keylogger, Ransomware Protection
          and Email Security to keep your systems free of malicious malware and
          spyware.
        </p>
        <div className="contentCard">
          <p className="price">Price</p>

          <p className="cost">
            {" "}
            <FaRupeeSign /> 150
          </p>
        </div>
        <a
          className="cartLink"
          href="https://www.flipkart.com/quick-heal-anti-virus-1-user-year/p/itmfe763a3cf54ea?pid=SECFC8CDCPBFVHZT&lid=LSTSECFC8CDCPBFVHZTEF5KJB&marketplace=FLIPKART&store=6bo%2F5hp%2Flwb&srno=b_1_1&otracker=browse&fm=organic&iid=en_oRnWS5fsvgJ8fkQHbWp4RGR9SG8ouGukv-FYXQcBuKBFuocTv0nadWNuoS44evEkCyV-RmyQ5EZmUmPCz8R0mA%3D%3D&ppt=hp&ppn=homepage&ssid=7rwx7l3yswf6ap6o1700123775860"
        >
          {" "}
          Buy now
        </a>
      </div>

      {/* Cart 2 */}
      <div className="cartCard ">
        <img
          className="cartImg"
          src="https://rukminim2.flixcart.com/image/832/832/xif0q/car-pressure-washer/j/i/m/by-starq-q3-a-2100w-210bar-high-qpt-original-imagh7cbagbfpu3n.jpeg?q=70"
          alt="Invertor"
        />
        <p className="text">
          The pressure washer by STARQ has an ergonomic design that puts user
          convenience and comfort first. With a smartly designed body,
          comfortable grip, and simple controls, the unit is easy to handle
          while performing cleaning duties
        </p>
        <div className="contentCard">
          <p className="price">Price</p>

          <p className="cost">
            {" "}
            <FaRupeeSign /> 2000
          </p>
        </div>
        <a className="cartLink" href="">
          {" "}
          Buy now
        </a>
      </div>

      {/* Cart 3 */}
      <div className="cartCard ">
        <img
          className="cartImg"
          src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
          alt="apple img"
        />
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias beatae
          in modi blanditiis labore explicabo, ad deserunt placeat laudantium
          praesentium molestiae nisi veniam illum quis voluptatem expedita
          corrupti vitae assumenda.
        </p>
        <div className="contentCard">
          <p className="price">Price</p>

          <p className="cost">
            {" "}
            <FaRupeeSign /> 2000
          </p>
        </div>
        <a className="cartLink" href="">
          {" "}
          Buy now
        </a>
      </div>

      {/* cart 4 */}

      <div className="cartCard ">
        <img
          className="cartImg"
          src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
          alt="apple img"
        />
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias beatae
          in modi blanditiis labore explicabo, ad deserunt placeat laudantium
          praesentium molestiae nisi veniam illum quis voluptatem expedita
          corrupti vitae assumenda.
        </p>
        <div className="contentCard">
          <p className="price">Price</p>

          <p className="cost">
            {" "}
            <FaRupeeSign /> 2000
          </p>
        </div>
        <a className="cartLink" href="">
          {" "}
          Buy now
        </a>
      </div>

      {/* cart 5 */}

      <div className="cartCard ">
        <img
          className="cartImg"
          src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
          alt="apple img"
        />
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias beatae
          in modi blanditiis labore explicabo, ad deserunt placeat laudantium
          praesentium molestiae nisi veniam illum quis voluptatem expedita
          corrupti vitae assumenda.
        </p>
        <div className="contentCard">
          <p className="price">Price</p>

          <p className="cost">
            {" "}
            <FaRupeeSign /> 2000
          </p>
        </div>
        <a className="cartLink" href="">
          {" "}
          Buy now
        </a>
      </div>

      {/* cart 6 */}

      <div className="cartCard ">
        <img
          className="cartImg"
          src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg"
          alt="apple img"
        />
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias beatae
          in modi blanditiis labore explicabo, ad deserunt placeat laudantium
          praesentium molestiae nisi veniam illum quis voluptatem expedita
          corrupti vitae assumenda.
        </p>
        <div className="contentCard">
          <p className="price">Price</p>

          <p className="cost">
            {" "}
            <FaRupeeSign /> 2000
          </p>
        </div>
        <a className="cartLink" href="">
          {" "}
          Buy now
        </a>
      </div>
    </div>
  );
}

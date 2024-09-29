import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [orderList, setOrderList] = useState([]);
  const { token, url } = useContext(StoreContext);
  const fetchOrderList = async () => {
    const res = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    if (res.data.success) {
      setOrderList(res.data.data);
    } else {
      alert(res.data.message);
    }
  };
  useEffect(() => {
    if (token) {
      fetchOrderList();
    }
  }, [token]);
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {orderList.map((order) => (
          <div key={order._id} className="my-orders-order">
            <img src={assets.parcel_icon} alt="" />
            <p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ", ";
                }
              })}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf; </span> <b>{order.status}</b>
            </p>
            <button onClick={fetchOrderList}>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;

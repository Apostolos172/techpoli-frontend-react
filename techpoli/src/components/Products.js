import React from "react";
import Product from "./Product-card";

import classes from "./Products.module.css";

const products = [
  {
    id: "p1",
    name: "Lenovo V130-15igm, N4000/15.6 Hd/4gb/1tb Hdd/webcam/free Dos, Iron Grey",
    price: "279.77",
    oem: "LENOVO",
    image: "https://cmsassets.public.gr/mrk/202005/81HL002DRI.mainImage.png",
    url: "#",
  },
  {
    id: "p2",
    name: 'Εσωτερικός σκληρός δίσκος Intenso 4TB 3,5" SATA III',
    price: "160.90",
    oem: "INTENSO",
    image:
      "https://external.webstorage.gr/Product-Images/1205034/internal-hdd-intenso-400-1205034.jpg",
    url: "#",
  },
  {
    id: "p3",
    name: "Mousepad Fellowes Economy Red (29701) Κόκκινο",
    price: "1.98",
    oem: "FELLOWES",
    image: "https://external.webstorage.gr/ProductImages/0656302/mousepad-fellowes-29701-red-400-0656302.jpg",
    url: "#",
  },
  {
    id: "p4",
    name: "Huawei Nova 5T 128GB Dual Sim Smartphone - Black",
    price: "429.00",
    oem: "HUAWEI",
    image: "https://external.webstorage.gr/Product-Images/1433067/nova-5t-black-middle-1000-1433067.jpg",
    url: "#",
  },
  {
    id: "p5",
    name: "USB Stick SanDisk Cruzer Glide 32GB 3.0 SDCZ600-032G-G35 Μαύρο ",
    price: "7.99",
    oem: "SANDISK",
    image: "https://external.webstorage.gr/Product-Images/1241373/sandisk-cruzer-glide-400-1241373.jpg",
    url: "#",
  },
];

const Products = (props) => {
  const productsList = products.map((product) => {
    return (
      <Product
        id={product.id}
        name={product.name}
        price={product.price}
        oem={product.oem}
        image={product.image}
        url={product.url}
      ></Product>
    );
  });

  return <div className={classes.main}>{productsList}</div>;
};

export default Products;

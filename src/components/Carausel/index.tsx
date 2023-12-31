import React, {  useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import { useSelector,useDispatch } from "react-redux";
import { ProductCard } from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { fetchSingleProduct } from "../../redux/action";

interface Props{
    start?: number,
    end?:number
}

export const Carausel: React.FC<Props> = ({start,end}) => {
  const [allProductsData, setAllProductsData] = useState([]);
  const { allProducts, loading, error } = useSelector((state: any) => state);

  const navigate= useNavigate()
  const dispatch= useDispatch()

  useEffect(() => {
    if (!loading && !error && allProducts) {
      setAllProductsData(allProducts);
    }
  }, [allProducts, loading, error]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick=(data:any)=>{

    const sku= data.sku

    dispatch(fetchSingleProduct(sku))

   localStorage.setItem("productTitle",data.name)
   
 navigate("/productDetail")
    
  }

  return (
    <div>
     
      <Slider {...settings}>
        {allProductsData.slice(start,end).map((data: any) => {
          return (
            <div onClick={()=>handleClick(data)}>
              <ProductCard   name={data.name} brand={data.manufacturer.name} price={data.pricing.customerPrice.unitPrice.value} imgUrl={data.leadImage.id} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

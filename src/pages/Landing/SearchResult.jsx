import React, { useState } from "react";
import filter from "../../assets/icons/filtterr.png";
import img1card from "../../assets/images/merchants/merchantrec.png";
import { Button, CardActions, Fab, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PushPinIcon from "@mui/icons-material/PushPin";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FaLock } from "react-icons/fa";
import { GoPin } from "react-icons/go";

function SearchResult() {
  const [iconColor, setIconColor] = useState("inherit");
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (id) => {
    if (clickedCards.includes(id)) {
      setClickedCards(clickedCards.filter((item) => item !== id));
    } else {
      setClickedCards([...clickedCards, id]);
    }
  };
  const cardsData = [
    {
      id: 1,
      name: "Service Provider Name 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 2,
      name: "Service Provider Name 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 3,
      name: "Service Provider Name 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 4,
      name: "Service Provider Name 4",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 5,
      name: "Service Provider Name 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 6,
      name: "Service Provider Name 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 7,
      name: "Service Provider Name 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 8,
      name: "Service Provider Name 4",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 9,
      name: "Service Provider Name 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 10,
      name: "Service Provider Name 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 11,
      name: "Service Provider Name 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
    {
      id: 12,
      name: "Service Provider Name 4",
      description:
        "Lorem ipsum dolor sit amet consectetur. Iaculis donec id et felis morbi neque. Aliquet scelerisque leo lacus et diam congue rhoncus.",
      image: img1card,
    },
  ];

  return (
    <div className=" font-poppins">
  
      <header>
        <h3 className=" text-center  text-[1.6rem] py-4">
          Result for <strong>“Board Pins”</strong>
        </h3>
        <div className=" flex justify-center item-center gap-6  text-[1.2rem] text-[#555050] px-12">
          <span>@Related: </span>
          <span>Bussiness</span>
          <span>Board</span>
          <span>Related topic 3</span>
          <span>Related topic 3</span>
        </div>
        <div className=" grid mt-12  w-full lg:grid-cols-3 lg:px-24 ">
          <div className=" flex   items-center   col-span-1 bg">
            <div className=" bg-white p-2 py-3 rounded-xl">
              <select className="block  outline-0  px-5 rounded-xl">
                <option value="Popular ">Popular</option>
                <option value="month">Lastseen</option>
                <option value="year">Last view</option>
              </select>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-4 col-span-1  ">
            <span className=" rounded-[12px] border border-[#6161FF] text-[#6161FF] px-4 ">
              All
            </span>
            <span className=" rounded-[12px] border flex items-center gap-1 text-[#8C8585] px-4  ">
            <FaLock />
              Factories
            </span>
            <span className=" rounded-[12px] border flex items-center gap-1  text-[#8C8585] px-4  ">
            <FaLock />
              Agencies Legal
            </span>
          
          </div>
          <div className=" flex justify-end  ">
            <Button>
              <img src={filter} className="w-[100%]" />
              Filters
            </Button>
          </div>
        </div>
      </header>
      <section className="  relative">
        <div className="  absolute from-transparent via-gray-300 top-[40%] to-gray-400 backdrop-blur-sm md:h-[80vh]  md:bottom-0  bottom-0 w-full z-20"></div>
        <div className="  absolute w-full z-50 top-[60%] justify-center flex items-center">
          <div className=" block">
            <p className=" text-[2.4rem] font-semibold  opacity-75 text-center px-5">
              To be able to unlock more results, <br /> you have to signup free
              now
            </p>

            <div className="py-5 w-full flex justify-center">
              <button className=" bg-[#6161FF] rounded-[25px] font-[400] text-white py-3  px-10 text-center">
                {" "}
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-4  px-6 md:px-24 py-12 gap-4 ">
          {cardsData.map((card) => (
            <div key={card.id} className="flex justify-center">
              <Card
                sx={{
                    borderRadius:"15px",
                  maxWidth: 345,
                  boxShadow: "0px 8.93px 12.79px 0px rgba(0, 0, 0, 0.10)",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {}
                      {card.description.slice(0,80)}
                    </Typography>
                    <CardActions>
                      <div className=" w-full  text-[.7rem] flex  items-center text-gray-600">
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          sx={{ fontSize: "1.4rem" }}
                          readOnly
                        />
                        4.7 (150 Reviews)
                      </div>
                    </CardActions>
                    <div className=" grid grid-cols-2 gap-4">
                      <div className=" flex gap-3 items-center text-sm">
                        <span className=" border border-[#6161FF] text-[#6161FF] px-2 rounded-xl">Bussiness</span>
                        <span className=" border border-[#6161FF] text-[#6161FF] px-2 rounded-xl">Tag2</span>
                      </div>
                      <div className=" justify-end flex p-3  pt-0">
                        <Fab
                          aria-label="like"
                          style={{
                            backgroundColor: "#F1F1F1",
                            width: "35px", // Set the width as needed
                            height: "30px", // Set the height as needed
                           boxShadow:"none",
                            zIndex: 4,
                          }}
                          onClick={() => handleClick(card.id)}
                        >
                          <GoPin 
                            style={{
                              color: clickedCards.includes(card.id)
                                ? "blue"
                                : "inherit",
                               
                            }}
                          />
                        </Fab>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </section>
    
    </div>
  );
}

export default SearchResult;

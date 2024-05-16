"use client";
import Image from "next/image";
import React, { useState,useEffect, useCallback } from "react";
import { FaShop } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { MdOutlineTextsms } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineTruck } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShareFatThin } from "react-icons/pi";
import { MdCompareArrows } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { IoIosShareAlt } from "react-icons/io";
import { TiTick } from "react-icons/ti";
  import { AiOutlinePlus } from "react-icons/ai";
import { FaMinus } from "react-icons/fa6";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { IoStarSharp } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
// import FontAwesome from 'react-fontawesome'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import * as Slider from '@radix-ui/react-slider';
import {useDropzone} from 'react-dropzone'
import { log } from "console";

 

const Page = () => {
    const [icon1, setIcon1] = useState(false);
    const [icon2, setIcon2] = useState(false);
    const [icon3, setIcon3] = useState(false);
  const[content1,setContent1]=useState(false);
  const[content2,setContent2]=useState(false);
  const[content3,setContent3]=useState(false);
  const[content4,setContent4]=useState(false);
  const[content5,setContent5]=useState(false);
  const[content6,setContent6]=useState(false);
  const[content7,setContent7]=useState(false);
  const[content8,setContent8]=useState(false);
  
 
  const [starWidth, setStarWidth] = useState('0%');

  // useEffect(() => {
  //   const starPercentageRounded = `${50}%`;
  //   setStarWidth(starPercentageRounded);
  // }, []);

  //  const starPercentageRounded = `${50}%`;
  // const star = document.getElementsByClassName('.stars-inner')
  // // .style.width = starPercentageRounded;
  // console.log('====================================');
  // console.log(star[0]);
  // console.log('====================================');

  const[view,setView]=useState(false);

  const handleView=()=>{
    setView(!view)
  }

  const[color1,setColor1]=useState(false);
 
  const[color2,setColor2]=useState(false);
  const[color3,setColor3]=useState(false);
  const[color4,setColor4]=useState(false);
  const[color5,setColor5]=useState(false);
  const[color6,setColor6]=useState(false);
  const[color7,setColor7]=useState(false);
 

  const handleColorLike1 = () => {
    setColor1(!color1); 
  };
  const handleColorLike2 = () => {
    setColor2(!color2); 
  };
  const handleColorLike3 = () => {
    setColor3(!color3); 
  };
  const handleColorLike4 = () => {
    setColor4(!color4); 
  };
  const handleColorLike5 = () => {
    setColor5(!color5); 
  };
  const handleColorLike6 = () => {
    setColor6(!color6); 
  };
  const handleColorLike7 = () => {
    setColor7(!color7); 
  };

  const[color11,setColor11]=useState(false);
 
  const[color12,setColor12]=useState(false);
  const[color13,setColor13]=useState(false);
  const[color14,setColor14]=useState(false);
  const[color15,setColor15]=useState(false);
  const[color16,setColor16]=useState(false);
  const[color17,setColor17]=useState(false);

  const handleColorLike11 = () => {
    setColor11(!color11); 
  };
  const handleColorLike12 = () => {
    setColor12(!color12); 
  };
  const handleColorLike13 = () => {
    setColor13(!color13); 
  };
  const handleColorLike14 = () => {
    setColor14(!color14); 
  };
  const handleColorLike15 = () => {
    setColor15(!color15); 
  };
  const handleColorLike16 = () => {
    setColor16(!color16); 
  };
  const handleColorLike17 = () => {
    setColor17(!color17); 
  };
 
  // const handleColorDislike1 = () => {
  //   setColor2('rgb(9,157,189)'); 
  // };

  
//<button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}></button>

  
  // const [value, setValue] = useState(70); 

  //   const handleChange = (e:any) => {
  //       setValue(e.target.value);
  //   };

  // useEffect(() => {
  //   const starPercentageRounded: string = `${50}%`;
  //   const starsInnerElement: HTMLElement | null = document.querySelector('.reviews .stars-inner');
  // }, []);
  // const starPercentageRounded = `${50}%`;
  // document.querySelector(`.reviews .stars-inner`)..style.width = starPercentageRounded;

  const onDrop = useCallback((acceptedFiles:any) => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})   
  

  const handleContent1=()=>{
    setContent1(!content1)
  }
  const handleContent2=()=>{
    setContent2(!content2)
  }
  const handleContent3=()=>{
    setContent3(!content3)
  }
  const handleContent4=()=>{
    setContent4(!content4)
  }
  const handleContent5=()=>{
    setContent5(!content5)
  }
  const handleContent6=()=>{
    setContent6(!content6)
  }
  const handleContent7=()=>{
    setContent7(!content7)
  }
  const handleContent8=()=>{
    setContent8(!content8)
  }

  const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const handleIcon1 = () => {
    setIcon1(true);
  };
  const handleIconLeave1 = () => {
    setIcon1(false);
  };

  const handleIcon2 = () => {
    setIcon2(true);
  };
  const handleIconLeave2 = () => {
    setIcon2(false);
  };

  const handleIcon3 = () => {
    setIcon3(true);
  };
  const handleIconLeave3 = () => {
    setIcon3(false);
  };

  const [hoveredImage, setHoveredImage] = useState("/assets/4.png");

  const handleHover = (imageSrc: any) => {
    setHoveredImage(imageSrc);
  };
  const handleMouseLeave = () => {
    setHoveredImage("/assets/4.png");
  };

  

  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full ">
        <div className=" h-full w-3/5  lg:h-full lg:w-[53%] xl:w-[50%] 2xl:w-[52%] 2xl:h-full  xl:h-full   ">
          <div className="  border rounded-2xl h-[649px] w-[445px] lg:h-[678px] lg:w-[530px] xl:h-[734px] 2xl:h-[98.4%] 2xl:w-[91.5%]   xl:w-[610px] ml-[10px] mt-[10px] xl:ml-[90px] 2xl:ml-[84px]  ">
            <div className="  h-[455px] w-[445px]  lg:h-[500px] lg:w-[530px] xl:h-[515px] xl:w-[595px] 2xl:h-[76%] 2xl:w-[98.5%]  flex  pl-[6px] xl:pl-3 pt-3 2xl:ml-1  2xl:pt-4   ">
              <div className="h-[455px] w-[100px] lg:h-[480px] lg:w-[125px] xl:h-[98%] xl:w-[24%] xl:pr-[5px] 2xl:h-[100%] 2xl:w-[20%]  2xl:mr-[4px]  ">
                <div className="w-[100px] h-[112px] lg:h-[120px] lg:w-[125px] xl:h-[125px] xl:w-[140px] 2xl:h-[170px] 2xl:w-[170px] imageFocus1 2xl:mb-[7px]   ">
                  <Image
                    src="/assets/1.png"
                    height={1000}
                    width={1000}
                    className="h-[112px] w-[100px] lg:h-[120px] lg:w-[125px] xl:h-[125px] xl:w-[140px] 2xl:h-[165px] 2xl:w-[170px] "
                    onMouseEnter={() => handleHover("/assets/1.png")}
                    onMouseLeave={handleMouseLeave}
                    alt="Image1"
                  />
                </div>
                <div className="w-[100px] h-[112px] lg:h-[120px] xl:h-[125px] xl:w-[140px] lg:w-[120px] imageFocus2 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[9px] ">
                  <Image
                    src="/assets/2.png"
                    height={1000}
                    width={1000}
                    className="h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[125px] xl:w-[140px] pb-[3px] 2xl:h-[161px] 2xl:w-[167px] "
                    onMouseEnter={() => handleHover("/assets/2.png")}
                    onMouseLeave={handleMouseLeave}
                    alt="Image2"
                  />
                </div>
                <div className="w-[100px] h-[112px] lg:h-[120px] lg:w-[120px] xl:h-[125px] xl:w-[140px] imageFocus3 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[9px] ">
                  <Image
                    src="/assets/3.png"
                    height={1000}
                    width={1000}
                    className="h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] pb-[3px] xl:h-[125px] xl:w-[140px]  2xl:h-[161px] 2xl:w-[167px]"
                    onMouseEnter={() => handleHover("/assets/3.png")}
                    onMouseLeave={handleMouseLeave}
                    alt="Image3"
                  />
                </div>
                <div className="w-[100px] h-[112px] lg:h-[120px] lg:w-[120px] imageFocus4 xl:h-[125px] xl:w-[140px] 2xl:h-[165px] 2xl:w-[167px] 2xl:mb-[6px] ">
                  <Image
                    src="/assets/4.png"
                    height={1000}
                    width={1000}
                    className="h-[112px] w-[100px] lg:h-[120px] lg:w-[120px] pb-[3px] xl:h-[125px] xl:w-[140px] 2xl:h-[161px] 2xl:w-[167px] "
                    onMouseEnter={() => handleHover("/assets/4.png")}
                    onMouseLeave={handleMouseLeave}
                    alt="Image4"
                  />
                </div>
              </div>

              <div className=" h-[446px] w-[330px] lg:h-[480px] lg:w-[387px]   xl:h-[500px]  xl:w-[440px] 2xl:h-[100%]  2xl:w-[84.7%] ml-[4px] xl:ml-[8px] relative 2xl:ml-[1px] 2xl:mr-[5px] 2xl:mb-[10px] ">
                <Image
                  src={hoveredImage}
                  height={1000}
                  width={1000}
                  className="h-[446px] w-[345px] lg:h-[477px] lg:w-[387px] xl:h-[498px] xl:w-[440px]  2xl:h-[100%] 2xl:w-[99.5%] "
                  alt="Image4"
                  // <IoIosHeartEmpty />
                />
              </div>
            </div>
            {/* <div className="absolute top-[35px] left-[412px] ">
              <div className="bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2 " >
            <IoIosHeartEmpty className=" text-[rgb(9,157,189)]  " />
            </div>
            <div className="bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2" >
            <PiShareFatThin  className="text-[rgb(9,157,189)]" />
            </div>  
            <div className="bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2" >
            <MdCompareArrows  className="text-[rgb(9,157,189)]" />
            </div>
            </div> */}

            <div className="absolute top-[35px] left-[412px] lg:left-[489px] xl:left-[44.7%] 2xl:left-[48%]">
              <div
                onMouseEnter={handleIcon1}
                onMouseLeave={handleIconLeave1}
                className="bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2 icon-container1  "
              >
                <div>
                  {" "}
                  {icon1 ? (
                    <IoMdHeart className=" text-[rgb(9,157,189)]" />
                  ) : (
                    <IoIosHeartEmpty className=" text-[rgb(9,157,189)] icon" />
                  )}{" "}
                </div>

                <p className="text-[rgb(9,157,189)] text-[10px] font-semibold addpara">
                  Add To Wishlist
                </p>
              </div>

              <div
                onMouseEnter={handleIcon2}
                onMouseLeave={handleIconLeave2}
                className="bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2 icon-container2 "
              >
                <div>
                  {" "}
                  {icon2 ? (
                    <IoIosShareAlt className="text-[rgb(9,157,189)]" />
                  ) : (
                    <PiShareFatThin className="text-[rgb(9,157,189)] icon" />
                  )}
                </div>

                <p className="text-[rgb(9,157,189)] text-[10px] font-semibold">
                  Share
                </p>
              </div>

              <div
                onMouseEnter={handleIcon3}
                onMouseLeave={handleIconLeave3}
                className="bg-white flex justify-center items-center h-6 w-7 rounded-[10px] mb-2 icon-container3 "
              >
                <div>
                  {" "}
                  {icon3 ? (
                    <MdCompareArrows className="text-[rgb(9,157,189)] font-semibold icon text-[21px]" />
                  ) : (
                    <MdCompareArrows className="text-[rgb(9,157,189)] icon" />
                  )}
                </div>
                <p className="text-[rgb(9,157,189)] text-[10px] font-semibold">
                  Compare
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/assets/new.png"
                height={1000}
                width={1000}
                alt="new"
                className="h-3 w-9 2xl:h-[17px] 2xl:w-[68px] absolute top-7 left-32 lg:left-[152px] lg:top-[30px] xl:left-[17.8%] xl:top-[3.6%] 2xl:left-[15.1%] 2xl:top-[35.9px] "
              />
            </div>

            <div className="bg-[rgb(247,252,253)] h-[100px] w-[350px] lg:h-[105px] lg:w-[370px] xl:h-[110px] xl:w-[430px] 2xl:h-[121px] 2xl:w-[611px] ml-[6px] mt-[29px] rounded-[5px] relative lg:mt-[12px] xl:mt-[16px] xl:ml-[12px] 2xl:mt-[25px]">
              <FaShop className="text-[rgb(9,157,189)] text-[17px] 2xl:text-[23px] absolute left-[19px] top-[30px] lg:top-[35px] 2xl:left-[50px]" />

              <div className="flex  pt-[30px] lg:pt-[35px]">
                <p className="font-medium text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px] interFont pl-[39px] 2xl:pl-[83px] pr-[55px] ml-[5px]">
                  {" "}
                  Online shop Activewear Limited,
                  <br />
                  Mumbai , Maharashtra.{" "}
                </p>

                {/* <div className=" relative rounded-[7px] border-[1px] h-[35px] w-[90px] hover:bg-orange-300 overflow-hidden">
                  <div className="flex justify-center items-center rounded-[50%] h-full w-full bg-blue-500"></div>
                </div> */}
                {/* <p className="absolute text-[10px] left-[260px]" >button</p> */}

                <p
                  
                  className="btn h-[25px] w-[90px] xl:h-[28px] xl:w-[110px] xl:rounded-[8px] 2xl:h-[40px] hover:text-white 2xl:w-[187px] "
                >
                  <span className="text-[10px] font-semibold text-[#293341] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] hover:text-white  flex justify-center items-center pt-[4px] xl:pt-[5px]  2xl:pt-[9px] ">
                    VISIT STORE
                  </span>
                </p>

                {/* <button className=" font-semibold text-[10px] h-[25px] w-[90px] interFont border-[#000000] rounded-[7px] border-[1px] hover:bg-[#099DBD] hover:border-none hover:text-white  ">
                VISIT STORE
                </button> */}

              </div>
            </div>
          </div>
        </div>
        <div className=" h-full w-2/5 lg:w-[47%] lg:h-full xl:h-full xl:w-[50%]  2xl:w-[48%] 2xl:h-full pt-3 pl-1 lg:pl-3 2xl:pt-[22px]  lg:pt-5 xl:pl-2 2xl:pl-[24px]">
          <h2 className="font-bold text-[13px] interFont lg:text-[14px] xl:text-[16px] 2xl:text-[18px] ">
            Allen Solly
          </h2>
          <div className="flex pt-0 lg:pt-[6px] 2xl:pt-[7px] ">
            <h2 className="font-normal text-[15px] lg:text-[17px] interFont pr-[36px] xl:text-[20px] 2xl:text-[24px] ">
              Regular Fit T-Shirt
            </h2>
            <div className="border-l-[1px] h-[16px] xl:mt-[4px] border-gray-400  ">
              <p className="text-[#099DBD] font-medium text-[12px] lg:text-[13px] xl:text-[15px]  pl-[12px] 2xl:text-[16px]  stock">
                In Stock
              </p>
            </div>
          </div>
          <p className="text-[11px] text-[#29334199] font-normal interFont pt-0 lg:text-[12px] lg:leading-[22px] 2xl:leading-[25px] xl:text-[13px] 2xl:text-[14px] 2xl:w-[86.5%] 2xl:pt-[4px]  ">
            Enjoy comfort and style in Allen Sollys Regular Fit Tee. Crafted for
            everyday wear with quality materials, it effortlessly blends style
            and comfort
          </p>
          <div className="flex leading-[22px] gap-x-[10px] pt-1.5 pb-3 xl:pt-[15px] xl:pb-[15px] 2xl:pt-[26px] 2xl:pb-[25px] ">
            <p className="font-semibold interFont text-[15px] lg:text-[18px] xl:text-[20px] 2xl:text-[28px] 2xl:pr-[2px]">
              ₹ 649{" "}
            </p>
            <p className=" interFont font-normal text-[12px] xl:text-[14px] 2xl:text-[17px] text-[#29334199] 2xl:pr-[2px]   crossBorder 2xl:pt-[2px]">
              <del>₹ 1999</del>
            </p>
            <p className=" interFont font-medium text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] text-[#099DBD] xl:pr-[10px] 2xl:pl-[4px] 2xl:pr-[19px] 2xl:pt-[2px] ">
              67% off
            </p>
            <div className="flex borderStar rounded-[4px] h-[22px] w-[50px] pl-[7px] 2xl:h-[27px] 2xl:w-[65px] xl:rounded-[7px] 2xl:pl-[8px] 2xl:pt-[2.5px]  2xl:rounded-[8px] 2xl:mr-[4px] ">
              <p className="interFont font-medium text-[13px]  lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 2xl:pr-[3px] ">
                {" "}
                4.5
              </p>
              <IoMdStar className="text-[rgb(255,184,0)] text-[19px] pt-[3px] 2xl:h-[30px] 2xl:pb-[8px]   " />
            </div>
            <div className="   reviewBorder rounded-[6px] h-[22px] w-[82px] lg:h-[23px] lg:w-[87px] lg:pt-[2px] xl:h-[24px] xl:w-[98px]  pl-1  2xl:rounded-[10px] mr-[2px] flex 2xl:h-[27px] 2xl:w-[112px] 2xl:pt-[4px]">
              <MdOutlineTextsms className="text-[#099DBD] flex items-center xl:text-[17px] xl:font-bold font-semibold pt-1 2xl:font-bold  2xl:text-[20px]" />
              <p className="interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px]   xl:font-semibold text-[#099DBD] flex items-center pb-1  pl-1 2xl:pl-[1px]">
                58 Reviews
              </p>
            </div>
          </div>

          <h2 className="interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] pb-2 lg:pb-3 2xl:pb-[7px]  ">
            CHOOSE COLOR
          </h2>
          <div className="w-[298px] lg:w-[303px] xl:w-[306px] 2xl:w-[381px]  flex gap-x-1.5 pb-3.5 xl:pb-[21px] 2xl:pb-[30px] 2xl:gap-x-[7.5px]  ">
            <div className=" h-[58px]  w-12 lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]">
              <Image
                src="/assets/5.png"
                height={1000}
                width={1000}
                className=" h-[58px] w-12 lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]"
                alt="smallimage1"
              />
            </div>
            <div className=" h-[58px] w-12 lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]">
              <Image
                src="/assets/6.png"
                height={1000}
                width={1000}
                className="w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]"
                alt="smallimage2"
              />
            </div>
            <div className="w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]">
              <Image
                src="/assets/7.png"
                height={1000}
                width={1000}
                className="w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]"
                alt="smallimage3"
              />
            </div>
            <div className="w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]">
              <Image
                src="/assets/8.png"
                height={1000}
                width={1000}
                className="w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]"
                alt="smallimage4"
              />
            </div>
            <div className="w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]">
              <Image
                src="/assets/9.png"
                height={1000}
                width={1000}
                className="w-12 h-[58px] lg:w-[52px] lg:h-[60px] xl:w-[55px] xl:h-[63px] 2xl:w-[67px] 2xl:h-[81px]"
                alt="smallimage5"
              />
            </div>
          </div>
          <div className="flex  ">
            <h2 className="interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] pb-3 pr-2 2xl:pb-[18px]">
              SELECT SIZE
            </h2>
            <div className="flex 2xl:pt-[3px]  2xl:w-[120px]    ">
              <LuDot className="text-[#099DBD] 2xl:font-semibold 2xl:text-[29px] 2xl:pb-2 2xl:w-[px] " />
              <p className="interFont font-medium text-[10px] 2xl:font-semibold  lg:text-[11px] xl:text-[11px] 2xl:text-[12px] text-[#099DBD]">
                Few pieces left
              </p>
            </div>
          </div>
          <div className="flex justify-between  pb-4 2xl:pb-[24px]">
            <div className="flex gap-x-1.5 ">
              <button className=" interFont font-semibold text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px]  hover:text-white  hover:bg-[#099DBD] h-6 w-6 lg:h-7 lg:w-7  xl:h-8 xl:w-9 2xl:h-[40px] 2xl:w-[40px]  2xl:rounded-[10px] rounded-[5px] xl:rounded-[8px]">
                XS
              </button>
              <button className=" interFont font-semibold text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[15px] hover:text-white  hover:bg-[#099DBD] h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-9 rounded-[5px]  2xl:h-[40px] 2xl:w-[40px]  2xl:rounded-[10px] xl:rounded-[8px]">
                S
              </button>

              <button className=" interFont font-semibold text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[15px] hover:text-white  hover:bg-[#099DBD] h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-9 rounded-[5px]  2xl:h-[40px] 2xl:w-[40px]  2xl:rounded-[10px] xl:rounded-[8px]">
                M
              </button>
              <button className=" interFont font-semibold text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[15px] hover:text-white  hover:bg-[#099DBD] h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-9 rounded-[5px]  2xl:h-[40px] 2xl:w-[40px]  2xl:rounded-[10px] xl:rounded-[8px]">
                L
              </button>
              <button className=" interFont font-semibold text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[15px] hover:text-white  hover:bg-[#099DBD] h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-9 rounded-[5px]  2xl:h-[40px] 2xl:w-[40px]  2xl:rounded-[10px] xl:rounded-[8px]">
                XL
              </button>
              <button className=" interFont font-semibold text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[15px] hover:text-white  hover:bg-[#099DBD] h-6 w-6 lg:h-7 lg:w-7  xl:h-8 xl:w-9 rounded-[5px] 2xl:h-[40px] 2xl:w-[40px]  2xl:rounded-[10px]  xl:rounded-[8px]">
                XXL
              </button>
            </div>
            <h2 className="interFont font-medium text-[11px] lg:text-[12px] 2xl:text-[14px] text-[#099DBD] flex items-center pr-6 lg:pr-[150px] xl:pr-[350px] 2xl:pr-[498px] ">
              SIZE CHART
            </h2>
          </div>

          <div className="flex w-[210px]  xl:w-[250px] 2xl:w-[330px]   justify-between 2xl:pb-[10px]  ">
          <div className="h-7 w-20 border-[#000000] rounded-[7px] border-[1px] flex pb-[2px] xl:pl-[5px] lg:h-[30px] lg:w-[85px] xl:h-[32px] xl:w-[90px] 2xl:h-[40px] 2xl:w-[121px] 2xl:rounded-[11px]">
      <div
        className="w-6 flex justify-center items-center interFont font-normal  2xl:w-7"
        onClick={decrementCount}
      >
        <FiMinus className="hover:text-[#099DBD]" />
      </div>
      <div className="w-8 flex justify-center text-[12px] font-semibold xl:text-[13px] 2xl:text-[14px] text-[#293341] items-center  2xl:w-14">
        {count}
      </div>
      <div
        className="w-6 flex justify-center items-center interFont font-normal "
        onClick={incrementCount}
      >
        <FiPlus className="hover:text-[#099DBD] 2xl:w-7 " />
      </div>
    </div>

<div className="flex relative lg:ml-[20px]">
              <p
               
                className="btn1  h-7 w-28 lg:h-[30px] lg:w-[120px] xl:rounded-[8px] 2xl:rounded-[10px]  xl:h-[32px] xl:w-[150px] 2xl:h-[40px] 2xl:w-[189px]"
              >
                <span className="text-[10px] xl:text-[12px] font-semibold 2xl:text-[14px] flex justify-center items-center  pt-[7px] pl-3.5 2xl:pt-[10px] 2xl:pl-[22px]">
                  ADD TO CART
                </span>
              </p>
              <BsCart2 className="absolute text-[14px] 2xl:text-[21px] font-bold left-[10px] top-[6px] xl:left-[18px] xl:top-[7px] 2xl:left-[27px] 2xl:top-[9px]  text-white" />
             
            </div>
          </div>

          <div className="xl:pb-[6px] 2xl:pb-[3px] ">
            <div className="flex w-32 justify-between pt-4 pb-2 lg:pb-3 lg:w-[140px] xl:w-[155px] xl:pt-[20px]  2xl:w-[172px] 2xl:pb-[10px] ">
              <h2 className="interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px]">
                DELIVERY OPTIONS
              </h2>
              <AiOutlineTruck className="text-[#099DBD] 2xl:text-[21px] " />
            </div>
            <div className=" h-7 w-32  border-[#4848481A]  rounded-[7px] border-[1px] flex justify-between  items-center lg:h-[30px] lg:w-[134px] xl:h-[32px] xl:w-[149px] 2xl:h-[40px] 2xl:w-[206px]">
              <p className="interFont font-normal text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] pl-2 2xl:pl-4  text-[#29334199]">
                Pin Code
              </p>
              <p className="interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] pr-2  2xl:pr-4  text-[#099DBD]">
                CHECK
              </p>
            </div>
          </div>

          <div className="pt-3 2xl:pt-[27px]">
            <div className="flex ">
              <h2 className="interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] text-[#293341] pb-1.5 pr-1 2xl:text-[15px] 2xl:pr-[6px]">
                OFFERS
              </h2>
              <MdOutlineLocalOffer className="text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[17px] 2xl:ml-[3px] text-[#099DBD] mt-0.5 " />
            </div>

            <div className="  h-[218px] w-72 offerShadow lg:h-[210px] lg:w-[410px] xl:h-[215px] xl:w-[590px] 2xl:h-[266px] 2xl:w-[796px] 2xl:leading-[30px] border-[#4848481A]  border-dashed border-[0.5px] 2xl:border-[2px]   rounded-[3px] pl-2.5 pt-2 2xl:mt-[2px] 2xl:pl-[27px] 2xl:pt-[10px]">
              <h3 className="interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] pb-1 2xl;pb-[1px] ">
                Bank offers
              </h3>

              <p className="interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] pb-1 text-[#29334199] 2xl:pt-[px] ">
                10% Instant Discount on ICICI Bank Credit Cards and NetBanking{" "}
                <span className="interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] ">
                  VIEW DETAILS
                </span>
              </p>
              <p className="interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#29334199]  pb-1">
                5% Cashback on Online shopping Axis Bank Card{" "}
                <span className="interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] ">
                  VIEW DETAILS
                </span>
              </p>
              <p className="interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#29334199] pb-1 lg:pb-1">
              12% Instant Discount on HDFC Bank Debit Card EMI

{" "}
                <span className="interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] ">
                  VIEW DETAILS
                </span>
              </p>

              <p className="interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#29334199] pb-1 lg:pb-2 2xl:pb-[6px]">
              Extra ₹750 off on OneCard Credit Card EMI Transactions on products priced ₹50,000 and above
{" "}
                <span className="interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] ">
                  VIEW DETAILS
                </span>
              </p>

              <h3 className="interFont font-semibold text-[11px] lg:text-[12px] xl:text-[13px]  2xl:text-[14px] text-[#293341] pb-1 2xl:pb-[3px]">
                EMI option{" "}
              </h3>
              <p className="interFont font-normal text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] text-[#29334199]">
                EMI starting from Rs.19/month{" "}
                <span className="interFont font-medium text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-[#099DBD] ">
                  VIEW PLAN
                </span>
              </p>
            </div>
          </div>
        </div>
        
      </div>

      {/* next page */}
<div className="borderPage2 rounded-2xl h-[65%] w-[97%] lg:w-[97%]  mt-[20px] ml-[8px]   "> 

  <div className="flex gap-x-6 pt-2 border-b-2 border-[#099DBD14] ml-2 mr-2  pb-1.5">
    <h3 className="interFont font-medium text-[12px] lg:text-[13px]  ml-3  hover:text-[#099DBD] pb-1.5 hover:border-b-2 border-[#099DBD]">Description</h3>
    <h3 className="interFont font-medium text-[12px] lg:text-[13px] lg:pl-2 hover:text-[#099DBD] hover:border-b-2 border-[#099DBD]">Item Details</h3>
    <h3 className="interFont font-medium text-[12px] lg:text-[13px]  lg:pl-2 hover:text-[#099DBD] hover:border-b-2 border-[#099DBD]">Specifications</h3>
    <h3 className="interFont font-medium text-[12px] lg:text-[13px] lg:pl-2 hover:text-[#099DBD] hover:border-b-2 border-[#099DBD]">Quick Links</h3>
    <h3 className="interFont font-medium text-[12px] lg:text-[13px] lg:pl-2 hover:text-[#099DBD] hover:border-b-2 border-[#099DBD]">Legal Information</h3>
    </div>

    {/* div partition flex */}
    <div className="flex">

{/* leftside div */}

      <div className="w-[75%] h-full ">

    <div className=" pl-3 pt-3 pb-4">
      <h2 className="interFont font-semibold text-[13px] lg:text-[15px] text-[#293341] pb-2.5">Product Description</h2>
      <p className="interFont font-normal text-[12px] lg:text-[13px] text-[#29334199] " >When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge</p>
    </div>

    <div className="pl-3 pb-3">
      <h2 className="interFont font-semibold text-[13px] lg:text-[15px]  pb-2">Benefits</h2>
      <div className="">
        <div className="flex pb-1.5 ">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Durable leather is easily cleanable so you can keep your look fresh.</p>
        </div>
        
        <div className="flex pb-1.5">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Water-repellent finish and internal membrane help keep your feet dry.</p>
        </div>
        <div className="flex pb-1.5">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Toe piece with star pattern adds durability.</p>
        </div>
        <div className="flex pb-1.5">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Synthetic insulation helps keep you warm.</p>
        </div>
        <div className="flex pb-1.5">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px]  text-[#29334199]">Originally designed for performance hoops, the Air unit delivers lightweight cushioning.</p>
        </div>
        <div className="flex pb-1.5">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Plush tongue wraps over the ankle to help keep out the moisture and cold.</p>
        </div>
        <div className="flex pb-1.5">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Rubber outsole with aggressive traction pattern adds durable grip.</p>
        </div>
        <div className="flex pb-1.5">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Durable leather is easily cleanable so you can keep your look fresh.</p>
        </div>
      </div>
    </div>

    <div className="pl-3 pb-3">
      <h2  className="interFont font-semibold text-[13px] lg:text-[15px]  pb-2">Product Details</h2>
      <div className="flex pb-1.5 ">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Not intended for use as Personal Protective Equipment (PPE)</p>
        </div>

        <div className="flex pb-1.5 ">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Water-repellent finish and internal membrane help keep your feet dry.</p>
        </div>
    </div>

    <div className="pl-3">
      <h2  className="interFont font-semibold text-[13px] lg:text-[15px]  pb-2">More Details</h2>
      <div className="flex pb-1.5 ">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Lunarlon midsole delivers ultra-plush responsiveness</p>
        </div>

        <div className="flex pb-1.5 ">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Encapsulated Air-Sole heel unit for lightweight cushioning</p>
        </div>

        <div className="flex pb-1.5 ">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Colour Shown: Ale Brown/Black/Goldtone/Ale Brown</p>
        </div>

        <div className="flex pb-1.5 ">
          <span className="text-[15px] rounded-[50%] bg-[#E7F4FC] h-4 w-4.5 flex justify-center items-center text-gray-600"><TiTick /></span>
        <p className="interFont font-normal pl-1.5 text-[12px] lg:text-[13px] text-[#29334199]">Style: 805899-202</p>
        </div>
    </div>




    </div>


    <div className="w-[25%] h-full " >
      {/* empty div right side */}
    </div>

    </div>
    </div> 

    <div className="mt-6 h-full w-[95%]  ml-[20px]  ">
      <div className="flex justify-between w-[30%] lg:w-[25%]  pb-2 ml-3 ">
      <h2 className=" interFont font-semibold text-[12px] lg:text-[13px] text-[#293341] ">FREQUENTLY ASKED QUESTIONS</h2>
      < RiQuestionAnswerLine className="text-[#099DBD]" />
      </div>
      <div className="flex justify-between " >
{/* common div */}
<div  >
  <div >
  {content1 ? (<div className="  border8 h-[80px] w-[350px] lg:h-[110px] lg:w-[400px]   rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
  <div className="   w-[310px] ">
<p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">What is the fabric composition of this regular fit T-shirt?</p>
<p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Our regular fit T-shirt is crafted from a blend of [fabric composition], ensuring both comfort and durability.</p>
</div>
<span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-9 "><FaMinus onClick={handleContent1}/></span>
</div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px]  rounded-[6px]  flex justify-between items-center mb-2.5">
<p className="  w-[310px] pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">What is the fabric composition of this regular fit T-shirt?</p>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus onClick={handleContent1} /></span>
</div>)}
</div>


{/* alternative div for plus icon */}

<div >
{content2 ? (<div className="  border8 h-[110px] w-[350px] lg:h-[110px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
  <div   className="   w-[310px] ">
<p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">Does this T-shirt have any special features for added comfort or durability?</p>
<p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Our regular fit T-shirt features reinforced stitching for durability and a tagless design for added comfort, ensuring a superior wearing experience.</p>
</div>
<span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-16"><FaMinus onClick={handleContent2}/></span>
</div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
<p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Does this T-shirt have any special features for added comfort or durability?</p>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus onClick={handleContent2} /></span>
</div>)}
</div>




<div >
{content3 ? (<div className="  border8 h-[110px] w-[350px] lg:h-[110px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
  <div   className="   w-[310px] ">
<p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">Can I expect this T-shirt to retain its shape after multiple wears?</p>
<p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Yes, our regular fit T-shirt is constructed to maintain its shape even after repeated wear, offering long-lasting comfort and style.</p>
</div>
<span className=" mr-2 text-[13px] rounded-[5px] h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-16"><FaMinus onClick={handleContent3}/></span>
</div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
<p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Can I expect this T-shirt to retain its shape after multiple wears?</p>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus onClick={handleContent3} /></span>
</div>)}
</div>

<div >
{content4 ? (<div className="  border8 h-[80px] w-[350px] lg:h-[110px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
  <div   className="   w-[310px] ">
<p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">What is the fabric composition of this regular fit T-shirt?</p>
<p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Our regular fit T-shirt is crafted from a blend of [fabric composition], ensuring both comfort and durability.</p>
</div>
<span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-9"><FaMinus onClick={handleContent4}/></span>
</div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
<p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">What is the fabric composition of this regular fit T-shirt?</p>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus onClick={handleContent4}/></span>
</div>)}
</div>

</div>

<div className="">

<div >
{content5 ? (<div className="  border8 h-[100px] w-[350px] lg:h-[120px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
  <div   className="   w-[310px] ">
<p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">How should I care for this T-shirt to maintain its quality?</p>
<p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">To maintain the quality of your regular fit T-shirt, we recommend washing it in cold water and avoiding bleach. Tumble dry on low heat or air dry for best results.</p>
</div>
<span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-14"><FaMinus onClick={handleContent5}/></span>
</div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
<p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">How should I care for this T-shirt to maintain its quality?</p>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus onClick={handleContent5} /></span>
</div>)}
</div>

<div >
{content6 ? (<div className="  border8 h-[110px] w-[350px] lg:h-[110px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
  <div   className="   w-[310px] ">
<p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">What body type is best suited for the regular fit of this T-shirt?</p>
<p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]"> The regular fit of our T-shirt is designed to flatter a wide range of body types, providing a comfortable and relaxed silhouette</p>
</div>
<span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-16"><FaMinus onClick={handleContent6}/></span>
</div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
<p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">What body type is best suited for the regular fit of this T-shirt?</p>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus onClick={handleContent6} /></span>
</div>)}
</div>

<div >
{content7 ? (<div className="  border8 h-[130px] w-[350px] lg:h-[130px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
  <div   className="   w-[310px] ">
<p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">Can I wear this T-shirt for workouts or is it more suited for casual wear?</p>
<p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">While our regular fit T-shirts are versatile enough for casual wear, they may not be specifically designed for intense workouts. For exercise-specific clothing, we recommend exploring our activewear collection.</p>
</div>
<span className=" mr-2 text-[13px] rounded-[5px]  h-[21px] w-[21px] flex justify-center items-center bg-[#099DBD] text-white mb-20"><FaMinus onClick={handleContent7}/></span>
</div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
<p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Can I wear this T-shirt for workouts or is it more suited for casual wear?</p>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus  onClick={handleContent7}/></span>
</div>)}
</div>

<div >
{content8 ? (<div className="  border8 h-[80px] w-[350px] lg:h-[100px] lg:w-[400px] rounded-[6px] flex items-center justify-between duration-700 mb-2.5 ">
  <div   className="   w-[310px] ">
<p className=" pl-2  interFont font-medium text-[11px] lg:text-[12px] text-[#099DBD] ">Does this T-shirt shrink after washing?</p>
<p className=" pl-2 interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Our regular fit T-shirt is preshrunk to minimize shrinkage, ensuring a consistent fit wash after wash.</p>
</div>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#099DBD] text-white h-[21px] w-[21px] flex justify-center items-center mb-8 "><FaMinus onClick={handleContent8}/></span>
</div>):(<div className=" duration-700 border8 h-[45px] w-[350px] lg:h-[48px] lg:w-[400px] rounded-[6px]  flex justify-between items-center mb-2.5">
<p className="  w-[310px]  pl-2 items-center interFont font-medium text-[11px] lg:text-[12px] text-[#29334199]">Does this T-shirt shrink after washing?</p>
<span className=" mr-2 text-[13px] rounded-[5px] bg-[#29334117] h-[21px] w-[21px] flex justify-center items-center text-gray-600"><AiOutlinePlus onClick={handleContent8}/></span>
</div>)}
</div>

</div>

      </div>


    </div>


{/* customer feedback container below*/}
 
 
    <div className="flex ml-[20px] h-full  w-[95%] lg:mt-[20px] " >
      <div className="w-1/2  mt-[15%]">
        <h2 className="interFont font-semibold text-[12px] lg:text-[13px] text-[#293341] pb-2">CUSTOMERS FEEDBACK</h2>
        
        <div className="flex justify-between">
          <div className="h-24 w-28 bg-[#F9FAFB] lg:h-28 lg:w-32 rounded-[5px] flex flex-col items-center justify-center">
            <h1 className=" interFont font-medium text-[21px] lg:text-[24px] text-[#099DBD]">4.8</h1>
            <span className="flex">
            <IoStarSharp className="text-[#FFB800]"/>
            <IoStarSharp className="text-[#FFB800]"/>
            <IoStarSharp className="text-[#FFB800]"/>
            <IoStarSharp className="text-[#FFB800]"/>
            <IoStarSharp className="text-[#FFB800]"/>
            </span>
            <h3 className="interFont font-normal text-[11px] lg:text-[14px] pt-2">Product Rating</h3>
          </div>

          <div  className="h-24 w-56 lg:h-28 lg:w-64 mr-5 lg:pt-2 rounded-[5px] flex justify-around ml-3  bg-[#F9FAFB]">
          {/* <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={handleChange}
                className="text-[12px] text-[#293341]"
            />
            <p>Value: {value}</p> */}
            <div>
            <form>
    <Slider.Root className="SliderRoot" defaultValue={[70]} max={100} step={1}>
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  </form>

  <form>
    <Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1}>
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  </form>

  <form>
    <Slider.Root className="SliderRoot" defaultValue={[30]} max={100} step={1}>
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  </form>

  <form>
    <Slider.Root className="SliderRoot" defaultValue={[20]} max={100} step={1}>
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  </form>

  <form>
    <Slider.Root className="SliderRoot" defaultValue={[10]} max={100} step={1}>
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Slider.Thumb className="SliderThumb" aria-label="Volume" />
    </Slider.Root>
  </form>
  </div>
  
  {/* star ratings */}
  <div>
  <div className='reviews'>
        <div className="stars-outer">
          <div className="stars-inner" style={{ width: starWidth }}>
          </div>
        </div>
      </div>

      {/* <div className="reviews">
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: starWidth }}></div>
      </div>
    </div> */}
      {/* const starPercentageRounded = `${50}%`;
  document.querySelector(`.reviews .stars-inner`).style.width = starPercentageRounded;  */}


  </div>

{/* percentage */}
  <div>
    <p className="interFont font-normal text-[11px] lg:text-[12px] pb-[2px]">70%</p>
    <p className="interFont font-normal text-[11px] lg:text-[12px] pb-[2px]" >15%</p>
    <p className="interFont font-normal text-[11px] lg:text-[12px] pb-[2px]">10%</p>
    <p className="interFont font-normal text-[11px] lg:text-[12px] pb-[2px]">3%</p>
    <p className="interFont font-normal text-[11px] lg:text-[12px] ">2%</p>

  </div>

  
          </div>
        </div> 
       <div>
        <h2 className="interFont font-semibold text-[12px] lg:text-[13px] pt-4 lg:pt-5 pb-2 lg:pb-3">CUSTOMERS PHOTOS & VIDEOS</h2>
        <div className="flex justify-between w-56 ">
          <div className="h-14 w-12">
          <Image src='/assets/image 37.png' height={1000} width={1000} alt="customer1" className="h-14 w-12 lg:h-16 lg:w-14"/>
          </div>
          <div className="h-14 w-12">
          <Image src='/assets/image 38.png' height={1000} width={1000} alt="customer1" className="h-14 w-12 lg:h-16 lg:w-14"/>
          </div>
          <div className="h-14 w-12">
          <Image src='/assets/image 39.png' height={1000} width={1000} alt="customer1" className="h-14 w-12 lg:h-16 lg:w-14"/>
          </div>
          <div className="h-14 w-12">
          <Image src='/assets/image 40.png' height={1000} width={1000} alt="customer1" className="h-14 w-12 lg:h-16 lg:w-14"/>
          </div>
        </div>
        </div>  
      </div>

<div className="w-1/2  h-full mt-3 ml-12 lg:ml-20  ">
      <div className="  h-[50%] w-[97%]  lg:w-[98%]   rounded-[5px] borderWrite pl-3  ">
       
      <div className="lg:pl-9">
        <h3 className="interFont font-semibold text-[13px] lg:text-[13px] pb-2 pt-3 "   >Write a Review</h3>
        <p className=" interFont font-normal text-[11px] lg:text-[12px] pb-1">What is it like to Product? <span className="interFont font-normal text-[11px] lg:text-[12px] text-[#DD0707]"> *</span> </p>
        <span className="flex pb-2">
          <IoIosStar className="text-[#FFB800]"/>
          <IoIosStar  className="text-[#FFB800]"/>
          <IoIosStar  className="text-[#FFB800]"/>
          <IoIosStar  className="text-[#87878726]" />
          <IoIosStarOutline className=" text-[#87878726]" />

        </span>
          </div>

          <div>
          <p className="interFont font-normal text-[11px] lg:text-[12px] pb-1 lg:pl-9 ">Review Comments</p>
          {/* <textarea
        id="myTextarea"
        name="myTextarea"
        rows={4}
        cols={50}
        className="h-24 w-36"
      /> */}
      <div className="border-2 h-24 w-64 lg:w-80 border-[#4848481A] rounded-[8px] lg:ml-9   ">

      </div>
      </div>

      <div className="pt-3 ">
      <p className=" interFont font-normal text-[11px] lg:text-[12px] pb-2 ">Would you share your experience by a Image or Video ?  </p>
      <div className="flex justify-around pb-4 ">
      <div className="border-2 h-24 w-32  lg:w-36 border-[#4848481A] rounded-[8px]  ">

      <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        
          <p>Upload Photos</p> :
          <div className="flex flex-col justify-center items-center -50 pt-3">
            <Image src='/assets/dropzone2.png' height={1000} width={1000}  alt="dropzone" className="h-6 w-6"/>
            <p className="interFont font-normal text-[12px] lg:text-[13px]">Upload Photos</p>
          <p className="interFont text-center font-normal text-[10px] lg:text-[11px] text-[#29334199] ">Only .jpg, .png and max 10MB each.</p>
          </div>
      }
    </div>

      </div>
      <div className="border-2 h-24 w-32 lg:w-36 border-[#4848481A] rounded-[8px] ml-1 lg:mr-6 ">

      <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        
          <p>Upload Videos</p> :
          <div className="flex flex-col justify-center items-center -50 pt-3">
            <Image src='/assets/dropzone3.png' height={1000} width={1000}  alt="dropzone" className="h-6 w-6"/>
            <p className="interFont font-normal text-[12px] lg:text-[13px]">Upload Videos</p>
          <p className="interFont text-center font-normal text-[10px] lg:text-[11px] text-[#29334199] ">Only .mp4 .mov and max 200MB</p>
          </div>
      }
    </div>

      </div>

      </div>
      <p className="btn1  bg-[#099DBD] h-7 w-28  lg:w-32 "
              >
                <span className="text-[10px] lg:text-[11px]  font-semibold  flex justify-center pt-1.5 ">
                SUBMIT REVIEW
                </span>
              </p>


      </div>

      </div>
      </div>


    </div>

   <div className="w-1/2 h-full mt-6 pl-5  ">

<div className="flex justify-between w-20 bg-green-100 lg:w-24 ">
    <h2 className="interFont font-semibold text-[13px] lg:text-[14px] pb-3">REVIEWS </h2>
    <Image src='/assets/stars.png' alt="stars" height={1000} width={1000} className="h-4 w-4" />
    </div>

    
 


<div >


 {view ? (<div>

    <div className="flex justify-between ">

      <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] lg:rounded    ">
        <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
      </div>

      <div className="reviewContent1  pl-2">
    <div className="flex justify-between  w-36 lg:w-40 ">
      
    <h3 className="interFont font-medium text-[13px] lg:text-[14px]"  > Nicolas cage</h3>
   
    <p className="interFont font-normal text-[9px] lg:text-[10px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
    </div>
    <span className="flex pt-1 pb-3">
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    </span>
    <h4 className="interFont font-normal text-[12px] lg:text-[13px] pb-1">Greate Product</h4>

    <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

<div className="flex pb-3  justify-between w-28">

<div onClick={handleColorLike1}  className={`flex ${color1 ? 'text-[#099DBD]':'text-[#29334199]'}`}>
 
<BiLike className={` mr-1 text-[14px] `}  /><p className={`interFont font-normal text-[11px]  ` }>Like</p>

</div>
<div onClick={handleColorLike11}  className={`flex ${color11 ? 'text-[#099DBD]':'text-[#29334199]'}`}>
  
<BiDislike  className={` mr-1 text-[14px] `} /> <p  className={`interFont font-normal text-[11px] `} >Dislike</p>

</div>
</div>
</div>

</div>

<div className="border-b-2  border-[#EDEDED]"></div>

<div className="flex justify-between   ">
      <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
        <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
      </div>
<div className="reviewContent2 pl-2">
<div className="flex justify-between pt-3   w-44 lg:w-48">

    <h3 className="interFont font-medium text-[13px] lg:text-[14px]"   >Sr.Robert Downey</h3>
    <p className="interFont font-normal text-[9px] lg:text-[10px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
    </div>
    <span className="flex pt-1 pb-3">
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    </span>
    <h4 className="interFont font-normal text-[12px] pb-1">The best product In Market</h4>
    <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

<div className="flex pb-3  justify-between w-28">
<div onClick={handleColorLike2} className={`flex ${color2 ? 'text-[#099DBD]':'text-[#29334199]'}` }>
  
  <BiLike   className={` mr-1 text-[14px]` }/><p className={`interFont font-normal text-[11px] `}>Like</p>

</div>

<div onClick={handleColorLike12} className={`flex ${color12 ? 'text-[#099DBD]':'text-[#29334199]'}`}>
<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] `}>Dislike</p>
</div>
</div>
</div>
</div>
<div className="border-b-2  border-[#EDEDED]"></div>

<div className="flex justify-between pt-3">

      <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
        <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
      </div>

      <div className="reviewContent1  pl-2">
    <div className="flex justify-between  w-36 lg:w-40">
      
    <h3 className="interFont font-medium text-[13px] lg:text-[14px]"  > Nicolas cage</h3>
   
    <p className="interFont font-normal text-[9px] lg:text-[10px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
    </div>
    <span className="flex pt-1 pb-3">
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    </span>
    <h4 className="interFont font-normal text-[12px] pb-1">Greate Product</h4>

    <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

<div className="flex pb-3  justify-between w-28">

<div onClick={handleColorLike3} className={` flex ${color3 ? 'text-[#099DBD]':'text-[#29334199]'}  `}>
 
<BiLike  className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] `}>Like</p>

</div>
<div onClick={handleColorLike13}  className={`flex ${color13 ? 'text-[#099DBD]':'text-[#29334199]'} `}>
  
<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] `}>Dislike</p>

</div>
</div>
</div>

</div>

<div className="border-b-2  border-[#EDEDED]"></div>

<div className="flex justify-between   ">
      <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
        <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
      </div>
<div className="reviewContent2 pl-2">
<div className="flex justify-between pt-3   w-44 lg:w-48">

    <h3 className="interFont font-medium text-[13px] lg:text-[14px]"  >Sr.Robert Downey</h3>
    <p className="interFont font-normal text-[9px] lg:text-[10px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
    </div>
    <span className="flex pt-1 pb-3">
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    </span>
    <h4 className="interFont font-normal text-[12px] pb-1">The best product In Market</h4>
    <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

<div className="flex pb-3  justify-between w-28">
<div onClick={handleColorLike4} className={`flex ${color4 ? 'text-[#099DBD]':'text-[#29334199]'}`}>
  
<BiLike   className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] `}>Like</p>

</div>

<div onClick={handleColorLike14} className={`flex ${color14 ? 'text-[#099DBD]':'text-[#29334199]'} `}>
<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] `}>Dislike</p>
</div>
</div>
</div>
</div>

<div className="border-b-2  border-[#EDEDED]"></div>

<div className="flex justify-between pt-3">

      <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
        <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
      </div>

      <div className="reviewContent1  pl-2">
    <div className="flex justify-between  w-36 lg:w-40">
      
    <h3 className="interFont font-medium text-[13px] lg:text-[14px]"  > Nicolas cage</h3>
   
    <p className="interFont font-normal text-[9px] lg:text-[10px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
    </div>
    <span className="flex pt-1 pb-3">
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    <IoIosStar className="text-[#FFB800] text-[10px]"/>
    </span>
    <h4 className="interFont font-normal text-[12px] pb-1">Greate Product</h4>

    <p className="interFont font-normal text-[12px] text-[#29334199] pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

<div className="flex pb-3  justify-between w-28">

<div onClick={handleColorLike5}  className={`flex ${color5 ? 'text-[#099DBD]':'text-[#29334199]'} `}>
 
<BiLike  className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] `}>Like</p>

</div>
<div onClick={handleColorLike15}  className={`flex ${color15 ? 'text-[#099DBD]':'text-[#29334199]'} `}>
  
<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] `}>Dislike</p>

</div>
</div>
</div>

</div>
<p onClick={handleView} className="interFont font-medium text-[11px] flex justify-center hover:translate-x-0.5 hover:font-bold duration-500 text-[#099DBD]">VIEW LESS</p>
</div>):(<div>

<div className="flex justify-between ">

  <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%]  ">
    <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">NC</p>
  </div>

  <div className="reviewContent1  pl-2">
<div className="flex justify-between  w-36 lg:w-40">
  
<h3 className="interFont font-medium text-[13px] lg:text-[14px]"  > Nicolas cage</h3>

<p className="interFont font-normal text-[9px] lg:text-[10px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
</div>
<span className="flex pt-1 pb-3">
<IoIosStar className="text-[#FFB800] text-[10px]"/>
<IoIosStar className="text-[#FFB800] text-[10px]"/>
<IoIosStar className="text-[#FFB800] text-[10px]"/>
<IoIosStar className="text-[#FFB800] text-[10px]"/>
<IoIosStar className="text-[#FFB800] text-[10px]"/>
</span>
<h4 className="interFont font-normal text-[12px] pb-1">Greate Product</h4>

<p className="interFont font-normal text-[12px] text-[#29334199] pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>

<div className="flex pb-3  justify-between w-28">

<div onClick={handleColorLike6} className={`flex ${color6 ? 'text-[#099DBD]':'text-[#29334199]'} `}>

<BiLike  className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] `}>Like</p>

</div>
<div onClick={handleColorLike16}  className={`flex ${color16 ? 'text-[#099DBD]':'text-[#29334199]'} `}>

<BiDislike  className={` mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] `}>Dislike</p>

</div>
</div>
</div>

</div>

<div className="border-b-2  border-[#EDEDED]"></div>

<div className="flex justify-between  ">
  <div className="roundImage bg-[#164C96] h-5 w-12 rounded-[50%] mt-3  ">
    <p className="text-[9px] text-white flex justify-center items-center pt-[3px]">SR</p>
  </div>
<div className="reviewContent2 pl-2">
<div className="flex justify-between pt-3   w-44 lg:w-48">

<h3 className="interFont font-medium text-[13px] lg:text-[14px]"  >Sr.Robert Downey</h3>
<p className="interFont font-normal text-[9px] lg:text-[10px] text-[#878787] pt-1 pr-2" >3 Days ago</p>
</div>
<span className="flex pt-1 pb-3">
<IoIosStar className="text-[#FFB800] text-[10px]"/>
<IoIosStar className="text-[#FFB800] text-[10px]"/>
<IoIosStar className="text-[#FFB800] text-[10px]"/>
<IoIosStar className="text-[#FFB800] text-[10px]"/>
<IoIosStar className="text-[#FFB800] text-[10px]"/>
</span>
<h4 className="interFont font-normal text-[12px] pb-1">The best product In Market</h4>
<p className="interFont font-normal text-[12px] text-[#29334199] pb-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

<div className="flex pb-3  justify-between w-28">
<div onClick={handleColorLike7} className={`flex ${color7 ? 'text-[#099DBD]':'text-[#29334199]'} `}>

<BiLike   className={` mr-1 text-[14px]`} /><p className={`interFont font-normal text-[11px] `}>Like</p>

</div>

<div onClick={handleColorLike17} className={`flex ${color17 ? 'text-[#099DBD]':'text-[#29334199]'} `}>
<BiDislike  className={`mr-1 text-[14px]`} /> <p  className={`interFont font-normal text-[11px] `}>Dislike</p>
</div>
</div>
</div>
</div>
<p onClick={handleView} className="interFont font-medium text-[11px] flex justify-center  text-[#099DBD] hover:translate-x-0.5 hover:font-bold duration-500">VIEW ALL REVIEWS</p>
</div>)} 
</div>

   </div>

{/* frequently bought together */}
   <div className="h-[60%] w-[50%]   rounded-[7px] borderTogether pl-3 pt-2.5 mt-5 ml-3 mb-3 ">
<h2 className="interFont font-semibold text-[12px] lg:text-[13px] pb-3">FREQUENTLY BOUGHT TOGETHER</h2>
<div className="flex">
  <Image src='/assets/t1.png' height={1000} width={1000} alt="together1 " className="h-16 w-14"/>
  <FiPlus className="mt-6"/>
  <Image src='/assets/t2.png' height={1000} width={1000} alt="together2" className="h-16 w-14"/>
  <FiPlus className="mt-6"/>
  <Image src='/assets/t3.png' height={1000} width={1000} alt="together3" className="h-16 w-14"/>
<div>
  <div className="flex justify-evenly  w-44">
    <p className="interFont font-semibold text-[12px] text-[#293341] lg:text-[13px]">Total Price </p>
    
    <p className="interFont font-semibold text-[14px] lg:text-[15px] text-[#293341]">₹2247 <span className="text-[#898989] interFont font-normal text-[11px] lg:text-[12px]"><del>₹4097</del> </span></p>
  </div>
 
                
  <p  className="btn1  bg-[#099DBD] h-7 w-28 lg:w-32 ml-4  "
              >
                <span className="text-[10px] lg:text-[11px] font-semibold  flex justify-center pt-1.5  ">
                ADD ALL TO CART
                </span>
              </p>
</div>
</div>
<div className="pt-3">
  <div className="flex pb-2">
  <input type="checkbox" className="text-[#293341] checkInput" />
  <p className=" interFont font-medium text-[12px] lg:text-[13px] pl-3 text-[#293341]">This item : Regular Fit T-Shirt</p>
  <p className=" interFont font-medium text-[12px] lg:text-[13px] pl-2">₹ 649 <span className="text-[#29334199] pl-1"><del>₹ 1999</del></span></p>
  </div>
  <div className="flex pb-2">
  <input type="checkbox" />
  <p className=" interFont font-medium text-[12px] lg:text-[13px] pl-3 text-[#293341]">Regular Fit Sweatshorts </p>
  <p className=" interFont font-medium text-[12px] lg:text-[13px] pl-2">₹ 599 <span className="text-[#29334199] pl-1"><del>₹ 799</del></span></p>
  </div>
  <div className="flex  pb-2">
  <input type="checkbox" />
  <p className=" interFont font-medium text-[12px] lg:text-[13px] pl-3 text-[#293341]">Braided Belt </p>
  <p className=" interFont font-medium text-[12px] lg:text-[13px] pl-2">₹ 999 <span className="text-[#29334199] pl-1"><del>₹ 1299</del></span></p>
  </div>

</div>


   </div>
    
    








    </div>
    // h-[50%] w-[97%] rounded-[5px] borderWrite pl-3 
  );
};

export default Page;

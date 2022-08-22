import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HeaderOne } from "../components/HeaderOne";
import { CoverPic } from "../components/CoverPic";
import { AmbientPics } from "../components/AmbientPics";
import { RealWorld } from "../components/AmbientPics";
import { FetchPics } from "../components/FetchPics";

export const HomePage = () => {
  // const { dataPics, layoutLg } = FetchPics;
  return (
    <>
      <HeaderOne />
      {/* <CoverPic /> */}
      {/* <div className="layout-wrapper">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          omnis accusamus ex culpa, tenetur atque quibusdam ad eligendi iure
          ducimus sequi laborum, eaque itaque neque numquam quos enim ab!
          Nesciunt consequatur cupiditate tempore quidem eius, debitis aut modi
          dolore magnam. Voluptas, consequatur exercitationem cumque ipsam, eum
          in aspernatur repellat vitae optio ex repudiandae inventore, aliquam
          beatae itaque? Amet recusandae nemo cum doloremque esse magni
          accusantium delectus adipisci. Quia, reiciendis id? Eligendi molestiae
          laudantium quam deserunt fugit, sequi cumque doloribus tenetur quaerat
          dolorum, explicabo repudiandae. Quasi dolore et, commodi perferendis
          officia provident tempora itaque unde aliquid nulla totam ducimus esse
          in.
        </p>
      </div> */}
      <FetchPics searchTerm={'costa rica'}/>
      <Outlet />
    </>
  );
};

export default HomePage;

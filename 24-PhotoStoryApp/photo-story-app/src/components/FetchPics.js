import { useEffect, useState } from "react";
import { AmbientPics } from "./AmbientPics";

export const FetchPics = ( { searchTerm }) => {
  const [dataPics, setDataPics] = useState([]);
  const [layoutLg, setLayoutLg] = useState({});

  useEffect(() => {
    console.log("call useEffect in FetchData");
    const fetchData = async () => {
      const client_Id = "tjz5KRnEe72zmhz3LUh1FRHZtn8rPcV2gyxP6vW8S1U";
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&page=1&client_id=${client_Id}`,
        {
          accept: "application/json",
        }
      );
      const data = await response.json();
      const arrPics = data.results.reduce((reducedArr, pic, index) => {
        if (index < 9) {
          let picObj = {
            id: pic.id,
            width: pic.width,
            height: pic.height,
            url: pic.urls.small,
          };
          pic.width < pic.height
            ? (picObj = {
                ...picObj,
                orientation: "por",
              })
            : (picObj = {
                ...picObj,
                orientation: "lan",
              });
          reducedArr.push(picObj);
        }
        return reducedArr;
      }, []);

      setDataPics(arrPics);
    }; //endof fetchData
    fetchData();
  }, []); //endof useEffect to fetchData

  useEffect(() => {
    const generateLayoutLg = () => {
      return dataPics.map((item, index) => {
        return {
          x: ((index + 3) % 3) * 4,
          y: 0,
          w: 4,
          h: item.orientation === "lan" ? 3 : 5,
          i: item.id,
        };
      });
    }; // endof generateLayout
    setLayoutLg({ lg: generateLayoutLg() });
  }, [dataPics]);

  return (
    <>
      {console.log(dataPics)}
      {console.log(layoutLg)}
      <AmbientPics dataPics={dataPics} layoutLg={layoutLg} />
    </>
  );
}; // endof FetchPics

// export default FetchPics

"use client";
import React, { useEffect, useState } from "react";

const Styrelsen = ({ data }) => {
  const [categoy, setCategory] = useState("Föreningsstyrelsen");

  function handleClick(id, cat) {
    setCategory(cat);
    console.log("valde: ", categoy);
  }

  useEffect(() => {}, []);

  console.log(data);

  return (
    <>
      <div className="flex w-[1200px]">
        <div className="">
          {data.map((medlemmar) => (
            <div>
              <div
                onClick={(ja) => handleClick(ja, medlemmar.title)}
                className="w-96 border"
              >
                {medlemmar.title}
              </div>
              {/*
              <div>
                {medlemmar.title === categoy ? (
                  <>
                    {medlemmar.styrelsemedlemar.map((person) => (
                      <>{person?.blockName}</>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
              */}
            </div>
          ))}
        </div>
        <div>
          {data.map((medlemmar) => (
            <>
              {medlemmar.title === categoy ? (
                <div>
                  <>
                    {medlemmar.styrelsemedlemar.map((person) => (
                      <>{person?.blockName}</>
                    ))}
                  </>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Styrelsen;

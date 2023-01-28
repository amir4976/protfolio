import React, { Component, useState } from "react";
import "./Experience.css";
import AllExperiences from "../allExperinces";
import { CiAlignLeft } from "react-icons/ci";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
AOS.init();
export default function Experince(props) {
  let [categorys, setCategorys] = useState("all");
  let [ExPlace, setExPlace] = useState();
  const done = () => {
    setCategorys("done");
  };
  const undone = () => {
    setCategorys("undone");
  };
  const all = () => {
    setCategorys("all");
  };
  return (
    <div className="Experince-container">
      <div className="categoryBTNS-container">
        <div className="CategoryBTNS">
          <button
            onMouseEnter={props.Enter}
            onMouseLeave={props.Leave}
            onClick={done}
          >
            <h4>به اتمام رسیده</h4>
          </button>
          <button
            onMouseEnter={props.Enter}
            onMouseLeave={props.Leave}
            onClick={undone}
          >
            <h4>در دست ساخت</h4>
          </button>
          <button
            onMouseEnter={props.Enter}
            onMouseLeave={props.Leave}
            onClick={all}
          >
            <h4>همه</h4>
          </button>
        </div>
      </div>
      <div className="experinces container">
        <ImageList variant="masonry" cols={2} gap={8}>

          {categorys === "undone" &&
            AllExperiences.filter((ex) => ex.isDone === false).map((ex) => (
              <>
                <ImageListItem key={ex.EXcover}>
                  <img
                    src={`${ex.EXcover}?w=248&fit=crop&auto=format`}
                    srcSet={`${ex.EXcover}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={'ex'}
                    loading="lazy"
                  />
                </ImageListItem>
              </>
            ))}
          {categorys === "done" &&
            AllExperiences.filter((ex) => ex.isDone === true).map((ex) => (
              <ImageListItem key={ex.EXcover}>
                <img
                  src={`${ex.EXcover}?w=248&fit=crop&auto=format`}
                  srcSet={`${ex.EXcover}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={'ex'}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          {categorys === "all" &&
            AllExperiences.map((ex) => 
            <>
            <ImageListItem key={ex.EXcover}>
                <img
                  src={`${ex.EXcover}?w=248&fit=crop&auto=format`}
                  srcSet={`${ex.EXcover}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={'ex'}
                  loading="lazy"
                />
              </ImageListItem>
            </>)}

        </ImageList>
      </div>
    </div >
  );
}

import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Data from "./data";

export default function ({ shoes }) {
  const { id } = useParams();
  const history = useHistory();
  const imeages = ["Dior", "Chicago", "University"];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={require(`./img/${imeages[id]}.png`)} width="100%" />
        </div>
        <div className="col-md-6">
          {shoes.map((shoes) => {
            return (
              <>
                {shoes.id == id && (
                  <>
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>&#8361;{shoes.price}</p>
                  </>
                )}
              </>
            );
          })}
          {/* {shoes.id == id && (
            <>
              <h4 className="pt-5">{shoes.title}</h4>
              <p>{shoes.content}</p>
              <p>&#8361;{shoes.price}</p>
            </>
          )} */}
          {/* <h4 className="pt-5">{shoes[id].id == id && shoes[id].title}</h4>
          <p>{shoes[id].id == id && shoes[id].content}</p>
          <p>&#8361;{shoes[id].id == id && shoes[id].price}</p> */}
          <button className="btn btn-danger">주문하기</button>&nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

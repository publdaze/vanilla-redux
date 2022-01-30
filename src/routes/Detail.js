import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDo }) => {
  const params = useParams();
  //console.log(params.id);
  //console.log(toDo);
  const toDoText = toDo.find((toDo) => toDo.id === parseInt(params.id));
  console.log(toDoText);
  return (
    <>
      {toDoText.text}
      Created at {params.id}
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDo: state };
};

export default connect(mapStateToProps)(Detail);

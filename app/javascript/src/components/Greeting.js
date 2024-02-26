import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../redux/welcome/fetchAPi";

const RandomMessage = () => {
  const [msg, setMsg] = useState('');
  const state = useSelector((state) => state.Random);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (state.data && state.data.message) {
      setMsg(state.data.message);
    } else {
      dispatch(fetchData());
    }
  }, [dispatch, state.data]);

  return (
    <>
      <div className="row">
        <h4>Kingno3l</h4>
        <h2>{msg}</h2>
      </div>
    </>
  )
}

export default RandomMessage;

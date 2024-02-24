import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomMessage } from '../reducer';

const Greeting = () => {
  const { status, message, error } = useSelector((state) => state.randomMessage);
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown === 0) {
      dispatch(fetchRandomMessage());
      setCountdown(10);
    } else {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, dispatch]);

    return (
      <div class="greeting-content">
        <h1>Greeting of the day...</h1>
        {status === "loading" && <div>Loading...</div>}
        {status === "failed" && error && <div>Error: {error}</div>}
        {status === "succeded" && message && <p>"{message}"</p>}
        <p>
          Greeting changes in..: <span>{countdown}</span>
        </p>
      </div>
    );
};
export default Greeting;

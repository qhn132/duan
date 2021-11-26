import { Button } from 'antd';
import React from 'react';
import AudioHandle from './AudioHandle';

const Communicate = () => {

  // Tạo state quản lý visible của Mic
  const [visibleMic, setVisibleMic] = React.useState<boolean>(false);

  // Function show mic
  const useMic = () => {
    setVisibleMic(true);
  };

  // Function hide mic
  const cancelMic = () => {
    setVisibleMic(false);
  };

  // Dummy data
  const exercise = {
    id: '1',
    ques: {
      id: '1',
      title: 'Answer the question ?',
    },
    ans: [
      {
        id: '1',
        title: 'HELLO',
      },
      {
        id: '2',
        title: 'I LOVE YOU',
      },
      {
        id: '3',
        title: 'GOOD BYE',
      },
      {
        id: '4',
        title: 'NICE TO MEET YOU',
      },
    ],
  };
  return (
    <div>
      <div>
        Demo Communicate
        <Button onClick={useMic}>Talk</Button>
      </div>
      <AudioHandle exercise={exercise} visibleMic={visibleMic} cancleMic={cancelMic} />
    </div>
  );
};

export default React.memo(Communicate);

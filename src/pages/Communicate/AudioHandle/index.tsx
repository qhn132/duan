import React from 'react';
import { SpeechProvider, useSpeechContext } from '@speechly/react-client';
import { Radio, Space, Typography } from 'antd';

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  BigTranscript,
  BigTranscriptContainer,
  ErrorPanel,
} from '@speechly/react-ui';
import { IAudioHandleProps } from '../interface';

// Component view dữ liệu ra màn hình ( Speech App )
function SpeechlyApp({ exercise, cancleMic }: IAudioHandleProps) {
  const [answer, setAnswer] = React.useState<string>(' ');
  const { segment } = useSpeechContext();
// Xử lý khi người dùng change value bằng click event
  const changeValueRadio = (e) => {
    setAnswer(e.target.value);
  };

//   Xử lý khi kết thúc nhận dữ liệu từ Mic
//   Set answer bằng dữ liệu nhận được từ mic, hide Mic
//   Sử dụng useEffect để chạy chỉ khi dữ liệu được nhập từ Mic thay đổi

  React.useEffect(() => {
    if (segment?.isFinal) {
      const ans = segment.words.map((w) => w.value).join(' ');
      cancleMic();
      setAnswer(ans);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment]);

//   Return về view của exercise
  return (
    <div>
      <div>
        <Typography.Text> {exercise?.ques?.title} </Typography.Text>
      </div>
      <div>
        <Radio.Group onChange={changeValueRadio} value={answer}>
          <Space direction="vertical">
            {exercise?.ans?.map((item, index) => (
              <Radio key={index} value={item.title}>
                {item.title}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
    </div>
  );
}


// Component lấy dữ liệu từ Mic

const AudioHandle = ({ exercise, visibleMic, cancleMic }: IAudioHandleProps) => {
  return (
    <SpeechProvider appId="682f6e25-d227-4491-ad95-a30226aa20c2" language="en-US">
      <BigTranscriptContainer>
        <BigTranscript />
      </BigTranscriptContainer>
      {/* Nếu visible = true thì hiển trị ra Mic */}
      {visibleMic ? (
        <PushToTalkButtonContainer>
          <PushToTalkButton captureKey=" " />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      ) : null}
      <SpeechlyApp exercise={exercise} visibleMic={visibleMic} cancleMic={cancleMic} />
    </SpeechProvider>
  );
};

export default React.memo(AudioHandle);

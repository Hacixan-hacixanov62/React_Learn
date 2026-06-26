import React, { useState } from 'react';
import {Radio,Timeline} from 'antd';

const Antd3 = () => {
    
const [mode, setMode] = useState('start');

   const onChange = (e) => {
    setMode(e.target.value);
  };
  
  return (
   <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="start">Start</Radio>
        <Radio value="end">End</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            title: '2015-09-01',
            content: 'Create a services',
          },
          {
            title: '2015-09-01 09:12:11',
            content: 'Solve initial network problems',
          },
          {
            content: 'Technical testing',
          },
          {
            title: '2015-09-01 09:12:11',
            content: 'Network problems being solved',
          },
        ]}
      />
   </>
  )
}

export default Antd3

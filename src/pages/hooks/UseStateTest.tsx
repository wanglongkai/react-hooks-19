import React, { useState } from 'react';
import { Card, Input, Typography, Divider } from 'antd';

const { Title } = Typography;

const UseStateTest: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const handleAdd = () => {
    if (text.trim()) {
      setItems([...items, text]);
      setText('');
    }
  };

  return (
    <div className='p-6'>
      <Title level={3}>useState Hook Test</Title>
      <Card title='Todo List Demo'>
        <div className='flex gap-2 mb-4'>
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onPressEnter={handleAdd}
            placeholder='Type something and press Enter'
          />
        </div>
        <Divider />
        <ul className='list-disc pl-5'>
          {items.map((item, index) => (
            <li key={index} className='mb-1'>
              {item}
            </li>
          ))}
        </ul>
        {items.length === 0 && <div className='text-gray-400'>No items yet.</div>}
      </Card>
    </div>
  );
};

export default UseStateTest;

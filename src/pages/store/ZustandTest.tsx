import React from 'react';
import { Button, Card, Space, Typography } from 'antd';
import { useStore } from '../../store/useStore';

const { Title, Text } = Typography;

const ZustandTest: React.FC = () => {
  const {
    value: { count },
    increment,
    decrement,
    reset,
  } = useStore((state) => state);

  return (
    <div className='p-6'>
      <Title level={2}>Zustand State Management Demo</Title>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <Card title='Counter (Basic State)' className='shadow-sm'>
          <div className='mb-4 text-center'>
            <Text className='text-6xl font-bold text-blue-600'>{count}</Text>
          </div>
          <Space className='w-full justify-center'>
            <Button onClick={decrement}>-</Button>
            <Button onClick={reset} danger>
              Reset
            </Button>
            <Button type='primary' onClick={increment}>
              +
            </Button>
          </Space>
        </Card>
      </div>
    </div>
  );
};

export default ZustandTest;

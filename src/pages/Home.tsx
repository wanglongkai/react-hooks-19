import React from 'react';
import { Typography, Card, Space, Button } from 'antd';
import { useStore } from '../store/useStore';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const reset = useStore((state) => state.reset);

  return (
    <div className='p-6'>
      <Title level={2}>Welcome to React 19 + TypeScript Admin</Title>
      <Paragraph>
        This is a template project integrated with Vite, React 19, TypeScript, Tailwind CSS, Antd,
        Zustand, and React Router.
      </Paragraph>

      <Card title='Zustand State Management Demo' style={{ maxWidth: 400 }}>
        <div className='flex flex-col items-center gap-4'>
          <div className='text-primary text-4xl font-bold'>{count}</div>
          <Space>
            <Button type='primary' onClick={increment}>
              Increment
            </Button>
            <Button onClick={decrement}>Decrement</Button>
            <Button danger onClick={reset}>
              Reset
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default Home;

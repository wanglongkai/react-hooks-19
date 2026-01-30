import React, { useReducer } from 'react';
import { Card, Button, Space, Typography, Tag } from 'antd';

const { Title } = Typography;

type State = {
  count: number;
  lastAction: string | null;
};

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'double' }
  | { type: 'reset' };

const initialState: State = { count: 0, lastAction: null };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, lastAction: 'Increment' };
    case 'decrement':
      return { count: state.count - 1, lastAction: 'Decrement' };
    case 'double':
      return { count: state.count * 2, lastAction: 'Double' };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const UseReducerTest: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='p-6'>
      <Title level={3}>useReducer Hook Test</Title>
      <Card title='Complex Counter Demo'>
        <div className='flex flex-col items-center gap-6'>
          <div className='text-center'>
            <div className='text-6xl font-bold mb-2 text-blue-600'>{state.count}</div>
            {state.lastAction && <Tag color='blue'>Last Action: {state.lastAction}</Tag>}
          </div>

          <Space wrap>
            <Button onClick={() => dispatch({ type: 'increment' })}>+1</Button>
            <Button onClick={() => dispatch({ type: 'decrement' })}>-1</Button>
            <Button type='primary' onClick={() => dispatch({ type: 'double' })}>
              x2
            </Button>
            <Button danger onClick={() => dispatch({ type: 'reset' })}>
              Reset
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default UseReducerTest;

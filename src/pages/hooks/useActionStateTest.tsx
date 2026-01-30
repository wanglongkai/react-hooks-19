import { useActionState } from 'react';
import { Input, Button } from 'antd';

const UseActionStateTest: React.FC = () => {
  const originalAction = async (preState: number, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return preState + Number(formData.get('count'));
  };
  /**
   * state: 最新表单提交后的结果状态
   * isPending: 表单提交是否正在进行中
   * formAction: 表单提交的action函数，用于触发表单提交，可以理解是originalAction函数的包装函数
   *
   * originalAction: 原始的action函数，用于处理表单提交逻辑
   * initialState: 初始状态值，用于useActionState的初始状态
   */
  const [state, formAction, isPending] = useActionState(originalAction, 0);

  return (
    <div className='p-6'>
      useActionState Hook Test
      <form action={formAction}>
        <Input type='number' name='count' />
        <Button htmlType='submit'>Add</Button>
      </form>
      <div>Current State: {state}</div>
      <div>isPending: {isPending.toString()}</div>
    </div>
  );
};

export default UseActionStateTest;

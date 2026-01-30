import { Button } from 'antd';
import { useOptimistic, startTransition, useState } from 'react';

const useOptimisticTest: React.FC = () => {
  /**
   * 乐观更新
   * 需要两个状态：真正的状态和乐观状态
   * 乐观状态：在用户触发操作后立即更新，用于展示给用户
   * 真正的状态：在操作完成后更新，用于展示给用户
   *
   * 乐观更新的流程：
   * 1. 用户触发操作，立即更新乐观状态
   * 2. 操作完成后，更新真正的状态
   *
   * useOptimistic  Hook
   * 1. 第一个参数：真正的状态
   * 2. 第二个参数：一个函数，用于根据乐观状态和操作值计算新的乐观状态
   * 3. 返回值：一个数组，第一个元素是乐观状态，第二个元素是更新乐观状态的函数（类似包装后的执行器函数）
   * 4. 注意事项：
   *    - 乐观更新函数需要在action或者startTransition中调用
   */
  const [count, setCount] = useState(0);
  const [optimisticCount, setOptimisticCount] = useOptimistic(
    count,
    (prevCount, optimisticValue: number) => {
      return prevCount + optimisticValue;
    },
  );
  return (
    <div>
      useOptimistic Hook Test
      <div>
        optimisticCount:{optimisticCount}
        <br />
        2s update realCount: {count}
        <p>
          <Button
            onClick={() => {
              startTransition(async () => {
                setOptimisticCount(1);
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setCount(count + 1);
              });
            }}
          >
            Add 1
          </Button>
        </p>
      </div>
    </div>
  );
};

export default useOptimisticTest;

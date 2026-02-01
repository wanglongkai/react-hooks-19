import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActionState } from 'react';
import { Button } from 'antd';
export default function ReactQueryTest() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery<{ id: number; title: string; views: number }[]>({
    queryKey: ['reactQueryTest'],
    queryFn: () => fetch('http://localhost:3000/posts').then((res) => res.json()),
  });

  const { mutate: createPost } = useMutation({
    mutationKey: ['reactQueryTest'],
    mutationFn: (post: { title: string; views: string }) =>
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(post),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reactQueryTest'] });
    },
  });

  const [state, formAction, isSubmitting] = useActionState(
    (_preState: { title: string; views: string; id: number }, formData: FormData) => {
      const post = {
        title: formData.get('title') as string,
        views: formData.get('views') as string,
        id: new Date().getTime(),
      };
      createPost(post);
      return post;
    },
    { title: '', views: '', id: 0 },
  );

  return (
    <div>
      <h1>React Query Test</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      <div>
        {data?.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.views}</p>
          </div>
        ))}
      </div>

      <form action={formAction}>
        <input type='text' name='title' placeholder='Title' />
        <input type='text' name='views' placeholder='Views' />
        <Button htmlType='submit'>Submit</Button>
        {isSubmitting && <div>Submitting...</div>}
        {JSON.stringify(state)}
      </form>
    </div>
  );
}

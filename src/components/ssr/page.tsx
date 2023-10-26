type Repo = {
  name: string;
  stargazers_count: number;
};

const getData = async (): Promise<Repo> => {

  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();

  return repo;

};

export default async function Page() {

  const repo = await getData();

  // Artificial display for loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>Count: {repo.stargazers_count}</div>;

}

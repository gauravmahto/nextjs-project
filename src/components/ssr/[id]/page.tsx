type Repo = {
  name: string;
  stargazers_count: number;
};

const getData = async (): Promise<Repo> => {

  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();

  return repo;

};

export default async function Page({ params }: { params: { id: keyof Repo; }; }) {

  if (!['name', 'stargazers_count'].includes(params.id)) {

    throw new Error('Invalid route param for /ssr/:id');

  }

  const repo = await getData();

  return <div>Count: {repo[params.id]}</div>;

}

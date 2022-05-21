import axios from 'axios';

import { GetStaticProps } from 'next';

export default function Home({ data, date }) {

  return (
    <>
    <h1>{date}</h1>
      <ul>
        {data?.map(repo => {
          return (
            <li key={repo.name}>{repo.name}</li>
          )
        })}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('https://api.github.com/users/Rodrigo001-de/repos')

  return {
    props: {
      data: response.data,
      date: new Date().toISOString(),
    },
    revalidate: 5, // 5 seconds
  };
};

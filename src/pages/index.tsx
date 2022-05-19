import axios from 'axios';
import { useQuery } from 'react-query';

import { GetServerSideProps } from 'next';

type Repository = {
  name: string
};

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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get('https://api.github.com/users/Rodrigo001-de/repos')

  return {
    props: {
      data: response.data,
      date: new Date().toISOString(),
    }
  };
};

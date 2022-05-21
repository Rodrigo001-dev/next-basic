import { GetStaticPaths, GetStaticProps } from "next";

export default function BlogPost({ date }) {
  return (
    <h1>{date}</h1>
  );
};

/*
  toda página no Next que recebe um parâmetro e ela é tambem uma página estática
  é necessário retornar uma função chamada getStaticPaths, essa função retorna
  uma lista de quais posts eu quero gerar de uma maneira estática. E se tem um
  blog com muitos posts provavelmente não vai ser colocado todos os posts nessa
  função
*/
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5, // 5 seconds
  }
};
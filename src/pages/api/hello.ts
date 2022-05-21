// as API routes são rotas, assim como temos no backend, só que ao invés dessas
// rotas retornarem componentes react elas podem executar código que só teriamos
// em um backend
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse ) => {
  await res.unstable_revalidate('/');

  return res.status(200).json({ name: 'RODRIGO' });
};
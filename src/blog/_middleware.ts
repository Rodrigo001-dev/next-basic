/*
  o middleware no backend é utilizado para interceptar requisições e respostas
*/

// a página do blog é estática e mesmo assim eu consigo interceptar a requsição 
// do usuário e se ele não tiver logado redireciono para outra página

import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // o método next() não vai interceptar só vai deixar a requisição ir 
  // return NextResponse.next();

  // o rewrite vai redirecionar o usuário para o rota que eu quero
  return NextResponse.rewrite('/');
};
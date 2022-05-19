import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp;

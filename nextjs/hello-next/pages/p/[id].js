import {useRouter} from 'next/router';
import Layout from '../../comps/MyLayout';

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <h2>this uses query params via `/p/[id].js`for dynamic routing</h2>
      <p>This is the blog post content.</p>
    </Layout>
  )
}

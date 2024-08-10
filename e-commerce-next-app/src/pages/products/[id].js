import axios from 'axios';
import { useRouter } from 'next/router';

const ProductPage = ({ product }) => {
  const router = useRouter();

  // If the page is still loading or the ID doesn't match a product
  if (router.isFallback || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {product.id}</p>
      <p>Product Title: {product.title}</p>
      <p>Product Description: {product.body}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch a list of products to generate the dynamic paths
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const products = response.data;

  // Generate the paths from the product IDs
  const paths = products.map(product => ({
    params: { id: product.id.toString() }, // id must be a string
  }));

  return { paths, fallback: true }; // fallback: true allows for more dynamic routes
}

export async function getStaticProps({ params }) {
  try {
    // Fetch product data based on the ID
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const product = response.data;

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return {
      props: {
        product: null,
      },
    };
  }
}

export default ProductPage;

import React from 'react';
import Layout from '../components/Layout';
import BlogPostList from '../components/BlogPostList/BlogPostList';

export default function Home() {
  return (
    <Layout>
      <BlogPostList />
    </Layout>
  );
}

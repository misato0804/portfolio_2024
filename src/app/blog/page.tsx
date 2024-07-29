import client from '@/lib/contentful/client';

const Blog = async () => {
  let res;
  try {
    res = await client.getEntries({
      content_type: 'post',
    });
  } catch (error) {
    console.error('Error fetching entries:', error);
    return (
      <div>
        Error loading blog posts.
      </div>
    );
  }

  return (
    <div>
      This is blog top
      {/* You can map and render blog posts from `res.items` here */}
    </div>
  );
};

export default Blog;

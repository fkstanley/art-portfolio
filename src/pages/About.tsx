import { Container, Title, Text, SimpleGrid } from "@mantine/core";
import { BlogPost } from "../components/BlogPost";
import Post, {
  meta as firstPostMeta,
} from "../content/blog/my-first-art-post.mdx";

const blogPosts = [
  {
    component: Post,
    meta: firstPostMeta,
  },
];

export const About = () => {
  return (
    <Container size="md">
      <Title order={1} mb="xl">
        Art Blog
      </Title>
      <Text size="lg" mb="xl">
        A space to share updates, thoughts and inspirations.
      </Text>
      <SimpleGrid cols={1} spacing="xl">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} meta={post.meta}>
            <post.component />
          </BlogPost>
        ))}
      </SimpleGrid>
    </Container>
  );
};

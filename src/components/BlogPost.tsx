import { Container, Flex, Stack, Text, Title } from "@mantine/core";
import { MDXProvider } from "@mdx-js/react";
import { ReactNode, ComponentProps } from "react";

interface BlogPostProps {
  children: ReactNode;
  meta: {
    title: string;
    date: string;
    description: string;
  };
}

export const BlogPost = ({ children, meta }: BlogPostProps) => {
  const components = {
    h1: (props: ComponentProps<"h1">) => (
      <Title order={1} style={{ textAlign: "center" }} {...props} />
    ),
    h2: (props: ComponentProps<"h2">) => (
      <Title order={2} style={{ textAlign: "left" }} {...props} />
    ),
    h3: (props: ComponentProps<"h3">) => (
      <Title order={3} style={{ textAlign: "left" }} {...props} />
    ),
    p: (props: Omit<ComponentProps<"p">, "ref">) => (
      <Text size="md" style={{ textAlign: "left" }} {...props} />
    ),
    ul: (props: ComponentProps<"ul">) => (
      <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }} {...props} />
    ),
    ol: (props: ComponentProps<"ol">) => (
      <ol style={{ textAlign: "left", paddingLeft: "1.5rem" }} {...props} />
    ),
    li: (props: ComponentProps<"li">) => (
      <li style={{ marginBottom: "0.5rem" }} {...props} />
    ),
  };

  return (
    <Container
      size="md"
      style={{ borderTop: "1px solid #e0e0e0", paddingTop: "2rem" }}
    >
      <Stack gap="xl">
        <Title order={1} style={{ textAlign: "center" }}>
          {meta.title}
        </Title>
        <Flex direction="row" gap="sm" justify="space-between">
          <Text size="sm" c="dimmed">
            {meta.date}
          </Text>
          <Text size="sm" c="dimmed">
            {meta.description}
          </Text>
        </Flex>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Stack>
    </Container>
  );
};

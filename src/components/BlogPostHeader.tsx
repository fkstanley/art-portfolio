import { Text } from "@mantine/core";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  description: string;
}

export const BlogPostHeader = ({
  title,
  date,
  description,
}: BlogPostHeaderProps) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <Text size="sm" c="dimmed" style={{ textAlign: "left" }}>
        {date}
      </Text>
      <Text size="lg" c="dimmed" style={{ textAlign: "left" }}>
        {description}
      </Text>
    </>
  );
};

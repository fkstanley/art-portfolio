import { Container, Text } from "@mantine/core";

export const Contact = () => {
  return (
    <Container size="sm" py={80} ta="center">
      <Text
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "1.3rem",
          fontWeight: 300,
          color: "var(--text-secondary)",
          letterSpacing: "0.02em",
        }}
      >
        Coming soon...
      </Text>
    </Container>
  );
};

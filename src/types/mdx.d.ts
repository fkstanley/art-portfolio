declare module "*.mdx" {
  import type { ComponentProps, ComponentType } from "react";

  export const meta: {
    title: string;
    date: string;
    description: string;
  };

  const MDXComponent: ComponentType<ComponentProps<"div">>;
  export default MDXComponent;
}

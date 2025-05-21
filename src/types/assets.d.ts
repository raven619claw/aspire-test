declare module "*.svg?url" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import * as React from "react";
  const component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default component;
}

import Content from "./steps.mdx";
import { TalkLayout } from "./talk-layout";
import { MDXProvider } from "@mdx-js/react";
import { useMemo } from "react";
import { getStepsFromMDX } from "./step-parser";

function Wrapper({ children }) {
  const steps = useMemo(() => getStepsFromMDX(children), []);

  const { editorSteps } = steps;
  return (
    <TalkLayout
      editorSteps={editorSteps}
    />
  );
}

const components = {
  wrapper: Wrapper,
};

export function Talk() {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  );
}

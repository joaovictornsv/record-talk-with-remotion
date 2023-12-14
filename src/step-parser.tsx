import { Children } from "react";

export function getStepsFromMDX(children) {
  const splits = [[]];

  Children.forEach(children, (child) => {
    if (child.props.mdxType === "hr") {
      splits.push([]);
    } else {
      const lastSplit = splits[splits.length - 1];
      lastSplit.push(child);
    }
  });

  const editorSteps = splits.map((split) => {
    const editorElement = split.find(
      (child) => child.props.mdxType === "Editor"
    );
    const { code, tab, ...rest } = editorElement.props;

    return {
      code: require(`!!raw-loader!../demo/${code}`).default,
      file: tab,
      ...rest,
    };
  });

  return {
    editorSteps,
  };
}

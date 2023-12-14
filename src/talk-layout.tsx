import {
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MiniEditor } from "@code-hike/mini-editor";
import "./talk.css";

export function TalkLayout({
  editorSteps,
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;

  const currentStepIndex = editorSteps.findIndex(
    (step) => step.start <= t && t < step.end
  );
  const prevStepIndex = Math.max(0, currentStepIndex - 1);
  const currentStep = editorSteps[currentStepIndex];
  const currentStepFirstFrame = currentStep.start * fps;
  const progress = spring({
    frame: frame - currentStepFirstFrame,
    from: prevStepIndex,
    to: currentStepIndex,
    fps,
    config: {
      stiffness: 60,
      damping: 200,
      mass: 1,
    }
  });

  return (
    <Center>
      <main className="grid">
        <div className="slot-1">
          <MiniEditor
            style={{ height: "100%" }}
            steps={editorSteps}
            progress={progress}
          />
        </div>
      </main>
    </Center>
  );
}


function Center({ children }) {
  return (
    <div className="talk-container">
      <div className="talk-scale">{children}</div>
    </div>
  );
}

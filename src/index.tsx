import { registerRoot } from "remotion";
import { Composition } from "remotion";
import { Talk } from "./talk";

function RemotionVideo() {
  return (
    <>
      <Composition
        id="Talk"
        component={Talk}
        durationInFrames={20*60}
        fps={60}
        width={1280}
        height={720}
      />
    </>
  );
}

registerRoot(RemotionVideo);

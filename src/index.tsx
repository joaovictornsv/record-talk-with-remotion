import { registerRoot } from "remotion";
import { Composition } from "remotion";
import { Talk } from "./talk";

function RemotionVideo() {
  return (
    <>
      <Composition
        id="Talk"
        component={Talk}
        durationInFrames={20*30}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
}

registerRoot(RemotionVideo);

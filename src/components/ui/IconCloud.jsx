import { techsIcon } from "../../data";
import { IconCloud } from "../magicui/icon-cloud";

export function IconCloudDemo() {
  const images = techsIcon.map(
    (slug) => slug.icon
  );


  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

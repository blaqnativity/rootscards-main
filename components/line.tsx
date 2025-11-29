import { useRive } from "@rive-app/react-canvas";

export const RiveLogo = () => {
  const { RiveComponent } = useRive({
    src: "/line.riv",
    autoplay: true,
  });

  return (
    <div className="flex justify-center items-center">
      <RiveComponent className="w-80 h-80 md:w-120 md:h-250" />
    </div>
  );
};

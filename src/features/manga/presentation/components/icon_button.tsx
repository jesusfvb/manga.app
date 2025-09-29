import { Image, ImageSourcePropType } from "react-native";
import { IconButton as IconButtonPaper } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";

type IconButtonProps = {
  icon: IconSource | ImageSourcePropType;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <IconButtonPaper
      icon={
        typeof props.icon === "string"
          ? props.icon
          : () => (
              <Image
                source={props.icon as ImageSourcePropType}
                style={{
                  width: 55,
                  height: 55,
                  borderColor: "white",
                  borderWidth: 4,
                  borderRadius: 100,
                }}
              />
            )
      }
      iconColor="white"
      size={30}
      containerColor="#F97316"
      style={{
        width: 57,
        height: 57,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
      }}
    />
  );
}

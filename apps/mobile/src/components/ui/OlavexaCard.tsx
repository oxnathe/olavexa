import {
  StyleSheet,
  View,
  type ViewProps,
} from "react-native";

import {
  COLORS,
  RADIUS,
  SHADOWS,
  SPACING,
} from "../../theme";

type OLAVEXACardProps = ViewProps & {
  elevated?: boolean;
};

export function OLAVEXACard({
  children,
  elevated = false,
  style,
  ...props
}: OLAVEXACardProps) {
  return (
    <View
      {...props}
      style={[
        styles.card,
        elevated && SHADOWS.sm,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
  },
});

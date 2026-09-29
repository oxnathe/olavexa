import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  COLORS,
  RADIUS,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "danger"
  | "ghost";

type ButtonSize = "small" | "medium" | "large";

type OLAVEXAButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export function OLAVEXAButton({
  title,
  onPress,
  variant = "primary",
  size = "large",
  loading = false,
  disabled = false,
  icon,
}: OLAVEXAButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        styles[size],
        styles[variant],
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={
            variant === "primary" || variant === "danger"
              ? COLORS.white
              : COLORS.emerald
          }
        />
      ) : (
        <View style={styles.content}>
          {icon}
          <Text
            style={[
              styles.text,
              variant === "primary" && styles.primaryText,
              variant === "secondary" && styles.secondaryText,
              variant === "outline" && styles.outlineText,
              variant === "danger" && styles.dangerText,
              variant === "ghost" && styles.ghostText,
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.lg,
  },

  small: {
    minHeight: 40,
    paddingHorizontal: SPACING.lg,
  },

  medium: {
    minHeight: 48,
    paddingHorizontal: SPACING.xl,
  },

  large: {
    minHeight: 56,
    paddingHorizontal: SPACING.xxl,
  },

  primary: {
    backgroundColor: COLORS.emerald,
  },

  secondary: {
    backgroundColor: COLORS.navy,
  },

  outline: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderStrong,
  },

  danger: {
    backgroundColor: COLORS.error,
  },

  ghost: {
    backgroundColor: "transparent",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.sm,
  },

  text: {
    ...TYPOGRAPHY.body,
    fontWeight: "800",
  },

  primaryText: {
    color: COLORS.white,
  },

  secondaryText: {
    color: COLORS.white,
  },

  outlineText: {
    color: COLORS.navy,
  },

  dangerText: {
    color: COLORS.white,
  },

  ghostText: {
    color: COLORS.emerald,
  },

  pressed: {
    opacity: 0.82,
  },

  disabled: {
    opacity: 0.45,
  },
});

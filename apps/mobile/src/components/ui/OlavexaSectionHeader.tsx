import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
} from "../../theme";

type OLAVEXASectionHeaderProps = {
  title: string;
  subtitle?: string;
  action?: string;
  onActionPress?: () => void;
};

export function OLAVEXASectionHeader({
  title,
  subtitle,
  action,
  onActionPress,
}: OLAVEXASectionHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>

        {subtitle ? (
          <Text style={styles.subtitle}>{subtitle}</Text>
        ) : null}
      </View>

      {action ? (
        <Text
          onPress={onActionPress}
          style={styles.action}
        >
          {action}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.md,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    ...TYPOGRAPHY.h3,
    color: COLORS.navy,
  },

  subtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  action: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.emerald,
    fontWeight: "800",
    marginLeft: SPACING.md,
  },
});

import type { ReactNode } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Eye,
  Lock,
  Plus,
  Settings,
  ShieldCheck,
} from "lucide-react-native";

import {
  COLORS,
  RADIUS,
  SHADOWS,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";

export default function CardScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>SPEND GLOBALLY</Text>
          <Text style={styles.title}>USD Card</Text>
        </View>

        <Pressable style={styles.iconButton}>
          <Settings size={20} color={COLORS.navy} />
        </Pressable>
      </View>

      <View style={styles.cardVisual}>
        <View style={styles.cardTop}>
          <Text style={styles.cardBrand}>OLAVEXA</Text>
          <Text style={styles.cardType}>VIRTUAL</Text>
        </View>

        <View style={styles.cardMiddle}>
          <Text style={styles.cardNumber}>â€¢â€¢â€¢â€¢  â€¢â€¢â€¢â€¢  â€¢â€¢â€¢â€¢  4826</Text>
        </View>

        <View style={styles.cardBottom}>
          <View>
            <Text style={styles.cardLabel}>CARD HOLDER</Text>
            <Text style={styles.cardName}>WILSON</Text>
          </View>

          <View>
            <Text style={styles.cardLabel}>EXPIRES</Text>
            <Text style={styles.cardName}>12/29</Text>
          </View>

          <Text style={styles.visa}>VISA</Text>
        </View>
      </View>

      <View style={styles.balanceCard}>
        <View>
          <Text style={styles.balanceLabel}>USD CARD BALANCE</Text>
          <Text style={styles.balance}>$0.00</Text>
        </View>

        <Eye size={20} color={COLORS.textMuted} />
      </View>

      <Pressable style={styles.fundButton}>
        <Plus size={19} color={COLORS.white} />
        <Text style={styles.fundButtonText}>FUND CARD</Text>
      </Pressable>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>CARD CONTROLS</Text>
      </View>

      <View style={styles.controlCard}>
        <Control
          icon={<Lock size={20} color={COLORS.emerald} />}
          title="Freeze card"
          description="Temporarily stop all card transactions."
        />

        <Control
          icon={<ShieldCheck size={20} color={COLORS.emerald} />}
          title="Security"
          description="Manage limits and transaction protection."
        />
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeTitle}>USD VIRTUAL CARD</Text>

        <Text style={styles.noticeText}>
          Your OLAVEXA virtual card will allow supported online and global
          payments. Card issuance and funding will be connected to a licensed
          card program provider.
        </Text>
      </View>
    </ScrollView>
  );
}

function Control({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Pressable style={styles.control}>
      <View style={styles.controlIcon}>{icon}</View>

      <View style={styles.controlInfo}>
        <Text style={styles.controlTitle}>{title}</Text>
        <Text style={styles.controlDescription}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: SPACING.xl,
    paddingTop: 58,
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.xxl,
  },

  eyebrow: {
    ...TYPOGRAPHY.label,
    letterSpacing: 1.4,
    color: COLORS.emerald,
  },

  title: {
    ...TYPOGRAPHY.display,
    color: COLORS.navy,
    marginTop: 3,
  },

  iconButton: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.sm,
  },

  cardVisual: {
    height: 215,
    backgroundColor: COLORS.deepNavy,
    borderRadius: RADIUS.xxl,
    padding: SPACING.xl,
    marginBottom: SPACING.lg,
    ...SHADOWS.lg,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardBrand: {
    color: COLORS.white,
    ...TYPOGRAPHY.h3,
    letterSpacing: 1,
  },

  cardType: {
    color: COLORS.emerald,
    ...TYPOGRAPHY.caption,
    letterSpacing: 1.3,
  },

  cardMiddle: {
    flex: 1,
    justifyContent: "center",
  },

  cardNumber: {
    color: COLORS.white,
    ...TYPOGRAPHY.financial,
    letterSpacing: 1.8,
  },

  cardBottom: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: SPACING.xl,
  },

  cardLabel: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.caption,
    marginBottom: SPACING.xs,
  },

  cardName: {
    color: COLORS.white,
    ...TYPOGRAPHY.financialSmall,
  },

  visa: {
    marginLeft: "auto",
    color: COLORS.white,
    fontSize: 19,
    fontWeight: "900",
    fontStyle: "italic",
  },

  balanceCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.sm,
    ...SHADOWS.sm,
  },

  balanceLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    letterSpacing: 1,
  },

  balance: {
    ...TYPOGRAPHY.financialLarge,
    color: COLORS.navy,
    marginTop: SPACING.xs,
  },

  fundButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.sm,
    backgroundColor: COLORS.emerald,
    borderRadius: RADIUS.md,
    paddingVertical: 15,
    marginBottom: SPACING.xxxl,
    ...SHADOWS.sm,
  },

  fundButtonText: {
    color: COLORS.white,
    ...TYPOGRAPHY.label,
  },

  sectionHeader: {
    marginBottom: SPACING.sm,
  },

  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.navy,
    fontSize: 15,
  },

  controlCard: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.lg,
    ...SHADOWS.sm,
  },

  control: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  controlIcon: {
    width: 43,
    height: 43,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.softEmerald,
    alignItems: "center",
    justifyContent: "center",
  },

  controlInfo: {
    flex: 1,
    marginLeft: SPACING.md,
  },

  controlTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.navy,
  },

  controlDescription: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  notice: {
    backgroundColor: COLORS.softEmerald,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginTop: SPACING.lg,
  },

  noticeTitle: {
    ...TYPOGRAPHY.caption,
    letterSpacing: 1,
    color: COLORS.emerald,
    marginBottom: SPACING.sm,
  },

  noticeText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
  },
});

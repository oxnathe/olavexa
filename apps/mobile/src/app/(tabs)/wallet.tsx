import type { ReactNode } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Copy,
  Plus,
  Send,
  WalletCards,
} from "lucide-react-native";

import {
  COLORS,
  RADIUS,
  SHADOWS,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";

const assets = [
  {
    name: "USDC",
    network: "Solana",
    balance: "420.50",
    value: "₦568,245",
  },
  {
    name: "USDT",
    network: "Ethereum",
    balance: "215.20",
    value: "₦289,416",
  },
  {
    name: "SOL",
    network: "Solana",
    balance: "3.84",
    value: "₦92,160",
  },
];

export default function WalletScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>YOUR MONEY</Text>
          <Text style={styles.title}>Wallet</Text>
        </View>

        <View style={styles.iconButton}>
          <WalletCards size={21} color={COLORS.navy} />
        </View>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>TOTAL WALLET VALUE</Text>

        <Text style={styles.balance}>₦1,284,560.00</Text>

        <View style={styles.balanceBottom}>
          <View>
            <Text style={styles.smallLabel}>AVAILABLE</Text>
            <Text style={styles.smallValue}>₦1,274,560</Text>
          </View>

          <View>
            <Text style={styles.smallLabel}>ON HOLD</Text>
            <Text style={styles.smallValue}>₦10,000</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <Action
          icon={<Plus size={20} color={COLORS.emerald} />}
          label="Deposit"
        />

        <Action
          icon={<Send size={20} color={COLORS.emerald} />}
          label="Send"
        />

        <Action
          icon={<ArrowDownToLine size={20} color={COLORS.emerald} />}
          label="Receive"
        />

        <Action
          icon={<ArrowUpFromLine size={20} color={COLORS.emerald} />}
          label="Withdraw"
        />
      </View>

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>CRYPTO ASSETS</Text>

          <Text style={styles.sectionSubtitle}>
            Your supported blockchain assets
          </Text>
        </View>

        <Text style={styles.seeAll}>See all</Text>
      </View>

      {assets.map((asset) => (
        <View key={asset.name} style={styles.assetCard}>
          <View style={styles.assetIcon}>
            <Text style={styles.assetIconText}>{asset.name[0]}</Text>
          </View>

          <View style={styles.assetInfo}>
            <Text style={styles.assetName}>{asset.name}</Text>
            <Text style={styles.assetNetwork}>{asset.network}</Text>
          </View>

          <View style={styles.assetRight}>
            <Text style={styles.assetBalance}>{asset.balance}</Text>
            <Text style={styles.assetValue}>{asset.value}</Text>
          </View>
        </View>
      ))}

      <View style={styles.addressCard}>
        <View style={styles.addressHeader}>
          <Text style={styles.addressTitle}>SOLANA WALLET</Text>

          <Pressable>
            <Copy size={17} color={COLORS.emerald} />
          </Pressable>
        </View>

        <Text style={styles.address}>7xKX...9pQ2</Text>

        <Text style={styles.addressHint}>
          Your deposit address for supported Solana assets.
        </Text>
      </View>
    </ScrollView>
  );
}

function Action({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <Pressable style={styles.action}>
      <View style={styles.actionIcon}>{icon}</View>
      <Text style={styles.actionLabel}>{label}</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
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

  balanceCard: {
    backgroundColor: COLORS.deepNavy,
    borderRadius: RADIUS.xxl,
    padding: SPACING.xxl,
    marginBottom: SPACING.lg,
    ...SHADOWS.md,
  },

  balanceLabel: {
    ...TYPOGRAPHY.caption,
    letterSpacing: 1.2,
    color: COLORS.textMuted,
    marginBottom: SPACING.sm,
  },

  balance: {
    ...TYPOGRAPHY.financialLarge,
    color: COLORS.white,
    marginBottom: SPACING.xxl,
  },

  balanceBottom: {
    flexDirection: "row",
    gap: SPACING.huge,
  },

  smallLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textMuted,
    marginBottom: SPACING.xs,
  },

  smallValue: {
    ...TYPOGRAPHY.financialSmall,
    color: COLORS.white,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.xxxl,
  },

  action: {
    alignItems: "center",
    width: "23%",
  },

  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.sm,
    ...SHADOWS.sm,
  },

  actionLabel: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.navy,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.md,
  },

  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.navy,
    fontSize: 15,
  },

  sectionSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  seeAll: {
    ...TYPOGRAPHY.label,
    color: COLORS.emerald,
  },

  assetCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.sm,
  },

  assetIcon: {
    width: 43,
    height: 43,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.softEmerald,
    alignItems: "center",
    justifyContent: "center",
  },

  assetIconText: {
    ...TYPOGRAPHY.financial,
    color: COLORS.emerald,
  },

  assetInfo: {
    flex: 1,
    marginLeft: SPACING.md,
  },

  assetName: {
    ...TYPOGRAPHY.financialSmall,
    color: COLORS.navy,
  },

  assetNetwork: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  assetRight: {
    alignItems: "flex-end",
  },

  assetBalance: {
    ...TYPOGRAPHY.financialSmall,
    color: COLORS.navy,
  },

  assetValue: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  addressCard: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginTop: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.sm,
  },

  addressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addressTitle: {
    ...TYPOGRAPHY.caption,
    letterSpacing: 1.1,
    color: COLORS.textSecondary,
  },

  address: {
    ...TYPOGRAPHY.financial,
    color: COLORS.navy,
    marginTop: SPACING.md,
  },

  addressHint: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
  },
});
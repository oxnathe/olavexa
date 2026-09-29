import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Eye,
  Bell,
  Plus,
  Send,
  ArrowDownToLine,
} from "lucide-react-native";

import {
  COLORS,
  RADIUS,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>OLAVEXA</Text>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.name}>Wilson</Text>
          </View>

          <View style={styles.headerActions}>
            <View style={styles.iconButton}>
              <Bell size={21} color={COLORS.navy} />
            </View>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>W</Text>
            </View>
          </View>
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.balanceTop}>
            <Text style={styles.balanceLabel}>TOTAL BALANCE</Text>

            <Eye
              size={19}
              color="rgba(255,255,255,0.75)"
            />
          </View>

          <Text style={styles.balance}>â‚¦1,284,560.00</Text>

          <View style={styles.performance}>
            <Text style={styles.performanceValue}>+â‚¦24,820</Text>
            <Text style={styles.performancePercent}>+1.96%</Text>
            <Text style={styles.performancePeriod}>today</Text>
          </View>
        </View>

        <View style={styles.actionRow}>
          <ActionButton
            icon={<Plus size={19} color={COLORS.white} />}
            label="Deposit"
          />

          <ActionButton
            icon={<Send size={18} color={COLORS.white} />}
            label="Send"
          />

          <ActionButton
            icon={
              <ArrowDownToLine
                size={18}
                color={COLORS.white}
              />
            }
            label="Receive"
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>QUICK TRADE</Text>
            <Text style={styles.sectionLink}>Trade</Text>
          </View>

          <View style={styles.quickTrade}>
            <Text style={styles.quickTradeLabel}>
              Paste token contract address
            </Text>

            <View style={styles.contractBox}>
              <Text style={styles.contractPlaceholder}>
                7xKX...9pQ
              </Text>
            </View>

            <View style={styles.searchButton}>
              <Text style={styles.searchButtonText}>
                SEARCH TOKEN
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>YOUR ASSETS</Text>
            <Text style={styles.sectionLink}>See all</Text>
          </View>

          <Asset
            symbol="USDC"
            name="USD Coin"
            value="â‚¦420,500"
            change="+2.40%"
          />

          <Asset
            symbol="USDT"
            name="Tether"
            value="â‚¦280,200"
            change="+0.10%"
          />

          <Asset
            symbol="SOL"
            name="Solana"
            value="â‚¦165,800"
            change="+8.20%"
          />

          <Asset
            symbol="BONK"
            name="Bonk"
            value="â‚¦92,400"
            change="+38.40%"
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              OPEN POSITIONS
            </Text>
            <Text style={styles.sectionLink}>See all</Text>
          </View>

          <View style={styles.positionCard}>
            <View>
              <Text style={styles.positionSymbol}>BONK</Text>

              <Text style={styles.positionSubtitle}>
                Invested â‚¦10,000
              </Text>
            </View>

            <View style={styles.positionRight}>
              <Text style={styles.positionValue}>
                â‚¦13,842
              </Text>

              <Text style={styles.positionProfit}>
                +â‚¦3,842 Â· +38.42%
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function ActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <View style={styles.actionButton}>
      <View style={styles.actionIcon}>{icon}</View>
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
  );
}

function Asset({
  symbol,
  name,
  value,
  change,
}: {
  symbol: string;
  name: string;
  value: string;
  change: string;
}) {
  return (
    <View style={styles.assetRow}>
      <View style={styles.assetIcon}>
        <Text style={styles.assetIconText}>
          {symbol.slice(0, 1)}
        </Text>
      </View>

      <View style={styles.assetInfo}>
        <Text style={styles.assetSymbol}>{symbol}</Text>
        <Text style={styles.assetName}>{name}</Text>
      </View>

      <View style={styles.assetValues}>
        <Text style={styles.assetValue}>{value}</Text>
        <Text style={styles.assetChange}>{change}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingTop: 62,
    paddingHorizontal: SPACING.xl,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.xxl,
  },

  brand: {
    color: COLORS.emerald,
    ...TYPOGRAPHY.label,
    letterSpacing: 2,
    marginBottom: SPACING.sm,
  },

  greeting: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.body,
    marginBottom: 2,
  },

  name: {
    color: COLORS.navy,
    ...TYPOGRAPHY.h1,
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: COLORS.white,
    ...TYPOGRAPHY.body,
    fontWeight: "800",
  },

  balanceCard: {
    backgroundColor: COLORS.navy,
    borderRadius: RADIUS.xxl,
    padding: SPACING.xxl,
    marginBottom: SPACING.lg,
  },

  balanceTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  balanceLabel: {
    color: "rgba(255,255,255,0.65)",
    ...TYPOGRAPHY.tradingLabel,
    letterSpacing: 1.4,
  },

  balance: {
    color: COLORS.white,
    ...TYPOGRAPHY.financialLarge,
    marginTop: SPACING.md,
    letterSpacing: -0.8,
  },

  performance: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SPACING.sm,
    gap: SPACING.sm,
  },

  performanceValue: {
    color: COLORS.emerald,
    ...TYPOGRAPHY.financialSmall,
  },

  performancePercent: {
    color: COLORS.emerald,
    ...TYPOGRAPHY.financialSmall,
  },

  performancePeriod: {
    color: "rgba(255,255,255,0.55)",
    ...TYPOGRAPHY.bodySmall,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.xxxl,
  },

  actionButton: {
    alignItems: "center",
    width: "31%",
  },

  actionIcon: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.emerald,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.sm,
  },

  actionLabel: {
    color: COLORS.navy,
    ...TYPOGRAPHY.bodySmall,
    fontWeight: "700",
  },

  section: {
    marginBottom: SPACING.xxxl,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SPACING.md,
  },

  sectionTitle: {
    color: COLORS.navy,
    ...TYPOGRAPHY.tradingLabel,
    letterSpacing: 1.1,
  },

  sectionLink: {
    color: COLORS.emerald,
    ...TYPOGRAPHY.bodySmall,
    fontWeight: "800",
  },

  quickTrade: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  quickTradeLabel: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.bodySmall,
    marginBottom: SPACING.sm,
  },

  contractBox: {
    height: 48,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.softWhite,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: "center",
    paddingHorizontal: SPACING.md,
  },

  contractPlaceholder: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.body,
  },

  searchButton: {
    height: 46,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.sm,
  },

  searchButtonText: {
    color: COLORS.white,
    ...TYPOGRAPHY.tradingLabel,
    letterSpacing: 0.8,
  },

  assetRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  assetIcon: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.softEmerald,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },

  assetIconText: {
    color: COLORS.emerald,
    ...TYPOGRAPHY.body,
    fontWeight: "900",
  },

  assetInfo: {
    flex: 1,
  },

  assetSymbol: {
    color: COLORS.navy,
    ...TYPOGRAPHY.body,
    fontWeight: "800",
  },

  assetName: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.caption,
    marginTop: 2,
  },

  assetValues: {
    alignItems: "flex-end",
  },

  assetValue: {
    color: COLORS.navy,
    ...TYPOGRAPHY.financialSmall,
  },

  assetChange: {
    color: COLORS.emerald,
    ...TYPOGRAPHY.caption,
    marginTop: 2,
  },

  positionCard: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  positionSymbol: {
    color: COLORS.navy,
    ...TYPOGRAPHY.financial,
    fontWeight: "900",
  },

  positionSubtitle: {
    color: COLORS.textSecondary,
    ...TYPOGRAPHY.caption,
    marginTop: SPACING.xs,
  },

  positionRight: {
    alignItems: "flex-end",
  },

  positionValue: {
    color: COLORS.navy,
    ...TYPOGRAPHY.financial,
    fontWeight: "900",
  },

  positionProfit: {
    color: COLORS.profit,
    ...TYPOGRAPHY.caption,
    fontWeight: "800",
    marginTop: SPACING.xs,
  },
});

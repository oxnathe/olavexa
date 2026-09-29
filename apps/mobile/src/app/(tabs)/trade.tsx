import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AlertTriangle,
  Search,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react-native";

import {
  COLORS,
  RADIUS,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";

const TOKENS = ["SOL", "USDC", "USDT", "BONK"];

export default function TradeScreen() {
  const [mode, setMode] = useState<"BUY" | "SELL">("BUY");
  const [token, setToken] = useState("SOL");
  const [amount, setAmount] = useState("");
  const [contract, setContract] = useState("");

  const handleTrade = () => {
    if (!amount) {
      Alert.alert(
        "Enter amount",
        "Please enter the amount you want to trade."
      );
      return;
    }

    Alert.alert(
      "Demo Trade",
      `${mode} ${token} with ₦${amount}\n\nReal execution will be connected later.`
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>MARKET</Text>
          <Text style={styles.title}>Trade</Text>
        </View>

        <View style={styles.walletBadge}>
          <Wallet size={17} color={COLORS.emerald} />
          <Text style={styles.walletBalance}>₦1.28m</Text>
        </View>
      </View>

      <View style={styles.modeContainer}>
        <Pressable
          onPress={() => setMode("BUY")}
          style={[
            styles.modeButton,
            mode === "BUY" && styles.modeButtonActive,
          ]}
        >
          <Text
            style={[
              styles.modeText,
              mode === "BUY" && styles.modeTextActive,
            ]}
          >
            BUY
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setMode("SELL")}
          style={[
            styles.modeButton,
            mode === "SELL" && styles.modeButtonActiveSell,
          ]}
        >
          <Text
            style={[
              styles.modeText,
              mode === "SELL" && styles.modeTextActive,
            ]}
          >
            SELL
          </Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>SELECT TOKEN</Text>

        <View style={styles.tokenGrid}>
          {TOKENS.map((item) => (
            <Pressable
              key={item}
              onPress={() => setToken(item)}
              style={[
                styles.tokenButton,
                token === item && styles.tokenButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.tokenText,
                  token === item && styles.tokenTextActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionLabel}>AMOUNT</Text>

        <View style={styles.amountBox}>
          <Text style={styles.currency}>₦</Text>

          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            placeholderTextColor={COLORS.textMuted}
            keyboardType="decimal-pad"
            style={styles.amountInput}
          />

          <Text style={styles.ngn}>NGN</Text>
        </View>

        <View style={styles.quickAmounts}>
          {["2,000", "5,000", "10,000", "25,000"].map((value) => (
            <Pressable
              key={value}
              onPress={() => setAmount(value.replace(",", ""))}
              style={styles.quickAmount}
            >
              <Text style={styles.quickAmountText}>₦{value}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.quote}>
          <View>
            <Text style={styles.quoteLabel}>YOU RECEIVE</Text>
            <Text style={styles.quoteValue}>
              ≈ 0.0000 {token}
            </Text>
          </View>

          <View style={styles.liveBadge}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Network</Text>
            <Text style={styles.detailValue}>Solana</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Estimated fee</Text>
            <Text style={styles.detailValue}>—</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Price impact</Text>
            <Text style={styles.detailValue}>—</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Slippage</Text>
            <Text style={styles.detailValue}>0.50%</Text>
          </View>
        </View>

        <Pressable
          onPress={handleTrade}
          style={styles.tradeButton}
        >
          <Zap size={19} color={COLORS.white} />

          <Text style={styles.tradeButtonText}>
            {mode === "BUY" ? "REVIEW BUY" : "REVIEW SELL"}
          </Text>
        </Pressable>
      </View>

      <View style={styles.quickTradeHeader}>
        <View>
          <Text style={styles.sectionTitle}>QUICK TRADE</Text>

          <Text style={styles.sectionSubtitle}>
            Trade directly using a token contract address.
          </Text>
        </View>

        <Search size={21} color={COLORS.emerald} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionLabel}>
          CONTRACT ADDRESS
        </Text>

        <View style={styles.contractBox}>
          <TextInput
            value={contract}
            onChangeText={setContract}
            placeholder="Paste token contract address"
            placeholderTextColor={COLORS.textMuted}
            autoCapitalize="none"
            style={styles.contractInput}
          />
        </View>

        <Pressable
          onPress={() =>
            Alert.alert(
              "Token Search",
              "Contract-address token discovery will be connected to the market-data engine later."
            )
          }
          style={styles.searchButton}
        >
          <Search size={18} color={COLORS.navy} />

          <Text style={styles.searchButtonText}>
            SEARCH TOKEN
          </Text>
        </Pressable>
      </View>

      <View style={styles.warning}>
        <AlertTriangle
          size={20}
          color={COLORS.warning}
        />

        <View style={styles.warningContent}>
          <Text style={styles.warningTitle}>
            Trading involves risk
          </Text>

          <Text style={styles.warningText}>
            Token prices can move rapidly. Low-liquidity assets
            may experience significant price impact or execution
            differences.
          </Text>
        </View>
      </View>

      <View style={styles.security}>
        <ShieldCheck
          size={19}
          color={COLORS.emerald}
        />

        <Text style={styles.securityText}>
          Risk checks will run before real trade execution.
        </Text>
      </View>
    </ScrollView>
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
    ...TYPOGRAPHY.tradingLabel,
    letterSpacing: 1.5,
    color: COLORS.emerald,
    marginBottom: SPACING.xs,
  },

  title: {
    ...TYPOGRAPHY.h1,
    color: COLORS.navy,
  },

  walletBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.sm,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.md,
  },

  walletBalance: {
    ...TYPOGRAPHY.financialSmall,
    color: COLORS.navy,
  },

  modeContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.border,
    padding: SPACING.xs,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.lg,
  },

  modeButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 13,
    borderRadius: RADIUS.sm,
  },

  modeButtonActive: {
    backgroundColor: COLORS.emerald,
  },

  modeButtonActiveSell: {
    backgroundColor: COLORS.error,
  },

  modeText: {
    ...TYPOGRAPHY.label,
    color: COLORS.textSecondary,
  },

  modeTextActive: {
    color: COLORS.white,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.xl,
  },

  sectionLabel: {
    ...TYPOGRAPHY.tradingLabel,
    letterSpacing: 1.2,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },

  tokenGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SPACING.sm,
    marginBottom: SPACING.xl,
  },

  tokenButton: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: 10,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  tokenButtonActive: {
    backgroundColor: COLORS.navy,
    borderColor: COLORS.navy,
  },

  tokenText: {
    ...TYPOGRAPHY.bodySmall,
    fontWeight: "800",
    color: COLORS.textSecondary,
  },

  tokenTextActive: {
    color: COLORS.white,
  },

  amountBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    height: 64,
    marginBottom: SPACING.sm,
  },

  currency: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.navy,
  },

  amountInput: {
    flex: 1,
    ...TYPOGRAPHY.financial,
    fontSize: 24,
    color: COLORS.navy,
    paddingHorizontal: SPACING.sm,
  },

  ngn: {
    ...TYPOGRAPHY.label,
    color: COLORS.textSecondary,
  },

  quickAmounts: {
    flexDirection: "row",
    gap: 7,
    marginBottom: SPACING.xl,
  },

  quickAmount: {
    backgroundColor: COLORS.softWhite,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.sm,
  },

  quickAmountText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.navy,
  },

  quote: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.successBackground,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },

  quoteLabel: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },

  quoteValue: {
    ...TYPOGRAPHY.financial,
    color: COLORS.navy,
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.xs,
  },

  liveDot: {
    width: 7,
    height: 7,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.emerald,
  },

  liveText: {
    ...TYPOGRAPHY.tradingLabel,
    color: COLORS.emerald,
  },

  details: {
    marginBottom: SPACING.lg,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
  },

  detailLabel: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
  },

  detailValue: {
    ...TYPOGRAPHY.bodySmall,
    fontWeight: "700",
    color: COLORS.navy,
  },

  tradeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.sm,
    backgroundColor: COLORS.emerald,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.lg,
  },

  tradeButtonText: {
    color: COLORS.white,
    ...TYPOGRAPHY.tradingLabel,
    letterSpacing: 0.4,
  },

  quickTradeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.md,
  },

  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.navy,
  },

  sectionSubtitle: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginTop: 3,
    maxWidth: 290,
  },

  contractBox: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    height: 56,
    paddingHorizontal: SPACING.md,
    justifyContent: "center",
    marginBottom: SPACING.sm,
  },

  contractInput: {
    ...TYPOGRAPHY.body,
    color: COLORS.navy,
  },

  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.sm,
    backgroundColor: COLORS.softEmerald,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
  },

  searchButtonText: {
    ...TYPOGRAPHY.tradingLabel,
    color: COLORS.navy,
  },

  warning: {
    flexDirection: "row",
    gap: SPACING.md,
    backgroundColor: COLORS.warningBackground,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },

  warningContent: {
    flex: 1,
  },

  warningTitle: {
    ...TYPOGRAPHY.body,
    fontWeight: "800",
    color: COLORS.navy,
    marginBottom: SPACING.xs,
  },

  warningText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
  },

  security: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.sm,
    paddingVertical: SPACING.sm,
  },

  securityText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
  },
});
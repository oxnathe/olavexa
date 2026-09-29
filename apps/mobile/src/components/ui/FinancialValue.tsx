import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  COLORS,
  TYPOGRAPHY,
} from "../../theme";

type FinancialValueProps = {
  value: string;
  change?: string;
  positive?: boolean;
  large?: boolean;
};

export function FinancialValue({
  value,
  change,
  positive = true,
  large = false,
}: FinancialValueProps) {
  return (
    <View>
      <Text
        style={[
          styles.value,
          large && styles.largeValue,
        ]}
      >
        {value}
      </Text>

      {change ? (
        <Text
          style={[
            styles.change,
            {
              color: positive
                ? COLORS.profit
                : COLORS.loss,
            },
          ]}
        >
          {positive ? "+" : ""}
          {change}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  value: {
    ...TYPOGRAPHY.financial,
    color: COLORS.navy,
  },

  largeValue: {
    ...TYPOGRAPHY.financialLarge,
  },

  change: {
    ...TYPOGRAPHY.financialSmall,
    marginTop: 4,
  },
});
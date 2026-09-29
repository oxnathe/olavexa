import type { ReactNode } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  Bell,
  ChevronRight,
  CircleHelp,
  FileCheck,
  History,
  LockKeyhole,
  Moon,
  Receipt,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react-native";

import {
  COLORS,
  RADIUS,
  SHADOWS,
  SPACING,
  TYPOGRAPHY,
} from "../../theme";

export default function MoreScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>OLAVEXA</Text>
        <Text style={styles.title}>More</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>W</Text>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Wilson</Text>
          <Text style={styles.email}>Account holder</Text>
        </View>

        <ChevronRight size={19} color={COLORS.textSecondary} />
      </View>

      <Text style={styles.sectionTitle}>ACCOUNT</Text>

      <View style={styles.menuCard}>
        <MenuItem
          icon={<User size={20} color={COLORS.emerald} />}
          title="Profile"
          description="Personal information"
        />

        <MenuItem
          icon={<FileCheck size={20} color={COLORS.emerald} />}
          title="KYC verification"
          description="Identity and verification status"
        />

        <MenuItem
          icon={<ShieldCheck size={20} color={COLORS.emerald} />}
          title="Security"
          description="2FA, devices and transaction security"
        />
      </View>

      <Text style={styles.sectionTitle}>SERVICES</Text>

      <View style={styles.menuCard}>
        <MenuItem
          icon={<Receipt size={20} color={COLORS.emerald} />}
          title="Bills"
          description="Airtime, data, electricity and more"
        />

        <MenuItem
          icon={<History size={20} color={COLORS.emerald} />}
          title="Activity"
          description="Transactions and account history"
        />

        <MenuItem
          icon={<Bell size={20} color={COLORS.emerald} />}
          title="Notifications"
          description="Alerts and updates"
        />
      </View>

      <Text style={styles.sectionTitle}>PREFERENCES</Text>

      <View style={styles.menuCard}>
        <MenuItem
          icon={<Moon size={20} color={COLORS.emerald} />}
          title="Appearance"
          description="Light, dark or system theme"
        />

        <MenuItem
          icon={<Settings size={20} color={COLORS.emerald} />}
          title="Settings"
          description="App preferences"
        />
      </View>

      <Text style={styles.sectionTitle}>SUPPORT</Text>

      <View style={styles.menuCard}>
        <MenuItem
          icon={<CircleHelp size={20} color={COLORS.emerald} />}
          title="Help & Support"
          description="Get assistance"
        />

        <MenuItem
          icon={<LockKeyhole size={20} color={COLORS.emerald} />}
          title="Privacy & Security"
          description="Policies and security information"
        />
      </View>

      <Text style={styles.version}>OLAVEXA â€¢ MOBILE APP</Text>
    </ScrollView>
  );
}

function MenuItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Pressable style={styles.menuItem}>
      <View style={styles.menuIcon}>{icon}</View>

      <View style={styles.menuInfo}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuDescription}>{description}</Text>
      </View>

      <ChevronRight size={18} color={COLORS.textSecondary} />
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
    marginBottom: SPACING.xxl,
  },

  eyebrow: {
    ...TYPOGRAPHY.label,
    letterSpacing: 1.5,
    color: COLORS.emerald,
  },

  title: {
    ...TYPOGRAPHY.display,
    color: COLORS.navy,
    marginTop: 3,
  },

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.xxxl,
    ...SHADOWS.sm,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.navy,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: COLORS.white,
    ...TYPOGRAPHY.h3,
  },

  profileInfo: {
    flex: 1,
    marginLeft: SPACING.md,
  },

  name: {
    ...TYPOGRAPHY.financialSmall,
    color: COLORS.navy,
  },

  email: {
    ...TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  sectionTitle: {
    ...TYPOGRAPHY.label,
    letterSpacing: 1.2,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },

  menuCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.xxl,
    ...SHADOWS.sm,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  menuIcon: {
    width: 42,
    height: 42,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.softEmerald,
    alignItems: "center",
    justifyContent: "center",
  },

  menuInfo: {
    flex: 1,
    marginLeft: SPACING.md,
  },

  menuTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.navy,
  },

  menuDescription: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    marginTop: 3,
  },

  version: {
    textAlign: "center",
    ...TYPOGRAPHY.caption,
    letterSpacing: 1,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
});

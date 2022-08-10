import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export type Guild = {
	id: Snowflake;
	name: string;
	icon: string | null;
	icon_hash?: string | null;
	splash: string | null;
	discovery_splash: string | null;
	owner?: boolean;
	owner_id: Snowflake;
	permissions?: string;
	afk_channel_id: Snowflake | null;
	afk_timeout: number;
	widget_enabled?: boolean;
	widget_channel_id?: Snowflake | null;
	verification_level: VerificationLevel;
	default_message_notifications: MessageNotificationLevel;
	explicit_content_filter: ExplicitContentFilterLevel;
	roles: Array<import("../Topics/Permissions").Role>;
	emojis: Array<import("./Emoji").Emoji>;
	features: Array<GuildFeature>;
	mfa_level: MFALevel;
	application_id: Snowflake | null;
	system_channel_id: Snowflake | null;
	system_channel_flags: number;
	rules_channel_id: Snowflake | null;
	joined_at?: string;
	large?: boolean;
	unavailable?: boolean;
	member_count?: number;
	voice_states?: Array<import("./Voice").VoiceState>;
	members?: Array<Member>;
	channels?: Array<import("./Channel").GuildChannel>;
	threads?: Array<import("./Channel").ThreadChannel>;
	presences?: Array<import("../Topics/Gateway").PresenceUpdate>;
	max_presences?: number | null;
	max_members?: number;
	vanity_url_code: string | null;
	description: string | null;
	banner: string | null;
	premium_tier: PremiumTier;
	premium_subscription_count?: number;
	preferred_locale: import("../Reference").Locale;
	public_updates_channel_id: Snowflake | null;
	max_video_channel_users?: number;
	approximate_member_count?: number;
	approximate_presence_count?: number;
	welcome_screen?: WelcomeScreen;
	nsfw_level: NSFWLevel;
	stage_instances?: Array<import("./StageInstance").StageInstance>;
	stickers?: Array<import("./Sticker").Sticker>;
	guild_scheduled_events?: Array<import("./GuildScheduledEvent").GuildScheduledEvent>;
	premium_progress_bar_enabled: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export type VerificationLevel = 0 | 1 | 2 | 3 | 4;

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export type MessageNotificationLevel = 0 | 1;

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export type ExplicitContentFilterLevel = 0 | 1 | 2;

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export type GuildFeature = "ANIMATION_BANNER" | "ANIMATED_ICON" | "AUTO_MODERATION" | "BANNER" | "COMMUNITY" | "DISCOVERABLE" | "FEATURABLE" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "MONETIZATION_ENABLED" | "MORE_STICKERS" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "PRIVATE_THREADS" | "ROLE_ICONS" | "SEVEN_DAY_THREAD_ARCHIVE" | "THREE_DAY_THREAD_ARCHIVE" | "TICKETED_EVENTS_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED";

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export type MFALevel = 0 | 1;

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 */
export type Member = {
	user?: import("./User").User;
	nick?: string | null;
	avatar?: string | null;
	roles?: Array<Snowflake>;
	joined_at: string;
	premium_since?: string | null;
	deaf: boolean;
	mute: boolean;
	pending?: boolean;
	permissions?: string;
	communication_disabled_until?: string | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export type PremiumTier = 0 | 1 | 2 | 3;

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
 */
export type WelcomeScreen = {
	description: string | null;
	welcome_channels: Array<WelcomeScreenChannel>;
}

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export type WelcomeScreenChannel = {
	channel_id: Snowflake;
	description: string;
	emoji_id: Snowflake | null;
	emoji_name: string | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
 */
export type NSFWLevel = 0 | 1 | 2 | 3;

/**
 * https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure
 */
export type GuildPreview = Required<Pick<Guild, "id" | "name" | "icon" | "splash" | "discovery_splash" | "emojis" | "features" | "approximate_member_count" | "approximate_presence_count" | "description" | "stickers">>;

/**
 * https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure
 */
export type GuildWidgetSettings = {
	enabled: boolean;
	channel_id: Snowflake | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-object-get-guild-widget-structure
 */
export type GuildWidget = {
	id: Snowflake;
	name: string;
	instant_invite: string | null;
	channels: Array<import("./Channel").VoiceChannel | import("./Channel").StageChannel>;
	members: Array<import("./User").User>;
	presence_count: number;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export type Integration = {
	id: Snowflake;
	name: string;
	type: "twitch" | "youtube" | "discord";
	enabled?: boolean;
	syncing?: boolean;
	role_id?: Snowflake;
	enable_emoticons?: boolean;
	expire_behavior?: IntegrationExpireBehavior;
	expire_grace_period?: number;
	user?: import("./User").User;
	account: IntegrationAccount;
	synced_at?: string;
	subscriber_count?: number;
	revoked?: boolean;
	application?: IntegrationApplication;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
 */
export type IntegrationExpireBehavior = 0 | 1;

/**
 * https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure
 */
export type IntegrationAccount = {
	id: string;
	name: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure
 */
export type IntegrationApplication = {
	id: Snowflake;
	name: string;
	icon: string | null;
	description: string;
	summary: string;
	bot?: import("./User").User;
}

/**
 * https://discord.com/developers/docs/resources/guild#ban-object-ban-structure
 */
export type Ban = {
	reason: string | null;
	user: import("./User").User;
}

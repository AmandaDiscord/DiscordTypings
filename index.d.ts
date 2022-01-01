export type Snowflake = string;

/*
 * https://discord.com/developers/docs/topics/gateway#message-delete
 */

export type MessageDeleteData = {
	id: Snowflake;
	guild_id?: Snowflake;
	channel_id: Snowflake;
}

/*
 * https://discord.com/developers/docs/topics/gateway#message-reaction-add
 */

export type MessageReactionAddData = {
	user_id: Snowflake;
	channel_id: Snowflake;
	message_id: Snowflake;
	guild_id?: Snowflake;
	member: MemberData & { user: UserData };
	emoji: ReactionEmojiData;
}

/*
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove
 */

export type MessageReactionRemoveData = {
	user_id: Snowflake;
	channel_id: Snowflake;
	message_id: Snowflake;
	guild_id?: Snowflake;
	emoji: ReactionEmojiData;
}

/*
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all
 */

export type MessageReactionRemoveAllData = {
	channel_id: Snowflake;
	message_id: Snowflake;
	guild_id?: Snowflake;
}

/*
 * https://discord.com/developers/docs/topics/gateway#guild-emojis-update
 */

export type GuildEmojisUpdateData = {
	guild_id: Snowflake;
	emojis: Array<EmojiData>;
}

/*
 * https://discord.com/developers/docs/resources/voice#voice-state-object
 */

export type VoiceStateData = {
	guild_id?: Snowflake;
	channel_id: Snowflake | null;
	user_id: Snowflake;
	member?: MemberData & { user: UserData };
	session_id: string;
	deaf: boolean;
	mute: boolean;
	self_deaf: boolean;
	self_mute: true;
	self_video: true;
	self_stream?: boolean;
	suppress: boolean;
	request_to_speak_timestamp: string | null;
}

/*
 * https://discord.com/developers/docs/topics/gateway#channel-pins-update
 */

export type ChannelPinData = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	last_pin_timestamp: string | null;
}

/*
 * https://discord.com/developers/docs/topics/gateway#ready
 */

export type ReadyData = {
	user: UserData;
	guilds: Array<{ id: string, unavailable: boolean }>;
	session_id: string;
	shard?: Array<number>;
	application: { flags: number, id: string };

	_trace: Array<string>;
	private_channels: Array<any>;
	presences: Array<PresenceData>;
	relationships: Array<any>;
}

/*
 * https://discord.com/developers/docs/topics/gateway#resume
 */

export type ResumeData = {
	token: string;
	session_id: string;
	seq: number;

	_trace: Array<string>;
}

/*
 * https://discord.com/developers/docs/topics/gateway#thread-list-sync
 */

export type ThreadListSyncData = {
	guild_id: Snowflake;
	channel_ids?: Array<Snowflake>;
	threads: Array<ThreadChannelData>;
	members: Array<ThreadMemberData>;
}

/*
 * https://discord.com/developers/docs/topics/gateway#thread-members-update
 */

export type ThreadMembersUpdateData = {
	id: Snowflake;
	guild_id: Snowflake;
	member_count: number;
	added_members?: Array<ThreadMemberData>;
	removed_member_ids?: Array<Snowflake>;
}

/*
 * https://discord.com/developers/docs/resources/channel#thread-member-object
 */

export type ThreadMemberData = {
	id?: Snowflake;
	user_id?: Snowflake;
	join_timestamp: string;
	flags: number;
}

/*
 * https://discord.com/developers/docs/resources/channel#message-object
 */

export type MessageData = {
	id: Snowflake;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	author: UserData;
	member?: MemberData;
	content: string;
	timestamp: string;
	edited_timestamp: string | null;
	tts: boolean;
	mention_everyone: boolean;
	mentions: Array<UserData & { member: MemberData }>;
	mention_roles: Array<Snowflake>;
	mention_channels?: Array<ChannelMentionData>;
	attachments: Array<AttachmentData>;
	embeds: Array<EmbedData>;
	reactions?: Array<ReactionData>;
	nonce: number | string;
	pinned: boolean;
	webhook_id?: Snowflake;
	/*
 * https://discord.com/developers/docs/resources/channel#message-object-message-types
 */
	type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 ;
	activity?: MessageActivityData;
	application?: ApplicationData;
	application_id?: Snowflake;
	message_reference?: MessageReferenceData | null;
	flags?: number;
	referenced_message?: MessageData | null;
	interaction?: MessageInteractionData;
	thread?: ThreadChannelData;
	components?: Array<MessageComponentData>;
	sticker_items?: Array<StickerItemData>;
	stickers?: Array<StickerData>;
}

/*
 * https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure
 */

export type MessageInteractionData = {
	id: Snowflake;
	type: InteractionType;
	name: string;
	user: UserData;
}

/*
 * https://discord.com/developers/docs/resources/guild#guild-member-object
 */

export type MemberData = {
	user?: UserData;
	nick?: string | null;
	avatar?: string | null;
	roles: Array<Snowflake>;
	joined_at: string;
	premium_since?: string | null;
	deaf: boolean;
	mute: boolean;
	pending?: boolean;
	permissions?: string;
	communication_disabled_until?: string | null;

	hoisted_role: Snowflake;
}

/*
 * https://discord.com/developers/docs/resources/user#user-object
 */

export type UserData = {
	id: Snowflake;
	username: string;
	discriminator: string;
	avatar: string | null;
	bot?: boolean;
	system?: boolean;
	mfa_enabled?: boolean;
	banner?: string | null;
	accent_color?: number | null;
	locale?: string;
	verified?: boolean;
	email?: string | null
	premium_type?: number;
	public_flags?: number;
}

/*
 * https://discord.com/developers/docs/resources/channel#embed-object
 */

export type EmbedData = {
	title?: string;
	type?: "rich" | "image" | "video" | "gifv" | "article" | "link";
	description?: string;
	url?: string;
	timestamp?: string;
	color?: number;
	footer?: {
		text: string;
		icon_url?: string;
		proxy_icon_url?: string;
	}
	image?: {
		url: string;
		proxy_url?: string;
		height?: number;
		width?: number;
	};
	thumbnail?: {
		url: string;
		proxy_url?: string;
		height?: number;
		width?: number;
	};
	video?: {
		url?: string;
		proxy_url?: string;
		height?: number;
		width?: number;
	};
	provider?: {
		name?: string;
		url?: string;
	};
	author?: {
		name: string;
		url?: string;
		icon_url?: string;
		proxy_icon_url?: string;
	};
	fields?: Array<{ name: string; value: string; inline?: boolean }>;
}

/*
 * https://discord.com/developers/docs/resources/channel#attachment-object
 */

export type AttachmentData = {
	id: Snowflake;
	filename: string;
	description?: string;
	content_type?: string;
	size: number;
	url: string;
	proxy_url: string;
	height?: number | null;
	width?: number | null;
	ephemeral?: boolean;
}

/*
 * https://discord.com/developers/docs/resources/guild#guild-object
 */

export type GuildData = {
	id: Snowflake;
	name: string;
	icon: string | null;
	icon_hash?: string | null;
	splash: string | null;
	discovery_splash: string | null;
	owner?: boolean;
	owner_id: Snowflake;
	permissions?: string;
	region?: string | null;
	afk_channel_id: Snowflake;
	afk_timeout: number;
	widget_enabled?: boolean;
	widget_channel_id?: Snowflake | null;
	verification_level: 0 | 1 | 2 | 3 | 4;
	default_message_notifications: 0 | 1;
	explicit_content_filter: 0 | 1 | 2;
	roles: Array<RoleData>;
	emojis: Array<EmojiData>;
	features: Array<GuildFeature>;
	mfa_level: 0 | 1;
	application_id: Snowflake | null;
	system_channel_id: Snowflake | null;
	system_channel_flags: number;
	rules_channel_id: Snowflake | null;
	joined_at?: string;
	large?: boolean;
	unavailable?: boolean;
	member_count?: number;
	voice_states?: Array<VoiceStateData>;
	members?: Array<MemberData & { user: UserData }>;
	channels?: Array<TextChannelData | VoiceChannelData | StageChannelData | CategoryChannelData | NewsChannelData | StoreChannelData>;
	threads?: Array<ThreadChannelData>;
	presences?: Array<PresenceData>;
	max_presences?: number | null;
	max_members?: number;
	vanity_url_code: string | null;
	description: string | null;
	banner: string | null;
	premium_tier: number;
	premium_subscription_count?: number;
	preferred_locale: string;
	public_updates_channel_id: Snowflake | null;
	max_video_channel_users?: number;
	approximate_member_count?: number;
	approximate_presence_count?: number;
	welcome_screen?: WelcomeScreenData;
	nsfw_level: 0 | 1 | 2 | 3;
	stage_instances?: Array<StageInstanceData>;
	stickers?: Array<StickerData>;
	guild_scheduled_events?: Array<GuildScheduleEventData>;
	premium_progress_bar_enabled: boolean;
}

/*
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object
 */

export type StageInstanceData = {
	id: Snowflake;
	guild_id: Snowflake;
	channel_id: Snowflake;
	topic: string;
	privacy_level: 1 | 2;
	discoverable_disabled: boolean;
}

/*
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */

export type GuildFeature = "ANIMATED_ICON" | "BANNER" | "COMMERCE" | "COMMUNITY" | "DISCOVERABLE" | "FEATURABLE" | "INVITE_SPLASH" | "MEMBER_VERIFICATION_GATE_ENABLED" | "MONETIZATION_ENABLED" | "MORE_STICKERS" | "NEWS" | "PARTNERED" | "PREVIEW_ENABLED" | "PRIVATE_THREADS" | "ROLE_ICONS" | "SEVEN_DAY_THREAD_ARCHIVE" | "THREE_DAY_THREAD_ARCHIVE" | "TICKETED_EVENTS_ENABLED" | "VANITY_URL" | "VERIFIED" | "VIP_REGIONS" | "WELCOME_SCREEN_ENABLED";

/*
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object
 */

export type WelcomeScreenData = {
	description: string | null;
	welcome_channels: Array<WelcomeScreenChannelData>;
}

export type WelcomeScreenChannelData = {
	channel_id: Snowflake;
	description: string;
	emoji_id: Snowflake | null;
	emoji_name: string | null;
}

/*
 * https://discord.com/developers/docs/topics/permissions#role-object
 */

export type RoleData = {
	id: Snowflake;
	name: string;
	color: number;
	hoist: boolean;
	icon?: string | null;
	unicode_emoji?: string | null;
	position: number;
	permissions: string;
	managed: boolean;
	mentionable: boolean;
	tags?: RoleTags;
}

export type RoleTags = {
	bot_id?: Snowflake;
	integration_id?: Snowflake;
	premium_subscriber?: null;
}

/*
 * https://discord.com/developers/docs/resources/emoji#emoji-object
 */

export type EmojiData = {
	id: Snowflake | null;
	name: string | null;
	roles?: Array<Snowflake>;
	user?: UserData;
	require_colons?: boolean;
	managed?: boolean;
	animated?: boolean;
	available?: boolean;
}

/*
 * https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields
 */

export type PresenceData = {
	user: UserData & { id: Snowflake };
	guild_id: Snowflake;
	status: string;
	activities: Array<ActivityData>;
	client_status: ClientStatusData;

	premium_since?: string;
	nick?: string;
}

/*
 * https://discord.com/developers/docs/topics/gateway#activity-object
 */

export type ActivityData = {
	name: string;
	type: number;
	url?: string | null;
	created_at: number;
	timestamps?: {
		start?: number;
		end?: number;
	};
	application_id?: Snowflake;
	details?: string | null;
	state?: string | null;
	emoji?: ReactionEmojiData | null;
	party?: {
		id?: string;
		size?: [number, number];
	};
	assets?: {
		large_image?: string;
		large_text?: string;
		small_image?: string;
		small_text?: string;
	};
	secrets?: {
		join?: string;
		spectate?: string;
		match?: string;
	};
	instance?: boolean;
	flags?: number;
	buttons?: Array<{ label: string; url: string }>;
}

/*
 * https://discord.com/developers/docs/resources/channel#channel-object
 */

export interface ChannelData {
	id: Snowflake;
	type: ChannelType;
	name?: string;
}

export type ChannelType = 0 | 1 | 2 | 4 | 5 | 6 | 10 | 11 | 12 | 13;

export interface TextableChannelData extends ChannelData {
	last_message_id: Snowflake | null;
	last_pin_timestamp?: string | null;
}

export interface TextChannelData extends GuildChannelData, TextableChannelData {
	rate_limit_per_user: number;
	topic?: string | null;
	nsfw: boolean;
	type: 0;
}

export interface ThreadChannelData extends GuildChannelData, TextableChannelData {
	rate_limit_per_user: number;
	topic?: string | null;
	nsfw: boolean;
	owner_id: Snowflake;
	message_count: number;
	member_count: number;
	thread_metadata: ThreadMetaData;
	type: 10 | 11 | 12;
	default_auto_archive_duration: number | null;
}

/*
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object
 */

export interface ThreadMetaData {
	archived: boolean;
	auto_archive_duration: number;
	archive_timestamp: string;
	locked: boolean;
	invitable?: boolean;

	archiver_id?: Snowflake;
}

export interface DMChannelData extends TextableChannelData {
	recipients: Array<UserData>;
	type: 1;
}

export interface VoiceChannelData extends GuildChannelData {
	bitrate: number;
	user_limit: number;
	type: 2;
	rtc_region: string | null;
}

export interface StoreChannelData extends GuildChannelData {
	nsfw: boolean;
	type: 6;
}

// @ts-ignore
export interface StageChannelData extends VoiceChannelData {
	type: 13;
}

export interface GuildChannelData extends ChannelData {
	guild_id: string;
	permission_overwrites: Array<PermissionOverwriteData>;
	position: number;
	parent_id: Snowflake | null;
}

export interface CategoryChannelData extends GuildChannelData {
	nsfw: boolean;
	type: 4;
}

export interface NewsChannelData extends GuildChannelData, TextableChannelData {
	rate_limit_per_user: number;
	topic?: string;
	nsfw: boolean;
	type: 5;
}

/*
 * https://discord.com/developers/docs/resources/channel#overwrite-object
 */

export type PermissionOverwriteData = {
	id: Snowflake;
	type: 0 | 1;
	allow: string;
	deny: string;
}

/*
 * https://discord.com/developers/docs/resources/application#application-resource
 */

export type ApplicationData = {
	id: Snowflake;
	name: string;
	icon: string | null;
	description: string;
	rpc_origins?: Array<string>;
	bot_public: boolean;
	bot_require_code_grant: boolean;
	terms_of_service_url?: string;
	privacy_policy_url?: string;
	owner?: UserData;
	summary: string;
	verify_key: string;
	team: TeamData | null;
	guild_id?: Snowflake;
	primary_sku_id?: Snowflake;
	slug?: string;
	cover_image?: string;
	flags?: number;
}

/*
 * https://discord.com/developers/docs/topics/teams#data-models-team-object
 */

export type TeamData = {
	icon: string | null;
	id: Snowflake;
	members: Array<TeamMemberData>;
	name: string;
	owner_user_id: Snowflake;
}

export type TeamMemberData = {
	membership_state: 1 | 2;
	permissions: ["*"];
	team_id: Snowflake;
	user: UserData;
}

/*
 * https://discord.com/developers/docs/resources/sticker#sticker-item-object
 */

export type StickerItemData = {
	id: Snowflake;
	name: string;
	format_type: StickerFormatType;
}

/*
 * https://discord.com/developers/docs/resources/sticker#sticker-resource
 */

export type StickerData = {
	id: Snowflake;
	pack_id?: Snowflake;
	name: string;
	description: string | null;
	tags: string;
	type: StickerType;
	format_type: StickerFormatType;
	available?: boolean;
	guild_id?: Snowflake;
	user?: UserData;
	sort_value?: number;
}

export type StickerType = 1 | 2;

export type StickerFormatType = 1 | 2 | 3;

/*
 * https://discord.com/developers/docs/resources/channel#message-reference-object
 */

export type MessageReferenceData = {
	message_id?: Snowflake;
	channel_id?: Snowflake;
	guild_id?: Snowflake;
	fail_if_not_exists?: boolean;
}

/*
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
 */

export type MessageActivityData = {
	type: 1 | 2 | 3 | 5;
	party_id?: string;
}

/*
 * https://discord.com/developers/docs/resources/channel#channel-mention-object
 */

export type ChannelMentionData = {
	id: Snowflake;
	guild_id: Snowflake;
	type: ChannelType;
	name: string;
}

/*
 * https://discord.com/developers/docs/resources/channel#reaction-object
 */

export type ReactionData = {
	count: number;
	me: boolean;
	emoji: ReactionEmojiData;
}

/*
 * https://discord.com/developers/docs/resources/invite#invite-resource
 */

export type InviteData = {
	code: string;
	guild?: Partial<GuildData>;
	channel: GuildChannelData | null ;
	inviter?: UserData;
	target_type?: 1 | 2;
	target_user?: UserData;
	target_application?: Partial<ApplicationData>;
	approximate_presence_count?: number;
	approximate_member_count?: number;
	expires_at?: string | null;
	stage_instance?: InviteStageInstanceData;
	guild_scheduled_event: GuildScheduleEventData;
}

/*
 * https://discord.com/developers/docs/topics/gateway#guild-delete
 */

export type GuildDeleteData = {
	id: Snowflake;
	unavailable: boolean;
}

/*
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add-guild-ban-add-event-fields
 */

export type GuildBanAddData = {
	guild_id: Snowflake;
	user: UserData;
}

/*
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove-guild-ban-remove-event-fields
 */

export type GuildBanRemoveData = {
	guild_id: Snowflake;
	user: UserData;
}

/*
 * https://discord.com/developers/docs/topics/gateway#guild-member-remove-guild-member-remove-event-fields
 */

export type GuildMemberRemoveData = {
	guild_id: Snowflake;
	user: UserData;
}

/*
 * https://discord.com/developers/docs/topics/gateway#guild-members-chunk-guild-members-chunk-event-fields
 */

export type GuildMembersChunkData = {
	guild_id: Snowflake;
	members: Array<MemberData & { user: UserData }>;
	chunk_index: number;
	chunk_count: number;
	not_found?: Array<Snowflake>;
	presences?: Array<PresenceData>;
	nonce?: string;
}

/*
 * https://discord.com/developers/docs/topics/gateway#invite-create-invite-create-event-fields
 */

export type InviteCreateData = {
	channel_id: Snowflake;
	code: string;
	created_at: string;
	guild_id?: Snowflake;
	inviter?: UserData;
	max_age: number;
	max_uses: number;
	target_type?: 1 | 2;
	target_user?: UserData;
	target_application: ApplicationData;
	temporary: boolean;
	uses: number;
}

/*
 * https://discord.com/developers/docs/topics/gateway#invite-delete
 */

export type InviteDeleteData = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	code: string;
}

/*
 * https://discord.com/developers/docs/topics/gateway#message-delete-bulk
 */

export type MessageBulkDeleteData = {
	ids: Array<Snowflake>;
	channel_id: Snowflake;
	guild_id?: Snowflake;
}

/*
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-message-reaction-remove-event-fields
 */

export type MessageReactionRemoveEmojiData = {
	user_id: Snowflake;
	channel_id: Snowflake;
	message_id: Snowflake;
	guild_id?: Snowflake;
	emoji: ReactionEmojiData;
}

/*
 * https://discord.com/developers/docs/resources/emoji#emoji-object
 */

export type ReactionEmojiData = {
	id: Snowflake | null;
	name: string;
	animated?: boolean;
}

/*
 * https://discord.com/developers/docs/topics/gateway#presence-update
 */

export type PresenceUpdateData = {
	user: UserData;
	guild_id: Snowflake;
	status: "online" | "idle" | "dnd" | "offline";
	activities: Array<ActivityData>;
	client_status: ClientStatusData;
};

export type ClientStatusData = {
	desktop?: string;
	mobile?: string;
	web?: string;
}

/*
 * https://discord.com/developers/docs/topics/gateway#typing-start
 */

export type TypingStartData = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	user_id: Snowflake;
	timestamp: number;
	member?: MemberData;
}

/*
 * https://discord.com/developers/docs/topics/gateway#voice-server-update
 */

export type VoiceServerUpdateData = {
	token: string;
	guild_id: Snowflake;
	endpoint: string | null;
}

/*
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */

export type ApplicationCommand = {
	id: Snowflake;
	type?: ApplicationCommandType;
	application_id: Snowflake;
	guild_id?: Snowflake;
	name: string;
	description: string;
	options?: Array<ApplicationCommandOption>;
	default_permission?: boolean;
	version: Snowflake;
}

export type ApplicationCommandType = 1 | 2 | 3;

export type ApplicationCommandOption = {
	type: ApplicationCommandOptionType;
	name: string;
	description: string;
	required?: boolean;
	choices?: Array<ApplicationCommandOptionChoice>;
	options?: Array<ApplicationCommandOption>;
	channel_types?: Array<ChannelType>;
	min_value?: number;
	max_value?: number;
	autocomplete?: boolean;
}

export type ApplicationCommandOptionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/*
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */

export type ApplicationCommandOptionChoice = {
	name: string;
	type?: ApplicationCommandOptionType;
	value: string | number;
}

/*
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object
 */

export type GuildApplicationCommandPermissions = {
	id: Snowflake;
	application_id: Snowflake;
	guild_id: Snowflake;
	permissions: Array<ApplicationCommandPermissions>;
}

export type ApplicationCommandPermissions = {
	id: Snowflake;
	type: ApplicationCommandPermissionType;
	permission: boolean;
}

export type ApplicationCommandPermissionType = 1 | 2 ;

export type InteractionData = {
	id: Snowflake;
	application_id: Snowflake;
	type: InteractionType;
	data?: ApplicationCommandInteractionData;
	guild_id?: Snowflake;
	channel_id?: Snowflake;
	member?: MemberData & { user: UserData };
	user?: UserData;
	token: string;
	version: number;
	message?: MessageData;
}

/*
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
 */

export type InteractionType = 1 | 2 | 3 | 4;

export type ApplicationCommandInteractionData = {
	id: Snowflake;
	name: string;
	resolved?: ApplicationCommandInteractionDataResolved;
	options?: Array<ApplicationCommandInteractionDataOption>;
	custom_id?: string;
	component_type?: 1 | 2;
	target_id?: Snowflake;
}

export type ApplicationCommandInteractionDataResolved = {
	users?: { [id: string]: UserData };
	members?: { [id: string]: MemberData };
	roles?: { [id: string]: RoleData };
	channels?: { [id: string]: ChannelData; };
	messages?: { [id: string]: MessageData; };
}

export type ApplicationCommandInteractionDataOption = {
	name: string;
	type: ApplicationCommandOptionType;
	value?: string | number;
	options?: Array<ApplicationCommandInteractionDataOption>;
	focused?: boolean;
}

export type InteractionResponseData = {
	type: InteractionCallbackType;
	data?: InteractionApplicationCommandCallbackData;
}

export type InteractionCallbackType = 1 | 4 | 5 | 6 | 7;

export type InteractionApplicationCommandCallbackData = {
	tts?: boolean;
	content?: string;
	embeds?: Array<EmbedData>;
	allowed_mentions?: AllowedMentionsData;
	flags?: number;
	components?: Array<MessageComponentData>;
	attachments: Array<AttachmentData>;
}

/*
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object
 */

export type AllowedMentionsData = {
	parse: Array<"roles" | "users" | "everyone">;
	roles: Array<Snowflake>;
	users: Array<Snowflake>;
	replied_user: boolean;
}

export type MessageInteraction = {
	id: Snowflake;
	type: InteractionType;
	name: string;
	user: UserData;
}

/*
 * https://discord.com/developers/docs/resources/webhook#webhook-resource
 */

export type WebhookData = {
	id: Snowflake;
	type: WebhookType;
	guild_id?: Snowflake | null;
	channel_id: Snowflake | null;
	user?: UserData;
	name: string | null;
	avatar: string | null;
	token?: string;
	application_id: Snowflake | null;
	source_guild?: Partial<GuildData>;
	source_channel?: Partial<GuildChannelData>;
	url?: string;
}

export type WebhookType = 1 | 2 | 3

/*
 * https://discord.com/developers/docs/resources/audit-log#audit-log-object
 */

export type AuditLogObject = {
	audit_log_entries: Array<AuditLogEntry>;
	guild_scheduled_events: Array<GuildScheduleEventData>;
	integrations: Array<IntegrationData>;
	threads: Array<ThreadChannelData>;
	users: Array<UserData>;
	webhooks: Array<any>;
}

/*
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
 */

export type AuditLogEntry = {
	target_id: string | null;
	changes?: Array<AuditLogChange>;
	user_id: string | null;
	id: string;
	action_type: AuditLogEventType;
	options?: {
		channel_id: Snowflake;
		count: string;
		delete_member_days: string;
		members_removed: string;
		message_id: Snowflake;
		id: Snowflake;
		type: "0" | "1";
		role_name: string;
	};
	reason?: string;
}

/*
 * https://discord.com/developers/docs/resources/audit-log#audit-log-change-object
 */

export type AuditLogChange = {
	new_value?: string | number | boolean | Array<RoleData> | Array<PermissionOverwriteData>;
	old_value?: string | number | boolean | Array<RoleData> | Array<PermissionOverwriteData>;
	key: string;
}

export type AuditLogEventType = 1 | 10 | 11 | 12 | 13 | 14 | 15 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 30 | 31 | 32 | 40 | 41 | 42 | 50 | 51 | 52 | 60 | 61 | 62 | 72 | 73 | 74 | 75 | 80 | 81 | 82 | 83 | 84 | 85 | 90 | 91 | 92 | 100 | 101 | 102 | 110 | 111 | 112;

export type GuildPreviewData = Pick<GuildData, "id" | "name" | "icon" | "splash" | "discovery_splash" | "emojis" | "features" | "approximate_member_count" | "approximate_presence_count" | "description">;

/*
 * https://discord.com/developers/docs/resources/guild#get-guild-widget-example-get-guild-widget
 */

export type GuildWidgetData = {
	id: Snowflake;
	name: string;
	instant_invite: string;
	channels: Array<{ id: string; name: string; position: number; }>;
	members: Array<UserData & { status: string; avatar_url: string; }>;
	presence_count: number;
}

/*
 * https://discord.com/developers/docs/resources/voice#voice-region-object
 */

export type VoiceRegionData = {
	id: string;
	name: string;
	vip: boolean;
	optimal: boolean;
	deprecated: boolean;
	custom: boolean;
}

/*
 * https://discord.com/developers/docs/interactions/message-components#component-object
 */

export type MessageComponentData = {
	type: MessageComponentType;
	custom_id?: string;
	disabled?: boolean;
	style?: 1 | 2 | 3 | 4 | 5;
	label?: string;
	emoji?: {
		id?: Snowflake | null;
		name?: string;
		animated?: boolean;
	};
	url?: string;
	options?: Array<SelectOptionData>;
	placeholder?: string;
	min_values?: number;
	max_values?: number;
	components?: Array<ButtonData>;
}

/*
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
 */

export type SelectOptionData = {
	label: string;
	value: string;
	description?: string;
	emoji?: {
		id?: Snowflake | null;
		name?: string;
		animated?: boolean;
	};
	default?: boolean;
}

export type MessageComponentType = 1 | 2 | 3;

export type ButtonData = {
	type: 2;
	style: 1 | 2 | 3 | 4 | 5;
	label?: string;
	emoji?: {
		id?: Snowflake | null;
		name?: string;
		animated?: boolean;
	};
	custom_id?: string;
	url?: string;
	disabled?: boolean;
}

/*
 * https://discord.com/developers/docs/resources/guild-template#guild-template-object
 */

export type GuildTemplateData = {
	code: string;
	name: string;
	description: string | null;
	usage_count: number;
	creator_id: Snowflake;
	creator: UserData;
	created_at: string;
	updated_at: string;
	source_guild_id: Snowflake;
	serialized_source_guild: Partial<GuildData>;
	is_dirty: boolean | null;
}

/*
 * https://discord.com/developers/docs/resources/guild#integration-object
 */

export type IntegrationData = {
	id: Snowflake;
	name: string;
	type: "twitch" | "youtube" | "discord";
	enabled: boolean;
	syncing?: boolean;
	role_id?: Snowflake;
	enable_emoticons?: boolean;
	expire_behavior?: 0 | 1;
	expire_grace_period?: number;
	user?: UserData;
	account: IntegrationAccountData;
	synced_at?: string;
	subscriber_count?: number;
	revoked?: boolean;
	application?: IntegrationApplicationData;
}

export type IntegrationAccountData = {
	id: string;
	name: string;
}

export type IntegrationApplicationData = {
	id: Snowflake;
	name: string;
	icon: string | null;
	description: string;
	summary: string;
	bot?: UserData;
}

/*
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object
 */

export type GuildScheduleEventData = {
	id: Snowflake;
	guild_id: Snowflake;
	channel_id: Snowflake | null;
	creator_id: Snowflake | null;
	name: string;
	description?: string;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	privacy_level: 2;
	status: 1 | 2 | 3 | 4;
	entity_type: 1 | 2 | 3;
	entity_metadata: { location?: string } | null;
	creator?: UserData;
	user_count?: number;
}

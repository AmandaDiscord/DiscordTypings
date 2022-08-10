import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure
 */
export type GatewayPayload = {
	op: import("./OpcodesAndStatusCodes").GatewayOpcode;
	d: any;
	s: number | null;
	t: GatewayEvent;
}

/**
 * https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
 */
export type GatewayEvent = "READY"
	| "RESUMED"
	| "APPLICATION_COMMAND_PERMISSIONS_UPDATE"
	| "AUTO_MODERATION_RULE_CREATE"
	| "AUTO_MODERATION_RULE_UPDATE"
	| "AUTO_MODERATION_RULE_DELETE"
	| "AUTO_MODERATION_BLOCK_MESSAGE"
	| "CHANNEL_CREATE"
	| "CHANNEL_UPDATE"
	| "CHANNEL_DELETE"
	| "CHANNEL_PINS_UPDATE"
	| "THREAD_CREATE"
	| "THREAD_UPDATE"
	| "THREAD_DELETE"
	| "THREAD_LIST_SYNC"
	| "THREAD_MEMBER_UPDATE"
	| "GUILD_CREATE"
	| "GUILD_UPDATE"
	| "GUILD_DELETE"
	| "GUILD_BAN_ADD"
	| "GUILD_BAN_REMOVE"
	| "GUILD_EMOJIS_UPDATE"
	| "GUILD_STICKERS_UPDATE"
	| "GUILD_INTEGRATIONS_UPDATE"
	| "GUILD_MEMBER_ADD"
	| "GUILD_MEMBER_REMOVE"
	| "GUILD_MEMBER_UPDATE"
	| "GUILD_MEMBERS_CHUNK"
	| "GUILD_ROLE_CREATE"
	| "GUILD_ROLE_UPDATE"
	| "GUILD_ROLE_DELETE"
	| "GUILD_SCHEDULED_EVENT_CREATE"
	| "GUILD_SCHEDULED_EVENT_UPDATE"
	| "GUILD_SCHEDULED_EVENT_DELETE"
	| "GUILD_SCHEDULED_EVENT_USER_ADD"
	| "GUILD_SCHEDULED_EVENT_USER_REMOVE"
	| "INTEGRATION_CREATE"
	| "INTEGRATION_UPDATE"
	| "INTEGRATION_DELETE"
	| "INTERACTION_CREATE"
	| "INVITE_CREATE"
	| "INVITE_DELETE"
	| "MESSAGE_CREATE"
	| "MESSAGE_UPDATE"
	| "MESSAGE_DELETE"
	| "MESSAGE_DELETE_BULK"
	| "MESSAGE_REACTION_ADD"
	| "MESSAGE_REACTION_REMOVE"
	| "MESSAGE_REACTION_REMOVE_ALL"
	| "MESSAGE_REACTION_REMOVE_EMOJI"
	| "PRESENCE_UPDATE"
	| "STAGE_INSTANCE_CREATE"
	| "STAGE_INSTANCE_DELETE"
	| "STAGE_INSTANCE_UPDATE"
	| "TYPING_START"
	| "USER_UPDATE"
	| "VOICE_STATE_UPDATE"
	| "VOICE_SERVER_UPDATE"
	| "WEBHOOKS_UPDATE";

/**
 * https://discord.com/developers/docs/topics/gateway#identify-identify-structure
 */
export type IdentifyPayload = {
	token: string;
	properties: IdentifyConnectionProperties;
	compress?: boolean;
	large_threshold?: number;
	shard?: [number, number];
	presence?: GatewayPresenceUpdate;
	intents: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties
 */
export type IdentifyConnectionProperties = {
	os: string;
	browser: string;
	device: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-presence
 */
export type GatewayPresenceUpdate = {
	since: number | null;
	activities: Array<Pick<Activity, "name" | "type" | "url">>;
	status: PresenceStatus;
	afk: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-presence-status-types
 */
export type PresenceStatus = "online" | "dnd" | "idle" | "invisible" | "offline";

/**
 * https://discord.com/developers/docs/topics/gateway#resume-resume-structure
 */
export type ResumePayload = {
	token: string;
	session_id: string;
	seq: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#request-guild-members-guild-request-members-structure
 */
export type GuildRequestMembersPayload = {
	guild_id: Snowflake;
	query?: string;
	limit: number;
	presences?: boolean;
	user_ids?: Array<Snowflake>;
	nonce?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#update-voice-state-gateway-voice-state-update-structure
 */
export type VoiceStateUpdatePayload = {
	guild_id: Snowflake;
	channel_id: Snowflake | null;
	self_mute: boolean;
	self_deaf: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#hello-hello-structure
 */
export type HelloPayload = {
	heartbeat_interval: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#ready-ready-event-fields
 */
export type ReadyPayload = {
	v: number;
	user: import("../Resources/User").User;
	guilds: Array<{ id: Snowflake; unavailable: boolean; }>;
	session_id: string;
	shard?: [number, number];
	application: import("../Resources/Application").Application;
	resume_gateway_url: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#thread-list-sync-thread-list-sync-event-fields
 */
export type ThreadListSyncPayload = {
	guild_id: Snowflake;
	channel_ids?: Array<Snowflake>;
	threads: Array<import("../Resources/Channel").ThreadChannel>;
	members: Array<import("../Resources/Channel").ThreadMember>;
}

/**
 * https://discord.com/developers/docs/topics/gateway#thread-members-update-thread-members-update-event-fields
 */
export type ThreadMembersUpdatePayload = {
	id: Snowflake;
	guild_id: Snowflake;
	member_count: number;
	added_members?: Array<import("../Resources/Channel").ThreadMember>;
	removed_member_ids?: Array<Snowflake>;
}

/**
 * https://discord.com/developers/docs/topics/gateway#channel-pins-update-channel-pins-update-event-fields
 */
export type ChannelPinsUpdatePayload = {
	guild_id?: Snowflake;
	channel_id: Snowflake;
	last_pin_timestamp?: string | null;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-add-guild-ban-add-event-fields
 */
export type GuildBanAddPayload = {
	guild_id: Snowflake;
	user: import("../Resources/User").User;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-ban-remove-guild-ban-remove-event-fields
 */
export type GuildBanRemovePayload = GuildBanAddPayload;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-emojis-update-guild-emojis-update-event-fields
 */
export type GuildEmojisUpdatePayload = {
	guild_id: Snowflake;
	emojis: Array<import("../Resources/Emoji").Emoji>;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-stickers-update-guild-stickers-update-event-fields
 */
export type GuildStickersUpdatePayload = {
	guild_id: Snowflake;
	stickers: Array<import("../Resources/Sticker").Sticker>;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-integrations-update-guild-integrations-update-event-fields
 */
export type GuildIntegrationsUpdatePayload = {
	guild_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-remove-guild-member-remove-event-fields
 */
export type GuildMemberRemovePayload = GuildBanAddPayload;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-member-update-guild-member-update-event-fields
 */
export type GuildMemberUpdatePayload = Omit<import("../Resources/Guild").Member, "permissions"> & Required<{ guild_id: Snowflake; user: import("../Resources/Guild").Member["user"]; }>;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-members-chunk-guild-members-chunk-event-fields
 */
export type GuildMembersChunkPayload = {
	guild_id: Snowflake;
	members: Array<import("../Resources/Guild").Member>;
	chunk_index: number;
	chunk_count: number;
	not_found?: Array<Snowflake>;
	presences?: Array<PresenceUpdate>;
	nonce?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-create-guild-role-create-event-fields
 */
export type GuildRoleCreatePayload = {
	guild_id: Snowflake;
	role: import("./Permissions").Role;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-update-guild-role-update-event-fields
 */
export type GuildRoleUpdatePayload = GuildRoleCreatePayload;

/**
 * https://discord.com/developers/docs/topics/gateway#guild-role-delete-guild-role-delete-event-fields
 */
export type GuildRoleDeletePayload = {
	guild_id: Snowflake;
	role_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-scheduled-event-user-add-guild-scheduled-event-user-add-event-fields
 */
export type GuildScheduledEventUserAddPayload = {
	guild_scheduled_event_id: Snowflake;
	user_id: Snowflake;
	guild_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/gateway#guild-scheduled-event-user-remove-guild-scheduled-event-user-remove-event-fields
 */
export type GuildScheduledEventUserRemovePayload = GuildScheduledEventUserAddPayload;

/**
 * https://discord.com/developers/docs/topics/gateway#integration-delete-integration-delete-event-fields
 */
export type IntegrationDeletePayload = {
	id: Snowflake;
	guild_id: Snowflake;
	application_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/gateway#invite-create-invite-create-event-fields
 */
export type InviteCreatePaylaod = Pick<import("../Resources/Invite").Invite, "code" | "inviter" | "target_type" | "target_user" | "target_application"> & { channel_id: Snowflake; created_at: string; guild_id?: Snowflake; max_age: number; max_uses: number; temporary: boolean; uses: number; };

/**
 * https://discord.com/developers/docs/topics/gateway#invite-delete-invite-delete-event-fields
 */
export type InviteDeletePayload = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	code: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete-message-delete-event-fields
 */
export type MessageDeletePayload = {
	id: Snowflake;
	channel_id: Snowflake;
	guild_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/gateway#message-delete-bulk-message-delete-bulk-event-fields
 */
export type MessageDeleteBulkPayload = {
	ids: Array<Snowflake>;
	channel_id: Snowflake;
	guild_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-add-message-reaction-add-event-fields
 */
export type MessageReactionAddPayload = {
	user_id: Snowflake;
	channel_id: Snowflake;
	message_id: Snowflake;
	guild_id?: Snowflake;
	member?: import("../Resources/Guild").Member;
	emoji: import("../Resources/Emoji").PartialEmoji;
}

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove
 */
export type MessageReactionRemovePayload = Pick<MessageReactionAddPayload, "user_id" | "channel_id" | "message_id" | "guild_id" | "emoji">;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all-message-reaction-remove-all-event-fields
 */
export type MessageReactionRemoveAllPayload = Pick<MessageReactionAddPayload, "channel_id" | "message_id" | "guild_id">;

/**
 * https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji-message-reaction-remove-emoji-event-fields
 */
export type MessageReactionRemoveEmojiPayload = Pick<MessageReactionAddPayload, "channel_id" | "guild_id" | "message_id" | "emoji">;

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields
 */
export type PresenceUpdate = {
	user: import("../Resources/User").User;
	guild_id: Snowflake;
	status: PresenceStatus;
	activities: Array<Activity>;
	client_status: ClientStatus;
}

/**
 * https://discord.com/developers/docs/topics/gateway#client-status-object
 */
export type ClientStatus = {
	desktop?: PresenceStatus;
	mobile?: PresenceStatus;
	web?: PresenceStatus;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
 */
export type Activity = {
	name: string;
	type: ActivityType;
	url?: string | null;
	created_at: number;
	timestamps?: ActivityTimestamps;
	application_id?: Snowflake;
	details?: string | null;
	state?: string | null;
	emoji?: ActivityEmoji | null;
	party?: ActivityParty;
	assets?: ActivityAssets;
	secrets?: ActivitySecrets;
	instance?: boolean;
	flags?: number;
	buttons?: Array<ActivityButton>;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
 */
export type ActivityType = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps
 */
export type ActivityTimestamps = {
	start?: number;
	end?: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji
 */
export type ActivityEmoji = {
	name: string;
	id?: Snowflake;
	animated?: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
 */
export type ActivityParty = {
	id?: string;
	size?: [number, number];
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
export type ActivityAssets = {
	large_image?: string;
	large_text?: string;
	small_image?: string;
	small_text?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
 */
export type ActivitySecrets = {
	join?: string;
	spectate?: string;
	match?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-buttons
 */
export type ActivityButton = {
	label: string;
	url: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#session-start-limit-object-session-start-limit-structure
 */
export type SessionStartLimit = {
	total: number;
	remaining: number;
	reset_after: number;
	max_concurrency: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#typing-start-typing-start-event-fields
 */
export type TypingStartPayload = {
	channel_id: Snowflake;
	guild_id?: Snowflake;
	user_id: Snowflake;
	timestamp: number;
	member?: import("../Resources/Guild").Member;
}

/**
 * https://discord.com/developers/docs/topics/gateway#voice-server-update-voice-server-update-event-fields
 */
export type VoiceServerUpdatePacket = {
	token: string;
	guild_id: Snowflake;
	endpoint: string | null;
}

/**
 * https://discord.com/developers/docs/topics/gateway#webhooks-update-webhooks-update-event-fields
 */
export type WebhooksUpdatePacket = {
	guild_id: Snowflake;
	channel_id: Snowflake;
}

import { Snowflake } from "../Reference";

type ChannelBase = {
	id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface TextBasedChannel extends ChannelBase {
	last_message_id: Snowflake | null;
	last_pin_timestamp: Snowflake | null;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface GuildBasedChannel extends ChannelBase {
	guild_id: Snowflake;
	position: number;
	permission_overwrites: Array<Overwrite>;
	/** 1-100 chars */
	name: string;
	parent_id: Snowflake | null;
	permissions?: string;
	nsfw: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface TextChannel extends TextBasedChannel, GuildBasedChannel {
	type: 0;
	topic: string | null;
	rate_limit_per_user: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface DMChannel extends TextBasedChannel {
	type: 1;
	recipients: Array<import("./User").User>;
	application_id?: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface GuildVoiceBasedChannel extends GuildBasedChannel {
	bitrate: number;
	user_limit: number;
	rtc_region: string | null;
	video_quality_mode?: VideoQualityMode;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface VoiceChannel extends GuildVoiceBasedChannel {
	type: 2;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface CategoryChannel extends GuildBasedChannel {
	type: 4;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface NewsChannel extends TextBasedChannel, GuildBasedChannel {
	type: 5;
	topic: string | null;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface ThreadBasedChannel extends TextBasedChannel, GuildBasedChannel {
	message_count: number;
	member_count: number;
	thread_metadata: ThreadMetadata;
	member?: ThreadMember;
	default_auto_archive_duration: number;
	flags?: number;
	total_message_sent?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface NewsThread extends ThreadBasedChannel {
	type: 10;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface PublicThread extends ThreadBasedChannel {
	type: 11;
	rate_limit_per_user: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface PrivateThread extends ThreadBasedChannel {
	type: 12;
	rate_limit_per_user: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface StageChannel extends GuildVoiceBasedChannel {
	type: 13;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface DirectoryChannel extends GuildBasedChannel {
	type: 14;
}

export interface ForumChannel extends GuildBasedChannel {
	type: 15;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type Channel = TextChannel | DMChannel | VoiceChannel | CategoryChannel | NewsChannel | NewsThread | PublicThread | PrivateThread | StageChannel | DirectoryChannel | ForumChannel;

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export type GuildChannel = Exclude<Channel, DMChannel | NewsThread | PublicThread | PrivateThread>;

export type ThreadChannel = NewsThread | PublicThread | PrivateThread;

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export type ChannelType = 0 | 1 | 2 | 4 | 5 | 10 | 11 | 12 | 13 | 14 | 15;

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object
 */
export type Overwrite = {
	id: Snowflake;
	type: number;
	allow: string;
	deny: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
 */
export type VideoQualityMode = 1 | 2;

/**
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export type ThreadMetadata = {
	archived: boolean;
	auto_archive_duration: number;
	archive_timestamp: string;
	locked: boolean;
	invitable?: boolean;
	create_timestamp?: string | null;
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export type ThreadMember = {
	id?: Snowflake;
	user_id?: Snowflake;
	join_timestamp: string;
	flags: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-structure
 */
export type Message = {
	id: Snowflake;
	channel_id: Snowflake;
	guild_id?: Snowflake;
	author: import("./User").User;
	member?: import("./Guild").Member;
	content: string;
	timestamp: string;
	edited_timestamp: string | null;
	tts: boolean;
	mention_everyone: boolean;
	mentions?: Array<import("./User").User & { member: import("./Guild").Member }>;
	mention_roles: Array<string>;
	mention_channels?: Array<ChannelMention>;
	attachments: Array<Attachment>;
	embeds: Array<Embed>;
	reactions?: Array<Reaction>;
	nonce?: string | number;
	pinned: boolean;
	webhook_id?: Snowflake;
	type?: MessageType;
	activity?: MessageActivity;
	application?: import("./Application").Application;
	application_id?: Snowflake;
	message_reference?: MessageReference;
	flags?: number;
	referenced_message?: Message | null;
	interaction?: import("../Interactions/ReceivingAndResponding").MessageInteraction;
	thread?: NewsThread | PublicThread | PrivateThread;
	components?: Array<import("../Interactions/MessageComponents").ActionRow>;
	sticker_items?: Array<import("./Sticker").StickerItem>;
	stickers?: Array<import("./Sticker").Sticker>;
	position?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure
 */
export type ChannelMention = {
	id: Snowflake;
	guild_id: Snowflake;
	type: ChannelType;
	name: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure
 */
export type Attachment = {
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

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-structure
 */
export type Embed = {
	title?: string;
	description?: string;
	url?: string;
	timestamp?: string;
	color?: number;
	footer?: EmbedFooter;
	image?: EmbedImage;
	thumbnail?: EmbedThumbnail;
	video?: EmbedVideo;
	provider?: EmbedProvider;
	author?: EmbedAuthor;
	fields?: Array<EmbedField>;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export type EmbedFooter = {
	text: string;
	icon_url?: string;
	proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export type EmbedImage = {
	url: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export type EmbedThumbnail = EmbedImage;

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export type EmbedVideo = {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
export type EmbedProvider = {
	name?: string;
	url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export type EmbedAuthor = {
	name: string;
	url?: string;
	icon_url?: string;
	proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
 */
export type EmbedField = {
	name: string;
	value: string;
	inline?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure
 */
export type Reaction = {
	count: number;
	me: boolean;
	emoji: import("./Emoji").PartialEmoji;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-types
 */
export type MessageType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
 */
export type MessageActivity = {
	type: MessageActivityType;
	party_id?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-types
 */
export type MessageActivityType = 1 | 2 | 3 | 5;

/**
 * https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure
 */
export type MessageReference = {
	message_id?: Snowflake;
	channel_id?: Snowflake;
	guild_id?: Snowflake;
	fail_if_not_exists?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/channel#followed-channel-object
 */
export type FollowedChannel = {
	channel_id: Snowflake;
	webhook_id: Snowflake;
}

/**
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types
 */
export type AllowedMentionType = "roles" | "users" | "everyone";

/**
 * https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure
 */
export type AllowedMentions = {
	parse?: Array<AllowedMentionType>;
	roles?: Array<Snowflake>;
	users?: Array<Snowflake>;
	replied_user?: boolean;
}

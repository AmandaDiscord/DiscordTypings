import { Snowflake } from "../Reference"

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure
 */
export type GuildScheduledEvent = {
	id: Snowflake;
	guild_id: Snowflake;
	channel_id: Snowflake | null;
	creator_id?: Snowflake | null;
	name: string;
	description?: string | null;
	scheduled_start_time: string;
	scheduled_end_time: string | null;
	privacy_level: GuildScheduledEventPrivacyLevel;
	status: GuildScheduledEventStatus;
	entity_type: GuildScheduledEventEntityType;
	entity_id: Snowflake | null;
	entity_metadata?: GuildScheduledEventEntityMetadata;
	creator?: import("./User").User;
	user_count?: number;
	image?: string | null;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level
 */
export type GuildScheduledEventPrivacyLevel = 2;

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status
 */
export type GuildScheduledEventStatus = 1 | 2 | 3 | 4;

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types
 */
export type GuildScheduledEventEntityType = 1 | 2 | 3;

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata
 */
export type GuildScheduledEventEntityMetadata = {
	location?: string;
}

/**
 * https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure
 */
export type GuildScheduledEventUser = {
	guild_scheduled_event_id: Snowflake;
	user: import("./User").User;
	member: import("./Guild").Member;
}

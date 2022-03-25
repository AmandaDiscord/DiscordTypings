import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure
 */
export type StageInstance = {
	id: Snowflake;
	guild_id: Snowflake;
	channel_id: Snowflake;
	topic: string;
	privacy_level: PrivacyLevel;
	discoverable_disabled: boolean;
	guild_scheduled_event_id: Snowflake | null;
}

/**
 * https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level
 */
export type PrivacyLevel = 1 | 2;

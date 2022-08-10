import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types
 */
export type AutoModerationTriggerType = 1 | 2 | 3 | 4 | 5;

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types
 */
export type AutoModerationEventType = 1;

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types
 */
export type AutoModerationKeywordPresetType = 1 | 2 | 3;

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types
 */
 export type AutoModerationActionType = 1 | 2 | 3;

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure
 */
export type AutoModerationRule = {
	id: Snowflake;
	guild_id: Snowflake;
	creator_id: Snowflake;
	name: string;
	event_type: AutoModerationEventType;
	trigger_type: AutoModerationTriggerType;
	trigger_metadata: AutoModerationTriggerMetadata;
	actions: Array<AutoModerationAction>;
	enabled: boolean;
	exempt_roles: Array<Snowflake>;
	exempt_channels: Array<Snowflake>;
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata
 */
export type AutoModerationTriggerMetadata = {
	presets?: Array<AutoModerationKeywordPresetType>;
	allow_list?: Array<string>;
	keyword_filter?: Array<string>;
	mention_total_limit?: number;
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object
 */
 export type AutoModerationAction = {
	type: AutoModerationActionType;
	metadata?: AutoModerationActionMetadata;
}

/**
 * https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata
 */
 export type AutoModerationActionMetadata = {
	channel_id?: Snowflake;
	duration_seconds?: number;
}

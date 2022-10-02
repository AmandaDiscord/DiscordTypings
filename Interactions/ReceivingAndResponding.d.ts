import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure
 */
export type Interaction = {
	id: Snowflake;
	application_id: Snowflake;
	type: InteractionType;
	data?: InteractionData;
	guild_id?: Snowflake;
	channel_id?: Snowflake;
	member?: import("../Resources/Guild").Member & { user: import("../Resources/User").User; };
	user?: import("../Resources/User").User;
	token: string;
	version: number;
	app_permisions?: string;
	message?: import("../Resources/Channel").Message;
	locale?: import("../Reference").Locale;
	guild_locale?: import("../Reference").Locale;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
 */
export type InteractionType = 1 | 2 | 3 | 4 | 5;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data-structure
 */
export type InteractionData = {
	id: Snowflake;
	name: string;
	type: import("./ApplicationCommands").ApplicationCommandType;
	resolved?: ResolvedData;
	options?: Array<ApplicationCommandInteractionDataOption>;
	guild_id?: Snowflake;
	custom_id?: string;
	component_type?: import("./MessageComponents").ComponentType;
	values?: Array<import("./MessageComponents").SelectOption>;
	target_id?: Snowflake;
	components?: Array<import("./MessageComponents").ActionRow>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure
 */
export type ResolvedData = {
	users?: { [id: Snowflake]: import("../Resources/User").User; };
	members?: { [id: Snowflake]: import("../Resources/Guild").Member & { user: import("../Resources/User").User; }; };
	roles?: { [id: Snowflake]: import("../Topics/Permissions").Role; };
	channels?: { [id: Snowflake]: import("../Resources/Channel").Channel; };
	messages?: { [id: Snowflake]: import("../Resources/Channel").Message; };
	attachments?: { [id: Snowflake]: import("../Resources/Channel").Attachment; };
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure
 */
export type MessageInteraction = {
	id: Snowflake;
	type: InteractionType;
	name: string;
	user: import("../Resources/User").User;
	member?: import("../Resources/Guild").Member;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object
 */
export type InteractionResponse = {
	type: InteractionCallbackType;
	data?: InteractionCallbackData;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 */
export type InteractionCallbackType = 1 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages
 */
export type MessageInteractionCallbackData = {
	tts?: boolean;
	content?: string;
	embeds?: Array<import("../Resources/Channel").Embed>;
	allowed_mentions?: import("../Resources/Channel").AllowedMentions;
	flags?: number;
	components?: Array<import("./MessageComponents").ActionRow>;
	attachments?: Array<import("../Resources/Channel").Attachment>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete
 */
export type AutocompleteInteractionCallbackData = {
	/** length of 25 max */
	choices: Array<import("./ApplicationCommands").ApplicationCommandOptionChoice>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal
 */
export type ModalInteractionCallbackData = {
	custom_id: string;
	/** 1-45 characters */
	title: string;
	components: Array<import("./MessageComponents").ActionRow>;
}

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure
 */
export type InteractionCallbackData = MessageInteractionCallbackData | AutocompleteInteractionCallbackData | ModalInteractionCallbackData;

type ApplicationCommandInteractionDataOptionBase = {
	name: string;
	focused?: boolean;
}

export interface ApplicationCommandInteractionDataOptionAsTypeString extends ApplicationCommandInteractionDataOptionBase {
	type: 3;
	value: string;
}

export interface ApplicationCommandInteractionDataOptionAsTypeNumber extends ApplicationCommandInteractionDataOptionBase {
	type: 4 | 10;
	value: number;
}

export interface ApplicationCommandInteractionDataOptionAsTypeSub extends ApplicationCommandInteractionDataOptionBase {
	type: 1 | 2;
	options: Array<ApplicationCommandInteractionDataOptionSub>;
}

export interface ApplicationCommandInteractionDataOptionAsTypeBoolean extends ApplicationCommandInteractionDataOptionBase {
	type: 5;
	value: boolean;
}

export interface ApplicationCommandInteractionDataOptionNotTypeNarrowed extends ApplicationCommandInteractionDataOptionBase {
	type: Exclude<import("./ApplicationCommands").ApplicationCommandOptionType, 1 | 2 | 3 | 4 | 5 | 10>;
}

export type ApplicationCommandInteractionDataOptionSub = ApplicationCommandInteractionDataOptionAsTypeString | ApplicationCommandInteractionDataOptionAsTypeNumber | ApplicationCommandInteractionDataOptionAsTypeBoolean | ApplicationCommandInteractionDataOptionNotTypeNarrowed;

export type ApplicationCommandInteractionDataOption = ApplicationCommandInteractionDataOptionAsTypeString | ApplicationCommandInteractionDataOptionAsTypeNumber | ApplicationCommandInteractionDataOptionAsTypeBoolean | ApplicationCommandInteractionDataOptionAsTypeSub | ApplicationCommandInteractionDataOptionNotTypeNarrowed;

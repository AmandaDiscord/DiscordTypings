import { Snowflake, Locale } from "../Reference";

/*
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export type ApplicationCommandBase = {
	type?: ApplicationCommandType;
	/** 1-32 chars */
	name: string;
	/** 1-100 chars */
	description: string;
	name_localizations?: { [locale in Locale]?: string; } | null;
	description_localizations?: { [locale in Locale]?: string; } | null;
	/** length of 25 max */
	options?: Array<ApplicationCommandOption>;
	default_permission?: boolean;
}

/*
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export interface FetchedApplicationCommand extends ApplicationCommandBase {
	id: Snowflake;
	version: Snowflake;
	/** Not to be PUT. Only sometimes seen on GET requests */
	name_localized?: string;
	/** Not to be PUT. Only sometimes seen on GET requests */
	description_localized?: string;
	guild_id?: Snowflake;
	application_id: Snowflake;
	/** length of 25 max */
	options?: Array<FetchedApplicationCommandOption>;
}

/*
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object
 */
export type ApplicationCommand = ApplicationCommandBase | FetchedApplicationCommand;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
 */
export type ApplicationCommandType = 1 | 2 | 3;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
type ApplicationCommandOptionBase = {
	/** 1-32 chars */
	name: string;
	name_localizations?: { [locale in Locale]?: string; } | null;
	description_localizations?: { [locale in Locale]?: string; } | null;
	/** 1-100 chars */
	description: string;
	required?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type FetchedApplicationCommandOptionBase = {
	/** Not to be PUT. Only sometimes seen on GET requests */
	name_localized?: string;
	/** Not to be PUT. Only sometimes seen on GET requests */
	description_localized?: string;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type FetchedApplicationCommandOptionAsTypeString = FetchedApplicationCommandOptionBase & ApplicationCommandOptionAsTypeString;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type FetchedApplicationCommandOptionAsTypeNumber = FetchedApplicationCommandOptionBase & ApplicationCommandOptionAsTypeNumber;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type FetchedApplicationCommandOptionAsTypeChannel = FetchedApplicationCommandOptionBase & ApplicationCommandOptionAsTypeChannel;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type FetchedApplicationCommandOptionAsTypeSub = FetchedApplicationCommandOptionBase & ApplicationCommandOptionAsTypeSub;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type FetchedApplicationCommandOptionNotTypeNarrowed = FetchedApplicationCommandOptionBase & ApplicationCommandOptionNotTypeNarrowed;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type FetchedApplicationCommandOption = FetchedApplicationCommandOptionAsTypeString | FetchedApplicationCommandOptionAsTypeNumber | FetchedApplicationCommandOptionAsTypeChannel | FetchedApplicationCommandOptionAsTypeSub | FetchedApplicationCommandOptionNotTypeNarrowed;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionAsTypeString extends ApplicationCommandOptionBase {
	type: 3;
	/** length of 25 max */
	choices?: Array<ApplicationCommandOptionChoice>;
	autocomplete?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionAsTypeNumber extends ApplicationCommandOptionBase {
	type: 4 | 10;
	/** length of 25 max */
	choices?: Array<ApplicationCommandOptionChoice>;
	min_value?: number;
	max_value?: number;
	autocomplete?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionAsTypeChannel extends ApplicationCommandOptionBase {
	type: 7;
	channel_types?: Array<import("../Resources/Channel").ChannelType>;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionAsTypeSub extends ApplicationCommandOptionBase {
	type: 1 | 2;
	options?: Array<ApplicationCommandOptionSub>;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export interface ApplicationCommandOptionNotTypeNarrowed extends ApplicationCommandOptionBase {
	type: Exclude<ApplicationCommandOptionType, 1 | 2 | 3 | 4 | 7 | 10>;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOption = ApplicationCommandOptionAsTypeString | ApplicationCommandOptionAsTypeNumber | ApplicationCommandOptionAsTypeChannel | ApplicationCommandOptionAsTypeSub | ApplicationCommandOptionNotTypeNarrowed;
/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure
 */
export type ApplicationCommandOptionSub = ApplicationCommandOptionAsTypeString | ApplicationCommandOptionAsTypeNumber | ApplicationCommandOptionAsTypeChannel | Omit<ApplicationCommandOptionAsTypeSub, "options"> | ApplicationCommandOptionNotTypeNarrowed;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
export type ApplicationCommandOptionType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure
 */
export type ApplicationCommandOptionChoice = {
	/** 1-100 chars */
	name: string;
	/** 1-100 chars */
	value: string | number;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export type ApplicationCommandPermissions = {
	id: Snowflake;
	application_id: Snowflake;
	guild_id: Snowflake;
	permissions: Array<ApplicationCommandPermission>;
}
/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure
 */
export type GuildApplicationCommandPermission = ApplicationCommandPermissions;

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure
 */
export type ApplicationCommandPermission = {
	id: Snowflake;
	type: ApplicationCommandPermissionType;
	permission: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type
 */
export type ApplicationCommandPermissionType = 1 | 2;

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
	type: Exclude<ApplicationCommandOptionType, 1 | 2 | 3 | 4 | 5 | 10>;
}

export type ApplicationCommandInteractionDataOptionSub = ApplicationCommandInteractionDataOptionAsTypeString | ApplicationCommandInteractionDataOptionAsTypeNumber | ApplicationCommandInteractionDataOptionAsTypeBoolean | ApplicationCommandInteractionDataOptionNotTypeNarrowed;

export type ApplicationCommandInteractionDataOption = ApplicationCommandInteractionDataOptionAsTypeString | ApplicationCommandInteractionDataOptionAsTypeNumber | ApplicationCommandInteractionDataOptionAsTypeBoolean | ApplicationCommandInteractionDataOptionAsTypeSub | ApplicationCommandInteractionDataOptionNotTypeNarrowed;

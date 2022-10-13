import { ChannelType } from "../Resources/Channel";

export type Component = ActionRow | Button | SelectMenu | TextInput;

/**
 * https://discord.com/developers/docs/interactions/message-components#component-object-component-types
 */
export type ComponentType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type ActionRow = {
	type: 1;
	components: Array<Button | SelectMenu | TextInput>;
}

type ButtonBase = {
	type: 2;
	/** 1-80 chars */
	label?: string;
	emoji?: import("../Resources/Emoji").PartialEmoji;
	disabled?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface ButtonAsStyleLink extends ButtonBase {
	style: 5;
	url: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export interface ButtonAsNotStyleLink extends ButtonBase {
	style: Exclude<ButtonStyle, 5>;
	/** 1-100 chars */
	custom_id: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-structure
 */
export type Button = ButtonAsStyleLink | ButtonAsNotStyleLink;

/**
 * https://discord.com/developers/docs/interactions/message-components#button-object-button-styles
 */
export type ButtonStyle = 1 | 2 | 3 | 4 | 5;

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure
 */
export type SelectMenu = {
	type: 3 | 5 | 6 | 7 | 8;
	/** 1-100 chars */
	custom_id: string;
	/** length of 25 max */
	options?: Array<SelectOption>;
	channel_types?: Array<ChannelType>;
	/** 1-150 chars */
	placeholder?: string;
	/** 0-25 */
	min_values?: number;
	/** 1-25 */
	max_values?: number;
	disabled?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure
 */
export type SelectOption = {
	/** 1-100 chars */
	label: string;
	/** 1-100 chars */
	value: string;
	/** 1-100 chars */
	description?: string;
	emoji?: import("../Resources/Emoji").PartialEmoji;
	default?: boolean;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-structure
 */
export type TextInput = {
	type: 4;
	/** 1-100 chars */
	custom_id: string;
	style: TextInputStyle;
	/** 1-45 chars */
	label: string;
	/** 0-4000 */
	min_length?: number;
	/** 1-4000 */
	max_length?: number;
	required?: boolean;
	/** 1-4000 chars */
	value?: string;
	/** 1-100 chars */
	placeholder?: string;
}

/**
 * https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles
 */
export type TextInputStyle = 1 | 2;

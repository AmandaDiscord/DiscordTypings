import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export type User = {
	id: Snowflake;
	username: string;
	discriminator: string;
	avatar: string | null;
	bot?: boolean;
	system?: boolean;
	mfa_enabled?: boolean;
	banner?: string | null;
	accent_color?: number | null;
	locale?: import("../Reference").Locale;
	verified?: boolean;
	email?: string | null;
	flags?: number;
	premium_type?: PremiumType;
	public_flags?: number;
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export type PremiumType = 0 | 1 | 2;

/**
 * https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export type Connection = {
	id: string;
	name: string;
	type: ConnectionService;
	revoked?: boolean;
	integrations?: Array<import("./Guild").Integration>;
	verified: boolean;
	friend_sync: boolean;
	show_activity: boolean;
	visibility: Visibility;
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-services
 */
export type ConnectionService = "battlenet"
	| "epicgames"
	| "facebook"
	| "github"
	| "leagueoflegends"
	| "playstation"
	| "reddit"
	| "samsunggalaxy"
	| "spotify"
	| "skype"
	| "steam"
	| "twitch"
	| "twitter"
	| "xbox"
	| "youtube"

/**
 * https://discord.com/developers/docs/resources/user#connection-object-visibility-types
 */
export type Visibility = 0 | 1;

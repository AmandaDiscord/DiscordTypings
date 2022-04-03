import { Snowflake } from "../Reference";

export type Role = {
	id: Snowflake;
	/** 1-100 chars */
	name: string;
	color: number;
	hoist: boolean;
	icon?: string | null;
	unicode_emoji?: string | null;
	position: number;
	permissions: string;
	managed: boolean;
	mentionable: boolean;
	tags: RoleTags;
}

export type RoleTags = {
	bot_id?: Snowflake;
	integration_id?: Snowflake;
	premium_subscriber?: null
}

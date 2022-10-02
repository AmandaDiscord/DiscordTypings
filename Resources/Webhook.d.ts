import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export type Webhook = {
	id: Snowflake;
	type: WebhookType;
	guild_id?: Snowflake | null;
	channel_id?: Snowflake | null;
	user?: import("./User").User;
	name: string | null;
	avatar: string | null;
	token?: string;
	application_id: Snowflake | null;
	source_guild?: import("./Guild").Guild;
	source_channel?: import("./Channel").TextChannel | import("./Channel").AnnouncementChannel;
	url?: string;
}

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
 */
export type WebhookType = 1 | 2 | 3;

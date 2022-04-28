import { Snowflake } from "../Reference";

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure
 */
export type AuditLog = {
	audit_log_entries: Array<AuditLogEntry>;
	guild_scheduled_event: Array<import("./GuildScheduledEvent").GuildScheduledEvent>;
	integrations: Array<import("./Guild").Integration>;
	threads: Array<import("./Channel").ThreadChannel>;
	users: Array<import("./User").User>;
	webhooks: Array<import("./Webhook").Webhook>;
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure
 */
export type AuditLogEntry = {
	target_id: string | null;
	changes?: Array<AuditLogChange>;
	user_id: Snowflake | null;
	id: Snowflake;
	action_type: AuditLogEvent;
	options?: OptionalAuditEntryInfo;
	reason?: string;
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-change-structure
 */
export type AuditLogChange = {
	new_value?: AuditLogValue;
	old_value?: AuditLogValue;
	key: string;
}

export type AuditLogValue = string | number | boolean | Array<unknown>;

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
 */
export type AuditLogEvent = 1 | 10 | 11 | 12 | 13 | 14 | 15 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 30 | 31 | 32 | 40 | 41 | 42 | 50 | 51 | 52 | 60 | 61 | 62 | 72 | 73 | 74 | 75 | 80 | 81 | 82 | 83 | 84 | 85 | 90 | 91 | 92 | 100 | 101 | 102 | 110 | 111 | 112 | 121;

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
 */
export type OptionalAuditEntryInfo = {
	channel_id?: Snowflake;
	count?: string;
	delete_member_days?: string;
	id?: Snowflake;
	members_removed?: string;
	message_id?: Snowflake;
	role_name?: string;
	type?: "0" | "1"
}

/**
 * https://discord.com/developers/docs/resources/invite#invite-object-invite-structure
 */
export type Invite = {
	code: string;
	guild?: import("./Guild").Guild;
	channel: import("./Channel").TextChannel | import("./Channel").VoiceChannel | import("./Channel").CategoryChannel | import("./Channel").NewsChannel | import("./Channel").StageChannel | import("./Channel").DirectoryChannel;
	inviter?: import("./User").User;
	target_type?: InviteTarget;
	target_user?: import("./User").User;
	target_application?: import("./Application").Application;
	approximate_presence_count?: number;
	approximate_member_count?: number;
	expires_at?: string | null;
	guild_scheduled_event?: import("./GuildScheduledEvent").GuildScheduledEvent;
}

/**
 * https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types
 */
export type InviteTarget = 1 | 2;

/**
 * https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure
 */
export type InviteMetadata = {
	uses: number;
	max_uses: number;
	max_age: number;
	temporary: boolean;
	created_at: string;
}

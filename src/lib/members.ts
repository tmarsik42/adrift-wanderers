import membersJson from './members.json';

export type Member = {
	name: string;
	role: string;
	trait: string;
	isPro?: boolean;
};

export const members = membersJson as Member[];

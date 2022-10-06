export = parseReminder;

declare function parseReminder(reminder: string): ParsedReminder;

interface ParsedReminder {
	who: string;
	what: string;
	when: Date;
}

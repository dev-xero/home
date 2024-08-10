// Parse human date syntax
export function parseDate(dateString: string) {
    const ordinalSuffixPattern = /(\d+)(st|nd|rd|th)/;
    const cleanDateString = dateString.replace(ordinalSuffixPattern, '$1');

    const date = new Date(cleanDateString);

    return isNaN(date.getTime())
        ? new Date().toISOString().split('T')[0]
        : date.toISOString().split('T')[0];
}

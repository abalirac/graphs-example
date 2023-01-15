export abstract class DateUtils {

    /**
     * Format date 
     * @param date
     * @returns formated date
     */
    public static formatDate = (date: Date | undefined) => {
        return date?.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute:'2-digit',
            second: '2-digit',
        });
    }
}
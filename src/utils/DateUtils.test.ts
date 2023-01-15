import { DateUtils } from "./DateUtils";

describe('DateUtils', () => {
    it('formats date to readable format', () => {
    expect(DateUtils.formatDate(new Date("2022-10-09T14:03:24.808Z"))).toEqual("10/09/2022, 04:03:24 PM");
    expect(DateUtils.formatDate(undefined)).toBe(undefined);
    });
});
import { CountryCode, isValidPhoneNumber, PhoneNumber } from "libphonenumber-js";
import { parsePhoneNumber } from "libphonenumber-js/min";

export default class Utils {

  public static formatPhoneNumber(
    number: string,
    country: CountryCode = "US"
  ): string {
    try {
      if (isValidPhoneNumber(number, country)) {
        const phoneNumber: PhoneNumber | undefined = parsePhoneNumber(
          number,
          country
        );
        return phoneNumber ? phoneNumber.formatNational() : number;
      }
      return number;
    } catch (error) {
      console.error("Error formatting phone number:", error);
      return number;
    }
  }


  public static getAvatarColor(name: string): string {
    if (!name) return "#1890ff";
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsla(${hue}, 60%, 55%, 0.7)`;
  };

  public static onlyUnique(value: any, index: number, array: any[]): boolean {
    return array.indexOf(value) === index;
  }

  public static formatDuration(totalSeconds: number): string {
    if (!totalSeconds || totalSeconds <= 0) return "0s";

    totalSeconds = Math.floor(totalSeconds); // Ensure integer seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const parts: string[] = [];
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0) parts.push(`${minutes}m`);
    if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);

    return parts.join(' ');
  }
}
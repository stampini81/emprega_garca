export class KeyUtil {
  public static generateRandomKey(): string {
    return Math.floor(Math.random() * 10000000).toString()
  }
}

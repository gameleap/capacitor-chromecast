export interface ChromecastPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

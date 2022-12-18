const ElectronGoogleOAuth2 = require('@getstation/electron-google-oauth2').default;

export default class Authenticator {
  private static auth = new ElectronGoogleOAuth2(
    process.env.GOOGLE_CLIENT_ID || '',
    process.env.GOOGLE_CLIENT_SECRET || '',
    ['https://www.googleapis.com/auth/gmail.readonly']
  );

  public static async authenticate(): Promise<string | null | undefined> {
    return Authenticator.auth.openAuthWindowAndGetTokens().then((tokens) => {
      console.log('tokens', tokens);
      return tokens.access_token;
    });
  }
}

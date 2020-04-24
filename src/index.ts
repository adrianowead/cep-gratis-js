export class CepGratis {
  private credentials: Array<any> = [];
  private attempts: number = 5;

  public setMaxAttempts(attempts: number = 5) {
    this.attempts = attempts;
  }

  public setCredential(resource: string, credentials: any) {
    this.credentials.push({
      resource: resource,
      credentials: credentials,
    });
  }
}

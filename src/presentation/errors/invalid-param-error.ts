export class InvalidParamError extends Error {
  constructor(paremName: string) {
    super(`Invalid param: ${paremName}`)
    this.name = 'InvalidParamError'
  }
}

export class MissingParamError extends Error {
  constructor(paremName: string) {
    super(`Missing param: ${paremName}`)
    this.name = 'MissingParamError'
  }
}

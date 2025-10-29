export class LoginDto {
  username: string
  password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }

  static wrongCredentials(): LoginDto {
    return new LoginDto('asd', 'hjuefl')
  }

  static missingPassword(): LoginDto {
    return new LoginDto(process.env.USER || '', '')
  }
  static missingUserName(): LoginDto {
    return new LoginDto( '', process.env.PASSWORD || '')
  }
  static createLoginDto(): LoginDto {
    return new LoginDto(process.env.USER || '', process.env.PASSWORD || '')
  }
}

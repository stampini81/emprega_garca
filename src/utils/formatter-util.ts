class FormatterUtil {
  public formatCNPJ(cnpj: string): string {
    cnpj = cnpj.replace(/\D/g, '')

    cnpj = cnpj.replace(/^(\d{2})(\d)/, '$1.$2')
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2')
    cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2')

    return cnpj
  }

  public formatCPF(cpf: string): string {
    cpf = cpf.replace(/\D/g, '')

    cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2')
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    cpf = cpf.replace(/(\d{3})(\d{2})$/, '$1-$2')

    return cpf
  }

  public formatCEP(cep: string | number): string {
    let cepStr = cep.toString()
    cepStr = cepStr.replace(/\D/g, '')

    if (cepStr.length !== 8) {
      return cepStr
    }

    return cepStr.replace(/(\d{5})(\d{3})/, '$1-$2')
  }

  public removeLeadingZeros(str: string): string {
    return str.replace(/^0+/, '')
  }
}

export const formatterUtil = new FormatterUtil()

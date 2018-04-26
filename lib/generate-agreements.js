const uuid = require('uuid/v4')

module.exports = data => {
  let agreements = []
  data.mottaker.forEach(person => {
    const agreement = {
      avtale: uuid(),
      tittel: data.shipment.tittel,
      signeringUtloper: data.shipment.signeringUtloper,
      dokumenter: data.dokumenter,
      created: new Date().getTime(),
      status: 'unsigned',
      logg: [
        {
          tidspunkt: '',
          type: 'SigneringsoppdragRegistrert',
          hendelse: ''
        }
      ]
    }
    agreements.push(agreement)
  })
  return agreements
}

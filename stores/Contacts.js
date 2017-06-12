import { observable } from 'mobx'

class Contacts {
  @observable
  all = [
    {
      id: 1,
      first_name: 'Filip Vequaud',
      email: 'fvequaud0@accuweather.com'
    },
    {
      id: 2,
      first_name: 'Selia Drakard',
      email: 'sdrakard1@earthlink.net'
    },
    {
      id: 3,
      first_name: 'Hobard Curreen',
      email: 'hcurreen2@pbs.org'
    },
    {
      id: 4,
      first_name: 'Cahra Pennells',
      email: 'cpennells3@chronoengine.com'
    },
    {
      id: 5,
      first_name: 'Claudetta Bachanski',
      email: 'cbachanski4@baidu.com'
    }
  ]
}

export default Contacts

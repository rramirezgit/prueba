/* este archivo debe contener los servicios en funciones con una instancia de axios */

import api from '../api'
import { typePresuscription } from './types'

export const postPresubscription = async (data: typePresuscription) => {
  const response = await api.post('/presubscription', data)
  return response
}

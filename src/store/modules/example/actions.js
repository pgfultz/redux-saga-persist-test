import * as types from '../types';

export function clicaBotaoRequest(){
  return {
    type: types.BOTAO_CLICADO_REQUEST,
    payload: { nome: 'Lucas', email: 'lucasdasilva165@gmail.com' }
  }
}

export function clicaBotaoSuccess(){
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
    payload: { nome: 'Lucas', email: 'lucasdasilva165@gmail.com' }
  }
}

export function clicaBotaoFailure(){
  return {
    type: types.BOTAO_CLICADO_FAILURE,
    payload: { nome: 'Lucas', email: 'lucasdasilva165@gmail.com' }
  }
}
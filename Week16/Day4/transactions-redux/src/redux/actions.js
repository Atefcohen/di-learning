export const INSERT = 'INSERT';
export const UPDATE = 'update';
export const DELETE = 'delete';
export const UPDATE_INDEX = 'UPDATE-INDEX';

export const insert_trx = data => {
  return{
    type:INSERT,
    payload:data
  }
}
export const update_trx = data =>{
  return{
    type:UPDATE,
    payload:data
  }
}
export const delete_trx = id =>{
  return{
    type:DELETE,
    payload:id
  }
}
export const updateIndex_trx = index =>{
  return{
    type:UPDATE_INDEX,
    payload:index
  }
}

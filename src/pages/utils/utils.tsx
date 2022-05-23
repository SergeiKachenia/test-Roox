export const compareByCity = ( a, b ) =>  {
  if ( a.address.city < b.address.city ) {
    return -1;
  }
  if ( a.address.city > b.address.city ){
    return 1;
  }
  return 0;
}

export const compareByCompany = ( a, b ) =>  {
  if ( a.company.name < b.company.name ) {
    return -1;
  }
  if ( a.company.name > b.company.name ){
    return 1;
  }
  return 0;
}

export const checkResponse = (res: Response) => {
  if (!res.ok) {
    throw new Error(`Error status - ${res.status}`);
  }
};
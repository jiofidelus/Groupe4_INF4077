export const BUCKET_URL = 'http://172.16.40.13:8000/archives';

export const getRegion = (status) => {
  status = parseInt(status);
  switch (status) {
    case 1:
      return 'CENTRE';
    case 2:
      return 'EST';
    case 3:
      return 'LITTORAL';
    case 4:
      return 'SUD';
    case 5:
      return 'EXTREME';
    case 6:
      return 'NORD';
    case 7:
      return 'ADAMAOUA';
    case 8:
      return 'SUD-OUEST';
    case 9:
      return 'OUEST';
    case 10:
      return 'NORD-OUEST';
    default:
      return 'CENTRE';
  }
};

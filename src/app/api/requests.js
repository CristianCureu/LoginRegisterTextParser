import { TEST_BASE_URL } from '@env';
import { LOCAL_BASE_URL } from '@env';

export const getConfigData = async () => {
  const response = await fetch(`${LOCAL_BASE_URL}/configs`);
  return await response.json();
};

export const login = async userInfo => {
  const response = await fetch(`${TEST_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tipAutentificare: userInfo.loginType,
      utilizator: userInfo.user,
      parola: userInfo.password,
    }),
  });
  return await response.json();
};

export const verifyDocument = async info => {
  const response = await fetch(`${LOCAL_BASE_URL}/verificare-document`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cnpcui: info.uniqueNumber,
      tipPersoana: info.entityType,
      tip_document: info.documentType,
      nr_document: info.documentNumber,
      data_document: info.documentDate,
    }),
  });
  return await response.json();
};

export const register = async info => {
  const response = await fetch(`${LOCAL_BASE_URL}/creare-cont`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tipPersoana: info.entityType,
      cnp: info.uniqueNumber,
      email: info.email,
      nume: info.lastName,
      prenume: info.firstName,
      denumire: '',
      telefon: info.phone,
      sediu: '',
      calitate: '',
      localitate: info.city,
      strada: info.streetName,
      codPostal: info.postCode,
      numarPostal: info.streetNo,
      bloc: info.building,
      scara: info.entrance,
      apartament: info.flat,
      judet: info.county,
      serieCI: info.cardSeries,
      numarCI: info.cardNo,
      eliberatDe: info.issuedBy,
      pozaBuletin: info.photoIdentityCard,
      pozaCetatean: info.photoCitizen,
    }),
  });
  return await response.json();
};

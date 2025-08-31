import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const url = 'https://www.emprega.garca.sp.gov.br/b7W1p8V4';
  const payload = {
    usuario: 'larissa.luz',
    senha: 'g@rcaF@TEC0825',
  };
  const res = http.post(url, payload);
  check(res, {
    'login realizado': (r) => r.body.includes('Bem-vindo') || r.body.includes('Dashboard'),
  });
  sleep(1);
}

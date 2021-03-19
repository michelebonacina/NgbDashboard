/**
 * definisce la struttura del menu della sidebar
 * è un array di oggetti composti dalle seguenti proprietà:
 * - nome: nome di comodo dell'elemento
 * - tipo: tipo di elemento. può essere
 *   - link: link ad una risorse, recuperabile dalla proprietà link
 *   - divider: separatore orizzontale
 *   - sezione: titolo della sezione di menu
 *   - group: un raggruppamento di sotto menu, definiti nella propery children
 * - icona: icona fontawesome da visualizzare, valida per il tipo 'link'
 * - i18n: chiave per la localizzazione del testo della voce di menu
 * - link: link della risorsa da aprire, valido per tipo 'link'
 */
export const VOCI_MENU = [
  {
    nome: 'cruscotto',
    tipo: 'link',
    icona: ['fas', 'tachometer-alt'],
    i18n: 'comune.sidebar.menu.cruscotto',
    link: '#',
  },
  {
    nome: 'ordini',
    tipo: 'link',
    icona: ['fas', 'file-alt'],
    i18n: 'ordini',
    link: '#',
  },
  {
    nome: 'prodotti',
    tipo: 'link',
    icona: ['fas', 'shopping-cart'],
    i18n: 'prodotti',
    link: '#',
  },
  {
    nome: 'clienti',
    tipo: 'link',
    icona: ['fas', 'user-friends'],
    i18n: 'clienti',
    link: '#',
  },
  {
    nome: 'report',
    tipo: 'link',
    icona: ['fas', 'chart-area'],
    i18n: 'report',
    link: '#',
  },
  {
    nome: 'integrazioni',
    tipo: 'link',
    icona: ['fas', 'layer-group'],
    i18n: 'integrazioni',
    link: '#',
  },
  {
    nome: 'report',
    tipo: 'sezione',
    i18n: 'report salvati',
  },
  {
    nome: 'mesecorrente',
    tipo: 'link',
    icona: ['fas', 'chart-line'],
    i18n: 'mese corrente',
    link: '#',
  },
  {
    nome: 'ultimotrimestre',
    tipo: 'link',
    icona: ['fas', 'chart-line'],
    i18n: 'ultimo trimestre',
    link: '#',
  },
];

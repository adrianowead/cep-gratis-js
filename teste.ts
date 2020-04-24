import { CepGratis } from './src';

const cep = new CepGratis();

// web mania api (optional)
const webMania = {
  apiKey: 'NHRvLagxDUWw70Guhd4fMSKccftSjvtL',
  apiSecret: 'qVB3AmE2N5UKSL2ok01YP6gVUEqERYQLiPGtye65C6OQZAd0',
};

cep.setCredential('webMania', webMania);

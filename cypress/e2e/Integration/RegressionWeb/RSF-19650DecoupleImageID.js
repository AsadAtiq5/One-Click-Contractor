import ApiFunctions from '../../../support/ApiFunctions';

describe('VerifyThumbs', () => {
  it('Verify Api Returns All Thumbs', { tags: 'Regression' }, () => {
    const apifunctions = new ApiFunctions();

    apifunctions.decoupleImageResponseVerify();
  });
});

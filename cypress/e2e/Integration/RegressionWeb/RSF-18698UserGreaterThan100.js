import ApiFunctions from '../../../support/ApiFunctions';

describe('Count User', () => {
  it('User Count Should Be Greater Than 100', { tags: 'Regression' }, () => {
    const apifunctions = new ApiFunctions();
    apifunctions.userCountApiGreaterThan100();
  });
});

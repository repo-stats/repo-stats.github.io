import { RepoStatsPage } from './app.po';

describe('repo-stats App', () => {
  let page: RepoStatsPage;

  beforeEach(() => {
    page = new RepoStatsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

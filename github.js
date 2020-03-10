class Github {
  constructor () {
    this.client_id = '4b3303a99085072ed756';
    this.client_secret = '4cca236a6e6ba3812d4ecf7bf68b9cd904c843e7';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
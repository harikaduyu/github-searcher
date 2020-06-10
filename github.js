class GitHub {
  constructor() {
    this.client_id = '205363b7d51f9c78933b';
    this.client_secret = '3828727e5f26e4c3b70de847292c9ee83c7b2b97';
  }

  async getUser(user) {
    const profileResponse =  await fetch(`https://api.github.com/users/${user}`);

    const profile = await profileResponse.json();
    return {
      profile
    }

  }
}
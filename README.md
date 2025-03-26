# AI Question Bot

A simple Node.js application that automatically sends random general knowledge questions to an AI service using the Gaia Domains API. The bot runs on a scheduled basis using node-cron.

## Features

- Sends random questions to AI every 5 minutes
- Uses axios for API requests
- Configurable question pool
- Automated scheduling using node-cron

## Prerequisites

- Gaia Domains API key
- Gaia Domain e.g. hkindy.gaia.domains

## Server Setup

1. Install Node.js on your VPS:
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. Install yarn:
```bash
npm install -g yarn
```

3. Verify installations:
```bash
node --version
yarn --version
```

4. Install PM2
```bash
yarn global add pm2
```

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install dependencies:
```bash
yarn install
```

3. Configure your environment:
   - Set your Gaia Domains API key in `src/index.js`
   - Set the BASE_URL e.g. hkindy.gaia.domains

## Usage

Run the application:
```bash
yarn serve
```

The bot will:
- Start automatically
- Send a random question every 5 minutes
- Log both the question and AI's response to the console

## Configuration

### Cron Schedule
The default schedule is set to run every 5 minutes. You can modify the cron expression in `src/index.js`:
```javascript
cron.schedule('*/5 * * * *', main);
```

### Questions
You can modify the question pool by editing the `questions` array in `src/index.js`.

## Dependencies

- axios: For making HTTP requests
- node-cron: For scheduling tasks

# MoveUSD Telegram Mini App

A Telegram Mini App for MoveUSD - a USD-backed digital cash platform on Solana. This app provides a user interface for checking balances, depositing, sending, requesting, and swapping MoveUSD tokens.

## Features

- **USD Balance Display**: View your current USD balance
- **Action Buttons**: Access key functions like Deposit, Send, Request, and Swap
- **Contact Management**: Add contacts for easy transfers
- **Rewards System**: View your points and their USD value
- **Asset Overview**: Track your MoveUSD holdings and value

## Screenshots

![image](https://github.com/user-attachments/assets/0da8fdad-ef81-4407-829b-af18920c9867)

## Technologies Used

- **React**: Frontend library for building UI
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and development server
- **TailwindCSS**: Utility-first CSS framework
- **Telegram WebApp SDK**: Integration with Telegram Mini Apps platform

## Local Development

### Prerequisites

- Node.js 16+
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/wirapratamaz/MoveUSD-TGMINIAPP.git
cd MoveUSD-TGMINIAPP

# Install dependencies
yarn
# or
npm install
```

### Running Locally

```bash
# Run development server
yarn dev --host
# or
npm run dev -- --host
```

This will start a local development server at https://localhost:5173

### Building for Production

```bash
# Build the app
yarn build
# or
npm run build
```

### How to Deploy

1. Create a Netlify account and link your GitHub repository
2. Configure the build settings:
   - Build command: `yarn build`
   - Publish directory: `dist`
3. Deploy the site
4. Configure your Telegram Bot with BotFather to use the Netlify URL

## Telegram Bot Setup

1. Create a bot with [@BotFather](https://t.me/BotFather) on Telegram
2. Use the `/mybots` command
3. Select your bot
4. Go to "Bot Settings" → "Menu Button"
5. Set the button to open your web app URL (e.g., `https://moveusd.netlify.app`)

## Resources

- [Telegram Mini Apps Documentation](https://docs.ton.org/develop/dapps/twa)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## License

[MIT](LICENSE)

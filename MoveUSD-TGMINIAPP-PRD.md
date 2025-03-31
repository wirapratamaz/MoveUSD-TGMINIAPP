# MoveUSD Telegram Mini App - Product Requirements Document (PRD)

## 1. Overview

**Product Name:** MoveUSD Telegram Mini App

**Objective:** Create a Telegram mini app that simulates MoveUSD stablecoin interactions—checking balances, generating deposit addresses, and viewing transaction history—built with the Vite boilerplate for a portfolio showcase.

**Purpose:** Reflect MoveUSD's goal of providing USD-backed digital cash on Solana, integrate their API (mocked), and align with movemoney.app's modern UI for a professional demo.

**Target Audience:** Nick Chicago, Agustin (MoveUSD team), and interviewers.

**Date:** March 31, 2025

## 2. Problem Statement

MoveUSD, a USD-backed stablecoin on Solana, aims to deliver fast, secure digital cash (docs.moveusd.com). Without a Telegram mini app, users miss out on an instant, in-chat way to manage MoveUSD, like checking balances or depositing funds. This project prototypes a solution using Telegram's 950M+ user base, showcasing developer skills for MoveUSD's team.

## 3. Goals

- **Functional:** Allow users to check a mock balance, generate a deposit address via MoveUSD's API (mocked), and view transaction history.
- **Technical:** Build with the Vite Telegram Mini App Boilerplate using TypeScript/React, integrating Telegram WebApp SDK.
- **Portfolio:** Produce a clean, demo-ready app with a UI inspired by MoveMoney, hosted on a new GitHub repo.

## 4. Features & Requirements

### 4.1 Core Features

#### Home Screen
- **Description:** Users launch the app and see a main interface with options.
- **Requirements:**
  - Text: "MoveUSD: Your Digital Cash" in a dark header (MoveMoney's style).
  - Buttons: [Balance, Deposit, History] in a vertical stack or grid, with MoveMoney's rounded, bold design.
  - Use Telegram.WebApp.expand() to maximize screen space.
- **Priority:** High

#### Check Balance
- **Description:** Users click "Balance" to see their mock MoveUSD balance.
- **Requirements:**
  - Store a mock balance (e.g., 100 MoveUSD) in localStorage.
  - UI: Display "Balance: [amount] MoveUSD" in a white card with subtle shadows (MoveMoney's card aesthetic).
  - Add a "Refresh" button (non-functional for demo).
- **Priority:** High

#### Generate Deposit Address
- **Description:** Users click "Deposit" to simulate getting a deposit address.
- **Requirements:**
  - Mock a call to GET /v1/deposit/id (requires auth—use a static response like { "deposit_id": "solana:abc123" }).
  - UI: Show address in a copyable text field (MoveMoney's input style) with a "Copy" button triggering navigator.clipboard and Telegram.WebApp.HapticFeedback.
- **Priority:** High

#### Transaction History
- **Description:** Users click "History" to view mock transactions.
- **Requirements:**
  - Store 5 mock entries in localStorage (e.g., "Received 10 MoveUSD on [date]").
  - UI: List in a scrollable card, each entry with date and amount (MoveMoney's list layout).
  - Empty state: "No transactions yet."
- **Priority:** Medium

### 4.2 UI Design (Inspired by MoveMoney.app)

- **Layout:** Single-column, mobile-first with a fixed dark header and white content area.
- **Colors:** Dark header (#1A2B3C), white background (#FFFFFF), blue accents (#007AFF) for buttons.
- **Typography:** Sans-serif (e.g., Inter), bold headings, regular text—matching MoveMoney's clarity.
- **Components:** Rounded buttons (padding: 12px, radius: 8px), cards with light shadows (box-shadow: 0 2px 4px rgba(0,0,0,0.1)), copyable text fields with "Copied!" feedback.

### 4.3 Non-Functional Requirements

- **Tech Stack:** Vite + React + TypeScript (from boilerplate), Telegram WebApp SDK, CSS for styling.
- **Performance:** Load < 2 seconds; mock API responses for speed.
- **Security:** Mock data only—no real keys or funds.

## 5. User Flow

1. User opens app → Sees home screen with buttons.
2. Clicks "Balance" → Views mock balance in a card.
3. Clicks "Deposit" → Gets mock address, copies it with haptic feedback.
4. Clicks "History" → Sees mock transaction list or empty state.

## 6. Assumptions & Constraints

- **Assumptions:** MoveUSD API requires auth (mocked). No real Solana integration—focus on UI and API simulation.
- **Constraints:** Built for Telegram WebView; timeboxed to 4-6 hours using boilerplate.

## 7. Success Metrics

- App runs error-free in Telegram WebView.
- Demoable in < 5 minutes with clear explanation.
- GitHub repo is public with README and demo link.

## 8. Implementation Plan

### Setup (1 hr):
- Fork/clone vite-boilerplate.
- Run npm install && npm run dev to test locally.
- Create new repo: MoveUSD-Telegram-Mini-App.

### Core Features (3-4 hrs):
- Edit src/App.tsx for home screen with buttons.
- Add balance logic using localStorage in a new Balance.tsx component.
- Mock deposit API in Deposit.tsx with copy functionality.
- Build history in History.tsx with mock data.

### UI Polish (1 hr):
- Update src/index.css with MoveMoney-inspired styles (dark header, white cards, blue buttons).
- Test in Telegram WebView via BotFather (set menu button to local URL or deploy).

### Finalize (1 hr):
- Deploy to Vercel/Netlify.
- Add README: Setup, demo link, 1-min video.
- Practice explaining: "This mocks MoveUSD's features on Telegram using their API spec."

## 9. Sample Code (Using Boilerplate)

### src/App.tsx:
```tsx
import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    window.Telegram.WebApp.expand();
  }, []);

  return (
    <div className="app">
      <header className="header">MoveUSD: Your Digital Cash</header>
      <main className="main">
        <button className="btn" onClick={() => showBalance()}>Balance</button>
        <button className="btn" onClick={() => showDeposit()}>Deposit</button>
        <button className="btn" onClick={() => showHistory()}>History</button>
        <div id="content"></div>
      </main>
    </div>
  );
}

function showBalance() {
  const userId = window.Telegram.WebApp.initDataUnsafe.user?.id || 'user123';
  const balances = JSON.parse(localStorage.getItem('balances') || '{}') || { [userId]: 100 };
  document.getElementById('content')!.innerHTML = `<div class="card">Balance: ${balances[userId]} MoveUSD</div>`;
}

function showDeposit() {
  const mockResponse = { deposit_id: 'solana:abc123' }; // Mock API
  document.getElementById('content')!.innerHTML = `
    <div class="card">
      <p>Deposit Address: <span id="addr">${mockResponse.deposit_id}</span></p>
      <button class="btn-small" onclick="navigator.clipboard.writeText('${mockResponse.deposit_id}'); window.Telegram.WebApp.HapticFeedback.impactOccurred('light'); alert('Copied!')">Copy</button>
    </div>`;
}

function showHistory() {
  const userId = window.Telegram.WebApp.initDataUnsafe.user?.id || 'user123';
  const history = JSON.parse(localStorage.getItem('history') || '{}')?.[userId] || [];
  document.getElementById('content')!.innerHTML = history.length
    ? `<div class="card">${history.slice(-5).join('<br>')}</div>`
    : '<div class="card">No transactions yet</div>';
}

export default App;
```

### src/index.css:
```css
.header { background: #1A2B3C; color: white; padding: 16px; text-align: center; font-weight: bold; }
.main { padding: 16px; background: #FFFFFF; min-height: 100vh; }
.btn { display: block; width: 100%; padding: 12px; margin: 8px 0; background: #007AFF; color: white; border-radius: 8px; border: none; font-size: 16px; }
.card { background: #FFFFFF; padding: 16px; margin: 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-radius: 8px; }
.btn-small { padding: 8px; background: #007AFF; color: white; border-radius: 4px; border: none; }
```

## 10. Deliverables

- **GitHub repo:** MoveUSD-Telegram-Mini-App with:
  - Boilerplate files updated (src/App.tsx, src/index.css).
  - README: Setup, demo URL (e.g., Vercel), video link.
  - Deployed app accessible via Telegram.

## 11. Bonus (If Time Allows)

- Add mock "Send MoveUSD" feature with a form (amount + recipient).
- Animate card transitions for a slicker UX.

## Notes

- **MoveUSD Docs:** It's a USD-backed stablecoin on Solana for digital cash—features reflect this (docs.moveusd.com).
- **API:** GET /v1/deposit/id is mocked since auth isn't available—realistic enough for a demo.
- **UI:** Matches movemoney.app's dark header, white cards, and blue buttons.
- **Boilerplate:** Vite-based, TypeScript/React, pre-configured for Telegram WebApp—saves setup time.

## REFERENCES
https://docs.ton.org/v3/guidelines/dapps/tma/tutorials/step-by-step-guide
https://docs.ton.org/v3/guidelines/dapps/tma/tutorials/design-guidelines
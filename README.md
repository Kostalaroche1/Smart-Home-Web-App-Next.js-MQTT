This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Smart Home Web App – Next.js + MQTT

## Overview
This repository contains the **Next.js frontend and backend** for controlling smart lights remotely via **ESP32-CAM** and a **cloud MQTT broker**.  
It includes **authentication, dashboard, and secure MQTT communication**.

## Features
- Control 5 lights remotely
- Secure user login (JWT)
- MQTT integration for real-time commands
- Ready for deployment on **Vercel**
- Supports remote access via internet
## see esp32 project in this link
https://github.com/Kostalaroche1/control-in-remote-by-internet.git
## Architecture
Browser / Phone
|
Next.js App (Vercel)
├─ Frontend: UI dashboard
├─ API: authentication & light control
|
MQTT Broker (HiveMQ Cloud)
|
ESP32-CAM: executes commands

## Getting Started


### 1. Clone the repo
```bash
git clone https://github.com/yourusername/nextjs-smart-home.git
cd nextjs-smart-home
npm install


###2. Environment Variables (.env.local)
JWT_SECRET=your_jwt_secret
MQTT_URL=mqtts://your-cluster.s1.eu.hivemq.cloud:8883
MQTT_USER=your_username
MQTT_PASS=your_password
###3. Run locally
npm run dev
###4. Deploy

Push to GitHub → connect to Vercel

Set environment variables in Vercel dashboard

Vercel builds only the Next.js project

References

HiveMQ Cloud

Next.js Documentation

cd nextjs-smart-home
npm install
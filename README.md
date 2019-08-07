[build-page]: https://semaphoreci.com/ricardofmm/rm-challenge

# Publishing Platform

[![Build Status](https://semaphoreci.com/api/v1/projects/64991d2a-e7f5-4306-be71-0b2d6bbbd7ed/2852881/badge.svg)](https://semaphoreci.com/ricardofmm/rm-challenge)

- [Build Page][build-page]

Platform to publish personal blog posts

**Table of Contents**

- [Installation](#installation)
- [Setup](#setup)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contribution Guidelines](#contribution-guidelines)
- [About](#about)

## Installation

Before starting, make sure you have the following dependencies installed on your system:

- Node.js version 9.5 or above;
- Yarn;

if you have `node` and `npm` you can install `yarn` by running:

```bash
npm i -g yarn
```

## Setup

First, clone & setup the repository:

```bash
git clone git@github.com:fmmricardo/rm-challenge.git
cd rm-challenge
yarn start
```

## Development

To start your development environment run:

```bash
yarn develop
```

This will start the gatsby application.
This project uses gatsby to watch and compile assets.
To build the assets only once, not watching for changes, run:

```bash
yarn build
```

## Testing

To run the test suit run:

```bash
yarn test
```

## Deployment

This project has automatic deploys enabled on branch master. Check [build page][build-page] for manual deploys or run:

```bash
yarn deploy
```

## Contribution Guidelines

Contributions must follow [Airbnb's guides](https://github.com/airbnb/javascript).

## About

This blog is maintained by [Ricardo Martins](https://ricardomartins.netlify.com).

If you need to contact the maintainer, you may <a href="mailto:ricardofilipe5@sapo.pt">reach out to me</a>

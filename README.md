<h1 align="center">
  <a href="https://orgon.space">
    <img align="center" src="https://raw.githubusercontent.com/tronprotocol/tronweb/master/assets/logo.png"/>
  </a>
</h1>

<p align="center">

  <a href="https://github.com/alexozerov/orgonweb/issues">
    <img src="https://img.shields.io/github/issues/tron-us/tronweb.svg">
  </a>

  <a href="https://github.com/alexozerov/orgonweb/pulls">
    <img src="https://img.shields.io/github/issues-pr/tron-us/tronweb.svg">
  </a>

  <a href="https://github.com/alexozerov/orgonweb/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/tron-us/tronweb.svg">
  </a>

  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/tron-us/tronweb.svg">
  </a>
</p>

## What is OrgonWeb?

[OrgonWeb](https://orgon.space) aims to deliver a unified, seamless development experience influenced by Ethereum's [Web3](https://github.com/ethereum/web3.js/) implementation. We have taken the core ideas and expanded upon them to unlock the functionality of ORGON's unique feature set along with offering new tools for integrating DApps in the browser, Node.js and IoT devices.

To better support its use in TypeScript projects, we have rewritten the entire library in TypeScript. And to make the OrgonWeb API more secure and consistent, there are some breaking changes. <font color=red>Please check out [<font color=red>6.x API documentation</font>](https://orgon.space/docu/docs/intro/)</font> for detailed changes so you can start using the new TypeScript version of TronWeb early. Any questions or feedback are welcome [here](https://github.com/alexozerov/tronweb/issues/new).

**Project scope**

Any new TRON feature will be incorporated into TronWeb. Changes to the API to improve quality-of-life are in-scope for the project. We will not necessarily maintain feature parity with Web3.js going forward as this is a separate project, not a synchronized fork.

## HomePage

__[orgon.space](https://orgon.space)__

## Compatibility
- Version built for Node.js v14 and above
- Version built for browsers with more than 0.25% market share

You can access either version specifically from the dist folder.

TronWeb is also compatible with frontend frameworks such as:
- Angular
- React
- Vue.

You can also ship TronWeb in a Chrome extension.

## Recent History

For recent history, see the [CHANGELOG](https://github.com/alexozerov/orgonweb/blob/master/CHANGELOG.md). You can check it out for:
- New features
- Dependencies update
- Bug fix

## Installation

### Node.js
```bash
npm install tronweb
```
or
```bash
yarn add tronweb
```

### Browser

The easiest way to use TronWeb in a browser is to install it as above and copy the dist file to your working folder. For example:
```
cp node_modules/orgonweb/dist/TronWeb.js ./js/tronweb.js
```
so that you can call it in your HTML page as
```
<script src="./js/tronweb.js"><script>
```

This project is also published on NPM and you can access CDN mirrors of this release (please use sub-resource integrity for any `<script>` includes).

## Testnet

Quasar is the official Orgon testnet. To use it use the following endpoint:
```
https://api.quasar.orgonscan.org
```
Get some Quasar ORGON at https://quasar.orgonspace.org and play with it.

## Your local private network for heavy testing

You can set up your own private network, running Orgon Quickstart. To do it you must [install Docker](https://docs.docker.com/install/) and, when ready, run a command like

```bash
docker run -it --rm \
  -p 9090:9090 \
  -e "defaultBalance=100000" \
  -e "showQueryString=true" \
  -e "showBody=true" \
  -e "formatJson=true" \
  --name orgon \
  orgontools/quickstart
```

[More details about Orgon Quickstart on GitHub](https://github.com/tron-us/docker-orgon-quickstart)

## Creating an Instance

First of all, in your typescript file, define OrgonWeb:

```typescript
import { TronWeb, utils as TronWebUtils, Trx, TransactionBuilder, Contract, Event, Plugin } from 'tronweb';
```

When you instantiate OrgonWeb you can define

* fullNode
* solidityNode
* eventServer
* privateKey

you can also set a

* fullHost

which works as a jolly. If you do so, though, the more precise specification has priority.
Supposing you are using a server which provides everything, like OrgonGate, you can instantiate OrgonWeb as:

```js
const tronWeb = new TronWeb({
    fullHost: 'https://api.orgongate.org',
    headers: { "ORGON-PRO-API-KEY": 'your api key' },
    privateKey: 'your private key'
})
```

For retro-compatibility, though, you can continue to use the old approach, where any parameter is passed separately:
```js
const orgonWeb = new OrgonWeb(fullNode, solidityNode, eventServer, privateKey)
orgonWeb.setHeader({ "ORGON-PRO-API-KEY": 'your api key' });
```

If you are, for example, using a server as full and solidity node, and another server for the events, you can set it as:

```js
const orgonWeb = new OrgonWeb({
    fullHost: 'https://api.orgongate.org',
    eventServer: 'https://api.someotherevent.io',
    privateKey: 'your private key'
  }
)
```

If you are using different servers for anything, you can do
```js
const orgonWeb = new OrgonWeb({
    fullNode: 'https://some-node.tld',
    solidityNode: 'https://some-other-node.tld',
    eventServer: 'https://some-event-server.tld',
    privateKey: 'your private key'
  }
)
```

## FAQ

1. Cannot destructure property 'Transaction' of 'globalThis.TronWebProto' as it is undefined.

This is a problem caused by webpack as it doesn't load cjs file correctly. To solve this problem, you need to add a new rule like below:
```
{
      test: /\.cjs$/,
      type: 'javascript/auto'
}
```

## Integrity Check

The package files will be signed using a GPG key pair, and the correctness of the signature will be verified using the following public key:

```
pub: **** **** **** **** **** **** **** **** **** ****
uid: dev@orgon.space
```

## Contributions

In order to contribute you can

* fork this repo and clone it locally
* install the dependencies — `npm i`
* do your changes to the code
* build the TronWeb dist files — `npm run build:all`
* run a local private network using Orgon Quickstart
* run the tests — `npm run test`
* push your changes and open a pull request

For more questions, please refer to [TronWeb Doc](https://tronweb.network/docu/docs/Migrating%20from%20v5#faq).

## Licence

TronWeb is distributed under a MIT licence.



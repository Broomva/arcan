# Changelog

## [1.5.0](https://github.com/Broomva/arcan/compare/v1.4.0...v1.5.0) (2023-08-31)


### Features

* integrated working chat leveraging https://github.com/langchain-ai/langchain-nextjs-template ([e8edbda](https://github.com/Broomva/arcan/commit/e8edbdab21b6a251dac8b3050691bfea0cd86d3e))


### Bug Fixes

* add arcan logo and renamed text in various pages ([874e346](https://github.com/Broomva/arcan/commit/874e346d6a9faa1875b24143660c59c1f31ba1c7))
* added openai costs callback ([cfab27b](https://github.com/Broomva/arcan/commit/cfab27b1d2516a3707063cac784685e52daf313d))
* included arcan favicon and updated loading screen ([93c87ce](https://github.com/Broomva/arcan/commit/93c87cebd1a2f2383286cb8b4b6e5162bc11add8))
* linting ([df8ec0c](https://github.com/Broomva/arcan/commit/df8ec0c3d9cb404e3d0ef7d3a517c0bab4fca53c))

## [1.4.0](https://github.com/Broomva/arcan/compare/v1.3.9...v1.4.0) (2023-08-08)


### Features

* **agent:** added base text scrapping llm agent and modal deployment ([d4ed6dd](https://github.com/Broomva/arcan/commit/d4ed6ddfae3bff9ae971f4395225e8c4f533285f))


### Bug Fixes

* removed text_chat.py as it is included in arcan init. Fixed unneded dependencies ([a4a8934](https://github.com/Broomva/arcan/commit/a4a89343f766b4e5a4a56e0050a0cc2c393b0bb4))

## [1.3.9](https://github.com/Broomva/arcan/compare/v1.3.8...v1.3.9) (2023-08-07)


### Bug Fixes

* **agents:** add qanda agent and modal web endpoint ([22372bc](https://github.com/Broomva/arcan/commit/22372bcd11e4ea176322d14288adff7cd86539aa))
* **app:** added spells_studio router, validated current .lock as production working ([4d0d19a](https://github.com/Broomva/arcan/commit/4d0d19a2ef81e7105e74ff0617a6050e306c7df2))
* removed api folder to test vercel serverless size error ([ea69375](https://github.com/Broomva/arcan/commit/ea6937502185b39c0d32e9cfa7f01704c101044b))

## [1.3.8](https://github.com/Broomva/arcan/compare/v1.3.7...v1.3.8) (2023-07-04)


### Bug Fixes

* **auth:** fixed auth layout decorator to make pages paywalled as needed ([5d835b6](https://github.com/Broomva/arcan/commit/5d835b660774f42abcef79b4b885538ac8e4c661))
* fixed exports in pages ([b3de1b9](https://github.com/Broomva/arcan/commit/b3de1b95815d71c97e58967fa7bd90ad3e95c577))
* fixed funding links ([a92c490](https://github.com/Broomva/arcan/commit/a92c490bc1cc86477aee3569c2b7d3346a205a20))

## [1.3.7](https://github.com/Broomva/arcan/compare/v1.3.6...v1.3.7) (2023-07-03)


### Bug Fixes

* **app:** fixed firebase config to use env variables with client side rendering ([f9ae9af](https://github.com/Broomva/arcan/commit/f9ae9afbb91f3b7ea4edb64a159925d6ff100708))
* **auth:** fix auth page ([0845419](https://github.com/Broomva/arcan/commit/08454197947412de63af016010b1af7f82e82ea5))
* fixed firebase deps ([df7bb7f](https://github.com/Broomva/arcan/commit/df7bb7f3b5ca33bb04607da8717623e9d892ced9))

## [1.3.6](https://github.com/Broomva/arcan/compare/v1.3.5...v1.3.6) (2023-07-03)


### Bug Fixes

* **app:** added google signin ([f866cb7](https://github.com/Broomva/arcan/commit/f866cb7ab507428f6073da300720a366a29a6fb1))
* **app:** fixed secrets setup for firebase ([9e9bd6a](https://github.com/Broomva/arcan/commit/9e9bd6a4e83f3a206439191a939c344bb8a18d54))
* tailwind ([c1bb567](https://github.com/Broomva/arcan/commit/c1bb56770bd57038de77882b13fb702bf72e0b16))

## [1.3.5](https://github.com/Broomva/arcan/compare/v1.3.4...v1.3.5) (2023-07-02)


### Bug Fixes

* **readme:** updated readme ([051ccbe](https://github.com/Broomva/arcan/commit/051ccbe3c909f0caa2463eedfda46a773c828fbf))
* **readme:** updated readme heading ([2e558f9](https://github.com/Broomva/arcan/commit/2e558f956d16ac23a03e3f0cb5e2f742521cc0fb))
* various updates to styles and routes ([dd80826](https://github.com/Broomva/arcan/commit/dd8082667acda3394c0692020ed42b731d19444f))

## [1.3.4](https://github.com/Broomva/arcan/compare/v1.3.3...v1.3.4) (2023-07-01)


### Bug Fixes

* **app:** fixed arcan_report ([eb8aa59](https://github.com/Broomva/arcan/commit/eb8aa597691edb8d4cfecbf310cd2f3e7e28401f))
* **funding:** fix funding link ([601786c](https://github.com/Broomva/arcan/commit/601786c7c46f1a6367fc29736abc671f3bfeb4f1))
* **funding:** fix patreon funding link ([#1](https://github.com/Broomva/arcan/issues/1)) ([fb88b6a](https://github.com/Broomva/arcan/commit/fb88b6a92fb84bedd9e0dcfca96fcf88b5d29df9))

## [1.3.3](https://github.com/Broomva/arcan/compare/v1.3.2...v1.3.3) (2023-07-01)


### Bug Fixes

* **app:** fix firebase import and app routing. Added template for login page (auth) ([1b73193](https://github.com/Broomva/arcan/commit/1b731936dc4fd6ce4feaed4eb426b7ae0ac02920))
* **funding:** fixed patreon link ([c4ef767](https://github.com/Broomva/arcan/commit/c4ef76730121a94f8ca671dcbdbb69bcec85bf11))

## [1.3.2](https://github.com/Broomva/arcan/compare/v1.3.1...v1.3.2) (2023-07-01)


### Bug Fixes

* **funding:** updated funding ([92c1fc4](https://github.com/Broomva/arcan/commit/92c1fc4cab32f6cb98a576a5ebee18fb681370eb))

## [1.3.1](https://github.com/Broomva/arcan/compare/v1.3.0...v1.3.1) (2023-07-01)


### Bug Fixes

* **app:** fix auth layout ([88c5424](https://github.com/Broomva/arcan/commit/88c542438ec881090a5c44968b907541bbe2f37b))
* **app:** fix page.tsx ([f2ba958](https://github.com/Broomva/arcan/commit/f2ba95841c173617d9787a71c0bf8dbbfb312e83))
* **app:** reordered cards ([d7f6d10](https://github.com/Broomva/arcan/commit/d7f6d100c60116a285e2c4702a9b90d6609ba16d))
* **layout:** testing fe ([9e35a03](https://github.com/Broomva/arcan/commit/9e35a03b1068bdfa8bff26f8b7aa5a57ba0c5fa2))

## [1.3.0](https://github.com/Broomva/arcan/compare/v1.2.5...v1.3.0) (2023-06-30)


### Features

* **app:** added login and dashboard pages from https://github.com/Broomva/instock-app ([163a118](https://github.com/Broomva/arcan/commit/163a1188ba9138e67e38624b808b576dde1b8165))

## [1.2.5](https://github.com/Broomva/arcan/compare/v1.2.4...v1.2.5) (2023-06-30)


### Bug Fixes

* **api:** renamed processing core method ([5a0e9e6](https://github.com/Broomva/arcan/commit/5a0e9e62e2bc1fd03f8e99ad94cd0038f36274fa))

## [1.2.4](https://github.com/Broomva/arcan/compare/v1.2.3...v1.2.4) (2023-06-30)


### Bug Fixes

* **api:** created base transformation function ([b37b613](https://github.com/Broomva/arcan/commit/b37b613da8251cebe7770eddde9e3ba8926b3aa9))
* **arcan:** added base transformation ([4d48b95](https://github.com/Broomva/arcan/commit/4d48b95ea6993ca889dfe871caa52289deb39914))

## [1.2.3](https://github.com/Broomva/arcan/compare/v1.2.2...v1.2.3) (2023-06-30)


### Bug Fixes

* **examples:** add examples page ([a3ede45](https://github.com/Broomva/arcan/commit/a3ede45bb00a450f619f94f291d03348ea686217))

## [1.2.2](https://github.com/Broomva/arcan/compare/v1.2.1...v1.2.2) (2023-06-30)


### Bug Fixes

* **next:** added about page. added modal api routes for /api and /version ([e7d5ebf](https://github.com/Broomva/arcan/commit/e7d5ebfca187208d0527256336bbe9d8bf87ae37))

## [1.2.1](https://github.com/Broomva/arcan/compare/v1.2.0...v1.2.1) (2023-06-30)


### Bug Fixes

* **init:** removed unused import, changed svg font ([3e0ab60](https://github.com/Broomva/arcan/commit/3e0ab607308cd901a8f5daa25ef5b3c96386aa32))
* **license:** fixed licensing ([b09251a](https://github.com/Broomva/arcan/commit/b09251a7421519ac0247659be8b630fd1b23bfb5))

## [1.2.0](https://github.com/Broomva/arcan/compare/v1.1.1...v1.2.0) (2023-06-30)


### Features

* **api:** added modal api ([b927669](https://github.com/Broomva/arcan/commit/b927669ae38a1b491122a99abf1b12ce18306080))


### Bug Fixes

* **build:** fixed build and deploy ([b78d1c0](https://github.com/Broomva/arcan/commit/b78d1c0d999194dac22069fb84ba86fd86c47919))
* **build:** fixed build using modal deployment ([b7f9001](https://github.com/Broomva/arcan/commit/b7f900121ecd460e1ef3a8626e533d6b494f8dcb))

## [1.1.1](https://github.com/Broomva/arcan/compare/v1.1.0...v1.1.1) (2023-06-30)


### Bug Fixes

* **requirements:** removed databricks_session req ([52e97ce](https://github.com/Broomva/arcan/commit/52e97cecabdeb0df6070925829ba088c63af68b9))
* **yarn:** fixed deployment ([b6a5995](https://github.com/Broomva/arcan/commit/b6a5995c5118db947ddaaeae947f56d400e1514b))

## [1.1.0](https://github.com/Broomva/arcan/compare/v1.0.1...v1.1.0) (2023-06-30)


### Features

* **next:** added nextjs and fastapi deployment template ([6139ffa](https://github.com/Broomva/arcan/commit/6139ffad3ec56510f807575841767504aae0ae49))


### Bug Fixes

* **docs:** fixed readme info ([531c2e4](https://github.com/Broomva/arcan/commit/531c2e477c91889e1cfe23e94b95b934281fbee3))
* **funding:** fixed typo in funding.yml ([1544b0e](https://github.com/Broomva/arcan/commit/1544b0e53394ad83145ffcc689a90ee8d71c3037))
* **yarn:** fixed yarn build and install ([e68bf6c](https://github.com/Broomva/arcan/commit/e68bf6c5aaf49beba38c8b17904513d27b65c078))

## [1.0.1](https://github.com/Broomva/arcan/compare/v1.0.0...v1.0.1) (2023-06-28)


### Bug Fixes

* **setup:** added entrypoint ([c3328bf](https://github.com/Broomva/arcan/commit/c3328bfea33cd72645d6a752e446ac5c0fb5fafc))

## [1.0.0](https://github.com/Broomva/arcan/compare/v0.1.1...v1.0.0) (2023-06-28)


### ⚠ BREAKING CHANGES

* renamed to arcan.ai

### Features

* renamed to arcan.ai ([d4b4350](https://github.com/Broomva/arcan/commit/d4b4350afac4db34966af4e08bc54dbe2ee72c16))


### Bug Fixes

* **governance:** fixed governance deps ([dba988b](https://github.com/Broomva/arcan/commit/dba988b486fa52dd58ed35c79396f7f48a028d79))
* **poetry:** refresh poetry setup ([ab8ca0a](https://github.com/Broomva/arcan/commit/ab8ca0a615b539e60ac491ffc462d8386f5689b6))
* **rename:** updated namings ([77e43ce](https://github.com/Broomva/arcan/commit/77e43cefca11f402b8d9435f5ce36b0663143cf0))

## [0.1.1](https://github.com/Broomva/modern_data_integration_tool/compare/v0.1.0...v0.1.1) (2023-06-27)


### Bug Fixes

* **poetry:** added poetry env ([8e27a7c](https://github.com/Broomva/modern_data_integration_tool/commit/8e27a7c939633bb398841338b573736e69c7aa09))
* **README:** update README.md typo ([b6d354d](https://github.com/Broomva/modern_data_integration_tool/commit/b6d354daf5d23d968c1d0487947957aca11cf59f))
* **setup:** fixed entrypoint with poetry ([4562072](https://github.com/Broomva/modern_data_integration_tool/commit/45620727f817e61d888f580f8d63fe3c50504c03))

## 0.1.0 (2023-06-27)


### Bug Fixes

* **black:** fix black formatting ([f4e37fb](https://github.com/Broomva/arcan/commit/f4e37fbcdcd435f3eb8e35b7b9ac290b4e361607))
* **arcan:** fix datamodels.py unused imports ([93b1de7](https://github.com/Broomva/arcan/commit/93b1de758ba97ece6b0fd453c22a96f097535c70))
* **package:** Updated template to fit new version of arcan ([c632c47](https://github.com/Broomva/arcan/commit/c632c47be8ced594434d8612e562c09eaaedbd15))

## Changelog

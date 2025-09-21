# Harmoniq UI — Component Library (React + TS + Vite)

[![CI](https://img.shields.io/github/actions/workflow/status/luiz14augusto/harmoniq-ui/ci.yml?label=CI)](https://github.com/luiz14augusto/harmoniq-ui/actions/workflows/ci.yml)
[![Storybook Pages](https://img.shields.io/github/actions/workflow/status/luiz14augusto/harmoniq-ui/deploy-storybook-gh-pages.yml?label=Storybook%20Pages)](https://github.com/luiz14augusto/harmoniq-ui/actions/workflows/deploy-storybook-gh-pages.yml)
[![Chromatic](https://img.shields.io/badge/Chromatic-publish-blue)](https://www.chromatic.com/)
[![codecov](https://codecov.io/gh/luiz14augusto/harmoniq-ui/graph/badge.svg)](https://codecov.io/gh/luiz14augusto/harmoniq-ui)

Biblioteca de componentes **tipada** e **testada** para React, construída com **Vite + TypeScript**, documentada em **Storybook** e coberta por **Vitest/RTL**.  
Inclui workflows de **CI**, **deploy do Storybook no GitHub Pages** e **publicação no Chromatic**, além de relatório de **cobertura no Codecov** e **Size Limit**.

## ✨ Principais recursos

- **Componentes prontos**: Button, CircularLoading, Input, TextArea, Drawer, Modal, Toast, PdfViewer e ícones utilitários — com stories e **Autodocs** habilitado.
- **Design tokens & Theming**: `src/theme/ThemeProvider.tsx` e `tokens.ts`.
- **Qualidade**: ESLint, Prettier, Tests (Vitest/RTL), MSW para mocks, Size Limit.
- **DX**: Storybook com docs automáticos, Vite dev server, scripts simples.
- **CI/CD**: GitHub Actions para build/test/coverage/size e deploy do Storybook.

---

## 🚀 Começando

```bash
# Requisitos: Node 20+ e Yarn
yarn
yarn dev           # Vite dev server (app de playground, se houver)
yarn storybook     # abre docs de componentes em http://localhost:6006

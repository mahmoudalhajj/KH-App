# Khattabat Client Onboarding

React Native (Expo) client onboarding app with MobX state management and i18n support.

## Folder Structure

```
Khattabat_Client_Onboarding/
├── App.js                          # Root component, navigation stack
├── index.js                        # Entry point
├── app.json                        # Expo configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies and scripts
│
└── src/
    ├── components/                 # Reusable UI components (TSX)
    │   ├── common/                 # Shared generic components
    │   │   ├── AppButton.tsx
    │   │   ├── AppTextInput.tsx
    │   │   ├── DynamicText.tsx
    │   │   ├── DynamicView.tsx
    │   │   ├── LanguageSelector.tsx
    │   │   └── ScreenContainer.tsx
    │   ├── cart/                   # Cart-specific sub-components
    │   │   ├── CartFooter.tsx
    │   │   ├── CartForm.tsx
    │   │   └── CartStats.tsx
    │   ├── chatting/               # Chat-specific sub-components
    │   │   ├── ChatEmptyState.tsx
    │   │   ├── ChatHeader.tsx
    │   │   ├── ChatInput.tsx
    │   │   ├── ChatList.tsx
    │   │   └── ChatMessageBubble.tsx
    │   ├── Cart.tsx                # Cart container (composes cart/ sub-components)
    │   └── Chatting.tsx            # Chat container (composes chatting/ sub-components)
    │
    ├── screens/                    # Screen-level components (JSX)
    │   ├── AuthScreen.jsx
    │   ├── CartScreen.jsx
    │   ├── ChatScreen.jsx
    │   └── HomeScreen.jsx
    │
    ├── stores/                     # MobX stores (state + business logic)
    │   ├── AuthStore.ts
    │   ├── CartStore.ts
    │   ├── getCartStore.ts         # Memoized cart store factory (per user)
    │   ├── i18nStore.ts
    │   ├── LocalStorageStore.ts
    │   ├── MessageStore.ts
    │   ├── OnboardingStore.ts
    │   └── ThemeStore.ts
    │
    ├── enums/                      # Constant enums
    │   ├── authErrors.ts           # E_AUTH_ERROR
    │   ├── authStatus.ts           # E_AUTH_STATUS
    │   ├── cartErrors.ts           # E_CART_ERROR
    │   ├── color.ts                # E_COLORS
    │   ├── designTokens.ts         # E_AUTH_CONSTRAINTS, E_CART_CONSTRAINTS, E_FONT_SIZE, E_SPACING, etc.
    │   ├── direction.ts            # E_TEXT_DIRECTION, E_TEXT_ALIGN, E_FLEX_DIRECTION
    │   ├── language.ts             # E_LANGUAGE_LABELS, E_DATE_FORMAT, LANGUAGE_LOCALE
    │   ├── MessageSender.ts        # E_MESSAGE_SENDER
    │   ├── navigation.ts           # E_NAV_OPTION
    │   ├── routes.ts               # E_ROUTE
    │   ├── strings.ts              # E_APP, E_ICON, E_PLACEHOLDER, E_LOG_ERROR
    │   └── StorageKeys.ts          # E_STORAGE_KEY
    │
    ├── types/                      # TypeScript type definitions
    │   ├── cartItem.ts
    │   ├── message.ts
    │   └── user.ts
    │
    ├── helpers/                    # Utility functions
    │   └── validator.ts            # isValidEmail, isValidPassword, isValidItemName, etc.
    │
    └── i18n/                       # Internationalization
        ├── translations.ts         # Translation dictionaries (en/ar/fr)
        └── translationKeys.ts      # TranslationKey enum
```

## Naming Conventions

### Files

| Location      | Convention                           | Example                            |
| ------------- | ------------------------------------ | ---------------------------------- |
| `components/` | PascalCase, `.tsx`                   | `CartForm.tsx`, `ChatInput.tsx`    |
| `screens/`    | PascalCase + `Screen` suffix, `.jsx` | `AuthScreen.jsx`, `CartScreen.jsx` |
| `stores/`     | PascalCase + `Store` suffix, `.ts`   | `AuthStore.ts`, `CartStore.ts`     |
| `enums/`      | camelCase, `.ts`                     | `designTokens.ts`, `authErrors.ts` |
| `types/`      | camelCase, `.ts`                     | `cartItem.ts`, `user.ts`           |
| `helpers/`    | camelCase, `.ts`                     | `validator.ts`                     |
| `i18n/`       | camelCase, `.ts`                     | `translationKeys.ts`               |

### Code

| Construct        | Convention                            | Example                                      |
| ---------------- | ------------------------------------- | -------------------------------------------- |
| React components | PascalCase, named export              | `export const AuthScreen = observer(...)`    |
| MobX stores      | PascalCase class, camelCase singleton | `class AuthStore` / `export const authStore` |
| Enums            | `E_` prefix, SCREAMING_SNAKE members  | `E_CART_CONSTRAINTS.MAX_QUANTITY`            |
| Types            | camelCase                             | `type user = {...}`                          |
| Store methods    | camelCase, verb-first                 | `handleAuth()`, `loadStoredCart()`           |
| Store getters    | `get` prefix                          | `getUserId()`, `getIsLoggedIn()`             |
| Computed values  | noun, no `get` prefix                 | `getTotalPrice`, `getTotalItems`             |
| Error enums      | `E_` + domain + `ERROR`               | `E_AUTH_ERROR.INVALID_EMAIL`                 |
| Design tokens    | `E_` + domain + `CONSTRAINTS`         | `E_CART_CONSTRAINTS.MAX_QUANTITY`            |
| Validators       | `isValid` prefix, returns `boolean`   | `isValidEmail()`, `isValidPrice()`           |

### Rules

- **MobX owns functionality and state**
- **Static values live in enums**
- **Types live in type files**

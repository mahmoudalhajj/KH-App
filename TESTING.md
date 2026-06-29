# Unit Testing

---

### `login`

| #   | Scenario                 | Input                                 | Expected                  | Actual   |
| --- | ------------------------ | ------------------------------------- | ------------------------- | -------- |
| 1   | Valid credentials        | email="a@b.com", password="123456"    | User logged in            | expected |
| 2   | Empty email and password | email="", password=""                 | ERROR_NO_CREDENTIALS      | expected |
| 3   | Empty email only         | email="", password="123456"           | ERROR_NO_CREDENTIALS      | expected |
| 4   | Empty password only      | email="a@b.com", password=""          | ERROR_NO_CREDENTIALS      | expected |
| 5   | Invalid email format     | email="notanemail", password="123456" | ERROR_INVALID_CREDENTIALS | expected |
| 6   | Password too short       | email="a@b.com", password="123"       | ERROR_INVALID_CREDENTIALS | expected |

#### Edge Cases

- Password at MIN length boundary (6 chars) → accepted ✅ expected
- Password at MIN - 1 (5 chars) → rejected ✅ expected
- Email with valid special chars (example: a+b@c.com) → accepted ✅ expected

---

### `register`

| #   | Scenario             | Input                                              | Expected                   | Actual   |
| --- | -------------------- | -------------------------------------------------- | -------------------------- | -------- |
| 1   | All valid fields     | name="Mahmoud", email="a@b.com", password="123456" | User created and logged in | expected |
| 2   | Missing name         | name=""                                            | ERROR_ALL_FIELDS_REQUIRED  | expected |
| 3   | Missing email        | email=""                                           | ERROR_ALL_FIELDS_REQUIRED  | expected |
| 4   | Missing password     | password=""                                        | ERROR_ALL_FIELDS_REQUIRED  | expected |
| 5   | Invalid name         | name exceeds MAX_NAME_LENGTH                       | Name validation error      | expected |
| 6   | Invalid email format | email="bad"                                        | Email validation error     | expected |
| 7   | Password too short   | password="12"                                      | Password validation error  | expected |

- Whitespace-only name → rejected (trimmed to empty) ✅ expected

---

## CartStore

### `addItem`

| #   | Scenario                           | Input                                    | Expected                                              | Actual   |
| --- | ---------------------------------- | ---------------------------------------- | ----------------------------------------------------- | -------- | --- |
| 1   | Happy path                         | `name="Apple"`, `price="1.5"`, `qty="2"` | Item added to cart                                    | expected |     |
| 2   | All fields empty                   | `name=""`, `price=""`, `qty=""`          | `ERROR_CART_ALL_VALUES_REQUIRED`                      | expected |     |
| 3   | Duplicate item name                | Same name as existing item               | Quantity incremented                                  | expected |     |
| 4   | Duplicate pushes over MAX_QUANTITY | Existing `qty=98`, adding `qty=2`        | `ERROR_CART_QUANTITY_TOO_HIGH`                        | expected |     |
| 5   | Name too long                      | Name exceeds `MAX_NAME_LENGTH`           | Name validation error                                 | expected |     |
| 6   | Price = 0                          | `price="0"`                              | Price validation error                                | expected |     |
| 7   | Price over MAX_PRICE               | `price="1000000"`                        | Price validation error                                | expected |
| 8   | Quantity = 0                       | `qty="0"`                                | Quantity validation error                             | expected |     |
| 9   | Quantity over MAX                  | `qty="100"`                              | Quantity validation error                             | expected |     |
| 10  | Clears form fields on success      | Valid item                               | `itemName`, `itemPrice`, `itemQuantity` reset to `""` | expected |     |
| 11  | Clears error on success            | Prior error existed                      | `error=""`                                            | expected |     |

---

### `clearCart`

| #   | Scenario                | Input                         | Expected    | Actual   |
| --- | ----------------------- | ----------------------------- | ----------- | -------- |
| 1   | Clears non-empty cart   | Cart has 3 items              | cart.size=0 | expected |
| 2   | Resets error observable | Stale validation error exists | error=""    | expected |

---

### `setCartItem`

| #   | Scenario                         | Input                            | Expected                          | Actual   |
| --- | -------------------------------- | -------------------------------- | --------------------------------- | -------- |
| 1   | New valid item                   | Item not in cart                 | Item added                        | expected |
| 2   | Existing item, quantity in range | existingItem, qty within bounds  | Quantity updated                  | expected |
| 3   | Existing item, quantity over MAX | existingItem, qty pushes over 99 | ERROR_CART_QUANTITY_TOO_HIGH      | expected |
| 4   | Invalid new item                 | Bad price or quantity            | ERROR_CART_INVALID_PRICE_QUANTITY | expected |

---

## AppTextInput

## ChatInput

| #   | Scenario                            | Input                        | Expected                           | Actual   |
| --- | ----------------------------------- | ---------------------------- | ---------------------------------- | -------- |
| 1   | Return key inserts newline          | Press return key on keyboard | Newline inserted, message not sent | expected |
| 2   | Send button sends message           | Tap Send button              | Draft cleared, message dispatched  | expected |
| 3   | Send button disabled on empty draft | draft=""                     | Button disabled (opacity 0.5)      | expected |
| 4   | Send button enabled with content    | draft="hello"                | Button enabled (opacity 1)         | expected |

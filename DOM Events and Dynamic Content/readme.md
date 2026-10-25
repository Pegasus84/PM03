# DOM Events and Dynamic Content

## Project Description

An interactive shopping list demonstrating DOM selection,
event handling, and dynamic changes to page content.

## Features

- Add shopping items.
- Mark items as purchased.
- Remove individual items.
- Clear the entire list.
- Update the item count automatically.

## Selectors Used

- `getElementById()` selects elements using their IDs.
- `querySelector()` selects the list message using a CSS selector.

## Events Used

- `submit` adds an item to the list.
- `change` updates an item's purchased style.
- `click` removes an item or clears the list.
- `event.preventDefault()` prevents the form from refreshing the page.

## Dynamic DOM Methods

- `createElement()` creates new list elements.
- `appendChild()` adds a new item to the list.
- `classList.toggle()` changes the purchased style.
- `remove()` deletes an individual item.
- `replaceChildren()` clears the list.
- `textContent` updates the item count and messages.

## Testing Checklist

- [ ] Add a shopping item.
- [ ] Try submitting an empty input.
- [ ] Mark an item as purchased.
- [ ] Remove an individual item.
- [ ] Clear the entire list.
- [ ] Confirm the item count updates correctly.

## Evidence

Add screenshots showing the initial page, an added item,
a purchased item, and an item being removed.

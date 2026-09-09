# Aruma Toast Online Ordering Plan

**Status:** Deferred to project phase two
**Last updated:** September 8, 2026
**Project:** Aruma Tacos & Tequila website
**Audience:** Midvora project team and Aruma decision-makers

## Executive summary

Online ordering is outside the current website phase. The current release will use Aruma's picture-based visual menu for browsing, reservations, and restaurant visits. Toast activation and website ordering connections will be handled as a separate phase two project after Aruma approves the scope and provides the required account details.

When phase two begins, the recommended solution is to keep the custom Aruma website and visual menu, then use Toast Online Ordering Pro for item configuration, fulfillment, payment, and delivery of completed orders to the POS and kitchen.

The custom website should remain the discovery and presentation layer. Toast should remain the transactional source of truth for:

- Menu availability and pricing
- Required and optional modifiers
- Pickup, curbside, delivery, and scheduled-order rules
- Taxes, tips, discounts, and final totals
- Payment authorization
- POS and kitchen order submission
- Customer order tracking and notifications

This approach preserves the approved Aruma design while avoiding the security, compliance, synchronization, and reliability risks of recreating Toast checkout from scratch.

## Current website state

- The homepage design and imagery remain unchanged.
- The second visual menu has been prepared as the new customer-facing `/menu` page.
- The original Menu One has been preserved as an unlinked, non-indexed sample at `/menu-sample-one/`.
- The visual menu supports search, large dish previews, and responsive phone/desktop layouts.
- The current website does not show an online cart, checkout controls, or Toast calls to action.
- Toast activation and website ordering work are deferred to project phase two.

## Recommended phase two solution

### Toast Online Ordering Pro

Toast Online Ordering Pro is the preferred fit because it supports:

- Direct links to individual menu items
- A branded ordering experience
- A custom ordering domain
- POS and kitchen integration
- Live menu configuration and availability
- Pickup, delivery, curbside, and scheduled ordering
- Promotions, order tracking, and customer communications
- Toast-managed payment checkout

A suitable ordering domain would be:

`order.arumatacos.com`

The standard public Toast URL can be used first if the custom domain is not ready.

## Proposed phase two customer journey

1. A customer opens the Aruma website.
2. They choose **Menu** or **Order Online**.
3. The visual Aruma menu opens at `/menu`.
4. They search or browse by category and select a dish.
5. The website shows the large dish image, description, and starting price.
6. **Add to order** opens the corresponding Toast menu item.
7. Toast collects required modifiers, special requests, fulfillment method, contact information, tip, and payment.
8. Toast validates the final price and availability.
9. Toast sends the completed order directly to the restaurant's POS and kitchen workflow.

If individual item links are unavailable, the fallback is a global **Continue in Toast** button that opens Aruma's public Toast ordering menu.

## Important cart limitation

A custom website cart cannot be transferred into Toast through a normal public ordering link. Standard Toast Online Ordering does not support embedding its ordering page into an arbitrary external website.

If a visual cart is added in phase two, it should be treated as a shortlist unless Toast direct item links are available. Toast will own the actual order cart and checkout.

The interface must clearly explain this behavior so customers are not surprised or asked to repeat unnecessary work.

## Implementation options

| Option | Description | Advantages | Limitations | Recommendation |
|---|---|---|---|---|
| Toast Online Ordering | Link the website to Aruma's hosted Toast ordering page | Fast, secure, POS-connected | Generic Toast-hosted transition; no custom cart transfer | Good launch fallback |
| Toast Online Ordering Pro | Use branding, custom domain, and direct menu-item links | Best balance of design, reliability, and POS integration | Requires an additional Toast subscription/setup | **Recommended** |
| Toast-approved ordering partner | Use a provider such as Zuppler for white-label ordering connected to Toast | Managed integration and order injection | Additional vendor, contract, and fees | Consider if Toast Pro is unsuitable |
| Custom Toast API integration | Build our own ordering backend and submit directly to Toast | Complete control over the experience | Requires Toast approval, backend infrastructure, payment work, testing, and ongoing maintenance | Not recommended for the initial launch |

## Information required from Aruma

The client should provide or confirm the following:

### Toast account and product

- Whether Toast Online Ordering is already active
- Whether Digital Storefront Pro / Online Ordering Pro is included in their subscription
- The public Toast Online Ordering URL
- Whether the Toast **Ordering On** setting is enabled
- The Toast representative or account manager contact, if activation is needed

### Ordering operations

- Supported fulfillment methods: pickup, curbside, delivery, dine-in, or scheduled orders
- Ordering hours and lead times
- Delivery radius and delivery fees, if applicable
- Minimum order amount, if applicable
- Order throttling or capacity rules during busy periods
- Cancellation and refund policy
- Restaurant phone number customers should use for order problems

### Menu configuration

- Confirmation that the Toast online menu is published and current
- Final item names, prices, descriptions, and categories
- Required modifier groups and default modifiers
- Add-on pricing and substitution rules
- Sold-out and time-based availability settings
- Allergy and dietary labeling approved by the restaurant
- Direct Toast links for individual items, if Online Ordering Pro is active

### Brand and domain

- Preferred ordering subdomain, such as `order.arumatacos.com`
- Access to the domain's DNS settings when the custom domain is configured
- Approved logo, banner, colors, and ordering-page photography

## Phase two delivery plan

### Stage 1 — Toast activation

1. Aruma enables Toast Online Ordering or Online Ordering Pro.
2. The restaurant publishes its online menu and modifiers.
3. Aruma sends the verified public ordering URL.
4. We test the Toast page using a customer account and verify that orders reach the correct location.

### Stage 2 — Website connection

1. Add the verified Toast URL to the website configuration.
2. Add a working Toast handoff to the visual menu.
3. Add visible **Order Online** calls to action in the header, mobile bar, menu, promotion, and footer where appropriate.
4. If direct item links are available, map each visual menu item to the matching Toast item.
5. Keep all external Toast links restricted to approved HTTPS Toast domains.
6. Preserve the visual menu's search, photography, and dish-detail experience.

### Stage 3 — End-to-end verification

1. Test pickup and delivery on phone and desktop.
2. Verify required modifiers cannot be skipped.
3. Verify prices, taxes, fees, discounts, and tips.
4. Submit a controlled test order.
5. Confirm the order appears on the correct Toast terminal and kitchen display/printer.
6. Test confirmation messages and order tracking.
7. Test closed hours, sold-out items, payment failure, and canceled-order behavior.

### Stage 4 — Launch and monitoring

1. Publish the website changes to `main`.
2. Verify GitHub Pages deployment and all public links.
3. Place one final low-value live order approved by the restaurant.
4. Monitor failed orders, customer questions, and menu mismatches during the first week.

## Custom API alternative

A fully custom Aruma cart can submit directly into Toast, but it is a separate software integration project.

It requires:

- Approval from Toast for custom or partner API access
- Sandbox and production API accounts
- Secure storage for the client ID and client secret
- A server-side application; secrets cannot be placed in Astro client code or GitHub Pages
- Restaurant, menu, menu-group, item, modifier, dining-option, and payment identifiers
- Menu synchronization through Toast's menus API
- Correct handling of required, optional, and default modifiers
- Availability validation before submission
- Price calculation through the Toast Orders API `/prices` endpoint
- Order submission, payment authorization, retries, idempotency, and failure recovery
- Webhooks or reconciliation for menu and order changes
- Certification and production testing with Toast

Toast's standard self-service API access is read-only. Order creation requires custom or partner access with appropriate write scopes. Payment access may require additional approval and is not suitable for a browser-only implementation.

## Security requirements

- Never place Toast client secrets in the repository, website JavaScript, or chat messages.
- Store secrets only in an approved server-side secret manager.
- Do not collect raw payment-card information on the Aruma website.
- Use Toast-hosted payment checkout for the recommended implementation.
- Validate all outgoing Toast URLs before redirecting customers.
- Do not claim that an order was placed until Toast confirms it.
- Do not calculate a final customer total using the display prices on the visual menu; Toast must provide the authoritative total.

## Launch acceptance criteria

Online ordering is ready for customers only when all of the following are true:

- The public Toast ordering link belongs to the Marshall Aruma location.
- Toast Online Ordering is enabled and accepting orders.
- Menu prices and modifiers match the restaurant's approved configuration.
- Mobile and desktop ordering paths have been tested.
- A controlled test order reaches the correct POS and kitchen destination.
- Taxes, fees, discounts, tips, and fulfillment times are correct.
- The customer receives an accurate confirmation.
- The restaurant has approved the cancellation, refund, and customer-support language.

## Decision

Proceed with **Toast Online Ordering Pro** if available. Retain the custom Aruma website and visual menu as the brand experience, and allow Toast to own the transactional cart, final pricing, payment, and POS/kitchen submission.

Use standard Toast Online Ordering as the immediate fallback. Consider an approved ordering partner only if Toast Pro cannot meet the restaurant's requirements. Do not begin a custom Toast API implementation until Aruma has obtained written API approval and approved the additional project scope.

## Official references

- [Toast Online Ordering and Delivery](https://pos.toasttab.com/products/online-ordering)
- [Subscribe to Toast Online Ordering](https://support.toasttab.com/en/article/Subscribe-to-Online-Ordering)
- [Toast Online Ordering Pro setup](https://support.toasttab.com/en/article/Getting-Started-with-Toast-Online-Ordering-Pro)
- [Toast Online Ordering FAQ](https://central.toasttab.com/articles/Knowledge/Online-Ordering-FAQ)
- [Toast custom integration overview](https://doc.toasttab.com/doc/devguide/apiCustomIntegrationOverview.html)
- [Toast integration partnership process](https://doc.toasttab.com/doc/devguide/integrationDevProcess.html)
- [Using Toast menu data to construct valid orders](https://doc.toasttab.com/doc/devguide/apiUsingMenusApiDataToSubmitProperlyFormedOrders_V2.html)
- [Creating orders with the Toast Orders API](https://doc.toasttab.com/doc/devguide/apiCreatingOrders.html)
- [Toast and Zuppler integration](https://pos.toasttab.com/partners/directory/zuppler)

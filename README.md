# My Online Gaming Website 🎮

A responsive website built for my university project, showcasing available games, interactive features, and company events/information.

## Design Choices and Implemented Features

For the design of my website, I drew inspiration from various gaming sites such as Steam and Epic Games, which both incorporate a darker theme with light, contrasting text. This influenced my choice of a dark blue and white based colour palette, with vibrant hints of pink and purple, as this is eye-catching and reflects the aesthetic of the logo. 

![Web_Technologies_Report_D-000](https://github.com/user-attachments/assets/d06b244d-a0a7-4877-bbe3-214319ae2639)

I standardised the head element to maintain consistency across the site. The meta tags for ‘description’ and ‘keywords’ are used and vary on each page for SEO, so it is clear to search engines what the site provides. Additionally, I used a favicon and set the `<title>` element to allow identification of the company in the browser tab.

<img width="1034" height="275" alt="Web_Technologies_Report_D-001" src="https://github.com/user-attachments/assets/5e143b60-a9e3-445e-abaa-8a2f24809e14" />

For typography, I used the ‘Jobless’ font to give the header a futuristic, game-inspired look, and ‘Baumans’ for the body text for better legibility. The contrasting heading against the body text creates a clear typographical hierarchy. I also consistently used larger font sizes for headings and smaller ones for the body text to improve visual appeal and functionality.

![Web_Technologies_Report_D-003](https://github.com/user-attachments/assets/741e46c7-5f4a-482d-9112-b88108c7aae1)

<img width="276" height="111" alt="Web_Technologies_Report_D-004" src="https://github.com/user-attachments/assets/b254168f-0fe0-4f76-a69e-f54a9d9649ed" />

<img width="276" height="87" alt="Web_Technologies_Report_D-005" src="https://github.com/user-attachments/assets/9726ac09-a450-4770-ae8e-86a099ee2177" />

I integrated the navigation menu into the header for a clean, user-friendly interface, grouping menu items logically. I improved accessibility by adding `:hover` and `:focus` pseudo-effects in my CSS to underline clickable items and display the second-tier menu. I also used the id `current` to underline the active top-tier menu item. The navigation bar is positioned absolutely within the header container to maintain alignment with the logo when the screen width is minimised. I also made the menu font sizes responsive, using `vw` units with a media query for screen widths of 1024px and above.

<img width="677" height="319" alt="Web_Technologies_Report_D-006" src="https://github.com/user-attachments/assets/92398ef4-b487-49a5-a9bc-ca4a70fa41c1" />

<img width="1160" height="151" alt="Web_Technologies_Report_D-007" src="https://github.com/user-attachments/assets/8097fbec-caa0-4cd8-8a04-592ca0f7ee83" />

The SlickNav menu default style didn’t match the website design, so I customised its CSS by altering colours, padding, and margins to maintain readability and consistency with the dark theme.

<img width="290" height="543" alt="Web_Technologies_Report_D-008" src="https://github.com/user-attachments/assets/78aed645-388d-4d2d-9d94-e8fb81d9c1de" />

Each page has a clean and structured layout, some containing banners and cards to showcase content in an organised way. 

![Web_Technologies_Report_D-011](https://github.com/user-attachments/assets/fdfd4241-faa6-4f5b-9d85-08a9b2b34248)

The ‘Useful Links and Resources’ are featured in the aside element on the homepage. Each list uses a gaming controller icon as a bullet point for the list header, which works visually with the theme.

<img width="449" height="109" alt="Web_Technologies_Report_D-010" src="https://github.com/user-attachments/assets/93f5be87-5e16-454b-a917-cf24ece51bbe" />

![Web_Technologies_Report_D-011](https://github.com/user-attachments/assets/3e036bf2-3a92-4b16-8295-00408edf73be)

I made pages responsive using media queries and by defining `row_container` and `column_container` classes to position content horizontally and vertically. For screen sizes under 767px, the `row_container` flex-direction swaps to column. Additional media queries for 900px and 479px improved control over items like labels and inputs in forms. Flexbox was used extensively for consistent alignment and layout control across devices.

![Web_Technologies_Report_D-012](https://github.com/user-attachments/assets/50aa4412-56ba-4a03-a285-a9476da698fa)

![Web_Technologies_Report_D-013](https://github.com/user-attachments/assets/c63909cf-ff35-46bf-a78d-261ed5f1126a)

The ‘Become a Member’ page was designed with user experience in mind. Form submission uses `POST` to protect user information. `<fieldset>` and `<legend>` elements divide the form into clear sections. Inputs for name, address, email, comments, password, and verification were included. Client-side JavaScript validation shows real-time error messages for invalid data using custom regex patterns. Radio buttons allow users to specify their preferred contact method, enabling and disabling fields dynamically. A reset button restores the form to its initial state.

<img width="709" height="585" alt="Web_Technologies_Report_D-014" src="https://github.com/user-attachments/assets/2838cc40-7ab1-4222-9eda-14eb1b29a1b1" />

<img width="611" height="754" alt="Web_Technologies_Report_D-016" src="https://github.com/user-attachments/assets/df5501f7-a48e-442e-96ed-2569278f72df" />

<img width="842" height="490" alt="Web_Technologies_Report_D-015" src="https://github.com/user-attachments/assets/0887ca0f-0232-44e5-a7ae-5e78161cdbf2" />

For the contact page, key contact information (phone, email, postal address) is clearly displayed, with visual hierarchy enhanced using colour-coded icons. Throughout the project, I applied design principles such as contrast, alignment, proximity, and repetition. Visual contrast is achieved using bright colours against dark backgrounds, alignment is managed via Flexbox, proximity groups related content, and repetition maintains consistency in colours, fonts, and visual elements. Overall, the final design meets the goals of the brief and case study, providing consistent and functional features across all devices.


<img width="444" height="401" alt="Web_Technologies_Report_D-017" src="https://github.com/user-attachments/assets/8dbfabd7-594d-444b-9ec1-d680c4c6a10f" />

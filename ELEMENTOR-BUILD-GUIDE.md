# Read Write Now - Elementor Build Guide

Complete guide to recreating the Read Write Now website in WordPress with Elementor.

---

## 1. STYLE GUIDE

### Brand Colors

| Color | HEX | RGB | Usage |
|-------|-----|-----|-------|
| **Purple (Primary)** | `#5B2D8C` | 91, 45, 140 | Headers, buttons, icons |
| **Purple Dark** | `#3D1E5C` | 61, 30, 92 | Hover states, dark backgrounds |
| **Purple Light** | `#7B4DAC` | 123, 77, 172 | Accents |
| **Orange (Accent)** | `#F5A623` | 245, 166, 35 | CTAs, highlights, icons |
| **Orange Light** | `#FFD093` | 255, 208, 147 | Hover states |
| **Orange Dark** | `#D4860A` | 212, 134, 10 | Dark accents |
| **White** | `#FFFFFF` | 255, 255, 255 | Backgrounds, text on dark |
| **Gray 50** | `#F9FAFB` | 249, 250, 251 | Section backgrounds |
| **Gray 200** | `#E5E7EB` | 229, 231, 235 | Borders, dividers |
| **Gray 500** | `#6B7280` | 107, 114, 128 | Secondary text |
| **Gray 600** | `#4B5563` | 75, 85, 99 | Body text |
| **Gray 900** | `#111827` | 17, 24, 39 | Headings |

### Elementor Global Colors Setup
1. Go to **Elementor > Site Settings > Global Colors**
2. Add these colors:
   - Primary: `#5B2D8C`
   - Secondary: `#F5A623`
   - Text: `#4B5563`
   - Accent: `#F5A623`

---

### Typography

**Font Family:** DM Sans (Google Font)
- Add to WordPress: Elementor > Site Settings > Global Fonts
- Or: Appearance > Customize > Typography

| Style | Size Desktop | Size Mobile | Weight | Line Height | Letter Spacing |
|-------|-------------|-------------|--------|-------------|----------------|
| **Display XL** | 80px (5rem) | 48px (3rem) | 700 | 1.1 | -0.02em |
| **Display LG** | 64px (4rem) | 40px (2.5rem) | 700 | 1.1 | -0.02em |
| **Display MD** | 48px (3rem) | 32px (2rem) | 700 | 1.2 | -0.02em |
| **Display SM** | 36px (2.25rem) | 28px (1.75rem) | 600 | 1.2 | -0.02em |
| **Body Large** | 20px (1.25rem) | 20px | 400 | 1.6 | 0 |
| **Body** | 16px (1rem) | 16px | 400 | 1.6 | 0 |
| **Small** | 14px (0.875rem) | 14px | 500 | 1.4 | 0 |
| **Label** | 12px (0.75rem) | 12px | 600 | 1.4 | 0.1em (uppercase) |

### Elementor Typography Setup
1. Go to **Elementor > Site Settings > Typography**
2. Set Primary Font: DM Sans
3. Create text styles in Global Fonts

---

### Spacing System

| Size | Pixels | Use For |
|------|--------|---------|
| **Section Padding** | 64px (py-16) | Top/bottom of sections |
| **Container Max** | 1280px (max-w-6xl) | Content width |
| **Container Padding** | 16px (px-4) | Left/right padding |
| **Card Padding** | 24-32px (p-6 to p-8) | Inside cards |
| **Gap Small** | 16px (gap-4) | Between small elements |
| **Gap Medium** | 24px (gap-6) | Between cards |
| **Gap Large** | 32px (gap-8) | Between sections |

---

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 12px (rounded-xl) |
| Cards | 16px (rounded-2xl) |
| Input fields | 8px (rounded-lg) |
| Badges/pills | 9999px (rounded-full) |
| Icons in circles | 50% (rounded-full) |

---

### Shadows

| Type | CSS Value |
|------|-----------|
| Card shadow | `0 1px 3px rgba(0,0,0,0.1)` |
| Button shadow | `0 10px 15px -3px rgba(0,0,0,0.1)` |

---

## 2. PAGE-BY-PAGE BREAKDOWN

### HOME PAGE

#### Section 1: Hero
- **Background:** Purple (`#5B2D8C`) with dot pattern overlay
- **Pattern:** Radial gradient dots at 10% opacity
- **Elements:**
  - Badge pill: "Free Adult Literacy Support" (white/20% bg, white text)
  - H1: "Empowering Adults to Read & Write with Confidence"
    - "Read & Write" in orange, italic
  - Subtext: Body large, white/90%
  - CTA Button: Orange bg, purple text, rounded-xl, shadow
  - "Hear This Page" link: Small text, white/80%
- **Wave divider:** White SVG wave at bottom
- **Padding:** 64px top, 96px bottom (for wave)

#### Section 2: Stats Bar
- **Background:** White with bottom border (gray-200)
- **Layout:** 3 columns with vertical dividers
- **Stats:**
  - "25K+" - LEARNERS HELPED
  - "100%" - FREE SERVICE
  - "Private" - CONFIDENTIAL
- **Typography:** Display MD for numbers, Label style for text

#### Section 3: Services (How Can We Help You?)
- **Background:** White
- **Heading:** "How Can We Help You?" (Display MD, purple)
- **Subheading:** Body large, gray-600
- **Cards:** 4-column grid on desktop, 2 on tablet, 1 on mobile
- **Card structure:**
  - Colored header with icon (purple or orange)
  - Title (Display SM, purple)
  - Description (Body, gray-600)
  - Listen button + "Learn More" button

#### Section 4: How It Works
- **Background:** Gray-50
- **Heading:** "How It Works" (Display MD, purple)
- **3 step cards** with numbered badges
- **Icons in purple circles**
- **Arrow connectors between cards (desktop only)**

#### Section 5: Testimonial
- **Background:** Purple (`#5B2D8C`)
- **Quote icon:** Orange
- **Quote text:** Display SM, white
- **Attribution:** Orange name, white/80 role

#### Section 6: Latest News
- **Background:** White
- **Heading:** "Latest News" (Display MD, purple)
- **3 news cards** with images, dates, titles
- **"View All News" link**

#### Section 7: CTA Banner
- **Background:** Purple gradient (purple to purple-dark)
- **Heading:** "Ready to Start Your Journey?" (Display MD, white)
- **Subtext:** Body large, white/90
- **Button:** Orange bg, purple text

---

### GET HELP PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Get Help with Reading & Writing" (Display LG, white)
- **Description:** Information about free tutoring service
- **CTA:** "Call 1800 018 802" button (orange)

#### Benefits Section
- **Background:** White
- **4 benefit cards** with icons:
  - Free Service
  - Confidential
  - Flexible Location
  - Personalized Learning

#### How It Works Section
- **Background:** Gray-50
- **3 numbered steps**

#### Who We Help Section
- **Background:** White
- **List of learner types** with checkmarks

#### CTA Banner
- Standard purple gradient CTA

---

### GET HELP - HOW IT WORKS PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "How It Works"
- **Description:** Step-by-step process overview

#### Timeline Section
- **Background:** White
- **Vertical timeline** with 5 steps:
  1. Get in Touch
  2. Have a Chat
  3. Get Matched
  4. Start Learning
  5. Achieve Your Goals
- **Each step:** Icon, title, description

#### FAQ Section
- **Background:** Gray-50
- **Accordion** with common questions

---

### GET HELP - APPLY PAGE (Student Application)

#### Hero Section
- **Background:** Purple
- **H1:** "Apply for Free Tutoring"

#### Form Section
- **Background:** White
- **Form fields:**
  - Name, Phone, Email
  - Suburb, Age Range
  - Goals (checkboxes)
  - Preferred contact method
  - Message
- **Submit button:** Purple

---

### GET HELP - STORIES PAGE (Student Stories)

#### Hero Section
- **Background:** Purple
- **H1:** "Student Stories"

#### Stories Grid
- **Background:** White
- **3-column grid** of story cards
- **Each card:**
  - Quote
  - Student name
  - Achievement summary

---

### HELP OTHERS PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Help Others Learn"
- **Description:** Volunteer tutor recruitment

#### Why Volunteer Section
- **Background:** White
- **4 benefit cards**

#### Requirements Section
- **Background:** Gray-50
- **List of requirements** with checkmarks

#### CTA Banner

---

### HELP OTHERS - VOLUNTEER INFO PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Volunteer Information"

#### What You'll Do Section
- **Background:** White
- **Description of tutor role**

#### Training Section
- **Background:** Gray-50
- **Information about tutor training**

#### Time Commitment Section
- **Background:** White
- **Details about hours required**

---

### HELP OTHERS - APPLY PAGE (Tutor Application)

#### Hero Section
- **Background:** Purple
- **H1:** "Apply to Volunteer"

#### Form Section
- **Background:** White
- **Form fields:**
  - Name, Phone, Email
  - Suburb
  - Availability
  - Experience
  - Why volunteer
- **Submit button:** Purple

---

### HELP OTHERS - STORIES PAGE (Tutor Stories)

#### Hero Section
- **Background:** Purple
- **H1:** "Tutor Stories"

#### Stories Grid
- **Background:** White
- **3-column grid** of tutor story cards

---

### TRAINING PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Training Programs"

#### Training Options Section
- **Background:** White
- **2 cards:**
  - Literacy Training for organisations
  - Workplace Literacy programs

---

### TRAINING - LITERACY TRAINING PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Literacy Training"

#### Content Sections
- What we offer
- Who it's for
- How to book

---

### TRAINING - WORKPLACE LITERACY PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Workplace Literacy"

#### Content Sections
- Benefits for employers
- Program options
- Contact information

---

### RESOURCES PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Resources"

#### Resource Categories
- **Background:** White
- **3 cards linking to:**
  - Tutoring Resources
  - Literacy Links
  - Numeracy Links

---

### RESOURCES - TUTORING RESOURCES PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Tutoring Resources"

#### Resources Grid
- **Background:** White
- **Cards with downloadable resources**

---

### RESOURCES - LITERACY LINKS PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Literacy Links"

#### Links Grid
- **Background:** White
- **Cards with external links**

---

### RESOURCES - NUMERACY LINKS PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Numeracy Links"

#### Links Grid
- **Background:** White
- **Cards with external maths resources**

---

### ABOUT PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "About Read Write Now"

#### Our Story Section
- **Background:** White
- **History and mission**

#### Our Values Section
- **Background:** Gray-50
- **3-4 value cards**

#### Team Section (optional)
- **Background:** White

---

### ABOUT - FAQS PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Frequently Asked Questions"

#### FAQ Accordion
- **Background:** White
- **Categories:**
  - For Learners
  - For Volunteers
  - General

---

### ABOUT - CONTACT PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Contact Us"

#### Contact Methods
- **Background:** White
- **3 cards:**
  - Phone
  - Email
  - Address

#### Office Hours
- **Background:** Gray-50
- **Table of hours**

#### Contact Form
- **Background:** White
- **Form with fields**

---

### ABOUT - ACHIEVEMENTS PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "Our Achievements"

#### Stats Section
- **Background:** White
- **4 stat counters**

#### Timeline Section
- **Background:** White
- **Milestones from 1990-2024**

#### Awards Section
- **Background:** Gray-50
- **Award cards**

#### Impact Section
- **Background:** Purple
- **3 percentage stats**

---

### NEWS PAGE

#### Hero Section
- **Background:** Purple
- **H1:** "News"

#### News Grid
- **Background:** White
- **Cards with:**
  - Image
  - Date
  - Title
  - Excerpt

---

## 3. STEP-BY-STEP ELEMENTOR BUILD

### Step 1: Initial Setup

1. **Install required plugins:**
   - Elementor Pro
   - DM Sans font (via Google Fonts or custom)

2. **Configure Site Settings:**
   ```
   Elementor > Site Settings > Global Colors
   - Add all brand colors listed above

   Elementor > Site Settings > Global Fonts
   - Primary: DM Sans
   - Set heading and body defaults
   ```

3. **Create Header Template:**
   - Logo left
   - Menu center (with dropdowns)
   - Phone button right (purple bg)
   - Sticky header

4. **Create Footer Template:**
   - 4 columns: Logo/social, Quick Links, Contact, Supported By
   - Dark background (#111827)

---

### Step 2: Build Reusable Sections

**Save these as Templates:**

1. **Hero Section Template**
   - Section with purple background
   - Inner section with content centered
   - Shape divider (wave) at bottom

2. **CTA Banner Template**
   - Section with purple gradient
   - Centered text and button

3. **Stats Bar Template**
   - 3 columns with counter widgets

4. **Card Grid Template**
   - Flexbox container
   - Card styling saved as global widget

---

### Step 3: Build Pages in Order

1. **Homepage** - Use all section templates
2. **Get Help** - Hero + benefits + steps + CTA
3. **Help Others** - Hero + benefits + requirements + CTA
4. **About** - Hero + story + values + CTA
5. **FAQs** - Hero + accordion + CTA
6. **Contact** - Hero + form + map + CTA
7. **Remaining pages** - Follow established patterns

---

### Step 4: Mobile Optimization

- Stack columns on mobile
- Reduce heading sizes (use responsive controls)
- Ensure buttons are full-width on mobile
- Hide decorative elements on small screens
- Test touch targets (min 44px)

---

## 4. ASSETS

### SVG Wave (for hero sections)
```svg
<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
</svg>
```

### Dot Pattern CSS (for hero background)
```css
background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
background-size: 40px 40px;
opacity: 0.1;
```

### Logo
- Export from `/public/logo.svg`
- Need both regular and white versions for footer

---

## 5. ELEMENTOR WIDGET MAPPING

| React Component | Elementor Widget |
|----------------|------------------|
| Hero section | Section + Heading + Text + Button |
| Service cards | Posts/Portfolio or Icon Box |
| Stats | Counter widget |
| Testimonial | Testimonial widget or custom section |
| FAQ accordion | Accordion widget |
| Contact form | Form widget |
| News cards | Posts widget |
| Icon circles | Icon widget with circle background |

---

## 6. NAVIGATION STRUCTURE

### Main Menu
```
- Home
- Get Help
  - How It Works
  - Apply Now
  - Student Stories
- Help Others
  - Volunteer Info
  - Apply to Volunteer
  - Tutor Stories
- Training
  - Literacy Training
  - Workplace Literacy
- Resources
  - Tutoring Resources
  - Literacy Links
  - Numeracy Links
- About
  - FAQs
  - Contact Us
  - Achievements
- News
```

### Footer Links
- About Us
- Get Help
- Volunteer
- Training
- Resources
- FAQs
- Contact Us

---

## 7. QUICK REFERENCE

### Button Styles

**Primary (Orange CTA):**
- Background: `#F5A623`
- Text: `#5B2D8C`
- Padding: 16px 32px
- Border radius: 12px
- Font: Bold, 20px
- Shadow: lg

**Secondary (Purple):**
- Background: `#5B2D8C`
- Text: white
- Same padding/radius

**Ghost (on dark bg):**
- Background: transparent
- Text: white/80
- No shadow

### Icon Sizes
- Small (in buttons): 20px
- Medium (in cards): 32px
- Large (standalone): 48px

### Section Backgrounds
- Hero sections: Purple (`#5B2D8C`)
- Alternating: White / Gray-50 (`#F9FAFB`)
- CTA: Purple gradient
- Footer: Gray-900 (`#111827`)

---

## 8. ELEMENTOR PRO TIPS

### Creating the Hero Wave Divider
1. Add a Section
2. Go to Style > Shape Divider
3. Select "Bottom" position
4. Choose "Waves" or upload custom SVG
5. Set color to white
6. Adjust height as needed

### Creating the Dot Pattern Background
1. Add a Section with purple background
2. Add Custom CSS:
```css
selector::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
    background-size: 40px 40px;
    pointer-events: none;
}
```

### Creating Consistent Cards
1. Build one card with all styling
2. Right-click > Save as Global Widget
3. Reuse across pages
4. Changes to global widget update everywhere

### Mobile Responsive Settings
1. Click the device icons at bottom of Elementor panel
2. Adjust sizes/spacing per breakpoint
3. Use "Hide on Mobile" for decorative elements

---

## 9. CHECKLIST

### Before Launch
- [ ] All global colors set
- [ ] Typography configured
- [ ] Header template created
- [ ] Footer template created
- [ ] Homepage complete
- [ ] All inner pages complete
- [ ] Mobile responsive checked
- [ ] Forms tested
- [ ] Links verified
- [ ] Images optimized
- [ ] SEO titles/descriptions added

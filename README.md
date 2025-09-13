# FigDash - Dashboard Implementation

A pixel-perfect, responsive dashboard implementation based on Figma design specifications. This project demonstrates modern web development practices with a focus on design accuracy, responsive behavior, and user experience.

![Dashboard Preview](./assets/Dashboard1.png)

## 🌟 Features

### Design Implementation
- **Pixel-perfect Figma integration** - Exact implementation of provided Figma design
- **Responsive design** - Mobile-first approach with tablet and desktop optimizations
- **Asset integration** - All icons and images sourced from provided assets folder
- **Custom gradient effects** - Beautiful gradient text and backgrounds

### UI Components
- **Interactive chips** - Time period selectors with gradient effects
- **Status buttons** - Professional Update Status button with hover animations
- **Payment cards** - Mobile-optimized payment status cards
- **Chart integration** - Income trend visualization
- **Invoice management** - Complete invoice listing with status indicators

### Technical Features
- **Mobile-optimized spacing** - Prevents text wrapping and ensures proper layout
- **CSS Grid & Flexbox** - Modern layout techniques for responsive behavior
- **Custom CSS properties** - Maintainable color and sizing system
- **Semantic HTML** - Accessible and SEO-friendly structure

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/souptiksarkar893/FigDash.git
   cd FigDash
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 📱 Responsive Breakpoints

| Device | Breakpoint | Features |
|--------|------------|----------|
| Mobile | < 768px | Single column, optimized spacing |
| Tablet | 768px - 1023px | Two column layout, larger components |
| Desktop | ≥ 1024px | Grid layout, enhanced typography |

## 🎨 Design System

### Colors
```css
--primary: #8134af;          /* Primary purple */
--gradient-main: linear-gradient(135deg, #DD2A7B 0%, #9747FF 41%, #334CCA 100%);
--gradient-bg-light: linear-gradient(135deg, rgba(221, 42, 123, 0.05) 0%, rgba(151, 71, 255, 0.05) 41%, rgba(51, 76, 202, 0.05) 100%);
```

### Typography
- **Primary Font**: Roboto
- **Fallback**: system-ui, -apple-system, Segoe UI, Arial, sans-serif

### Border Radius
- Small components: 16px
- Medium components: 24px
- Large components: 32px

## 🗂️ Project Structure

```
FigDash/
├── index.html              # Main HTML structure
├── styles.css              # Complete CSS styling
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
└── assets/                 # Design assets
    ├── Frame-1.svg         # Plus icon
    ├── Frame-2.svg         # Calendar icon
    ├── Frame-3.svg         # Bell icon
    ├── Frame.svg           # Arrow icon
    ├── Vector.svg          # Notification icon
    ├── Vector-1.svg        # Dropdown arrow
    ├── Vector-2.svg        # Crown icon
    ├── logo.svg            # Sparko logo
    ├── Shape.png           # User avatar
    └── Income Trend Chart.png # Chart visualization
```

## 🔧 Key Components

### Time Period Selector
- Interactive chips with gradient effects
- 5% opacity gradient background
- Custom border styling (#F3E8FF)
- Gradient text implementation

### Update Status Button
- Primary purple background (#8134af)
- White text with dropdown arrow
- Hover animations and interactions
- Responsive sizing

### Payment Status Cards
- Mobile-optimized to prevent text wrapping
- Flexible width calculations
- Proper spacing and gap management

### Chart Section
- Static image implementation
- Responsive scaling
- Proper aspect ratio maintenance

## 📐 CSS Architecture

### Methodology
- **Mobile-first** responsive design
- **Component-based** styling approach
- **CSS Custom Properties** for maintainable theming
- **BEM-inspired** class naming convention

### Key CSS Features
```css
/* Gradient text implementation */
.gradient-text {
  background: var(--gradient-main);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Responsive chip styling */
.chip.is-active {
  background: var(--gradient-bg-light);
  border: 1px solid #F3E8FF;
}
```

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |

## 🔄 Recent Updates

- ✅ Implemented gradient text for "3 months" chip
- ✅ Fixed mobile text wrapping in payment cards
- ✅ Updated Update Status button with primary purple color
- ✅ Optimized asset integration from provided folder
- ✅ Enhanced responsive behavior across all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for demonstration purposes. All design assets are used with appropriate permissions.

## 👨‍💻 Author

**Souptik Sarkar**
- GitHub: [@souptiksarkar893](https://github.com/souptiksarkar893)
- Repository: [FigDash](https://github.com/souptiksarkar893/FigDash)

## 🙏 Acknowledgments

- Design specifications provided via Figma
- Asset library for consistent iconography
- Modern CSS techniques for responsive implementation

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
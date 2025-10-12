# GuardWise - Scam Protection & Detection App

## 🛡️ Overview
GuardWise is a comprehensive mobile application designed to protect users from various types of scams including phone scams, SMS fraud, UPI payment scams, and malicious links. The app provides real-time scanning, threat detection, and protection features to keep users safe from digital fraud.

## 🎯 Problem Statement
With the rise of digital payments and online communication in India, scam cases have increased dramatically:
- **UPI Scams**: Fake QR codes, fraudulent payment requests
- **Phone Scams**: Spam calls, phishing calls, unknown numbers
- **SMS Fraud**: Fake bank messages, lottery scams, OTP scams
- **Link Scams**: Phishing websites, fake shopping sites
- **App Scams**: Malicious applications stealing data

GuardWise addresses these issues by providing an all-in-one protection platform.

## ✨ Key Features

### 1. **Phone Scanner**
- Real-time phone scanning for malicious apps, suspicious SMS, and scam calls
- Analyzes installed applications for permissions and threats
- Scans SMS inbox for fraudulent messages
- Checks call history for reported scam numbers
- Automated "Fix Issues" feature to block/delete threats

### 2. **UPI Scam Detection**
- **Manual UPI ID Verification**: Check any UPI ID against scam database
- **QR Code Scanner**: Real-time camera scanning of UPI QR codes
- Detects fraudulent merchants vs trusted merchants
- Shows fraud report count and trust score
- Extracts UPI details from QR codes automatically

### 3. **Link Detector**
- Scans URLs for phishing attempts
- Checks against known malicious domains
- SSL/HTTPS verification
- Safety score display

### 4. **Protection Score Dashboard**
- Overall security rating (0-100)
- Real-time threat monitoring
- Security recommendations
- Threat history tracking

### 5. **Scam Reporting System**
- Report scammers with detailed information
- Multiple scam type categories (Call, SMS, UPI, Link, App)
- Evidence upload support
- Community-driven scam database

### 6. **Scam News & Alerts**
- Latest scam trends and warnings
- Real fraud case studies
- Prevention tips and guidelines
- Regional scam alerts

### 7. **Document Vault**
- Secure storage for important documents
- Protected with authentication
- Quick access during emergencies

### 8. **Emergency Contacts**
- Cybercrime helpline numbers
- Bank fraud reporting contacts
- Police and legal support

## 🔧 Technology Stack

### Frontend
- **React 18.3.1** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - Beautiful component library
- **React Router DOM** - Navigation and routing
- **Lucide React** - Icon system

### Backend & Database
- **Supabase** - Backend as a Service
  - PostgreSQL database
  - Row Level Security (RLS)
  - Authentication (Email, Phone, OAuth)
  - Real-time subscriptions

### Mobile Integration
- **Capacitor 7.4.3** - Native mobile capabilities
  - Camera access for QR scanning
  - SMS reading
  - Call log access
  - File system access

### Special Libraries
- **html5-qrcode** - QR code scanning functionality
- **Sonner** - Toast notifications
- **React Hook Form** - Form management
- **Zod** - Schema validation

## 🏗️ Architecture

```
GuardWise/
├── Authentication Layer (Supabase Auth)
├── Frontend (React + TypeScript)
│   ├── Pages (Dashboard, Scanners, Reports)
│   ├── Components (UI, Layout, Cards)
│   ├── Contexts (Auth, User)
│   └── Hooks (Permissions, Mobile)
├── Backend (Supabase)
│   ├── Database (Profiles, Reports, Scam Data)
│   ├── Storage (Documents, Evidence)
│   └── RLS Policies (Security)
└── Mobile Layer (Capacitor)
    ├── Camera API
    ├── SMS Reader
    └── Call Log Access
```

## 📱 How It Works

### UPI QR Scan Process:
1. User clicks "Open Camera to Scan"
2. Camera permission requested
3. QR code detected in real-time
4. UPI ID extracted (format: `upi://pay?pa=merchant@paytm`)
5. Checked against:
   - Known scam patterns database
   - Trusted merchant list
   - Community reports
6. Result displayed with threat level and recommendations

### Phone Scan Process:
1. Full device scan initiated
2. Analyzes:
   - Installed apps and permissions
   - SMS inbox for fraud patterns
   - Call history against scam database
   - Stored links and documents
3. Generates detailed threat report
4. "Fix Issues" provides automated solutions:
   - Delete suspicious SMS
   - Block scam numbers
   - Uninstall risky apps

## 🎓 Potential Presentation Questions & Answers

### Technical Questions

**Q: How does the QR code scanning work?**
A: We use the html5-qrcode library which accesses the device camera through WebRTC. When a QR code is detected, we parse the UPI URI format (`upi://pay?pa=ID&pn=Name&am=Amount`), extract the UPI ID, and match it against our scam pattern database and trusted merchant whitelist in real-time.

**Q: How do you ensure user data security?**
A: We implement multiple security layers:
- Supabase Row Level Security (RLS) ensures users can only access their own data
- Authentication is handled by Supabase with JWT tokens
- Sensitive data like documents are stored in Supabase Storage with access policies
- No payment or banking credentials are ever stored
- All API calls are authenticated and encrypted (HTTPS)

**Q: Can this work offline?**
A: Partially. The app requires internet for:
- Database lookups (scam reports, trusted merchants)
- Real-time threat intelligence
- Reporting new scams
However, basic scanning and pattern detection can work offline using cached data.

**Q: What permissions does the app need?**
A: 
- Camera (for QR scanning)
- SMS Read (optional, for fraud detection)
- Call Log (optional, for scam number detection)
- Storage (for document vault)
All permissions are requested with clear explanations and are optional.

**Q: How is the scam database maintained?**
A: 
- Community reporting system where users report scams
- Manual verification of reports
- Integration with public scam databases
- Regular updates from cybercrime authorities
- Machine learning patterns (future enhancement)

### Business/Use Case Questions

**Q: Who is the target audience?**
A: 
- Primary: Non-tech-savvy users (elderly, first-time smartphone users)
- Secondary: General public making digital payments
- Tertiary: Small business owners accepting UPI payments

**Q: What makes this different from existing solutions?**
A: 
- All-in-one platform (most apps focus on one type of scam)
- Real-time QR code scanning before payment
- Community-driven reporting
- Automated fix features
- Simple, localized interface
- Free to use

**Q: How do you monetize this?**
A: Potential revenue streams:
- Premium features (advanced threat intelligence)
- Enterprise version for businesses
- API access for other apps
- Government partnerships
- Data insights (anonymized) for cybersecurity research

**Q: What's the market size?**
A: 
- 500+ million UPI users in India
- Digital payment fraud increased 300% in 2023
- 90% smartphone penetration in urban areas
- Growing need for elderly-friendly security apps

### Scalability Questions

**Q: Can this scale to millions of users?**
A: Yes, because:
- Supabase is built on PostgreSQL (highly scalable)
- Serverless edge functions auto-scale
- CDN for static assets
- Database indexing and query optimization
- Can migrate to dedicated infrastructure if needed

**Q: How do you handle false positives?**
A: 
- Multi-layer verification (pattern + community + trusted list)
- User feedback mechanism to report false flags
- Confidence score display (not binary yes/no)
- Regular refinement of detection algorithms
- Manual review for reported trusted merchants

### Future Enhancements

**Q: What features are planned?**
A: 
- AI/ML-based fraud detection
- Real-time SMS interception and warning
- Browser extension for web protection
- Multilingual support (Hindi, regional languages)
- Integration with banking apps
- Voice call analysis for scam detection
- Blockchain-based verified merchant registry

## 📊 Use Cases

### Use Case 1: Street Vendor Payment
**Scenario**: User at a street food stall scanning a QR code
1. Opens GuardWise UPI scanner
2. Scans merchant QR code
3. App shows: "✓ Trusted Merchant - 0 reports"
4. User proceeds with payment confidently

### Use Case 2: Suspicious Call
**Scenario**: User receives call from unknown number
1. Checks number in GuardWise
2. App shows: "⚠️ 45 scam reports for this number"
3. User blocks the number
4. Reports additional details

### Use Case 3: Fake Shopping Link
**Scenario**: Received SMS with shopping discount link
1. Pastes link in Link Detector
2. App shows: "🚨 Phishing site - steals card details"
3. User avoids clicking
4. Reports the SMS

## 🚀 Installation & Setup

### For Development
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# For mobile (after capacitor setup)
npx cap sync
npx cap run android
# or
npx cap run ios
```

### For Production
```bash
# Build the app
npm run build

# Deploy (using Lovable)
Click "Publish" button in Lovable editor
```

### Environment Setup
- Supabase project connected via Lovable Cloud
- No manual environment variables needed
- Authentication configured automatically

## 📱 Mobile Deployment

### Android
1. Export project to GitHub
2. Run `npx cap add android`
3. Run `npm run build && npx cap sync`
4. Open Android Studio: `npx cap open android`
5. Build and run on device/emulator

### iOS
1. Export project to GitHub (requires Mac)
2. Run `npx cap add ios`
3. Run `npm run build && npx cap sync`
4. Open Xcode: `npx cap open ios`
5. Build and run on device/simulator

## 🔐 Security Best Practices Implemented
- Input validation on all forms (Zod schemas)
- XSS prevention (no dangerouslySetInnerHTML)
- CSRF protection via Supabase
- Secure password hashing
- Rate limiting on API calls
- SQL injection prevention (parameterized queries)
- Secure file upload validation

## 📈 Metrics & Analytics
- User engagement tracking
- Scam report statistics
- Feature usage analytics
- Threat detection accuracy
- User protection score trends

## 🤝 Contributing
This is an academic project. For contributions:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📄 License
MIT License - Free for educational and commercial use

## 👥 Team
- Developer: [Your Name]
- Institution: [Your Institution]
- Year: 2025
- Project Type: Academic/Hackathon

## 📞 Support & Contact
- Email: [Your Email]
- GitHub: [Your GitHub]
- Project Demo: [Demo Link]

## 🎯 Project Goals Achieved
✅ Real-time scam detection  
✅ Multi-platform support (Web + Mobile)  
✅ User-friendly interface  
✅ Secure data handling  
✅ Community reporting system  
✅ Automated threat resolution  
✅ Comprehensive documentation  

## 🌟 Key Achievements
- **Working QR Scanner**: Real camera integration with UPI extraction
- **Full Phone Scan**: Analyzes apps, SMS, calls, documents
- **Smart Detection**: Pattern matching + community reports
- **Fix Automation**: One-click threat removal
- **Beautiful UI**: Modern, accessible design
- **Production Ready**: Deployed and scalable

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Status**: Production Ready 🚀

---

## Demo Credentials
```
Email: demo@guardwise.com
Password: Demo@123
```

## Quick Start Guide for Presentation

1. **Open App** → Show landing page and features
2. **Login** → Demonstrate authentication
3. **Dashboard** → Show protection score and quick actions
4. **Phone Scan** → Run full scan, show results, fix issues
5. **UPI Scanner** → Scan a QR code live, show detection
6. **Report Scam** → Fill form, show submission
7. **Protection Score** → Show security analytics
8. **Scam News** → Show latest alerts

**Presentation Flow**: Problem → Solution → Demo → Technical Details → Business Model → Q&A

Good luck with your presentation! 🎓🚀

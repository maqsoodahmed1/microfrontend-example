# React Micro-Frontends with Expandable Sidebar Navigation

A complete TypeScript React micro-frontend setup using Vite and Module Federation. The parent app consumes 4 child micro-frontends through an expandable sidebar navigation.

## 🏗️ Architecture

- **Parent App** (Port 3000): Main container with expandable sidebar navigation
- **Dashboard App** (Port 4001): Overview, Statistics, Reports pages
- **Products App** (Port 4002): Product List, Categories, Inventory, Add Product pages
- **Analytics App** (Port 4003): Sales, Users, Performance analytics pages
- **Settings App** (Port 4004): General, Users, Security, Integrations settings

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install all dependencies:
```bash
npm install
```

2. **Start the complete micro-frontend setup:**
```bash
npm run dev
```

This single command will:
- Build all child micro-frontends (Dashboard, Products, Analytics, Settings)
- Serve them on their respective ports as remoteEntry.js files
- Start the parent app in development mode
- Handle all Module Federation automatically

3. **Access the application:**
   - **Parent App**: Open your browser to the URL shown in terminal (usually `http://localhost:3001`)
   - The parent app will load all child micro-frontends automatically
   - **You only need to access the parent app URL** - don't navigate to child app ports directly
   - **Important**: Always check the terminal output for the actual URLs being used!

### 🎯 How to Test

1. **Main Navigation**: Use the expandable sidebar to navigate between different sections
2. **Dashboard**: Click on Dashboard section to expand and access Overview, Statistics, Reports
3. **Products**: Expand Products section to access Product List, Categories, Inventory, Add Product
4. **Analytics**: Expand Analytics section to access Sales, Users, Performance analytics
5. **Settings**: Expand Settings section to access General, Users, Security, Integrations

Each menu item loads a different micro-frontend page seamlessly!

## 📁 Project Structure

```
├── apps/
│   ├── parent/           # Parent container app (Port 3000)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Layout.tsx
│   │   │   │   └── Sidebar.tsx    # Expandable sidebar navigation
│   │   │   └── App.tsx
│   │   └── vite.config.ts
│   ├── dashboard/        # Dashboard micro-frontend (Port 4001)
│   │   ├── src/pages/
│   │   │   ├── Overview.tsx
│   │   │   ├── Statistics.tsx
│   │   │   └── Reports.tsx
│   │   └── vite.config.ts
│   ├── products/         # Products micro-frontend (Port 4002)
│   │   ├── src/pages/
│   │   │   ├── ProductsList.tsx
│   │   │   ├── Categories.tsx
│   │   │   ├── Inventory.tsx
│   │   │   └── AddProduct.tsx
│   │   └── vite.config.ts
│   ├── analytics/        # Analytics micro-frontend (Port 4003)
│   │   ├── src/pages/
│   │   │   ├── Sales.tsx
│   │   │   ├── Users.tsx
│   │   │   └── Performance.tsx
│   │   └── vite.config.ts
│   └── settings/         # Settings micro-frontend (Port 4004)
│       ├── src/pages/
│       │   ├── General.tsx
│       │   ├── Users.tsx
│       │   ├── Security.tsx
│       │   └── Integrations.tsx
│       └── vite.config.ts
└── package.json
```

## 🎯 Features

### Expandable Sidebar Navigation
- **Dashboard** section with 3 expandable menu items
- **Products** section with 4 expandable menu items  
- **Analytics** section with 3 expandable menu items
- **Settings** section with 4 expandable menu items
- Smooth animations and hover effects
- Active state highlighting

### Module Federation
- Child apps run on separate ports (4001-4004)
- Parent app consumes remote components via federation
- Shared React/ReactDOM dependencies
- Error boundaries for failed remote loads
- Lazy loading with suspense

### TypeScript Support
- Full TypeScript configuration
- Type declarations for remote modules
- Strict type checking

### Modern UI/UX with Ant Design
- Responsive design with Ant Design components
- Professional UI component library
- Beautiful gradient sidebar with Ant Design Menu
- Card-based layouts using Ant Design Cards
- Interactive components (Buttons, Forms, Tables, Statistics)
- Consistent design system across all micro-frontends

## 🔧 Development Scripts

```bash
# Start complete micro-frontend setup (RECOMMENDED)
npm run dev

# Individual commands (for advanced users):
npm run build:remotes    # Build all child micro-frontends
npm run serve:remotes    # Serve all built micro-frontends  
npm run dev:parent       # Start only parent app (requires remotes built)
npm run build           # Build everything for production
```

### 📋 What happens when you run `npm run dev`:

1. **Builds all remotes**: Dashboard, Products, Analytics, Settings apps
2. **Serves remotes**: Each app runs on its designated port with remoteEntry.js
3. **Starts parent**: Parent app loads and consumes all remote micro-frontends
4. **Auto-port detection**: If ports are busy, it finds available ones automatically

## 🌐 Ports

| App       | Intended Port | Auto-detected if busy |
|-----------|---------------|----------------------|
| Parent    | 3000          | 3001, 3002, etc.    |
| Dashboard | 4001          | 4007, 4008, etc.    |
| Products  | 4002          | 4008, 4009, etc.    |
| Analytics | 4003          | 4006, 4007, etc.    |
| Settings  | 4004          | 4005, 4006, etc.    |

**Note**: The system automatically finds available ports if the intended ones are busy. Check your terminal output to see the actual URLs being used.

### 🔄 How Port Auto-Detection Works:

1. **Smart Port Resolution**: Vite automatically tries sequential ports when conflicts occur
2. **Federation Updates**: The parent app dynamically loads remotes from actual serving ports  
3. **No Manual Config**: You don't need to update any configuration files
4. **Terminal Shows Truth**: Always refer to terminal output for real URLs

**Real Example:**
If your intended ports are busy, you might see:
- Parent: `http://localhost:3001/` (instead of 3000)
- Dashboard: `http://localhost:4007/` (instead of 4001)  
- Products: `http://localhost:4008/` (instead of 4002)
- Analytics: `http://localhost:4006/` (instead of 4003)
- Settings: `http://localhost:4005/` (instead of 4004)

**Just open the parent URL and everything works!** 🎉

## 🔍 How It Works

1. **Child apps** are built and served on their respective ports
2. **Parent app** loads remote components via Module Federation
3. **Sidebar navigation** routes between federated components
4. **Each child app** exposes specific pages as federated modules
5. **Error boundaries** handle failed remote loads gracefully

## 🎨 Sidebar Menu Structure

### 📊 Dashboard
- Overview (loads from dashboard/Overview)
- Statistics (loads from dashboard/Statistics)  
- Reports (loads from dashboard/Reports)

### 📦 Products
- Product List (loads from products/ProductsList)
- Categories (loads from products/Categories)
- Inventory (loads from products/Inventory)
- Add Product (loads from products/AddProduct)

### 📈 Analytics
- Sales Analytics (loads from analytics/Sales)
- User Analytics (loads from analytics/Users)
- Performance (loads from analytics/Performance)

### ⚙️ Settings
- General (loads from settings/General)
- Users (loads from settings/Users)
- Security (loads from settings/Security)
- Integrations (loads from settings/Integrations)

## 🚀 Deployment

For production deployment:

1. Build all apps:
```bash
npm run build
```

2. Deploy each app to your preferred hosting service
3. Update remote URLs in parent app's `vite.config.ts`
4. Ensure CORS is configured for cross-origin module loading

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Module Federation** - Micro-frontend architecture
- **Ant Design** - Professional React UI component library
- **React Router** - Client-side routing
- **Concurrently** - Run multiple commands

## 🧪 Testing Your Setup

### ✅ Quick Test Checklist:

1. **Run the setup**: `npm run dev`
2. **Check terminal output**: Look for "Local:" URLs for each app
3. **Open parent app**: Navigate to the parent app URL (usually `http://localhost:3001`)
4. **Test expandable menus**: Click on each section (Dashboard, Products, Analytics, Settings)
5. **Test navigation**: Click on individual menu items within each section
6. **Verify remote loading**: Each page should load content from its respective micro-frontend

### 🐛 Troubleshooting:

#### Port Conflicts (Automatic Resolution) ✅
The system automatically handles port conflicts! If any port is blocked:
- **Parent app**: Tries 3000 → 3001 → 3002 → etc.
- **Child apps**: Try their intended port → finds next available

**Example from terminal:**
```bash
[1] Port 3000 is in use, trying another one...
[1] ➜  Local:   http://localhost:3001/  # ← Use this URL

[0] [3] Port 4004 is in use, trying another one...
[0] [3] ➜  Local:   http://localhost:4005/  # ← Settings app moved here
```

**What to do:**
1. ✅ **Nothing!** The system handles it automatically
2. 📖 **Check terminal output** for the actual URLs being used
3. 🌐 **Open the parent app URL** shown in terminal (usually `http://localhost:3001`)

#### Other Issues:
- **Remote not loading**: Ensure all child apps built successfully (check for ✓ symbols)
- **Build errors**: Each app builds independently - look for specific app failures
- **White screen**: Check browser console for federation loading errors

## 📝 Notes

- **Single command setup**: Just run `npm run dev` and everything works!
- **Independent development**: Child apps can be developed and deployed separately
- **Automatic port management**: No manual port configuration needed
- **Module Federation**: Seamless loading and sharing of remote components
- **Error boundaries**: Graceful degradation if a micro-frontend fails
- **TypeScript support**: Full type safety across all applications

### 🎯 What You Get:

✅ **Parent app** with beautiful expandable sidebar navigation  
✅ **4 child micro-frontends** running independently  
✅ **Module Federation** connecting everything seamlessly  
✅ **TypeScript** support throughout  
✅ **Modern UI** with smooth animations  
✅ **Error handling** for robust production use  

Happy coding! 🎉

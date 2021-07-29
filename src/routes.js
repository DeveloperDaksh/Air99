import React from "react";

// Root Include
const Root = React.lazy(() => import("./pages/Home/indexRoot"));

//Main Index
const Main = React.lazy(() => import("./pages/Home/indexMain"));

//Special
const PageComingSoon = React.lazy(() =>
  import("./pages/Pages/Special/PageComingSoon")
);
const PageComingSoon2 = React.lazy(() =>
  import("./pages/Pages/Special/PageComingSoon2")
);
const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));
const PageThankYou = React.lazy(() =>
  import("./pages/Pages/Special/PageThankYou")
);
const PageMaintenance = React.lazy(() =>
  import("./pages/Pages/Special/PageMaintenance")
);

//Auth Pages
const PageLogin = React.lazy(() => import("./pages/Pages/AuthPages/PageLogin"));
const PageCoverLogin = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageCoverLogin")
);
const PageLoginThree = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageLoginThree")
);

const PageSignup = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageSignup")
);
const PageCoverSignup = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageCoverSignup")
);
const PageSignupThree = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageSignupThree")
);

const PageCoverRePassword = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageCoverRePassword")
);
const PageRecoveryPassword = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageRecoveryPassword")
);
const PageRePasswordThree = React.lazy(() =>
  import("./pages/Pages/AuthPages/PageRePasswordThree")
);

// Import all components
const SaasOnepage = React.lazy(() => import("./pages/Saas Onepage/index"));
const Customer = React.lazy(() => import("./pages/Customer/index"));
const Job = React.lazy(() => import("./pages/Job/index"));
const Software = React.lazy(() => import("./pages/Software/index"));
const Cryptocurrency = React.lazy(() => import("./pages/Cryptocurrency/index"));
const Payments = React.lazy(() => import("./pages/Payments/index"));
const IndexCarRiding = React.lazy(() => import("./pages/Car Ride/index"));
const IndexclassicSaas = React.lazy(() => import("./pages/Classic Saas/index"));
const ClassicApp = React.lazy(() =>
  import("./pages/Classic Application/index")
);
const Agency = React.lazy(() => import("./pages/Agency/index"));
const Saas = React.lazy(() => import("./pages/Saas/index"));
const Apps = React.lazy(() => import("./pages/Apps/index"));
const Studio = React.lazy(() => import("./pages/Studio/index"));
const Business = React.lazy(() => import("./pages/Business/index"));
const ITSolution = React.lazy(() => import("./pages/ITSolution/index"));
const Marketing = React.lazy(() => import("./pages/Marketing/index"));
const RealEstate = React.lazy(() => import("./pages/RealEstate/index"));
const Hotel = React.lazy(() => import("./pages/Hotel/index"));
const Developer = React.lazy(() => import("./pages/Developer/index"));
const LandingFour = React.lazy(() => import("./pages/LandingFour/index"));
const Integration = React.lazy(() => import("./pages/Integration/index"));
const TaskManagement = React.lazy(() => import("./pages/TaskManagement/index"));
const Hospital = React.lazy(() => import("./pages/Hospital/index"));
const Construction = React.lazy(() => import("./pages/Construction/index"));
const EmailInbox = React.lazy(() => import("./pages/Email-Inbox/index"));
const LandingOne = React.lazy(() => import("./pages/LandingOne/index"));
const LandingThree = React.lazy(() => import("./pages/LandingThree/index"));
const LandingTwo = React.lazy(() => import("./pages/LandingTwo/index"));
const Travel = React.lazy(() => import("./pages/Travel/index"));
const Blog = React.lazy(() => import("./pages/Blog/index"));
const Forums = React.lazy(() => import("./pages/Forums/index"));
const SeoAgency = React.lazy(() => import("./pages/SeoAgency/index"));
const ModernBusiness = React.lazy(() => import("./pages/ModernBusiness/index"));
const CorporateBusiness = React.lazy(() =>
  import("./pages/CorporateBusiness/index")
);
const Coworking = React.lazy(() => import("./pages/Coworking/index"));
const CloudHosting = React.lazy(() => import("./pages/CloudHosting/index"));
const Event = React.lazy(() => import("./pages/Event/index"));
const Course = React.lazy(() => import("./pages/Course/index"));
const Personal = React.lazy(() => import("./pages/Personal/index"));
const SingleProduct = React.lazy(() => import("./pages/SingleProduct/index"));
const Enterprise = React.lazy(() => import("./pages/Enterprise/index"));
const Portfolio = React.lazy(() => import("./pages/Portfolio/index"));
const Services = React.lazy(() => import("./pages/Services/index"));
const Shop = React.lazy(() => import("./pages/Shop/index"));
const Insurance = React.lazy(() => import("./pages/Insurance/index"));
const Ebook = React.lazy(() => import("./pages/Ebook/index"));
const SocialMarketing = React.lazy(() =>
  import("./pages/SocialMarketing/index")
);
const DigitalAgency = React.lazy(() => import("./pages/DigitalAgency/index"));
const OnlineLearning = React.lazy(() => import("./pages/OnlineLearning/index"));
const Finance = React.lazy(() => import('./pages/Finance/index'));
const VideoCall = React.lazy(() => import('./pages/VideoCall/index'));
const iTSolutionTwo = React.lazy(() => import('./pages/ITSolutionTwo/index'));
const Freelancer = React.lazy(() => import('./pages/Freelancer/index'));
const Blockchain = React.lazy(() => import('./pages/Blockchain/index'));
const CryptoTwo = React.lazy(() => import('./pages/CryptoTwo/index'));

//Docs
const ChangeLog = React.lazy(() => import("./pages/Docs/ChangeLog"));
const Components = React.lazy(() => import("./pages/Docs/Components"));
const Documentation = React.lazy(() => import("./pages/Docs/Documentation"));
const Widget = React.lazy(() => import("./pages/Docs/widget"));

const PageAboutUs = React.lazy(() => import("./pages/Pages/PageAboutUs"));
const PageAboutusTwo = React.lazy(() => import("./pages/Pages/PageAboutusTwo"));
const PageHistory = React.lazy(() => import("./pages/Pages/PageHistory"));
const PageMembers = React.lazy(() =>
  import("./pages/Pages/Account/PageMembers")
);
const PageWorks = React.lazy(() => import("./pages/Pages/Account/PageWorks"));
const PageMessages = React.lazy(() =>
  import("./pages/Pages/Account/PageMessages")
);
const PagePricing = React.lazy(() => import("./pages/Pages/PagePricing"));
const PageServices = React.lazy(() => import("./pages/Pages/PageServices"));
const PageTeam = React.lazy(() => import("./pages/Pages/PageTeam"));

//Account
const PageProfile = React.lazy(() =>
  import("./pages/Pages/Account/PageProfile")
);
const PageProfileEdit = React.lazy(() =>
  import("./pages/Pages/Account/PageProfileEdit")
);
const PagePayments = React.lazy(() =>
  import("./pages/Pages/Account/PagePayments")
);
const PageInvoice = React.lazy(() =>
  import("./pages/Pages/Account/PageInvoice")
);

//Career
const PageJobsSidebar = React.lazy(() =>
  import("./pages/Pages/Careers/PageJobsSidebar")
);
const PageCompanyList = React.lazy(() =>
  import("./pages/Pages/Careers/PageCompanyList")
);
const PageCandidateList = React.lazy(() =>
  import("./pages/Pages/Careers/PageCandidateList")
);
const PageJobDetail = React.lazy(() =>
  import("./pages/Pages/Careers/PageJobDetail")
);
const PageJob = React.lazy(() => import("./pages/Pages/Careers/PageJob"));
const PageJobApply = React.lazy(() =>
  import("./pages/Pages/Careers/PageJobApply")
);
const PageJobCompany = React.lazy(() =>
  import("./pages/Pages/Careers/PageJobCompany")
);
const PageJobCandidate = React.lazy(() =>
  import("./pages/Pages/Careers/PageJobCandidate")
);

//Blog
const PageBlog = React.lazy(() => import("./pages/Pages/Blog/PageBlog"));
const PageBlogDetail = React.lazy(() =>
  import("./pages/Pages/Blog/PageBlogDetail")
);
const PageBlogDetailTwo = React.lazy(() =>
  import("./pages/Pages/Blog/PageBlogDetailTwo")
);
const PageBlogSidebar = React.lazy(() =>
  import("./pages/Pages/Blog/PageBlogSidebar")
);
const PageBlogList = React.lazy(() =>
  import("./pages/Pages/Blog/PageBlogList")
);
const PageBlogListSidebar = React.lazy(() =>
  import("./pages/Pages/Blog/PageBlogListSidebar")
);

//Case Study
const AllCases = React.lazy(() => import("./pages/Pages/CaseStudy/AllCases"));
const CaseDetail = React.lazy(() =>
  import("./pages/Pages/CaseStudy/CaseDetail")
);

//Work
const PageWorkModern = React.lazy(() =>
  import("./pages/Pages/Work/PageWorkModern")
);
const PageWorkDetail = React.lazy(() =>
  import("./pages/Pages/Work/PageWorkDetail")
);
const PageWorkClassic = React.lazy(() =>
  import("./pages/Pages/Work/PageWorkClassic")
);
const PageWorkGrid = React.lazy(() =>
  import("./pages/Pages/Work/PageWorkGrid")
);
const PageWorkMasonry = React.lazy(() =>
  import("./pages/Pages/Work/PageWorkMasonry")
);

//Utility
const PagePrivacy = React.lazy(() =>
  import("./pages/Pages/Utility/PagePrivacy")
);
const PageTerms = React.lazy(() => import("./pages/Pages/Utility/PageTerms"));

//Contact
const PageContactDetail = React.lazy(() =>
  import("./pages/Pages/Contact/PageContactDetail")
);
const PageContactOne = React.lazy(() =>
  import("./pages/Pages/Contact/PageContactOne")
);
const PageContactThree = React.lazy(() =>
  import("./pages/Pages/Contact/PageContactThree")
);
const PageContactTwo = React.lazy(() =>
  import("./pages/Pages/Contact/PageContactTwo")
);

// forums
const Overview = React.lazy(() => import("./pages/Pages/Forums/overview"));
const ForumTopic = React.lazy(() => import("./pages/Pages/Forums/ForumTopic"));
const ForumsComments = React.lazy(() => import('./pages/Pages/Forums/ForumsComments'));

//Email
const EmailAlert = React.lazy(() =>
  import("./pages/Pages/EmailTemplate/EmailAlert")
);
const EmailPasswordReset = React.lazy(() =>
  import("./pages/Pages/EmailTemplate/EmailPasswordReset")
);
const EmailConfirmation = React.lazy(() =>
  import("./pages/Pages/EmailTemplate/EmailConfirmation")
);
const EmailInvoice = React.lazy(() =>
  import("./pages/Pages/EmailTemplate/EmailInvoice")
);

//Help Center
const HelpCenterOverview = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterOverview")
);
const HelpCenterFaqs = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterFaqs")
);
const HelpCenterGuides = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterGuides")
);
const HelpCenterSupportRequest = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterSupportRequest")
);

//Shop
const ShopProducts = React.lazy(() =>
  import("./pages/Pages/Shop/ShopProducts")
);
const ShopProductsLists = React.lazy(() =>
  import("./pages/Pages/Shop/ShopProductList")
);
const ShopProductDetail = React.lazy(() =>
  import("./pages/Pages/Shop/ShopProductDetail")
);
const ShopCart = React.lazy(() => import("./pages/Pages/Shop/ShopCart"));
const ShopCheckouts = React.lazy(() =>
  import("./pages/Pages/Shop/ShopCheckouts")
);
const ShopMyAccount = React.lazy(() =>
  import("./pages/Pages/Shop/ShopMyAccount")
);

//SearchPage
const Search= React.lazy(()=>import('./pages/Pages/Search'));

const routes = [
  //routes without Layout

  //Contct without layout
  {
    path: "/page-contact-detail",
    component: PageContactDetail,
    isWithoutLayout: true,
    isTopbarDark: true
  },

  //Email Pages
  { path: "/email-alert", component: EmailAlert, isWithoutLayout: true },
  {
    path: "/email-password-reset",
    component: EmailPasswordReset,
    isWithoutLayout: true,
  },
  {
    path: "/email-confirmation",
    component: EmailConfirmation,
    isWithoutLayout: true,
  },
  { path: "/email-invoice", component: EmailInvoice, isWithoutLayout: true },

  //Special Pages
  {
    path: "/page-comingsoon",
    component: PageComingSoon,
    isWithoutLayout: true,
  },
  {
    path: "/page-comingsoon2",
    component: PageComingSoon2,
    isWithoutLayout: true,
  },
  { path: "/page-error", component: PageError, isWithoutLayout: true },
  { path: "/page-thankyou", component: PageThankYou, isWithoutLayout: true },
  {
    path: "/page-maintenance",
    component: PageMaintenance,
    isWithoutLayout: true,
  },

  //User Pages
  { path: "/auth-login", component: PageLogin, isWithoutLayout: true },
  {
    path: "/auth-cover-login",
    component: PageCoverLogin,
    isWithoutLayout: true,
  },
  {
    path: "/auth-login-three",
    component: PageLoginThree,
    isWithoutLayout: true,
  },

  { path: "/auth-signup", component: PageSignup, isWithoutLayout: true },
  {
    path: "/auth-cover-signup",
    component: PageCoverSignup,
    isWithoutLayout: true,
  },
  {
    path: "/auth-signup-three",
    component: PageSignupThree,
    isWithoutLayout: true,
  },

  {
    path: "/auth-re-password",
    component: PageRecoveryPassword,
    isWithoutLayout: true,
  },
  {
    path: "/auth-cover-re-password",
    component: PageCoverRePassword,
    isWithoutLayout: true,
  },
  {
    path: "/auth-re-password-three",
    component: PageRePasswordThree,
    isWithoutLayout: true,
  },

  // Landings
  { path: "/index-onepage", component: SaasOnepage, isTopbarDark: true },
  { path: "/index-customer", component: Customer, isTopbarDark: true },
  { path: "/index-job", component: Job, isTopbarDark: true },
  { path: "/index-software", component: Software },
  { path: "/index-crypto", component: Cryptocurrency },
  { path: "/index-payments", component: Payments, isTopbarDark: true },
  { path: "/index-car-riding", component: IndexCarRiding, isTopbarDark: true },
  { path: "/index-classic-saas", component: IndexclassicSaas, isTopbarDark: true },
  { path: "/index-classic-app", component: ClassicApp, isTopbarDark: true },
  { path: "/index-saas", component: Saas, isTopbarDark: true },
  { path: "/index-apps", component: Apps, isTopbarDark: true },
  { path: "/index-agency", component: Agency, isTopbarDark: true },
  { path: "/index-studio", component: Studio, isTopbarDark: true },
  { path: "/index-business", component: Business, isTopbarDark: true },
  { path: "/index-corporate", component: CorporateBusiness },
  { path: "/index-it-solution", component: ITSolution },
  { path: "/index-marketing", component: Marketing, isTopbarDark: true },
  { path: "/index-hotel", component: Hotel, isTopbarDark: true },
  { path: "/index-developer", component: Developer, isTopbarDark: true },
  { path: "/index-landing-four", component: LandingFour, isTopbarDark: true },
  { path: "/index-integration", component: Integration },
  { path: "/index-task-management", component: TaskManagement },
  { path: "/index-hospital", component: Hospital, isTopbarDark: true },
  { path: "/index-construction", component: Construction },
  { path: "/index-email-inbox", component: EmailInbox, isTopbarDark: true },
  { path: "/index-landing-one", component: LandingOne },
  { path: "/index-landing-two", component: LandingTwo, isTopbarDark: true },
  { path: "/index-landing-three", component: LandingThree },
  { path: "/index-travel", component: Travel },
  { path: "/index-blog", component: Blog, isTopbarDark: true },
  { path: "/index-forums", component: Forums, isTopbarDark: true },
  { path: "/index-real-estate", component: RealEstate },
  { path: "/index-seo-agency", component: SeoAgency, isTopbarDark: true },
  { path: "/index-modern-business", component: ModernBusiness },
  { path: "/index-coworking", component: Coworking },
  { path: "/index-hosting", component: CloudHosting },
  { path: "/index-event", component: Event },
  { path: "/index-course", component: Course },
  { path: "/index-personal", component: Personal, isTopbarDark: true },
  { path: "/index-single", component: SingleProduct, isTopbarDark: true },
  { path: "/index-enterprise", component: Enterprise },
  { path: "/index-portfolio", component: Portfolio, isTopbarDark: true },
  { path: "/index-services", component: Services, isTopbarDark: true },
  { path: "/index-shop", component: Shop, isTopbarDark: true },
  { path: "/index-insurance", component: Insurance },
  { path: "/index-ebook", component: Ebook, isTopbarDark: true },
  { path: "/index-social-marketing", component: SocialMarketing, isTopbarDark: true },
  { path: "/index-digital-agency", component: DigitalAgency, isTopbarDark: true },
  { path: "/index-online-learning", component: OnlineLearning, isTopbarDark: true },
  { path: "/index-finance", component: Finance, isTopbarDark: true },
  { path: "/index-videocall", component: VideoCall, isTopbarDark: true },
  { path: "/index-it-solution-two", component: iTSolutionTwo },
  { path: "/index-freelancer", component: Freelancer, isTopbarDark: true },
  { path: "/index-blockchain", component: Blockchain },
  { path: "/index-crypto-two", component: CryptoTwo },

  { path: "/page-aboutus", component: PageAboutUs, isTopbarDark: true },
  { path: "/page-aboutus-two", component: PageAboutusTwo },
  { path: "/page-history", component: PageHistory, isTopbarDark: true },
  { path: "/page-pricing", component: PagePricing, isTopbarDark: true },
  { path: "/page-services", component: PageServices, isTopbarDark: true },
  { path: "/page-team", component: PageTeam, isTopbarDark: true },

  //Help Center
  { path: "/helpcenter-overview", component: HelpCenterOverview, isTopbarDark: true },
  { path: "/helpcenter-faqs", component: HelpCenterFaqs, isTopbarDark: true },
  { path: "/helpcenter-guides", component: HelpCenterGuides, isTopbarDark: true },
  { path: "/helpcenter-support-request", component: HelpCenterSupportRequest, isTopbarDark: true },

  //Shop
  { path: "/shop-grids", component: ShopProducts, isTopbarDark: true },
  { path: "/shop-lists", component: ShopProductsLists, isTopbarDark: true },
  { path: "/shop-product-detail", component: ShopProductDetail, isTopbarDark: true },
  { path: "/shop-cart", component: ShopCart, isTopbarDark: true },
  { path: "/shop-checkouts", component: ShopCheckouts, isTopbarDark: true },
  { path: "/shop-myaccount", component: ShopMyAccount, isTopbarDark: true },

  //Utility
  { path: "/page-terms", component: PageTerms, isTopbarDark: true },
  { path: "/page-privacy", component: PagePrivacy, isTopbarDark: true },

  //Page Work
  { path: "/page-work-modern", component: PageWorkModern, isTopbarDark: true },
  { path: "/page-work-detail", component: PageWorkDetail, isTopbarDark: true },
  { path: "/page-work-classic", component: PageWorkClassic, isTopbarDark: true },
  { path: "/page-work-grid", component: PageWorkGrid, isTopbarDark: true },
  { path: "/page-work-masonry", component: PageWorkMasonry, isTopbarDark: true },

  //Page Profile
  { path: "/page-profile", component: PageProfile },
  { path: "/page-members", component: PageMembers },
  { path: "/page-works", component: PageWorks },
  { path: "/page-messages", component: PageMessages },
  { path: "/page-profile-edit", component: PageProfileEdit },
  { path: "/page-payments", component: PagePayments },
  { path: "/page-invoice", component: PageInvoice, isTopbarDark: true },

  //Page Job
  { path: "/page-job", component: PageJob, isTopbarDark: true },
  { path: "/page-job-apply", component: PageJobApply, isTopbarDark: true },
  { path: "/page-job-detail", component: PageJobDetail, isTopbarDark: true },
  { path: "/page-jobs-sidebar", component: PageJobsSidebar, isTopbarDark: true },
  { path: "/page-job-company-list", component: PageCompanyList, isTopbarDark: true },
  { path: "/page-job-candidate-list", component: PageCandidateList, isTopbarDark: true },
  { path: "/page-job-company", component: PageJobCompany },
  { path: "/page-job-candidate", component: PageJobCandidate },

  //Page Blog
  { path: "/page-blog-grid", component: PageBlog, isTopbarDark: true },
  { path: "/page-blog-detail", component: PageBlogDetail, isTopbarDark: true },
  { path: "/page-blog-detail-two", component: PageBlogDetailTwo },
  { path: "/page-blog-sidebar", component: PageBlogSidebar, isTopbarDark: true },
  { path: "/page-blog-list", component: PageBlogList, isTopbarDark: true },
  { path: "/page-blog-list-sidebar", component: PageBlogListSidebar, isTopbarDark: true },

  //Page Case Study
  { path: "/page-all-cases", component: AllCases },
  { path: "/page-case-detail", component: CaseDetail, isTopbarDark: true },

  //Page Contact
  { path: "/page-contact-one", component: PageContactOne, isTopbarDark: true },
  { path: "/page-contact-three", component: PageContactThree, isTopbarDark: true },
  { path: "/page-contact-two", component: PageContactTwo, isTopbarDark: true },

  // forums
  { path: "/forums", component: Overview, isTopbarDark: true },
  { path: "/forums-topic", component: ForumTopic, isTopbarDark: true },
  { path: "/forums-comments", component: ForumsComments, isTopbarDark: true },

  //Docs
  { path: "/changelog", component: ChangeLog, isTopbarDark: true },
  { path: "/components", component: Components, isTopbarDark: true },
  { path: "/documentation", component: Documentation, isTopbarDark: true },
  { path: "/widget", component: Widget, isTopbarDark: true },

  //Index Main
  { path: "/index", component: Main, isTopbarDark: true },
  //Search Result
  { path:"/search-result" , component:Search },
  //Index root

  // { path: "/", component: Root, isWithoutLayout: true, exact: true },
  { path: "/", component: Travel },
  { component: PageError, isWithoutLayout: true, exact: false },
  
];

export default routes;

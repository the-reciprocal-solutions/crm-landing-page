"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

import {
  TrendingUp,
  Mail,
  CheckCircle,
  Phone,
  Star,
  ArrowRight,
  Zap,
  Headphones,
  IndianRupee,
  Settings,
  BarChart3,
  MessageCircle,
  Target,
  Smartphone,
  FileText,
  CreditCard,
  Users,
  PieChart,
  Send,
  Briefcase,
  DollarSign,
  ArrowDown,
  PlayCircle,
  Shield,
  Rocket,
  Globe,
  Award,
} from "lucide-react"
import toast, { Toaster } from "react-hot-toast"
import Link from "next/link"

export default function CRMLandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showTimerPopup, setShowTimerPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
  })

  // 30-second timer for popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimerPopup(true)
    }, 30000) // 30 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Hardcoded Telegram Bot credentials (replace with your actual values)
    const BOT_TOKEN = "7748291044:AAHVmUaNcEMyui1Jzy2h8r_cRYJffdK2vfs"
    const CHAT_ID = "-1002316866788"    

    // Format the message
    const message = `🚀 New CRM Lead Submission!

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🏢 Business Type: ${formData.businessType || "Not specified"}

Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      })

      if (response.ok) {
        toast.success("Form submitted successfully! We'll contact you soon.", {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#10B981",
            color: "white",
            fontWeight: "bold",
          },
        })

        // Reset form
        setFormData({
          name: "",
          phone: "",
          businessType: "",
        })

        // Close popups
        setIsPopupOpen(false)
        setShowTimerPopup(false)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending to Telegram:", error)
      toast.error("Something went wrong. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: {
          background: "#EF4444",
          color: "white",
          fontWeight: "bold",
        },
      })
    }
  }

  const openPopup = () => {
    setIsPopupOpen(true)
    setShowTimerPopup(false)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6 text-sm font-semibold inline-flex items-center gap-2">
                <Zap className="h-4 w-4" />
                #1 CRM for Indian SMEs
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Your Business,{" "}
                <span className="text-amber-500 relative">
                  Organized
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-300 rounded animate-pulse"></div>
                </span>
                .<br />
                Your Sales,{" "}
                <span className="text-amber-500 relative">
                  Multiplied
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-300 rounded animate-pulse delay-500"></div>
                </span>
                .
              </h1>
              <p className="text-2xl text-gray-600 mb-10 leading-relaxed font-light">
                Complete business automation for Indian SMEs — from lead capture to payment collection, project
                management to smart reports. Everything in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={openPopup}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-10 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <Rocket className="mr-3 h-6 w-6" />
                  Get Your Free Setup
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Link href="https://bit.ly/3nIspzJ">
                  <Button
                    variant="outline"
                    className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-10 py-6 text-xl rounded-2xl font-semibold bg-transparent"
                  >
                    <Users className="h-5 w-5" />
                    Book Demo
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                
                
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>✨ No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Ready in 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Indian support team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:rotate-1 transition-transform duration-500">
                <img
                  src="https://ascendix.com/wp-content/uploads/2023/04/Core-CRM-Features_02.png"
                  alt="CRM Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg animate-bounce">
                  Made in India ❤️
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Sales Growth</p>
                    <p className="text-xl font-bold text-green-600">+40%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-pulse delay-1000">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                    <p className="text-xl font-bold text-blue-600">10,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Business Flow Coverage */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-amber-100 text-amber-800 px-6 py-3 rounded-full mb-6 text-lg font-semibold">
              Complete Business Automation
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              From <span className="text-amber-500">Lead to Payment</span>,<br />
              We've Got You <span className="text-amber-500">Covered</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stop using 10 different tools. Our CRM handles your entire business workflow in one seamless platform.
            </p>
          </div>
          {/* Business Flow Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-200 via-yellow-200 to-amber-200 hidden lg:block"></div>
            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Lead Creation & Capture",
                  description:
                    "Automatically capture leads from WhatsApp, website forms, phone calls, and social media. Never miss a potential customer again.",
                  icon: Target,
                  features: ["WhatsApp Integration", "Web Forms", "Call Logging", "Social Media Leads"],
                  color: "from-blue-500 to-blue-600",
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-600",
                  position: "left",
                },
                {
                  step: "02",
                  title: "Proposal & Quote Generation",
                  description:
                    "Create professional proposals and quotes in minutes. Send them via email or WhatsApp with just one click.",
                  icon: FileText,
                  features: ["Professional Templates", "Auto Calculations", "Digital Signatures", "Instant Delivery"],
                  color: "from-green-500 to-green-600",
                  bgColor: "bg-green-50",
                  iconColor: "text-green-600",
                  position: "right",
                },
                {
                  step: "03",
                  title: "Lead to Customer Conversion",
                  description:
                    "Track your sales pipeline and convert leads into paying customers with automated follow-ups and reminders.",
                  icon: Users,
                  features: ["Sales Pipeline", "Auto Follow-ups", "Conversion Tracking", "Deal Management"],
                  color: "from-purple-500 to-purple-600",
                  bgColor: "bg-purple-50",
                  iconColor: "text-purple-600",
                  position: "left",
                },
                {
                  step: "04",
                  title: "Invoice Generation & Billing",
                  description:
                    "Generate GST-compliant invoices instantly. Send them automatically and track payment status in real-time.",
                  icon: CreditCard,
                  features: ["GST Compliance", "Auto Invoicing", "Payment Tracking", "Recurring Billing"],
                  color: "from-amber-500 to-yellow-500",
                  bgColor: "bg-amber-50",
                  iconColor: "text-amber-600",
                  position: "right",
                },
                {
                  step: "05",
                  title: "Payment Updates & Tracking",
                  description:
                    "Monitor all payments, send automated reminders for overdue amounts, and maintain complete financial records.",
                  icon: DollarSign,
                  features: ["Payment Reminders", "Financial Reports", "Outstanding Tracking", "Receipt Management"],
                  color: "from-red-500 to-red-600",
                  bgColor: "bg-red-50",
                  iconColor: "text-red-600",
                  position: "left",
                },
                {
                  step: "06",
                  title: "Smart Reports & Analytics",
                  description:
                    "Get actionable insights with detailed reports on sales, customers, projects, and business performance.",
                  icon: BarChart3,
                  features: ["Sales Analytics", "Customer Reports", "Performance Metrics", "Custom Dashboards"],
                  color: "from-indigo-500 to-indigo-600",
                  bgColor: "bg-indigo-50",
                  iconColor: "text-indigo-600",
                  position: "right",
                },
                {
                  step: "07",
                  title: "Email & WhatsApp Updates",
                  description:
                    "Keep customers informed with automated updates via email and WhatsApp. Send invoices, reminders, and notifications.",
                  icon: Send,
                  features: ["Auto Notifications", "WhatsApp Business", "Email Campaigns", "Status Updates"],
                  color: "from-teal-500 to-teal-600",
                  bgColor: "bg-teal-50",
                  iconColor: "text-teal-600",
                  position: "left",
                },
                {
                  step: "08",
                  title: "Project Management & Timesheets",
                  description:
                    "Manage customer projects, track time, assign tasks, and monitor progress with built-in project management tools.",
                  icon: Briefcase,
                  features: ["Task Management", "Time Tracking", "Project Timeline", "Team Collaboration"],
                  color: "from-orange-500 to-orange-600",
                  bgColor: "bg-orange-50",
                  iconColor: "text-orange-600",
                  position: "right",
                },
                {
                  step: "09",
                  title: "Expense Management",
                  description:
                    "Track business expenses, categorize costs, and generate expense reports for better financial control.",
                  icon: PieChart,
                  features: ["Expense Tracking", "Category Management", "Receipt Storage", "Financial Control"],
                  color: "from-pink-500 to-pink-600",
                  bgColor: "bg-pink-50",
                  iconColor: "text-pink-600",
                  position: "left",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${item.position === "right" ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`w-full lg:w-1/2 ${item.position === "right" ? "lg:pl-16" : "lg:pr-16"}`}>
                    <div
                      className={`${item.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`bg-gradient-to-r ${item.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg`}
                        >
                          {item.step}
                        </div>
                        <div className={`bg-white p-4 rounded-2xl shadow-md`}>
                          <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{item.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Center circle for large screens */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                    <div
                      className={`bg-gradient-to-r ${item.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-pulse`}
                    >
                      <ArrowDown className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CRM Features Overview */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-amber-100 text-amber-800 px-6 py-3 rounded-full mb-6 text-lg font-semibold">
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Everything Your Business Needs, <br />
              <span className="text-amber-500">All in One Place</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stop juggling multiple tools. Our CRM brings together every aspect of your business in one powerful,
              easy-to-use platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Smart Lead Management",
                description:
                  "Capture leads from multiple sources, assign to team members, and track conversion rates with intelligent automation.",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
              },
              {
                icon: TrendingUp,
                title: "Sales Pipeline",
                description:
                  "Visualize your sales process, track deal progress, and get predictive insights to close more deals faster.",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
              },
              {
                icon: Headphones,
                title: "Customer Support Hub",
                description:
                  "Manage support tickets, track resolution times, and maintain customer satisfaction with organized support workflows.",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
              },
              {
                icon: Mail,
                title: "Email & SMS Automation",
                description:
                  "Send personalized campaigns, automated follow-ups, and festival greetings to keep customers engaged.",
                gradient: "from-amber-500 to-yellow-500",
                bgGradient: "from-amber-50 to-yellow-100",
              },
              {
                icon: CheckCircle,
                title: "Task & Reminder System",
                description:
                  "Never miss important follow-ups with smart reminders, task assignments, and deadline tracking.",
                gradient: "from-red-500 to-red-600",
                bgGradient: "from-red-50 to-red-100",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Business Integration",
                description:
                  "Connect with customers on their favorite platform. Send quotes, updates, and support messages seamlessly.",
                gradient: "from-teal-500 to-teal-600",
                bgGradient: "from-teal-50 to-teal-100",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Get deep insights into sales performance, customer behavior, and business trends with interactive dashboards.",
                gradient: "from-indigo-500 to-indigo-600",
                bgGradient: "from-indigo-50 to-indigo-100",
              },
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description:
                  "Full-featured mobile apps for Android and iOS with offline capabilities and real-time synchronization.",
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-50 to-orange-100",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-white/50 transform hover:scale-105`}
              >
                <div
                  className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SMEs Love Us - Enhanced */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-amber-100 text-amber-800 px-6 py-3 rounded-full mb-6 text-lg font-semibold">
              Trusted by 10,000+ SMEs
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Why Indian Businesses <br />
              <span className="text-amber-500">Choose Us</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We understand Indian businesses because we are one too. Built by entrepreneurs, for entrepreneurs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Headphones,
                title: "Local Support Team",
                description:
                  "Speak to real people who understand your business. Hindi, English, Tamil - we speak your language. Support available 6 days a week with dedicated account managers.",
                stats: "99.9% Uptime",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
              },
              {
                icon: IndianRupee,
                title: "Transparent Pricing",
                description:
                  "Starting at just ₹999/month for unlimited users. No hidden costs, no per-user charges, no setup fees. One price, full access for your entire team.",
                stats: "Save 60% vs Competitors",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
              },
              {
                icon: Settings,
                title: "Done-For-You Setup",
                description:
                  "We don't just give you software - we set it up for your specific business. Your fields, your workflow, your way of working. Ready to use in 24 hours.",
                stats: "24 Hour Setup",
                gradient: "from-amber-500 to-yellow-500",
                bgGradient: "from-amber-50 to-yellow-100",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center bg-gradient-to-br ${item.bgGradient} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50`}
              >
                <div
                  className={`bg-gradient-to-r ${item.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}
                >
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{item.description}</p>
                <Badge className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold">{item.stats}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-amber-100 text-amber-800 px-6 py-3 rounded-full mb-6 text-lg font-semibold">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              What Business Owners <br />
              <span className="text-amber-500">Say About Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                business: "Kumar Textiles, Chennai",
                quote:
                  "Before this CRM, I was losing track of customers and orders. Now everything is organized. My sales have increased by 40% in just 6 months! The WhatsApp integration is a game-changer.",
                rating: 5,
                growth: "+40% Sales",
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Priya Sharma",
                business: "Sharma Electronics, Pune",
                quote:
                  "The setup was so smooth. The team migrated all our data and trained our staff. The mobile app lets me manage everything on the go. Best investment we made for our business.",
                rating: 5,
                growth: "₹2L+ Saved",
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Mohammed Ali",
                business: "Ali Trading Co., Hyderabad",
                quote:
                  "Customer support is outstanding. They understand our business needs and always help quickly. The reports help me make better decisions. Highly recommend to all SME owners.",
                rating: 5,
                growth: "50% Time Saved",
                avatar: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.business}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                    {testimonial.growth}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-amber-100 text-amber-800 px-6 py-3 rounded-full mb-6 text-lg font-semibold">
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Get Started in <br />
              <span className="text-amber-500">3 Simple Steps</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              From signup to success - we make it incredibly easy for you to get started.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Connect",
                description:
                  "Tell us about your business in a quick 15-minute call. We'll understand your needs, current process, and specific requirements.",
                icon: Phone,
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
              },
              {
                step: "2",
                title: "Customize",
                description:
                  "We set up your CRM with your data, fields, and workflows. Data migration, user training, and customization - all handled by our team.",
                icon: Settings,
                gradient: "from-amber-500 to-yellow-500",
                bgGradient: "from-amber-50 to-yellow-100",
              },
              {
                step: "3",
                title: "Convert",
                description:
                  "Start using your fully configured CRM immediately. Watch your sales process become smoother, faster, and more profitable.",
                icon: TrendingUp,
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div
                  className={`bg-gradient-to-br ${step.bgGradient} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50`}
                >
                  <div
                    className={`bg-gradient-to-r ${step.gradient} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 text-2xl font-bold shadow-lg`}
                  >
                    {step.step}
                  </div>
                  <div
                    className={`bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}
                  >
                    <step.icon className="h-10 w-10 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-amber-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="py-24 px-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge className="bg-white/20 text-white px-6 py-3 rounded-full mb-8 text-lg font-semibold">
            🚀 Join 10,000+ Happy Customers
          </Badge>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Ready to Transform <br />
            Your Business?
          </h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Join thousands of Indian SMEs who've already streamlined their operations, boosted their sales, and grown
            their business with our CRM.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              onClick={openPopup}
              className="bg-white text-amber-600 hover:bg-gray-100 px-12 py-6 text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              Book Your Free Demo Setup Today!
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-lg opacity-90">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span>Setup in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6" />
              <span>Dedicated success manager</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">The Reciprocal Solutions</h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Empowering Indian SMEs with smart CRM solutions that actually work. From startups to growing enterprises,
              we help businesses scale efficiently with technology that adapts to them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <p className="text-xl font-semibold mb-2">Call Us</p>
              <p className="text-gray-400">+91 97915 97993</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <p className="text-xl font-semibold mb-2">Email Us</p>
              <p className="text-gray-400">info@thereciprocalsolutions.com</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <p className="text-xl font-semibold mb-2">Visit Us</p>
              <p className="text-gray-400">www.thereciprocalsolutions.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2025 The Reciprocal Solutions. Made with ❤️ in India for Indian businesses.
            </p>
          </div>
        </div>
      </footer>

      {/* Popup Forms */}
      <Dialog
        open={isPopupOpen || showTimerPopup}
        onOpenChange={(open) => {
          setIsPopupOpen(open)
          setShowTimerPopup(false)
        }}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center text-gray-900">
              Get Your CRM Set Up - <span className="text-amber-500">Free!</span>
            </DialogTitle>
          </DialogHeader>
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg mb-4">
              Want us to set it up for you, free? Leave your number — we'll handle the rest.
            </p>
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
              ✨ We'll set it up. You focus on your business.
            </Badge>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg font-semibold text-gray-700">
                Your Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2 h-12 text-lg"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-lg font-semibold text-gray-700">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="mt-2 h-12 text-lg"
              />
            </div>
            <div>
              <Label htmlFor="business" className="text-lg font-semibold text-gray-700">
                Business Type (Optional)
              </Label>
              <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                <SelectTrigger className="mt-2 h-12 text-lg">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail/Trading</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="textiles">Textiles</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="food">Food & Beverages</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Rocket className="mr-3 h-5 w-5" />
              Get My Free CRM Setup
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </form>
          <p className="text-sm text-gray-500 text-center mt-6">
            🔒 Your information is safe with us. We'll only use it to set up your CRM and provide support.
          </p>
        </DialogContent>
      </Dialog>
      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}

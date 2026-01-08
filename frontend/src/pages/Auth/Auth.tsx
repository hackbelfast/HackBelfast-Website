import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/HackBelfast_logo.png'

type Role = 'hacker' | 'judge'
type AuthMode = 'login' | 'signup'

interface RoleOption {
  id: Role
  title: string
  description: string
  icon: JSX.Element
  gradient: string
}

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>('login')
  const [signupStep, setSignupStep] = useState<1 | 2>(1)
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)

  // Login state
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showLoginPassword, setShowLoginPassword] = useState(false)

  // Signup form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    major: '',
    graduationYear: '',
    companyName: '',
    jobTitle: '',
    phone: '',
    dietaryRestrictions: '',
    tshirtSize: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const roles: RoleOption[] = [
    {
      id: 'hacker',
      title: 'Hacker',
      description: 'Participate in the hackathon and build amazing projects',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'judge',
      title: 'Student Judge',
      description: 'VCIC-style judge evaluating projects with a VC mindset',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-pink-500'
    },
  ]

  const switchMode = (newMode: AuthMode) => {
    setMode(newMode)
    setError('')
    setSignupStep(1)
    setSelectedRole(null)
  }

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      console.log('Login:', { loginEmail, loginPassword })
      // TODO: await loginUser(loginEmail, loginPassword)
      // On success: navigate('/dashboard')
    } catch (err) {
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role)
    setSignupStep(2)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setLoading(true)

    try {
      console.log('Signup:', { ...formData, role: selectedRole })
      // TODO: await signupUser({ ...formData, role: selectedRole })
      // On success: navigate('/dashboard') or navigate('/verify-email')
    } catch (err) {
      setError('Signup failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const renderRoleSpecificFields = () => {
    if (selectedRole === 'hacker') {
      return (
        <>
          <div>
            <label htmlFor="university" className="block text-sm font-medium mb-2">
              University *
            </label>
            <input
              id="university"
              name="university"
              type="text"
              value={formData.university}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Trinity College Dublin"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="major" className="block text-sm font-medium mb-2">
                Major / Course *
              </label>
              <input
                id="major"
                name="major"
                type="text"
                value={formData.major}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Computer Science"
              />
            </div>
            <div>
              <label htmlFor="graduationYear" className="block text-sm font-medium mb-2">
                Graduation Year *
              </label>
              <select
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select year</option>
                {[2025, 2026, 2027, 2028, 2029, 2030].map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="tshirtSize" className="block text-sm font-medium mb-2">
                T-Shirt Size *
              </label>
              <select
                id="tshirtSize"
                name="tshirtSize"
                value={formData.tshirtSize}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Select size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div>
              <label htmlFor="dietaryRestrictions" className="block text-sm font-medium mb-2">
                Dietary Restrictions
              </label>
              <input
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                type="text"
                value={formData.dietaryRestrictions}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="None"
              />
            </div>
          </div>
        </>
      )
    }

    if (selectedRole === 'judge') {
      return (
        <>
          <div>
            <label htmlFor="university" className="block text-sm font-medium mb-2">
              University *
            </label>
            <input
              id="university"
              name="university"
              type="text"
              value={formData.university}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Trinity College Dublin"
            />
          </div>
          <div>
            <label htmlFor="major" className="block text-sm font-medium mb-2">
              Area of Study / Expertise *
            </label>
            <input
              id="major"
              name="major"
              type="text"
              value={formData.major}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Business / Finance / Engineering"
            />
          </div>
        </>
      )
    }

    if (selectedRole === 'volunteer') {
      return (
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="+353 XX XXX XXXX"
          />
        </div>
      )
    }

    if (selectedRole === 'sponsor') {
      return (
        <>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium mb-2">
              Company Name *
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Your Company"
            />
          </div>
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium mb-2">
              Job Title *
            </label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Your Role"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="+353 XX XXX XXXX"
            />
          </div>
        </>
      )
    }

    if (selectedRole === 'committee') {
      return (
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            placeholder="+353 XX XXX XXXX"
          />
        </div>
      )
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-500/10 to-purple-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img src={logo} alt="HackBelfast" className="h-16 w-auto mx-auto mb-4" />
          </Link>
          <h1 className="text-4xl font-bold mb-2">
            {mode === 'login' ? 'Welcome Back' : (
              <>Join <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">HackBelfast</span></>
            )}
          </h1>
          <p className="text-gray-400">
            {mode === 'login' ? 'Log in to your HackBelfast account' : '14-15 February 2026 • Belfast, Northern Ireland'}
          </p>
        </div>

        {/* LOGIN MODE */}
        {mode === 'login' && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-md mx-auto">
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label htmlFor="loginEmail" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="loginEmail"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="loginPassword" className="block text-sm font-medium">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-pink-500 hover:text-pink-400 transition-colors">
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="loginPassword"
                    type={showLoginPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showLoginPassword ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Don't have an account?</span>
              </div>
            </div>

            <button
              onClick={() => switchMode('signup')}
              className="block w-full py-3 border-2 border-purple-500 text-white font-bold rounded-lg hover:bg-purple-500/10 transition-all text-center"
            >
              Sign Up for HackBelfast
            </button>
          </div>
        )}

        {/* SIGNUP MODE */}
        {mode === 'signup' && (
          <>
            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className={`flex items-center gap-2 ${signupStep === 1 ? 'text-white' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${signupStep === 1 ? 'bg-gradient-to-r from-yellow-400 to-pink-500' : 'bg-gray-800'}`}>
                  1
                </div>
                <span className="text-sm font-medium hidden sm:inline">Select Role</span>
              </div>
              <div className="w-12 h-0.5 bg-gray-700"></div>
              <div className={`flex items-center gap-2 ${signupStep === 2 ? 'text-white' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${signupStep === 2 ? 'bg-gradient-to-r from-yellow-400 to-pink-500' : 'bg-gray-800'}`}>
                  2
                </div>
                <span className="text-sm font-medium hidden sm:inline">Your Details</span>
              </div>
            </div>

            {/* Step 1: Role Selection */}
            {signupStep === 1 && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">How do you want to participate?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roles.map((role) => (
                    <button
                      key={role.id}
                      onClick={() => handleRoleSelect(role.id)}
                      className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-pink-500 transition-all text-left"
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${role.gradient} mb-4`}>
                        {role.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {role.title}
                      </h3>
                      <p className="text-sm text-gray-400">{role.description}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button onClick={() => switchMode('login')} className="text-sm text-gray-400 hover:text-white transition-colors">
                    Already have an account? <span className="text-pink-500 font-medium">Log in</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Registration Form */}
            {signupStep === 2 && selectedRole && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${roles.find(r => r.id === selectedRole)?.gradient}`}>
                      {roles.find(r => r.id === selectedRole)?.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Signing up as</div>
                      <div className="font-bold">{roles.find(r => r.id === selectedRole)?.title}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSignupStep(1)}
                    className="text-sm text-pink-500 hover:text-pink-400 transition-colors"
                  >
                    Change
                  </button>
                </div>

                <form onSubmit={handleSignupSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  {renderRoleSpecificFields()}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="Min. 8 characters"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showPassword ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="Re-enter password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showConfirmPassword ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-3 text-sm text-red-400">
                      {error}
                    </div>
                  )}

                  <div className="text-xs text-gray-500 text-center">
                    By signing up, you agree to our{' '}
                    <Link to="/terms" className="text-pink-500 hover:text-pink-400">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-pink-500 hover:text-pink-400">
                      Privacy Policy
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? 'Creating account...' : 'Create Account'}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <button onClick={() => switchMode('login')} className="text-sm text-gray-400 hover:text-white transition-colors">
                    Already have an account? <span className="text-pink-500 font-medium">Log in</span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Auth
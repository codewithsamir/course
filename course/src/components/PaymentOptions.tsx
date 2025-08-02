import { CreditCard, DollarSign, Shield, Zap, Star, Check, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PaymentOptions() {
  const paymentPlans = [
    {
      name: "Full Payment",
      price: 2499,
      originalPrice: 2999,
      savings: 500,
      features: [
        "Pay once, save $500",
        "Immediate access to all materials",
        "Priority support",
        "Free course updates"
      ],
      popular: false
    },
    {
      name: "Installment Plan",
      price: 2999,
      monthlyPayment: 250,
      months: 12,
      features: [
        "12 monthly payments of $250",
        "No interest or hidden fees",
        "Flexible payment schedule",
        "Same course access"
      ],
      popular: true
    }
  ];

  const paymentMethods = [
    {
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express"
    },
    {
      name: "PayPal",
      icon: DollarSign,
      description: "Secure online payments"
    },
    {
      name: "Bank Transfer",
      icon: Shield,
      description: "Direct bank transfer available"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Pricing Plans */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Payment Plan</h2>
        
        <div className="space-y-4">
          {paymentPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative border rounded-lg p-6 ${
                plan.popular 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${plan.originalPrice}</span>
                  )}
                </div>
                {plan.monthlyPayment && (
                  <p className="text-sm text-gray-600">
                    ${plan.monthlyPayment}/month for {plan.months} months
                  </p>
                )}
                {plan.savings && (
                  <p className="text-sm text-green-600 font-medium">
                    Save ${plan.savings} with full payment
                  </p>
                )}
              </div>
              
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                {plan.popular ? 'Enroll Now' : 'Choose Plan'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Accepted Payment Methods</h3>
        <div className="space-y-3">
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <method.icon className="h-6 w-6 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">{method.name}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-start space-x-3">
          <Shield className="h-6 w-6 text-green-600 mt-1" />
          <div>
            <h3 className="font-bold text-gray-900 mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-sm text-gray-600">
              Not satisfied? Get a full refund within 30 days of enrollment. 
              No questions asked.
            </p>
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span className="text-sm text-gray-700">12 weeks of live instruction</span>
          </div>
          <div className="flex items-center space-x-3">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-sm text-gray-700">Certificate of completion</span>
          </div>
          <div className="flex items-center space-x-3">
            <BookOpen className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">Lifetime access to materials</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-purple-500" />
            <span className="text-sm text-gray-700">Community access</span>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-700">Job placement support</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-2">Questions?</h3>
        <p className="text-sm text-gray-600 mb-3">
          Our team is here to help you choose the right plan for your needs.
        </p>
        <Button variant="outline" className="w-full">
          Contact Support
        </Button>
      </div>
    </div>
  );
} 
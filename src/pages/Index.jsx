import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, Cloud, Lock, Zap } from 'lucide-react';

const Feature = ({ icon, title, description }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600">SaaSify</h1>
        <p className="text-xl text-center text-gray-600 mt-2">Simplify Your Workflow</p>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-16">
          <h2 className="text-3xl font-semibold mb-4">Boost Your Productivity with SaaSify</h2>
          <p className="text-xl text-gray-600 mb-8">Streamline your business processes and increase efficiency</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Start Free Trial</Button>
        </section>

        <section className="py-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature 
              icon={<Cloud className="w-6 h-6 text-blue-500" />}
              title="Cloud-Based"
              description="Access your data from anywhere, anytime. Our cloud infrastructure ensures your information is always at your fingertips."
            />
            <Feature 
              icon={<Lock className="w-6 h-6 text-blue-500" />}
              title="Secure"
              description="Bank-level encryption and security measures to keep your data safe and protected."
            />
            <Feature 
              icon={<Zap className="w-6 h-6 text-blue-500" />}
              title="Fast"
              description="Lightning-fast performance that helps you get things done quickly and efficiently."
            />
            <Feature 
              icon={<CheckCircle className="w-6 h-6 text-blue-500" />}
              title="Reliable"
              description="99.9% uptime guarantee. We're always here when you need us."
            />
          </div>
        </section>

        <section className="py-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers and take your productivity to the next level.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started Now</Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 SaaSify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;